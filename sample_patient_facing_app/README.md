# SPECIAL Sample App Repository Documentation

## 0. Repo Overview

* src
  * index.js
* dist
  * fhir-client-v2.js
* node_modules
* yoyo 
  * getObservation
  * getPatient
  * getPrediction
  * postData
* index.html: main landing page prompting users to the epic login page
* launch.html: initilize app with the app information registered on epic
* app.html: redirected page after successfully login on epic
* package.json


## 1. JS Tool Scripts
Several javascript tool programs have been implemented for parsing http response and generating corresponding ML-required variables. Due to the app registration issue, some of them have not been integrated into the sample app yet, but they can be potentially used to manually generate variables with API response provided (for example, from the API specification sandbox) 
**Note: execution of those tool scripts require node environment, i.e., simply invoking on a web browser would run into errors**

### 1.1 get_code_dict.js
This is the javascript code we used to generate all the icd-9 codes associated with the condition variables used in the ML model. We utilized an external [API](https://clinicaltables.nlm.nih.gov/api/icd9cm_dx/v3/search) for searching all the associated icd-9 codes. The program outputs a json file containing all the icd-9 codes we searched together with the condition name in key-value format.

### 1.2 gen_cond_var.js
This program serves the function of parsing http response we obtained from epic (Conditions.Search API, in xml format), and generating the binary variables for feeding the machine learning model. The code is intended to be integrated into the sample app, but since we are not able to register on epic with access to the conditions search APIs, manual generation of conditions variables can be achieved by simply replacing the *sample_res_cond_search.xml* with the API response obtained from the [API sandbox](https://fhir.epic.com/Sandbox).

