import mongoose from "mongoose";

const collegeinfoSchema=new mongoose.Schema({
    address:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    officeHours:{
        type:String,
        required:true,  
        trim:true
    },
    facebookLink:{
        type:String,        
        trim:true
    },
    twitterLink:{
        type:String,    
        trim:true
    },
    instagramLink:{
        type:String,
        trim:true
    },
    linkedinLink:{
        type:String,
        trim:true
    }   
});

export default mongoose.model("Collegeinfo",collegeinfoSchema);