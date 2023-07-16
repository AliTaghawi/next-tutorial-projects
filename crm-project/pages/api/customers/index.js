import Customer from "@/model/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "failed to connect DB" });
    return;
  }


  if ((req.method = "POST")) {
    const { name, lastName, email } = req.body.data;

    if (!name || !lastName || !email || email.length < 5)
      return res
        .status(400)
        .json({ status: "failed", message: "Invalied data" });
    
    try {
      const customer = await Customer.create(req.body.data)
      res.status(201).json({status: "successful", message: "customer created successfuly", data: customer})
    } catch (err) {
      console.log(err);
      res.status(500).json({status: "failed", message: "failed to create customer"})
    }
  }
}
