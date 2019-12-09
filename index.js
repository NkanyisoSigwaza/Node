const express = require("express");

const bodyParser = require("body-parser");

const routes = require("./routes/api"); // so that we can access routes

// set up express app
const app  = express();  // comes with http methods


app.use(bodyParser.json());//will pass json data and attatch it to request

//initialise routes
app.use('/api',routes); //uses routes -- so that you didnt have to put api down each time


app.get("/",function(req,res){
  console.log("get request");
  //res.end(); //stops continuous loading
  res.send({name:"Nkanyiso"});
});

//listen for request
app.listen(4000,function(){
  console.log("now listening to port 4000");
});
