import enquirymodel from "../models/Enquiry.js"
import dotenv from "dotenv";
dotenv.config();

export const postenquiry=async (req,res)=>{
    try{
        const {name,email,mobile,subject,message}=req.body;
        const newenquiry=await enquirymodel.create({
            name,email,mobile,subject,message
        })
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