import { Schema, model, models } from "mongoose";

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
      minLength: 7,
    },
    phone: String,
    address: String,
    postalCode: Number,
    date: Date,
    products: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
