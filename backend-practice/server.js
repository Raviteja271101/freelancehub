import express from "express"
import dotenv  from 'dotenv';
import { connectDB } from './config/db.js';
import clientRoutes from "./routes/clientRoutes.js";

dotenv.config();
connectDB();
const app= express()
app.use(express.json())

app.use("/clients",clientRoutes)

app.listen(process.env.PORT,()=>{
console.log("running server")
})