import express from "express"
import { CreateUser } from "../../controller/index.js";

const router = express.Router();
router.post("/signup", CreateUser)


export default router