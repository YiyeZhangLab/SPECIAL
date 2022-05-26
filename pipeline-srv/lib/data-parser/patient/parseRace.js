const parseRace = (patient) => {
    let extension = patient.extension[0].extension

    if (Array.isArray(extension)) {
        extension = extension[extension.length - 1]
    }

    const race = extension.valueString._attributes.value.toLowerCase()
    return race;
}

module.exports = parseRace