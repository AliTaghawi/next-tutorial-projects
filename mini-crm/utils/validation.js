import Joi from "joi";

const customerValidationSchema = Joi.object({
  name: Joi.string().required().min(2),
  lastName: Joi.string().required().min(5),
  email: Joi.string().email().required(),
  phone: Joi.string().regex(/^(\+98|0)?9\d{9}$/),
  address: Joi.string(),
  postalCode: Joi.number().min(1000000000).max(9999999999),
  date: Joi.date(),
})

export {customerValidationSchema}