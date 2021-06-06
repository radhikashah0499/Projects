const express = require("express");
const bodyParser = require("body-parser")
const app = express();
var d = new Date();
// import {treat } from './treats.js'; 


var treat = [
  { name : 'Pizza' ,pirce : 249 },
  {name : 'Chocolate' , price : 150},
  {name : 'Choclate Browine Fudge' , price :200},
  {name : 'Alfredo Pasta' , price : 380},
  {name : 'Veg Momos', price : 180}
  
];
app.use(bodyParser.urlencoded({
    extended:true
}));
 

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
 
app.post("/", function(req, res) {
  var num1 = req.body.num1;
  
   
  res.send("Hello " + num1);
});


app.get('/treat',(req,res) =>{

    res.json(treat)
  })

  app.get('/hello',(req,res) =>{
    var mnth = d.getMonth() +1
    res.json({
      message : 'Hi , how you doing!?',
      date : `${d.getDate()}/${mnth}/${d.getFullYear()} `
    })
  })
 
app.listen(3000, function(){
  console.log("server is running on port 3000");
})