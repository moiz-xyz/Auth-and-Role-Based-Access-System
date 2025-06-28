import express from "express"
import user from "./user/user.js"
import admin from "./admin/admin.js"
import products from "./porducts/product.js";

const router = express.Router();
router.use("/auth/user", user) // user ka route ha 
router.use("/auth/admin", admin) // admin ka route ha
router.use("/product" , products) // admin ka route ha


export default router