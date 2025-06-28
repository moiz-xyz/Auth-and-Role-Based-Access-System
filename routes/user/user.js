import express from "express"
import { CreateUser, loginUser } from "../../controler/index.js";
import requireAdmin from "../../middleware/verifystatus.js";
import User from "../../modal/userSchema.js";

const router = express.Router();
router.post("/signup", CreateUser )
router.post("/login", loginUser )

// route to get all users
router.get("/all",  requireAdmin, async (req, res) => {
  const users = await User.find({}, "-password"); // hide password
  res.status(200).json(users);
});

export default router