import { Schema, model } from "mongoose";
import IUser from "../Interfaces/IUser";

const userSchema = new Schema<IUser>({
  username: String,
  password: String,
  email: String,
  profile: "",
  firstName: String,
  lastName: String,
});

export default model<IUser>("users", userSchema);
