import express from "express"
import { createAdmin } from "../../controler/index.js";

const router = express.Router();
router.post("/login", createAdmin)



export default router