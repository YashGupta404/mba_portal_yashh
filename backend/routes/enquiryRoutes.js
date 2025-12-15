import express from "express";
import {postenquiry} from "../controllers/enquiryController.js"

const app=express()
app.use(express.json()); // this parses JSON body

const router=express.Router();

router.post("/post",postenquiry)

export default router;