var http = require('http');
var fs = require('fs');
/*
myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');


myReadStream.on('data',function(chunk){
  console.log('Chunk received');
  console.log(chunk);
  myWriteStream.write(chunk);
});

//OR
//myReadStream.pipe(myWriteStream);

*/
var server = http.createServer(function(req,res){
  /*res.writeHead(200,{'Content-Type' : 'text/html'});
  fs.createReadStream('index.html').pipe(res);
  */
  res.writeHead(200,{'Content-Type' : 'application/json'});
  var myObj = {name: 'Ayush', dob: '1234'};
  res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
