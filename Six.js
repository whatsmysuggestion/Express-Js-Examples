var express = require('express');
var app = express();

app.get('/things/:id([0-9,a-z,A-Z,]{5})', function(req, res){
	//res.header("Access-Control-Allow-Origin", "*");  
  res.send('id: ' + req.params.id);
});

app.listen(3000);
