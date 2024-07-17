const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: Buffer,
  name: String,
  description: String,
  price: Number,
  discount: { type: Number, default: 0 },
  bgColor: String,
  panelColor: String,
  textColor: String,
  stock: Number,
  category: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("product", productSchema);
