 var express = require('express');
var app = express();

app.use(function(req, res, next){
   console.log("Start");
   next();
});

app.get('/hello', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/hello', function(req, res){
   console.log('End');
});

app.listen(3000);