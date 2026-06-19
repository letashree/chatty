import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({

    clerkId:{
        type:String,
        required:true,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    fullName:{
        type:String,
        required:true,
        },

    profilePic:{
        type:String,
        default:"",
    },
},{ timestamps:true });

const Message = mongoose.model("Message",messageSchema)


export default Message