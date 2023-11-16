import { Schema, model } from "mongoose";

interface User {
  id: number;
  email: string;
  password: string;
  username: string;
}

const userSchema = new Schema<User>({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const User = model<User>("User", userSchema);

export default User;
