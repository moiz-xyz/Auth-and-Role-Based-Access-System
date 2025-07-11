import transporter from "../../Helpers/emailconfig.js";
import User from "../../modal/userSchema.js";
import { signupSchema } from "../../validators/uservalidors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const CreateUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userexists = await User.findOne({ email });
    if (userexists) {
      return res.status(409).send({
        status: 409,
        message: "User already exists",
      });
    }

    await signupSchema.validateAsync(req.body);

    const password_in_Hash = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      username,
      email,
      password: password_in_Hash,
    });


    const token = jwt.sign(
      {
        _id: createUser._id,
        email: createUser.email,
        role : "user"
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    transporter.sendMail({
      to: createUser.email,
      from: process.env.EMAIL_USER,
      subject: "🎉 Welcome! You're In!",
      text: `Hi ${createUser.username},

Welcome!

We're thrilled to have you on board. Your account has been successfully created and you're now part of a growing community that values quality, trust, and innovation.

If you ever need help, just reply — we're here for you!

Best regards,`,
    });

    return res.status(201).send({
      status: 201,
      message: "User created successfully",
      token: token,
    });

  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: error.message || "Internal server error",
    });
  }
};