import * as convert from "xml-js";

const parsePatient = (patient_xml) => {
    const feature_dict = {};
    const res_patient = JSON.parse(
        convert.xml2json(patient_xml, { compact: true, spaces: 4 })
    );
    let race = ""
;    if (Array.isArray(res_patient.Patient.extension[0].extension)) {
        race =
            res_patient.Patient.extension[0].extension.at(-1).valueString
                ._attributes.value;
    } else {
        race =
            res_patient.Patient.extension[0].extension.valueString._attributes
                .value; // Camila Lopez, for race unknow
    }

    const maritalStatus =
        res_patient.Patient.maritalStatus.text._attributes.value;
    if (race.toLowerCase() == "asian") {
        feature_dict["asian"] = 1;
    } else {
        feature_dict["asian"] = 0;
    }
    if (race.toLowerCase() == "white") {
        feature_dict["white"] = 1;
    } else {
        feature_dict["white"] = 0;
    }
    if (maritalStatus.toLowerCase() == "single") {
        feature_dict["single"] = 1;
    } else {
        feature_dict["single"] = 0;
    }
    return feature_dict;
};

const getPatient = async (myApp) => {
    const URL =
        myApp.smart.state.serverUrl + "/Patient/" + myApp.smart.patient.id;
    const res = await fetch(URL, {
        headers: {
            authorization:
                "Bearer " + myApp.smart.state.tokenResponse.access_token,
        },
    });
    const patientXML = await res.text();
    const patientJSON = parsePatient(patientXML);
    return patientJSON;
};

export default getPatient;
