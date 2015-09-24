/* @flow */

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('wellcome to my API! Test');
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});