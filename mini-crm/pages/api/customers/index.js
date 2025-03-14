import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { customerValidationSchema } from "@/utils/validation";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      await customerValidationSchema.validateAsync(data);
    } catch (error) {
      console.log(error);
      return res
        .status(422)
        .json({ status: "failed", error: error.details[0].message });
    }

    try {
      const customer = await Customer.create(data);
      res.status(201).json({
        status: "success",
        message: "customer created successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
