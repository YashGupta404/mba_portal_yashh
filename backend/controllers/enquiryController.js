import enquirymodel from "../models/Enquiry.js"
import dotenv from "dotenv";
dotenv.config();
import emailverification from "../utils/emailverification.js"
import Sendmail from "../utils/mailer.js"

export const postenquiry=async (req,res)=>{
    
    try{
        const {name,email,mobile,subject,message}=req.body;
        const isemailverified=await emailverification(email);
        if(!isemailverified)
        {
            return res.json({
                success:false,
                message:"Unverified email"
            })
        }
        const newenquiry=await enquirymodel.create({
            name,email,mobile,subject,message
        })
        Sendmail(name,email,mobile,subject,message)
        return res.json({
            "success":true,
            "message":"Successfully posted enquiry",
            "enquirydetails":newenquiry
        })
    }
    catch (err)
    {
        return res.json({"success":false,
            "message":"Error Posting enquriy",
            "error":err.message
        })
    }
}

export const getenquiry=async (req,res)=>{
    try{
        const displayenquiries=await enquirymodel.find();
        return res.json({
            success:true,
            message:"Fetched all enquiries",
            count:displayenquiries.length,
            "enquiry":displayenquiries
        })
    }
    catch(err)
    {
        return res.json({
            success:true,
            message:"Error fetching enquiries..",
            error:err.message
        })
    }
}
export const getenquiryspecificbysubject=async (req,res)=>{
    try{
        const {subject}=req.params;
        const getsubjectbasedenquiry=await enquirymodel.find({subject});
        return res.json({
            success:true,
            message:"List of enquiries based on "+subject,
            "displaysubjectbasedenquiry":getsubjectbasedenquiry
        })
    }
    catch(err)
    {
        return res.json({
            success:false,
            message:"Filtering failed based on subject",
            error:err.message
        })
    }
}