import enquirymodel from "../models/Enquiry.js";
import dotenv from "dotenv";
dotenv.config();
import {replymail} from "../utils/mailer.js";

//reply mails 
export const replyenquiry = async (req, res) => {
  try{
    const {id}=req.params;
    const {reply}=req.body;
    const enquiry=await enquirymodel.findById(id);
    if(!enquiry){
      return res.json({
        success:false,
        message:"Enquiry not found"
      })
    }
    await replymail(enquiry.email,enquiry.subject,enquiry.name,reply,enquiry.messageId);
    enquiry.reply=reply;
    await enquiry.save();

    return res.json({
      success:true,
      message:"Replied to enquiry successfully",
      disp:[enquiry._id,enquiry.reply,enquiry.messageId]
    })

    
  }
  catch(err){
    return res.json({
      success:false,
      message:"Error replying to enquiry",
      error:err.message
    })
  }
};