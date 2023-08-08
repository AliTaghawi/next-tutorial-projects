import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "failed to connect DB!" });
  }

  const session = await getSession({ req });

  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not loged in!" });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User does not exist!" });
  }

  if (req.method === "POST") {
    const { title, status } = req.body;

    if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data!" });
    }

    try {
      user.todos.push({ title, status });
      user.save();
      return res
        .status(201)
        .json({ status: "successful", message: "todo created" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "failed", message: "Internal sever error!" });
    }
  }
}
