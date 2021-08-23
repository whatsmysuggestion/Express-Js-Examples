var express = require('express');
  var mysql = require('mysql');
 
var app = express();
 var a,b,c;
 var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodetest"
}); 

 app.get('/data/:a/:b/:c', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO emp VALUES ("+req.params.a+",'"+req.params.b+"',"+req.params.c+")";
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
});
app.listen(3000);  
 
 /* app.get('/data/:a/:b/:c', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   //c=parseInt(req.params.a)+parseInt(req.params.b);
   //res.json('c:'+c);
   console.log(req.params.a+""+req.params.b+""+req.params.c);
   res.json(req.params.a+""+req.params.b+""+req.params.c);
}); 
 app.listen(3000); */ 
