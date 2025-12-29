import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    status:{
        type:String,
        enum:["all","new","in-progress","responded"],
        default:"new"
    },
    priority:{
        type:String,
        enum:["all","low","medium","high"],
        default:"medium"
    },
    subject: {
        type: String,
        required: true,
        enum: ["", "Admission Query", "Program Details", "Placement Information", "Others"], // restrict allowed values
        default: ""
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 1000
    },
    messageId:{
        type:String,
        required:true,
    },
    reply:{
        type:String,
        default:"",
        date:Date.now
    },
    date: {
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Enquiry",enquirySchema)