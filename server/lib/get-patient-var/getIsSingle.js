const getIsSingle = (patient) => {

    const singleVal = "SINGLE";
    const patientVal = patient.maritalStatus.text._attributes.value

    const isSingle = (singleVal.toLowerCase() === patientVal.toLowerCase());

    return isSingle;
}

exports.getIsSingle = getIsSingle;