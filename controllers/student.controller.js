const studentService =require("../service/student.service");

const addStudent=async(req,res)=>{
    try{
        const studentInfo=req.body;
        const student=await studentService.addStudent(studentInfo);
        return res.status(201).send(student);
    }
    catch (err) {
        return res.status(500).send({
          message: "Error occurred",
        });
}
}


const getStudentByRegistrationNumber=async (req,res)=>{
    try{
        let { registrationNumber}=req.params;
        const studentInfo =await studentService.getStudentByRegistrationNumber(registrationNumber);
        if (!studentInfo) {
            return res.status(404).send({
              message: "Invalid Registration Number",
            });
          }
          return res.status(200).send(studentInfo);
        } catch (err) {
          console.error(err);
          return res.status(500).send({
            message: "An error occurred",
          });
        }
      };



const updateStudent=async(req,res)=>{
    try{
        const { registrationNumber }=req.params;
        let studentAfterUpdate={...req.body,registrationNumber};
        const wasUpdated=await studentService.updateStudent(studentAfterUpdate);
        if(!wasUpdated){
            return res.status(404).send({
                message:"Update failed: Student not Found"
            });
            return res.status(200).send({ message: "Update Success!" });
        } 
    }catch (err) {
          console.error(err);
          return res.status(500).send({ message: "An error occurred" });
        }
    }


const deleteStudent=async (req,res)=>{
    try{
        const registrationNumber=req.params;
        const wasDeleted=await studentService.deleteStudent(
            registrationNumber
        );
        if (!wasDeleted) {
            return res
              .status(404)
              .send({ message: "Delete Failed: Student not found." });
          }
          return res.status(200).send({ message: "Delete Success!" });
        } catch (err) {
          console.error(err);
          return res.status(500).send({ message: "An error occurred" });
        }
}

module.exports={
    addStudent,
    getStudentByRegistrationNumber,
    deleteStudent,
    updateStudent,
};