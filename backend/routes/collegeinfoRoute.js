import express from "express";
import {updateinfo,getinfo} from "../controllers/collegeinfoController.js"
const app=express();
app.use(express.json()); // this parses JSON body

const router=express.Router();

router.put("/",updateinfo);
router.get("/getinfo",getinfo);


export default router;