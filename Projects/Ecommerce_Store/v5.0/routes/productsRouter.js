const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/productModel");
router.get("/", function (req, res) {
  res.send("/products/.....");
});

router.post("/create", upload.single("image"), async function (req, res) {
  try {
    let { name, description, price, discount, bgColor, panelColor, textColor } =
      req.body;
    let product = await productModel.create({
      image: req.file.buffer,
      name,
      description,
      price,
      discount,
      bgColor,
      panelColor,
      textColor,
    });
    req.flash("success","product created successfully!");
    res.redirect('/owners/admin');
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
