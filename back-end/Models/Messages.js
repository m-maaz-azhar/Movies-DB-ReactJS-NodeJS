let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var messagesSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model("messages", messagesSchema);
