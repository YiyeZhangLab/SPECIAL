const { getRace } = require("./getRace");

const getIsWhite = (patient) => {

    const whiteVal = "White";
    const patientVal = getRace(patient);
    
    const isWhite = (whiteVal.toLowerCase() === patientVal.toLowerCase());

    return isWhite;
}

exports.getIsWhite = getIsWhite;