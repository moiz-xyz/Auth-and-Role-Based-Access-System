import express from "express"
import { CreateUser } from "../../controler/index.js";

const router = express.Router();
router.post("/signup", CreateUser )


export default router