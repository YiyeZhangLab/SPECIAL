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


console.log(feature_dict);




fs.writeFile("binary_input_vars.json", JSON.stringify(feature_dict), (err) => (err) ? console.log(err) : console.log("saved success"));

export default async function parseCondInfo(xml) {
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


    const code_json = fs.readFileSync('code_dict.json', 'utf-8');
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
    return feature_dict;
}