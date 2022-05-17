const { getRace } = require("./getRace");

const getIsAsian = (patient) => {

    const asianVal = "Asian";
    const patientVal = getRace(patient);
    
    const isAsian = (asianVal.toLowerCase() === patientVal.toLowerCase());

    return isAsian;
}

exports.getIsAsian = getIsAsian;