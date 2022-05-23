const getPrediction = async () => {
    const myApp = {}
    const backendServerURL = "https://localhost:3000";

    myApp.smart = await FHIR.oauth2.ready();
    
    const Patient = await getPatient(myApp);
    const Observation = await getObservation(myApp);
    const res = await postData(backendServerURL, {
        Patient,
        Observation
    });
    console.log(res);
}

