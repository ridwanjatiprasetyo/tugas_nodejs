const express = require('express')
const mongoose = require('mongoose')
const colors = require("colors/safe")
const ip = require('ip')
// const { CognitoIdentityProviderFilterSensitiveLog } = require('@aws-sdk/client-cognito-identity')
const port = 3000
const app = express()

const urlMongo =
  "mongodb://localhost:27017/tugasku777?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose.set({strictQuery: true})
mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true});

require("./models/tugasSchema");

require('./router')(app)

app.listen(port, ip.address(), () => {
    console.info(colors.cyan(`server is listening on ${ip.address()}:${port}`))}).on('error', function (err) {
    if(err.errno === 'EADDRINUSE') {
        console.log(`----- Port ${port} is busy, trying with port ${port + 1} -----`);
        listen(port + 1)
    } else {
        console.log(err);
    }
});