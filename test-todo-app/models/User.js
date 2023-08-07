import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  title: String,
  status: String,
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
  lastName: String,
  todos: {
    type: [todoSchema],
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;