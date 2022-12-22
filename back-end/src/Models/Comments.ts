import { model, Schema } from "mongoose";
import IComments from "../Interfaces/IComments";

const commentsSchema = new Schema<IComments>({
  username: String,
  movieId: String,
  comment: String,
});

export default model<IComments>("comments", commentsSchema);
