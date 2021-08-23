var express = require('express');
var app = express();

app.get('/data/:no1/:no2', function(req, res) {
  // res.header("Access-Control-Allow-Origin", "*"); 
   res.json({ Result: 'no1: ' + req.params.no1 +' and no2: ' + req.params.no2 });
    
});
app.listen(3000);
