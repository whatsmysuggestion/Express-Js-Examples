var express = require('express');
var app = express();
var mysql = require('mysql');

app.get('/data/:name/:no/:sal', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*"); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "nodetest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO emp VALUES ("+req.params.no+",'"+req.params.name+"',"+req.params.sal+")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

   return "Inserted";
   });
app.listen(3000);
