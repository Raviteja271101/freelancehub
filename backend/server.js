import express from "express"
import clientRoutes from "./routes/clientRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./config/db.js"
import dotenv  from 'dotenv';
import dns from 'dns';
// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();
connectDB()

const app =express();

app.use(express.json())
app.use("/clients",clientRoutes);
app.use("/project",projectRoutes)
app.use("/auth",authRoutes)

app.listen(process.env.PORT,()=>{
  console.log("running server")
})