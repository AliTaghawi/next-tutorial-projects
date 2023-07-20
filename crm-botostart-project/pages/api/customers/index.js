import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res)  {
  try {
    await connectDB();
  } catch (err) {
    console.log(err)
    return res.status(500).json({status: "failed", message: "failed to connect DB"})
  }

  if (req.method === "GET") {
    try {
      const customers = await Customer.find();
      res.status(200).json({status: "successful", data: customers})
    } catch (err) {
      console.log(err)
      res.status(500).json({status: "failed", message: "Internal server error"})
    }
  }
}