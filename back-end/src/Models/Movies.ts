import { Schema, model } from "mongoose";
import IMovies from "../Interfaces/IMovies";

const moviesSchema = new Schema<IMovies>({
  title: String,
  initial_release: String,
  director: String,
  producer: String,
  genre: String,
  trailer: String,
  storyline: String,
  upcoming: String,
  cast: String,
  rating: Number,
  poster: String,
});

export default model<IMovies>("movies", moviesSchema);
