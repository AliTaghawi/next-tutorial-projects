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
  } else if (req.method === "POST") {
    const data = req.body

    if (!data.name || !data.lastName || !data.email || data.email.length < 7 ) {
      return res.status(400).json({status: "failed", message: "Invalid data"})
    }

    try {
      const customer = await Customer.create(data);
      res.status(200).json({status: "successful", message: "customer created successfuly", data: customer})
    } catch (err) {
      console.log(err);
      res.status(500).json({status: "failed", message: "Internal server error"})
    }
  }
}