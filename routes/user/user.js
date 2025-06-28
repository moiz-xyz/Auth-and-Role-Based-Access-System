import express from "express"
import { CreateUser, loginUser } from "../../controler/index.js";

const router = express.Router();
router.post("/signup", CreateUser )
router.post("/login", loginUser )


export default router