//////////////////////// Devs ////////////////////////
const fs = require('fs');
const patientXML = fs.readFileSync('./res/sample_res_patient.xml', 'utf-8');
const condXML = fs.readFileSync('./res/sample_res_cond_search.xml', 'utf-8');
//////////////////////// Devs ////////////////////////

const { parseXML } = require('./lib/parse/parseXML');
const { getAllVars } = require('./lib/get-var/getAllVars')

const { Patient } = parseXML(patientXML);
const { Bundle } = parseXML(condXML);


//////////////////////// Devs ////////////////////////
console.log(getAllVars(Patient, Bundle));
//////////////////////// Devs ////////////////////////