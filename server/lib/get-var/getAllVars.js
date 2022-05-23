const { getIsSingle } = require('../get-patient-var/getIsSingle');
const { getIsAsian } = require('../get-patient-var/getIsAsian');
const { getIsWhite } = require('../get-patient-var/getIsWhite');

const getAllVars = (patient, bundle) => {
    const isSingle = getIsSingle(patient);
    const isAsian = getIsAsian(patient);
    const isWhite = getIsWhite(patient);

    return {
        isSingle,
        isAsian,
        isWhite,
    };
}

exports.getAllVars = getAllVars;