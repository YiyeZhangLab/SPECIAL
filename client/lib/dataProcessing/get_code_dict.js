// import fetch from "node-fetch";
// const fetch = require('node-fetch');

var url = new URL("https://clinicaltables.nlm.nih.gov/api/icd9cm_dx/v3/search"), params = {terms : "Abdominal pain"}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
console.log(url);

var conditions = [
    'Abdominal pain',
    'Deliveries by cesarean',
    'Diarrhea',
    'Elderly primigravida',
    'False labor',
    'Genetic finding',
    'Hypertensive disorder',
    'Acute pharyngitis',
    'Hypothyroidism',
    'Mental disorders of mother, postpartum condition or complication',
    'Migraine',
    'Mild hyperemesis gravidarum',
    'Palpitations',
    'Primigravida',
    'Anxiety',
    'Acne',
    'Generalized abdominal pain',
    'Hemorrhage in early pregnancy, antepartum',
    'Inguinal pain',
    'Iron deficiency',
    'Amenorrhea',
    'Placental infarct',
    'Pre-eclampsia',
]

var code_dict = {}
async function getCodes() {
    for (let i = 0; i < conditions.length; i++) {
        var url = new URL("https://clinicaltables.nlm.nih.gov/api/icd9cm_dx/v3/search"), params = {terms : conditions[i]}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        // console.log(url);
        await fetch(url).then(response => {
            // console.log(response);
            return response.json();
        }).then(data => {
            console.log(data[3]);
            data[3].forEach(entry => {
                // console.log(entry[0]);
                code_dict[entry[0]] = conditions[i];
            });
        }).catch(e => console.log(e));
    }
}

getCodes().then(() => {
    let code_json = JSON.stringify(code_dict);
    console.log(code_json);
})



