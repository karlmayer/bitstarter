var express = require('express');

var app = express.createServer(express.logger());

var indexFile;
fs.readFile('index.html', {encoding="ascii"}, function (err, data) {
    if (err) throw err;
    indexFile = data;
});

app.get('/', function(request, response) {
  response.send(indexFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});