import express from "express";
import {postenquiry,getenquiry,getenquiryspecificbysubject} from "../controllers/enquiryController.js"

const app=express()
app.use(express.json()); // this parses JSON body

const router=express.Router();

router.post("/post",postenquiry)
router.get("/get",getenquiry)
router.get("/:subject",getenquiryspecificbysubject)

export default router;