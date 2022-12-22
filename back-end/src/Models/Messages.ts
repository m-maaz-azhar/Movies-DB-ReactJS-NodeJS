import { model, Schema } from "mongoose";
import IMessages from "../Interfaces/IMessages";

const messagesSchema = new Schema<IMessages>({
  name: String,
  email: String,
  phone: String,
  message: String,
});

export default model<IMessages>("messages", messagesSchema);
