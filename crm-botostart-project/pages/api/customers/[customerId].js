import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res)  {
  try {
    await connectDB();
  } catch (err) {
    console.log(err)
    return res.status(500).json({status: "failed", message: "failed to connect DB"})
  }

  const id = req.query.customerId

  if (req.method === "GET") {
    try {
      const customer = await Customer.findOne({_id: id})
      res.status(200).json({status: "successful", data: customer})
    } catch (err) {
      console.log(err);
      res.status(500).json({status: "failed", message: "Internal server error"})
    }
  }
}