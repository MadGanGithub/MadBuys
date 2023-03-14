import mongoose from "mongoose";
import validator from "validator";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
        maxLength:[30,'Name cannot exceed 30 characters']
    },
    email:{
        type:String,
        required:[true,'Please enter your email'],
        unique:true,
        validate:[validator.isEmail,'Please enter valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter your password'],
        minlength:[8,'Password must be longer than 8 characters'],
        select:false
    },
    // avatar:{
    //     public_id:{
    //         type:String,
    //         required:true
    //     },
    //     url:{
    //         type:String,
    //         required:true
    //     }
    // },
    role:{
        type:String,
        default:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

export default mongoose.model('User',userSchema);