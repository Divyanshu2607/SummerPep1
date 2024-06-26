
//codes with structured backend code

const express=require('express');
const app=express();
const PORT=3000;
require('./connect-db');
const studentRouter=require('./routes/student.route');
const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.json());

app.use("/student",studentRouter);

app.get('/',(req,res)=>{
  return res.status(200).send("hello world");
})

app.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  }else{
    console.log("Server running sucessfully");
  }
});