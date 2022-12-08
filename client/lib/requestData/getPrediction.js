import FHIR from "fhirclient"
import getCondition from "./getCondition";
import getPatient from './getPatient';
import getPregnancyEnd from "./getPregnancyEnd";
import getPregnancyStart from "./getPregnancyStart";
import getBinaryInput from './getModelInput';
import postData from './postData';


const combineData = (patient, conditions) => {
    return {...patient, ...conditions}
}

const getPrediction = async () => {
    const myApp = {}

    myApp.smart = await FHIR.oauth2.ready();
    
    const Patient = await getPatient(myApp);
    console.log(Patient)
    const pregnancyStart = await getPregnancyStart(myApp);
    console.log(pregnancyStart)
    const pregnancyEnd = await getPregnancyEnd(myApp);
    console.log(pregnancyEnd)
    const condition = await getCondition(myApp, pregnancyStart, pregnancyEnd);
    console.log(condition)
    const combinedData = combineData(Patient, condition);
    console.log(combinedData)
    const binaryInput = getBinaryInput(combinedData);
    console.log(binaryInput);
    const res = await postData(binaryInput);
    console.log(`Prediction result: ${res}`);
}

export default getPrediction;