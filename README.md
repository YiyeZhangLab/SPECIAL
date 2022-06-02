# Special App

This is the repo for the Cornell Spring 22 Spec Project - Special

## Get Started

Open terminal, and start pipeline server

```
cd pipeline-srv
npm install
npm start
```

Open another terminal, and start prediction server

```
cd prediction-srv
npm install
npm start
```

> `npm install` only needs to be run once

# Test

Open replit and grant permission to the app, the client will post request to pipeline, pipeline should clean the raw data and post again to prediction server, and the prediction server should response with the result, which get pass over accordingly back to the client.
