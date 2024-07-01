
//codes with structured backend code

const express=require('express');
const app=express();
const PORT=3000;
require('./connect-db');
const bodyParser = require('body-parser');

const bookRouter=require("./routes/book.route");

const studentRouter=require('./routes/student.route');

const { studentMiddleware,isClassRepresentativeMiddleware } = require("./middleware/student.middleware");
const issueRecordRoute = require("./routes/issueRecord.routes");

app.use(express.json());

app.use(bodyParser.json());

app.use("/student",studentRouter);

app.get('/',(req,res)=>{
  return res.status(200).send("hello world");
})

app.use(
  "/book",
  studentMiddleware,
  isClassRepresentativeMiddleware,
  bookRouter
);

app.use('/issue-record',studentMiddleware,issueRecordRoute);
app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});
app.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  }else{
    console.log("Server running sucessfully");
  }
});