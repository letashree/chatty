import mongoose from "mongoose"
import { Profiler } from "react"

const userSchema = new mongoose.Schema({

    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
     receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    text:{
        type:String,
    },
    
    image:{
        type:String, 
    },

    video:{
        type:String,
    },

    
},{ timestamps:true });


const User = mongoose.model("User",userSchema)

export default User