let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  profile: "",
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model("users", userSchema);
