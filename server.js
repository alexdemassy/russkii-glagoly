
// General project constants
runningPort = 8081;

// General node modules
const http = require('http');
const path = require('path');

// Load express.js
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(runningPort, function () {
    console.log('Russkii Glagoly app listening on port' + runningPort);
});


