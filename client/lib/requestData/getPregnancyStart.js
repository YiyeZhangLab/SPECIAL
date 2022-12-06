import * as convert from "xml-js";
import pregnancyStatus from "../test_data/pregnancyStatus"

// TODO: add check when user not permitting
const parseSocialHistory = (xml) => {
    var pregnancyStatus = JSON.parse(
        convert.xml2json(xml, { compact: true, spaces: 4 })
    );
    var entryList = pregnancyStatus.Bundle.entry;
    var startDate = "";
    // var startDates = []
    for (let i = 0; i < entryList.length; i++) {
        var observation = entryList[i].resource.Observation;
        var observation_coding = observation.code.coding;
        if (observation_coding.length > 1) {
            observation_coding = observation_coding.filter(
                (o) => o.system._attributes.value === "http://loinc.org"
            )[0];
        }
        if (observation_coding.code._attributes.value === "82810-3") {
            var pregancyStatusResult = observation.valueCodeableConcept.text;
            if (pregancyStatusResult._attributes.value === "Yes") {
                // what if being pregnant multiple times?
                startDate = observation.issued._attributes.value;
                // startDates.push(observation.effectiveDateTime._attributes.value)
            }
        }
    }
    return startDate;
};

const getPregnancyStart = async (myApp) => {
    const URL =
        myApp.smart.state.serverUrl +
        "/Observation?patient=" +
        myApp.smart.patient.id +
        "&category=social-history"

    // TODO: uncomment the following chunck when client permission is set up correctly
    // const res = await fetch(URL, {
    //     headers: {
    //         // Accept: "application/json+fhir",
    //         Authorization:
    //             "Bearer " + myApp.smart.state.tokenResponse.access_token,
    //     },
    // });
    // const socialHistory = await res.text();

    const pregnancyStart = parseSocialHistory(pregnancyStatus);
    return pregnancyStart;
};

export default getPregnancyStart;
