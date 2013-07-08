var express = require('express');
var fs = require('fs');
var Buffer = require('buffer');

var app = express.createServer(express.logger());

var indexFile;
fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    indexFile = data.toString('utf-8');
});

app.get('/', function(request, response) {
  response.send(indexFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});