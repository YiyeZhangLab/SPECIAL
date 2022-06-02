const getPatient = async (myApp) => {
    const URL = myApp.smart.state.serverUrl + "/Patient/" + myApp.smart.patient.id
    const res = await fetch(URL, {
        headers: {
            authorization: "Bearer "+myApp.smart.state.tokenResponse.access_token
        }
    });
    const patientXML = await res.text();
    console.log(`Received patientXML: ${patientXML}`);
    return patientXML;
}

export default getPatient;