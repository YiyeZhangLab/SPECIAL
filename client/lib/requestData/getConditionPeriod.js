import * as convert from "xml-js";
import encounter from "../test_data/encounter"

const getEncounterPeriod = (xml) => {
    var encounterResponse = convert.xml2json(xml, {compact: true, spaces: 4});
    var encounterRes = JSON.parse(encounterResponse);
    var period = encounterRes.Bundle.entry.resource.Encounter.period.start._attributes.value;
    return period;
}

const getConditionPeriod = async (myApp, encounterId) => {
    const URL = myApp.smart.state.serverUrl+"/Encounter?subject="+encounterId;

    // TODO: uncomment the following chunck when client permission is set up correctly

    // const res = await fetch(URL, {
    //     headers: {
    //         authorization:
    //             "Bearer " + myApp.smart.state.tokenResponse.access_token,
    //     },
    // });
    // const encounterXML = await res.text();
    
    const conditionPeriod = getEncounterPeriod(encounter);
    return conditionPeriod;
};

export default getConditionPeriod;