const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  picture: String,
  ntnNo: Number,
});

module.exports = mongoose.model("owner", ownerSchema);
