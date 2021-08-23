var express = require('express');
var router = express.Router();

router.get('/get', function(req, res){
   res.send('GET route on things.');
});
router.post('/post', function(req, res){
   res.send('POST route on things.');
});
router.get('/get1', function(req, res){
   res.send('GET1 route on things.');
});
 
module.exports = router;