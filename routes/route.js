import express from "express"
import user from "./user/user.js"

const router = express.Router();
router.use("/auth", user)

export default router