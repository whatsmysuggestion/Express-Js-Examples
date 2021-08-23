var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);