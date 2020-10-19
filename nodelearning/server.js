
let multichain = require("multichain-node")({
    port: 7328,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "845jzah1itL79Xm4KNfWJkTqEtyUtHAC8XXfnGkVFiPp"
});

var express = require('express');

var app = express();

//Return multichain information
var data;
app.get('/getinfo',function(req,res){
  multichain.getInfo((err, info) => {
      if(err){
          throw err;
      }
      data = info;
  });

  res.json(data);
});

/*app.get('/publish',function(req,res){
  multichain.create({type : 'stream',name:'stream1',open:true},
  (err, info) => {
      if(err){
          throw err;
      }
      data = info;
  });

  res.json(data);
});
*/
app.get("/publish", function (request, response) {
multichain.publish({
  stream: 'stream1',
  key: 'YOURNAME',
  data:{
   "json":
   {
    'exp_block' : 'EXP_BLOCKCHAIN',
    'exp_dev' :  'EXP_DEV',
    'location' : 'LOCATION',
    'linkedIn' : 'LINK',
    'contact' :  'EMAIL'
   }
  }
 }, (err, info) => {
  console.log('Response: '+info);
  response.json({transactionId: info});
 })
});




app.listen(3000);



multichain.issue({address: "1Rf2Hzg5LvXZf9XzTk1PKi7PVh2zUhpyzcQ2fg", asset: "zcoin", qty: 50000, units: 0.01, details: {hello: "world"}}, (err, res) => {
    console.log(res);
})
