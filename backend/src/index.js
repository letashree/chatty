import "dotenv/config"
import express from "express";
import { connectDB } from "./lib/db.js";
import User from "./models/user.model.js";
import{clerkMiddleware} from "@clerk/express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT=process.env.PORT
const FRONTEND_URl=process.env.FRONTEND_URl

const publicDir = path.join(process.cwd(),"public");

app.use(express.json())
app.use(cors({origin:FRONTEND_URl,credentials:true}))
app.use(clerkMiddleware())

app.get ("/health",(req,res)=>{
    res.status(200).json({ok:true});
});


if(fs.existsSync(publicDir)){
app.use(express.static(publicDir))
app.get("/{*any}",(req,res,next)=>{
    res.sendFile(path.join(publicDir,"index.html"),(err)=> next(err));
})
}

app.listen(PORT,()=>{
    connectDB();
    console.log("server is up and running 3000")
});
