import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "failed", message: "failed to connect DB!" });
  }

  const {email, password} = req.body

  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid Data!" });
  }

  const existedUser = await User.findOne({email})
  if (existedUser) {
    return res.status(422).json({ status: "failed", message: "User is already existed!" });
  }

  try {
    const hashedPassword = await hashPassword(password)
    const user = await User.create({email, password: hashedPassword})
    console.log(user)
    res.status(201).json({ status: "successful", message: "User created successfuly", data: {email} });
  } catch(err) {
    res.status(500).json({ status: "failed", message: "Internal server error!" });
  }


}
