import Admin from "../../modal/adminSchema.js";
import { adminSchema } from "../../validators/adminvalidators.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createAdmin = async (req, res) => {
  const {email, password } = req.body;

  try {
    const userexists = await Admin.findOne({ email });
    if (userexists) {
      return res.status(409).send({
        status: 409,
        message: "Admin already exists",
      });
    }

    await adminSchema.validateAsync(req.body);

    const password_in_Hash = await bcrypt.hash(password, 10);
    const createUser = await Admin.create({
      email,
      password: password_in_Hash,
    });

    const token = jwt.sign(
      {
        _id: createUser._id,
        email: createUser.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(201).send({
      status: 201,
      message: "Admin created successfully",
      token: token,
    });

  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
};