# Special App

This is the repo for the Cornell Spring 22 Spec Project - Special

# Get Started

## Run Pipeline Server

Open terminal, and start pipeline server

```
cd pipeline-srv
npm install
npm start
```

## Run Prediction Server

Open another terminal, and start prediction server

```
cd prediction-srv
npm install
npm start
```

> `npm install` only needs to be run once

# Testing

Open replit and grant permission to the app, the client will post request to pipeline, pipeline should clean the raw data and post again to prediction server, and the prediction server should response with the result, which get pass over accordingly back to the client.

edit Feb 2023: new access info added: contact Yiye Zhang for details

# Client

Open terminal and run:

```
cd ./client
npm i start
npm run build
npm run dev
```

This will do a next dev and the website will be hosted on localhost:3005

Edit files in `/pages`

To output the result to Replit, run:

```
npm run build
```

This will optimize your code and export static content in `/out`
Copy and paste everything in `/out` to replit.
