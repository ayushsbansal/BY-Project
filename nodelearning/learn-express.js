var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send('Just a slash');
});

app.get('/home',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact/:name',function(req,res){
  res.send('You typed ' + req.params.name);
});

app.listen(3000);
