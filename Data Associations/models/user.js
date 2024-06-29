const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDB");

let userSchema = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  posts: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model("user", userSchema);
