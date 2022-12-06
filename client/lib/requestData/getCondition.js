import * as convert from "xml-js";
import getConditionPeriod from "./getConditionPeriod";
import code_dict from './code_dict.json'
import sampleResCondSearch from "../test_data/sampleResCondSearch"

const parseCondition = async (condition_xml, pregnancyStart, pregnancyEnd, myApp) => {
    const res = JSON.parse(
        convert.xml2json(condition_xml, { compact: true, spaces: 4 })
    );
    const entryList = res.Bundle.entry;
    // const conditions = []
    const conditionsDate = []
    // get all conditions from ehr
    for (let i = 0; i < entryList.length; i++) {
        var code = entryList[i].resource.Condition.code.coding[1].code._attributes.value;
        var encounterId = entryList[i].resource.Condition.encounter.reference._attributes.value
        var period = await getConditionPeriod(myApp, encounterId)
        conditionsDate.push({code: code, period: period});
    }
    console.log(conditionsDate)

    let feature_dict = {}
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
    return feature_dict;
}

const getCondition = async (myApp, pregnancyStart, pregnancyEnd) => {
    const URL = myApp.smart.state.serverUrl+"/Condition?patient="+myApp.smart.patient.id+"&category=encounter-diagnosis";

    // TODO: uncomment the following chunck when client permission is set up correctly

    // const res = await fetch(URL, {
    //     headers: {
    //         authorization:
    //             "Bearer " + myApp.smart.state.tokenResponse.access_token,
    //     },
    // });
    // const conditionXML = await res.text();
    
    const conditionJSON = parseCondition(sampleResCondSearch, pregnancyStart, pregnancyEnd, myApp);
    return conditionJSON;
};

export default getCondition;