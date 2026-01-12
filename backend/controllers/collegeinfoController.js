import collegeinfomodel from "../models/Collegeinfo.js";
import dotenv from "dotenv";
dotenv.config();

const initmodel=async()=>{
    const existing=await collegeinfomodel.findOne({});
    if(!existing){
        const newinfo=new collegeinfomodel({
            address:"...",
            email:"...",
            phone:"...",
            officeHours:"...",
            facebookLink:"...",
            twitterLink:"...",
            instagramLink:"...",
            linkedinLink:"..."
        });
        await newinfo.save();
    }
};



export const updateinfo = async (req, res) => {
    try {
        await initmodel();
        const { address, email, phone, officeHours, facebookLink, twitterLink, instagramLink, linkedinLink } = req.body;
        const updatedInfo = await collegeinfomodel.findOneAndUpdate(
            {},
            {
                address,
                email,
                phone,
                officeHours,
                facebookLink,
                twitterLink,
                instagramLink,
                linkedinLink
            },
            { new: true }
        );
        return res.json({
            success: true,
            message: "College info updated successfully",
            data: updatedInfo
        });
    }
    catch (err) {
        return res.json({
            success: false,
            message: "Error updating college info",
            error: err.message,
        });
    }
}

export const getinfo = async (req, res) => {
    try{
        const info = await collegeinfomodel.findOne({});
        return res.json({
            success: true,
            message: "Fetched college info successfully",
            data: info
        });
    }
    catch(err){
        return res.json({
            success: false,
            message: "Error fetching college info",
            error: err.message,
        });
    }
};