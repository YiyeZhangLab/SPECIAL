import FHIR from "fhirclient"
import getCondition from "./getCondition";
import getPatient from './getPatient';
import getPregnancyEnd from "./getPregnancyEnd";
import getPregnancyStart from "./getPregnancyStart";
import postData from './postData';

const combineData = (patient, conditions) => {
    return {...patient, ...conditions}
}

const getPrediction = async () => {
    const myApp = {}
    const backendServerURL = 'http://localhost:3000';

    myApp.smart = await FHIR.oauth2.ready();
    
    const Patient = await getPatient(myApp);
    console.log(Patient)
    const pregnancyStart = await getPregnancyStart(myApp);
    console.log(pregnancyStart)
    const pregnancyEnd = await getPregnancyEnd(myApp);
    console.log(pregnancyEnd)
    const Condition = await getCondition(myApp, pregnancyStart, pregnancyEnd);
    console.log(Condition)
    const binaryInput = combineData(Patient, Condition);
    console.log(binaryInput)
    const res = await postData(backendServerURL, binaryInput);
    console.log(`Prediction result: ${res}`);
}

export default getPrediction;