import connectDB from "@/utils/connectDB";
import { customerValidationSchema } from "@/utils/validation";

export default async function handler(req, res)  {
  try {
    await connectDB()
  } catch (error) {
    console.log(error)
    return res.status(500)
  }

  if (req.method === "POST") {
    const data = req.body

    try {
     await customerValidationSchema.validateAsync(data)
    } catch (error) {
      console.log(error)
      return res.status(422).json(error.details[0].message)
    }

    res.json("validation passed")
  }
  
}