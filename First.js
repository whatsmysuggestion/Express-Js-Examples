var express = require('express');
var app = express();

app.get('/first', function(req, res){
	//res.header("Access-Control-Allow-Origin", "*");
   res.json("Hello Welcome To My Channel");
});

app.listen(3000);