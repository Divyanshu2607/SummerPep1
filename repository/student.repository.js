//all the functions related to database is being done here

const StudentModel=require('../models/student');

//adding api

const addStudent=async (studentInfo)=>{
    const student= new StudentModel(studentInfo);
    return await student.save();
}

//getting info of a student

const getStudentByRegistrationNumber=async (registrationNumber)=>{
  return await StudentModel.findOne({registrationNumber});
}

//updating student info

const updateStudent=async(studentAfterUpdate)=>{
    const { registrationNumber }=studentAfterUpdate;
    const updateResult=await StudentModel.updateOne(
        {registrationNumber},
        { $set:{...studentAfterUpdate}}
    );
    if(!updateResult.matchedCount){
        console.info(
            `Update Failed: Student with registration number ${registrationNumber} was not found.`
        );
        return false;
        
    }
    console.info(
        `Update Success: Student with registration number ${registrationNumber} was updated.`
      );
      return true;
}

const deleteStudent=async (registrationNumber)=>{
    const deleteStudent=await StudentModel.deleteOne({
        registrationNumber
    });
    if (!deleteResult.deletedCount) { 
        console.info(
          `Delete Failed: Student with registration number ${registrationNumber} was not found.`
        );
        return false;
      }
      console.info(
        `Delete Success: Student with registration number ${registrationNumber} was deleted.`
      );
      return true;
    };

    module.exports={
        addStudent,
        getStudentByRegistrationNumber,
        updateStudent,
        deleteStudent,
    };