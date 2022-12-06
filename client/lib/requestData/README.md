# Documentation for backend data pipeline

## 1. Overview

The pipeline takes charge of the data processing for the SPECIAL app, which mainly consists the following steps:
1. Getting data from the epic database via FHIR apis.
2. Parsing and formatting the feature variables for the machine learning model.
3. Sending feature variables to GCP to get the inference result.


## 2. Epic data fetching
The SPECIAL app serves as a patient facing app. After the user requests a SPECIAL recommendation, which is associated with a ML inference request, the user will be redirected to the epic portal to ask for consent on retrieving the user's EHR. We've setup in our backend logic so that after the authentication is completed, the backend will automatically run corresponding FHIR APIs to fetch the EHR information we need for composing the feature variables.

## 3. Data parsing
// TODO

## 4. Getting ML inference
After we get the parsed features (in binary format), we establish the connection with Google Cloud Platform to invoke our pre-trained machine learning model. This contains two step:
1. Using the GCP credentials to get an access token for accessing GCP resources
2. Calling the corresponding GCP api with the features in the request body to get the inference result