// import {add,multiply} from './test';
// const {add,multiply} =require("./test")

// console.log("hey",add(3,4,5));
// console.log(multiply(1,2,3));

/*server based backends=> node.js,they run on a vm/computer continuosly on a port number

serverless based backends*/


// const PORT=3000;
// const express=require('express');
// const app=express();

// app.get("/hey",(req,res)=>{
//     return res.status(200).send("hello");
// });

// app.get('/test',(req,res)=>{
//     const currentTime=new Date();
//     res.status(200).send(currentTime.toLocaleTimeString());
// })

// app.get('/test',(req,res)=>{
//     const currentTime=new Date();
//     res.status(200).send(currentTime.toLocaleTimeString());
// });

// app.listen(PORT,(err)=>{
//     if(err){
//         console.log("error")
//     }else{
//         console.log("server running")
//     }
// });

//rest methods
// / Every request t at a backend can accept is to be identified uniquely
// / To identify every request uniquely, we use a candidate key.
// / 1. Type of Request (Veg/Chicken)
// / 2. URL of request (Nane of the dish)

/*
type of requests:
1.get->return hello world
2.post
3.put
4.delete
url:"www.lpu.com"

app.<type-of-req>(url,incomingRequest,responsetosend)=>{
    send req});
A response contain two major parts
1.status code(important)
2.body which contains data(optional)
*/
//

//q1 accept a GET type req an url "/test",that gives current time(use data object)
/*
get- when we want something
any req thorugh address bar is done through get

post-when we want to create some info on the backend/we want to provide data to backend

*/ 

// const PORT=3000;
// const express=require('express');
// const app=express();

// // app.get('/get-fullname',(req,res)=>{
// //     let firstName="Divyanshu";
// //     let lastName="Chauhan";
// //     return res.status(200).send(firstName+" "+lastName);
// // });

// app.get('/get-fullname',(req,res)=>{
//     let firstName=req.query.firstName;
//     let lastName="Chauhan";
//     return res.status(200).send(firstName+" "+lastName);
// });

// app.listen(PORT,()=>{
//     console.log("sucessfully running")
// });

/* 
ways to bind information to the requests:
1.Query Parameters/requet parameters
2.Path Parameter
3.Request Headers
4.Request body (not possible get and head types)
*/

//-----------------------------------------------------
//Q1
// Accept a POST type request on URL "/get-sum—and-product' ,
// that takes 2 numbers as Query Params and return a JS object
// that contains their sum and product.

//1.Query Parameters/requet parameters
// const PORT=3000;
// const express=require('express');
// const app=express();

// app.get('/get-sum-and-product',(req,res)=>{
//     const num1=parseInt(req.query.num1);
//     const num2=parseInt(req.query.num2);
//     //  let sum=0;
//     //  let product=0;

//     //  res.json({sum,product});
//      return res.status(200).send({
//         sum:num1+num2,
//         product:num1*num2
//      })
// });

// app.listen(PORT,()=>{
//     console.log("sucessfully running")
// });

//-----------------------------------------------------------

//2.Path Parameter && req body
// require('./connect-db')
// const PORT=3000;
// const express=require('express')
// const app=express()
// const bodyParser = require('body-parser');

// const students={
//     12109801:"Divyanshu",
//     12109852:"Gagandeep"
// };

// app.get("/get-student-info/:regNo",(req,res)=>{
//     let regNo=req.params.regNo;
//     if(students[regNo]){
//         return res.status(200).send(students[regNo])
//     }else{
//         return res.status(404).send('not found')
//     }
// });

// app.use(bodyParser.json());
// app.use(express.json()) //if json ,,cnvert it to json object

// app.post("/add-student",(req,res)=>{
// const reqBody=req.body  //json need to be transform ,if it is being send in json format
// students[reqBody.regNo]=reqBody.name
//   return res.status(200).send()
// });
//--

// const Student=require('./models/Students');

// app.post("/add-student",(req,res)=>{
//     const studentInfo=req.body;
//     const student=new Student(studentInfo);
//     //async in nature
//     student.save().then(()=>{
//         console.info("Succesfully added")
//         return res.status(201).send({
//             message:"Student saved",
//         });
//     }).catch((err)=>{
//         console.error(err);
//         return res.status(500).send({
//             message:"error occured cant add the deatils",
//         })
//     })
   
