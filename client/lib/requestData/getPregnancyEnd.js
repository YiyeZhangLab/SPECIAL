import * as convert from "xml-js";
import vitalsigns from "../test_data/vitalSigns"

const parseVitalsigns = (xml) => {
    var vitalsigns = JSON.parse(
        convert.xml2json(xml, { compact: true, spaces: 4 })
    );
    var endDate =
        vitalsigns.Bundle.entry.resource.Observation.issued._attributes.value;
    // console.log(endDate)
    return endDate;
};

const getPregnancyEnd = async (myApp) => {
    // const loincs = [encodeURIComponent("http://loinc.org|4548-4")]; //4548-4 = HgA1C  //4544-3 = hematocrit
    const URL =
        myApp.smart.state.serverUrl +
        "/Observation?patient=" +
        myApp.smart.patient.id +
        "&category=vital-signs";
        // &limit=50&code=" +
        // loincs.join(",");

    // const res = await fetch(URL, {
    //     headers: {
    //         // Accept: "application/json+fhir",
    //         Authorization:
    //             "Bearer " + myApp.smart.state.tokenResponse.access_token,
    //     },
    // });

    // const vitalsigns = await res.text();

    const pregnancyEnd = parseVitalsigns(vitalsigns);
    return pregnancyEnd;
};

export default getPregnancyEnd;
