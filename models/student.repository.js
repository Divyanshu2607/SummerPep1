const mongoose=require("mongoose")

const StudentSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        min:[15,"Age of the student must be 15 or above"],
        max:[23,"Age of the student must be less than 23"],
    },
    email:{
        type:String,
        required:true,
        unique:[true,"The student email already exists"],
        validate:[
            (email) => {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email);
                },
                "Please enter valid enail."
            ],
    },
    registrationNumber:{
        type:Number,
        required:true,
        unique:true,
        min:[   9_999_999,"Regno of the student must be 15 or above"],
        max:[1_000_000_000,"Regno of the student must be less than 23"],
    },
    isClassRepresentative:{
        type:Boolean,
        deafult:false,
    },
    
    password:{
        type:String,
        validate:(password)=>
            password.length>=8,
        
    },
});

const StudentModel=mongoose.model("SummerPep",StudentSchema);
module.exports=StudentModel;