// Already Have:
// 1. Student model
// 2. book model
// A library issues books to students.
// Modeel:
// IssuedRecord
// — _ id
// — StudentRegNo
// — booklsbnNo
// — issueDate
// — returnDate
// 
// - status =>[ISSUED (default), RETURNED)
// — latefine 0 (by default)
// (we will calculate it at the time of returning the book, If the book is returned late.
// bookprice *.15 * (no Of days the book returned late)
// * bookPrice/each day]

const mongoose=require("mongoose");

const IssuedRecordSchema=mongoose.Schema({
  
    StudentRegNo:{
        type:Number,
        required:true,
    },
    bookIsbn:{
        type:Number,
        required:true,
    },
    issueDate:{
        type:Date,
        default:()=> new Date(),
    },
    returnDate:{
        type:Date,
        default:()=>new Date(),
    },
    status:{
        type:String,
        enum:["ISSUED","RETURNED"],
        deafult:"ISSUED",
    },
    lateFine:{
        type:Number,
        default:0,
        min:0
    }
})

const IssuedRecord=mongoose.model('IssuedRecord',IssuedRecordSchema);
module.exports=IssuedRecord;