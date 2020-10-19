/*
setTimeout(function(){
  console.log("Welcome to NodeJS");
},3000);

var time = 0;
timer = setInterval(function(){
  time+=2;
  console.log(time + " seconds passed");
  if(time > 5){
    clearInterval(timer);
  }
},2000);

console.log(__dirname);
console.log(__filename);
*/

/*
//normal function statement
function SayHI(){
  console.log("Heyy");
}

SayHI();

//function expressions
var SayBye= function(){
  console.log("SayBye");
}

SayBye();

*/


/*
var stuff = require('./count.js');

console.log(stuff.counter([1,2,3,4,5]));
console.log(stuff.adder(stuff.pi , 4));

*/


var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(mssg);
})
//on occurence of some event

myEmitter.emit('someEvent','the event someEvent is emitted');
//emitting the event
