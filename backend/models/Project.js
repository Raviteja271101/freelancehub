import mongoose from "mongoose";

const projectSchema= new mongoose.Schema(
    {
        projectName:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            default:""
        },
        budget:{
            type:Number,
            required:true,
            min:0
        },
        status:{
            type:String,
            enum:["planning","in-progress","review","completed","on-hold"],
            default:"planning"
        },
        deadline:{
            type:Date
        },
        client:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Client",
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
    },
    {
        timestamps:true
    }
)

 const Project = mongoose.model("Project",projectSchema);

 export default Project;