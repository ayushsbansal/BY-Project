var fs = require('fs');

//used for reading and writing to a file
/*
//Synchronous behaviour
var readData = fs.readFileSync('./readme.txt' , 'utf8');
//console.log(readData);
fs.writeFileSync('./writeMe.txt',readData);

fs.readFile('./writeMe.txt', 'utf8', function(err,data){
  console.log(data);
});



fs.unlinkSync('./writeMe.txt');
//to delete a file

//Create a directory
fs.rmdir('stuff',function(err,data){
  console.log(err);
});

*/

/*
fs.mkdir('stuff',function(){
  fs.readFile('./readme.txt','utf8',function(err,data){
    fs.writeFile('stuff/writeme.txt',data,function(err,data){
      console.log(data);
    });
  })
})
*/

fs.unlink('stuff/writeme.txt',function(){
  fs.rmdir('stuff',function(){
    console.log('Removed');
  })
})
