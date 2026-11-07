import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
         name:{
            type:String,
            required:true,
            trim:true,
            maxLength:100
         },
         email:{
            type:String,
            required:true,
            trim:true,
            lowercase:true,
            match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address']
         },
         subject:{
            type:String,
            trim:true,
            maxLength:150,
            default:''
         },
         message:{
            type:String,
            required:true,
            trim:true,
            maxLength:3000,
         },
         read:{
            type:Boolean,
            default:false
         }
},{timestamps:true}) 

export const Message = mongoose.model("Message",messageSchema)
