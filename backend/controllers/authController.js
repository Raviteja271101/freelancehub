import User from "../models/User.js"
import bcyrpt from "bcrypt"
import jwt from "jsonwebtoken";

export const signup=async (req,res)=>{
    try {
        const {name, email, phone, password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
           return res.status(400).json({
                success:false,
                message:"Email already exists"
            })
        }

        const hashedPassword= await bcyrpt.hash(password,10);

        const user =await User.create({
            name,email,phone,password:hashedPassword
        })

        user.password=undefined;

        res.status(201).json({
            success:true,
            message:"User created successfully",
            data:user,
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }   
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user =await User.findOne({email});

        if(!user){
            res.status(401).json({
                success:false,
                message:"Email doesn't exists"
            })
        }

        const isMatch= await bcyrpt.compare(password,user.password)

        if(!isMatch){
           return res.status(401).json({
                success:false,
                message:"Invalid Email or Password"
            })
        }

        const token=jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        user.password=undefined;
        res.status(200).json({
            success:true,
            message:"Login Successful",
            token,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}