/*
 var express = require('express');
 var path = require('path');
 var app = express();
 var rootPath = path.normalize(__dirname + '/../');
 app.use(express.static(rootPath + '/app'));
 app.listen(81);
 console.log('Listening on port 8000...');
 */

var express = require('express');
var app = express();
var portNumber = 1024;

app.use(express.static(__dirname + '/../'));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.listen(portNumber);
console.log('Listening on port ' + portNumber + '...');
