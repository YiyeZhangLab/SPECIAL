import FHIR from "fhirclient"
import getPatient from './getPatient';
import getObservation from './getObservation';
import postData from './postData';

const getPrediction = async () => {
    const myApp = {}
    const backendServerURL = 'http://localhost:3000';

    myApp.smart = await FHIR.oauth2.ready();
    
    const Patient = await getPatient(myApp);
    const Observation = await getObservation(myApp);
    const res = await postData(backendServerURL, {
        Patient,
        Observation
    });
    console.log(res);
}

export default getPrediction;