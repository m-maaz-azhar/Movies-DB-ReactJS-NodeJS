let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var commentsSchema = new Schema({
  username: String,
  movieId: String,
  comment: String,
});

module.exports = mongoose.model("comments", commentsSchema);
