var http = require('http'),
    express = require('express'),
    logger = require('./index').logger;

var app = express();

app.get('/', function(req, res) {
    res.send(JSON.stringify(logger)); // display the log array as JSON
});

http.createServer(app).listen(8080);
