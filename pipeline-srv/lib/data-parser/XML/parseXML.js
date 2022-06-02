const convert = require('xml-js');

const parseXML = (objXML) => {
    const objJSON = convert.xml2json(objXML, {
        compact: true, spaces: 2
    });
    
    const obj = JSON.parse(objJSON);
    return obj;
}

module.exports = parseXML;
