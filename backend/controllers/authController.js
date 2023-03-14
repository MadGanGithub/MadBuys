import User from "../models/user.js";


const register_user= async (req,res,next)=>{
    const { name,email,password}=req.body

    const user=await User.create({
        name,
        email,
        password
    });

    if(!user){
        res.status(404).json({
            message:"Error in registering the user"
        })
    }else{
        console.log(name)
    }
    
}

export default register_user;



