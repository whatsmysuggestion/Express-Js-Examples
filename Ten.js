var express = require('express');
var app = express();

var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/whatsmysuggestion';
mongoose.connect(dbHost);
var StudentSchema = mongoose.Schema({
  name: String,
 
  sid: {type: String, index: true},
  address: String,
  fee: Number
});
 
var Student = mongoose.model('Student', StudentSchema, "mongoose_demo");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
console.log("Connected to DB");

app.get('/', function(req, res){
	
  Student.find({fee : {$gt:10}}, "name sid address fee", function(err, result){
    if ( err ) throw err;
    res.send("Find Operations: " + result);
  });
} ); 

});
app.listen(3000);