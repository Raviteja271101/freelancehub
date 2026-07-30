import User from "../models/User.js";
import jwt from "jsonwebtoken"
export const protect= async (req,res,next)=>{
    try {
        const authHeader= req.headers.authorization;
        if(!authHeader){
            res.status(401).json({
                success:false,
                message:"No token provided"
            })
        }
            
            const token =authHeader.split(" ")[1];
            const decoded =jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            const user= await User.findById(decoded.id);
            
            if(!user){
                return res.status(401).json({
                    success:false,
                    message:"User not found"
                })
            }

            req.user= user;
// console.log(user)
            next();


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}