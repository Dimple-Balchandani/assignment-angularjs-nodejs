var express = require('express');
var app = express(); 
var mongojs = require('mongojs');
var db = mongojs('demoApp',['demoApp']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
  
app.get('/demoApp',function(req,res){
	db.demoApp.find(function(err,data){
		console.log(data)
		res.json(data);
	});
});

app.post('/demoApp',function(req,res){
	db.demoApp.insert(req.body, function(err,data){
		res.json(data);
	});
});

app.listen(8080);
console.log("App listening on port 8080");