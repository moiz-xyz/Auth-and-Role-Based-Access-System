import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Admin from "../../modal/adminSchema.js"

export const loginAdmin = async (req, res) => {

  const { email , password } = req.body

  try {
if (!(email && password) ) {
  return res.status(409).send({ status: 409, message: "Email or Password Required" })
}

const existeduser = await Admin.findOne( {email})
if (!existeduser) {
  return res.status(404).send({ status: 404, message: "Admin not found!" });
}


const compare_Password= await bcrypt.compare(password , existeduser.password)
   if (!compare_Password) {
       return res.status(401).send({ status: 401 , message: "Incorrect Password!", })
        }
        
   const token = jwt.sign({ _id: existeduser._id, email: existeduser.email , role : "admin"}, process.env.SECRET_KEY, { expiresIn: "1h" })
       delete existeduser.password
        return res.status(200).send({ status: 200, message: "Admin logged in  Successfully!", data: existeduser, token: token })
    } 
    catch (error) {
        return res.status(500).send({ status: 500, message: error.message })

    }
}