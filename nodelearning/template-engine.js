//EJS - embedded javascript

//Sending files with dynamic content

var express = require('express')

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact/:name',function(req,res){
  var data = {name: req.params.name , id: "1", hobbies : ['eating','coding','sleeping']};
  res.render('profile',{data : data});
})

app.listen(3000);
