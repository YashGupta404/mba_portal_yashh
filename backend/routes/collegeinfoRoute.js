import express from "express";
import {updateinfo} from "../controllers/collegeinfoController.js"
const app=express();
app.use(express.json()); // this parses JSON body

const router=express.Router();

router.put("/",updateinfo);


export default router;