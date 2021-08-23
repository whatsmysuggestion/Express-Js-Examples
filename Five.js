var express = require('express');
var app = express();

app.get('/data/:name/:no', function(req, res) {
	//res.header("Access-Control-Allow-Origin", "*"); 
   res.json('no: ' + req.params.no +  ' and name: ' + req.params.name);
});
app.listen(3000);
