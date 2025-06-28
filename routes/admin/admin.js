import express from "express"
import { createAdmin, loginAdmin } from "../../controler/index.js";

const router = express.Router();
router.post("/register", createAdmin)
router.post("/login", loginAdmin)



export default router