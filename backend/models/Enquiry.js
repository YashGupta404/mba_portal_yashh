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
    date: {
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Enquiry",enquirySchema)