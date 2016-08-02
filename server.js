
// General node modules
const http = require('http');
const express = require('express');

// Project specific modules
var hello = require('./js/hello.js');

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  hello.helloWorld();
  response.end();
}).listen(8081);