var express = require('Express');
var app = express();

var test = require('./test.js');

app.use('/test', test);

app.listen(3000);


