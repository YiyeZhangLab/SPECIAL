# Documentation for backend data pipeline

## 1. Overview

The pipeline takes charge of the data processing for the SPECIAL app, which mainly consists the following steps:
1. Getting data from the epic database via FHIR apis.
2. Parsing and formatting the feature variables for the machine learning model.
3. Sending feature variables to GCP to get the inference result.


## 2. Epic data fetching
The SPECIAL app serves as a patient facing app. After the user requests a SPECIAL recommendation, which is associated with a ML inference request, the user will be redirected to the epic portal to ask for consent on retrieving the user's EHR. We've setup in our backend logic so that after the authentication is completed, the backend will automatically run corresponding FHIR APIs to fetch the EHR information we need for composing the feature variables.

## 3. Data parsing
The data parsing pipeline will do the following things:
1. Parse the data retrieved from the Patient Read API, and extract demographic information for model input
2. Parse the data retrieved from the Observation API to get pregnancy start (social history) and end date (vital signs).
3. Parse the data retrieved from the Condition API to get a list of conditions that the model requires. 
4. For each condition, the pipeline will check whether the date of the condition is within the prenatal period.

TODOs:
1. Right now, the permission to fetch observation (social history and vital signs), condition, and encounter is not available. The data we use in the live demo was shown using the hard-coded sample data. Once switch to a client-id with valid permission setup, uncomment the code blocks in the `getCondition.js`, `getConditionPeriod.js`, `getPregnancyEnd.js`, and `getPregnancyStart.js`.
2. Edge cases handling:
   - What if the user has multiple prenatal period on file
   - The pregnancy end period is currently determines by vital signs. Is is valid? what if there are multiple records in vital signs. 

## 4. Getting ML inference
After we get the parsed features (in binary format), we establish the connection with Google Cloud Platform to invoke our pre-trained machine learning model. This contains two step:
1. Using the GCP credentials to get an access token for accessing GCP resources
2. Calling the corresponding GCP api with the features in the request body to get the inference result