// })



// app.post("/add-student",async (req,res)=>{
   
//     try{
//      const studentInfo=req.body;
//      const student=new Student(studentInfo);
//     await student.save();
//         console.info("Succesfully added")
//         return res.status(201).send({
//             message:"Student saved",
//         });
        
//     }
//     catch(err){
//         console.error(err);
//         return res.status(500).send({
//             message:"error occured cant add the deatils",
//         })
//     }
// });
// 

// app.get("/get-student-info/:regNo",async (req,res)=>{
//     try{
//     let registrationNumber=req.params.registrationNumber;
//     const studentInfo=await Student.findOne({
//         registrationNumber:registrationNumber,//registrationNumber
//     })
//     if(studentInfo){
//         console.info(
//             `studnet with registration number ${registrationNumber} was sucessfully found.`
//         )
//         return res.status(200).send(studentInfo);
//     }else{
//         console.info(
//             `studnet with registration number ${registrationNumber} was not  found.`
//         );
//         return res.status(404).send({
//             message:"Ivalid Regisration number",
//         })
//     }
//      }
//     catch(err){
//         console.error(err);
//         return res.status(500).send({
//             message:"an error occured",
//         })
//     }
// });

// app.use(bodyParser.json());
// app.use(express.json())

// app.post('/students', async (req, res) => {
//     const { firstName, lastName, age, email } = req.body;
  
//     try {
//       const newStudent = new StudentModel({ firstName, lastName, age, email });
//       const savedStudent = await newStudent.save();
//       res.status(201).json(savedStudent);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });

  //-----



// app.listen(PORT,()=>{
//     console.log("server running")
// })

//----------------------------------------------------------------

// app.get("/get-student-info/:email", async (req, res) => {
//     try {
//       let email = req.params.email;
//       const studentInfo = await Student.findOne({ email});
//       if (studentInfo) {
//         console.info(
//           `Student with email ${emailid} was successfully found.`
//         );
//         return res.status(200).send(studentInfo);
//       }
//       console.info(
//         `Student with email ${email} was not found.`
//       );
//       return res.status(404).send({
//         message: "Invalid emial",
//       });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send({
//         message: "An error occurred",
//       });
//     }
//   });


//--------------------------------------------------------------------------------------------------------

// require('./connect-db')
// const PORT=3000;
// const express=require('express')
// const app=express()
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(express.json())

// const Student=require('./models/Students');

// app.post("/add-student",(req,res)=>{
//     const studentInfo=req.body;
//     const student=new Student(studentInfo);
//     //async in nature
//     student.save().then(()=>{
//         console.info("Succesfully added")
//         return res.status(201).send({
//             message:"Student saved",
//         });
//     }).catch((err)=>{
//         console.error(err);
//         return res.status(500).send({
//             message:"error occured cant add the deatils",
//         })
//     })
   
// })

// app.delete("/student/:registrationNumber",async (req,res)=>{
//     try{
//         let { registrationNumber }=req.params;
//         const deleteResult=await Student.deleteOne({registrationNumber});
//         if(!deleteResult.matchedCount){
//             console.info(
//                 `Delete Failed: Student with Registration Number: ${registrationNumber} does not exist`
//               );
//             return res.status(404).send({
//                 message:"deleet failed"
//             });
//         }
//         console.info("delete success")
//     }
//     catch(err){
//         console.error(err);
//         return res.status(500).send({message:"An error occurred"})
//     }
// });

// app.delete("/student/:registrationNumber", async (req, res) => {
//     try {
//       let { registrationNumber } = req.params;
//       const deleteResult = await Student.deleteOne({ registrationNumber });
//       if (!deleteResult.matchedCount) {
//         console.info(
//           `Delete Failed: Student with Registration Number: ${registrationNumber} does not exist`
//         );
//         return res
//           .status(404)
//           .send({ message: "Delete Failed: Student not found." });
//       }
//       console.info(
//         `Delete: Success: Student with Registration Number: ${registrationNumber} was deleted.`
//       );
//       return res.status(200).send({ message: "Delete Success!" });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send({ message: "An error occurred" });
//     }
//   });
  
// app.listen(PORT,()=>{
//     console.log("server running")
// })





//---------------------------------------------------------------

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