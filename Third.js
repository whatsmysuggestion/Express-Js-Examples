var express = require('express');
var app = express();

app.all('/test', function(req, res){
   res.send("<h1><center>HTTP method doesn't have any effect on this route!</center></h1>");
});

app.listen(3000);