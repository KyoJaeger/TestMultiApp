/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const url = require('url');

/**
 * App Variables
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = process.env.PORT || '5000';
const envTest = process.env.TestVar || 'test var not set';

// const SFDC_SECURITY_TOKEN = 'SECYRITY TOKEN';

// Used for Web Server Code Flow stuff
app.get("/", (req, res) => {
 res.status(200).send(envTest);
});

app.post("/nylasWebhook", (req, res) => {
  console.log(req);
  res.status(200).send(envTest);
});

app.get("/nylasWebhook", (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  console.log(queryObject);
  res.status(200).send(queryObject.challenge);
})

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to request on http://localhost:${port}`);
});
