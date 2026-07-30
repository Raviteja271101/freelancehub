import mongoose from "mongoose";
import { type } from "node:os";
import Client from './../../backend/models/Client';

export const clientSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
        },
        phone:{
             type:String,
            trim:true,
         
        },
        email:{
             type:String,
            trim:true,
            required:true,
            lowercase:true,
            unique:true
        },
        Company:{
            type:String,
            trim:true,

        },
        status:{
            type:String,
            enum:["Active","Inactive"],
            trim:true,
            default:"Active"
        },
        notes:{
            type:String,
            default:""
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        }
    },

    {
        timestamps:true
    }
)

const Client = mongoose.model(clientSchema);

export default Client