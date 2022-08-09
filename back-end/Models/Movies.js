let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var moviesSchema = new Schema({
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

module.exports = mongoose.model("movies", moviesSchema);
