import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      trim: true,
      default: "active",
      
    },
    notes: {
      type: String,
      default: "",
      
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"User"
    }
  },
  {
    timestamps: true,
  },
);

const Client = mongoose.model("Client", clientSchema);

export default Client;

