import express from "express";
import {postenquiry,getenquiry,getenquiryspecificbysubject,deleteenquirybysubject,deleteenquiryspecific,searchspecific,updatestatus} from "../controllers/enquiryController.js"
import {downloadenquiries} from "../controllers/enquirydownloadController.js"

const app=express()
app.use(express.json()); // this parses JSON body

const router=express.Router();

router.post("/post",postenquiry)
router.get("/",getenquiry)
router.get("/filter/:subject",getenquiryspecificbysubject)
router.delete("/delete/:subject",deleteenquirybysubject)
router.delete("/deletespecific/:id",deleteenquiryspecific)
router.get("/search",searchspecific)
router.put("/status/:id",updatestatus)

//download route 
router.get("/download",downloadenquiries)

export default router;