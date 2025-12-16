import express from "express";
import {postenquiry,getenquiry,getenquiryspecificbysubject,deleteenquirybysubject,deleteenquiryspecific} from "../controllers/enquiryController.js"

const app=express()
app.use(express.json()); // this parses JSON body

const router=express.Router();

router.post("/post",postenquiry)
router.get("/",getenquiry)
router.get("/:subject",getenquiryspecificbysubject)
router.delete("/delete/:subject",deleteenquirybysubject)
router.delete("/deletespecific/:id",deleteenquiryspecific)

export default router;