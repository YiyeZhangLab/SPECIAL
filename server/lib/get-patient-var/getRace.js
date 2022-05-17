const getRace = (patient) => {
    let extension = patient.extension[0].extension;

    if (Array.isArray(extension)) {
        extension = extension[extension.length - 1];
    }

    const race = extension.valueString._attributes.value;
    
    return race;
}

exports.getRace = getRace;