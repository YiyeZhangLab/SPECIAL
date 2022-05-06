import fetch from "node-fetch";
// const jsdom = require("jsdom");
import DomParser from "dom-parser";
// var DomParser = require('dom-parser');
// var parser = new DomParser();
import fs from "fs";
import convert from 'xml-js';

const xml = fs.readFileSync('sample_res_cond_search.xml', 'utf8')
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
var res = JSON.parse(result1);

// console.log(res.Bundle.entry);   
var entryList = res.Bundle.entry;
var conditions = []
for (let i = 0; i < entryList.length; i++) {
    var code = entryList[i].resource.Condition.code.coding[1].code._attributes.value;
    conditions.push(code);
}
console.log(conditions);


const code_json = fs.readFileSync('code_dict.json', 'utf-8');
var code_dict = JSON.parse(code_json);
// console.log(code_dict);

var feature_dict = {}
for (let i = 0; i < Object.keys(code_dict).length; i++) {
    var code = Object.keys(code_dict)[i];
    if (conditions.includes(code)) {
        feature_dict[code_dict[code]] = 1;
    }
}

for (let i = 0; i < Object.keys(code_dict).length; i++) {
    var code = Object.keys(code_dict)[i];
    if (!feature_dict.hasOwnProperty(code_dict[code])) {
        feature_dict[code_dict[code]] = 0;
    }
}
console.log(feature_dict);



