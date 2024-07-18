const express = require("express");
const router = express.Router();
const ownerModel = require("../models/ownerModel");

console.log("Mode of NODE_ENV:",process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(400).send("Owner already exists.");
    }

    let {fullName, email,password} = req.body;
    let createdOwner= await ownerModel.create({
      fullName,
      email,
      password
    });
    res.status(201).send(createdOwner);
  });
}

router.get("/", function (req, res) {
  res.send("/owners/.....");
});

router.get("/admin", function (req, res) {
  let success = req.flash("success");
  res.render("createproducts",{success});
});


module.exports = router;
