// import fetch from "node-fetch";
// import DomParser from "dom-parser";
import * as fs from "fs";
// const fs = require("fs");
import * as convert from 'xml-js';
// const convert = require("xml-js");

const xml = fs.readFileSync('sample_res_cond_search.xml', 'utf8')
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var res = JSON.parse(result1);

// console.log(res.Bundle.entry);   
var entryList = res.Bundle.entry;
var conditions = []
for (let i = 0; i < entryList.length; i++) {
    var code = entryList[i].resource.Condition.code.coding[1].code._attributes.value;
    conditions.push(code);
}
// console.log(conditions);


const code_json = fs.readFileSync('./code_dict.json', 'utf-8');
var code_dict = JSON.parse(code_json);
// console.log(code_dict);

var feature_dict = {}
for (let i = 0; i < Object.keys(code_dict).length; i++) {
    var code = Object.keys(code_dict)[i];
    if (conditions.includes(code)) {
        feature_dict[code_dict[code]] = 1;
    }
}

for (let i = 0; i < Object.keys(code_dict).length; i++) {
    var code = Object.keys(code_dict)[i];
    if (!feature_dict.hasOwnProperty(code_dict[code])) {
        feature_dict[code_dict[code]] = 0;
    }
}
// console.log(feature_dict);



const patient_xml = fs.readFileSync('./sample_res_patient.xml', 'utf8')
var res_patient = JSON.parse(convert.xml2json(patient_xml, {compact: true, spaces: 4}));
// console.log(res_patient);
if(Array.isArray(res_patient.Patient.extension[0].extension)){
    var race = res_patient.Patient.extension[0].extension.at(-1).valueString._attributes.value
} else {
    var race = res_patient.Patient.extension[0].extension.valueString._attributes.value // Camila Lopez, for race unknow
}

// Marrital Status
var maritalStatus = res_patient.Patient.maritalStatus.text._attributes.value
if (race.toLowerCase()=="asian") {
    feature_dict["asian"] = 1;
  } else {
    feature_dict["asian"] = 0;
  }
  if (race.toLowerCase()=="white") {
    feature_dict["white"] = 1;
  } else {
    feature_dict["white"] = 0;
  }
if (maritalStatus.toLowerCase()=="single") {
    feature_dict["single"] = 1;
} else {
    feature_dict["single"] = 0;
}


// console.log(feature_dict);

// function to extract EncounterId
function getConditionEncounterId(entry) {
    return entry.resource.Condition.encounter.reference._attributes.value;
}


// query social history in observation to get pregnancy start date
var pregnancyStatus_xml = fs.readFileSync('./PregnancyStatus.xml', 'utf8')
function getPregnancyStart(xml) {
    var pregnancyStatus = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
    var entryList = pregnancyStatus.Bundle.entry
    var startDate = ""
    // var startDates = []
    for(let i = 0; i < entryList.length; i++){
        var observation = entryList[i].resource.Observation
        var observation_coding = observation.code.coding
        if (observation_coding.length > 1){
            observation_coding = observation_coding.filter(o => o.system._attributes.value === "http://loinc.org")[0]
        }
        if(observation_coding.code._attributes.value === '82810-3'){
            var pregancyStatusResult = observation.valueCodeableConcept.text
            if(pregancyStatusResult._attributes.value === "Yes"){
                // what if being pregnant multiple times?
                startDate = observation.issued._attributes.value
                // startDates.push(observation.effectiveDateTime._attributes.value) 
            }
        }
    }
    // console.log(startDate)
    return startDate
}
// getPregnancyStart(pregnancyStatus_xml)

// query vital signs in observation to get the pregancy end date
var vitalsigns_xml = fs.readFileSync('./vitalsigns.xml', 'utf8')
function getPregnancyEnd(xml){
    var vitalsigns = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
    var endDate = vitalsigns.Bundle.entry.resource.Observation.issued._attributes.value
    // console.log(endDate)
    return endDate
}
// getPregnancyEnd(vitalsigns_xml)


// function to parse the Encounter API response and get the encounter period
// TODO: what if peiod is missing as it is optional
var encounter_xml = fs.readFileSync('./encounter.xml', 'utf8');
function getEncounterPeriod(xml) {
    var encounterResponse = convert.xml2json(xml, {compact: true, spaces: 4});
    var encounterRes = JSON.parse(encounterResponse);
    var period = encounterRes.Bundle.entry.resource.Encounter.period.start._attributes.value;
    // console.log(period)
    return period;
}
// getEncounterPeriod(encounter_xml)

// temporary
function queryEncounterAPI(encounterId){
    return encounter_xml
}


// xml should be conditions
export default async function parseCondInfo(xml, pregnancyStart, pregnancyEnd) {
    var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    var res = JSON.parse(result1);

    // console.log(res.Bundle.entry);   
    var entryList = res.Bundle.entry;
    // var conditions = []
    var conditionsDate = []
    for (let i = 0; i < entryList.length; i++) {
        var code = entryList[i].resource.Condition.code.coding[1].code._attributes.value;
        // conditions.push(code); // try changing this to a map => {code, date}
        var encounterId = getConditionEncounterId(entryList[i]);
        // request encounter API
        var encounterXML = queryEncounterAPI(encounterId);
        console.log(encounterXML)
        var period = getEncounterPeriod(encounterXML)
        conditionsDate.push({code: code, period: period});
    }
    console.log(conditions);


    const code_json = fs.readFileSync('code_dict.json', 'utf-8');
    var code_dict = JSON.parse(code_json);
    // console.log(code_dict);

    var feature_dict = {}
    for (let i = 0; i < Object.keys(code_dict).length; i++) {
        var code = Object.keys(code_dict)[i];
        if (conditionsDate.map(o => o.code).includes(code)) {
            var conditionObj = conditionsDate.find(o => o.code === code);
            var conditionDate = conditionObj.period;
            if (conditionDate >= pregnancyStart && conditionDate <= pregnancyEnd){
                feature_dict[code_dict[code]] = 1;
            }
        }
    }

    for (let i = 0; i < Object.keys(code_dict).length; i++) {
        var code = Object.keys(code_dict)[i];
        if (!feature_dict.hasOwnProperty(code_dict[code])) {
            feature_dict[code_dict[code]] = 0;
        }
    }
    // console.log(feature_dict);
    return feature_dict;
}