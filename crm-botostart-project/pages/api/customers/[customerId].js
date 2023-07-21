import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "failed to connect DB" });
  }

  const id = req.query.customerId;

  if (req.method === "GET") {
    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: "successful", data: customer });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  } else if (req.method === "PATCH") {
    const data = req.body;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.products = data.products;
      customer.date = data.date;
      customer.updatedAt = Date.now();
      await customer.save();
      res
        .status(200)
        .json({
          status: "successful",
          message: "Customer updated successfuly",
          data: customer,
        });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Internal server error" });
    }
  }
}
