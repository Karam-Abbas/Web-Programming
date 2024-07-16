const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser =async function (req, res) {
  try {
    let { email, fullName, password } = req.body;
    let user =await  userModel.findOne({ email: email});
    if (user) return res.status(400).send("Email already exists!");
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) res.send(err.message);
        else {
          let user = await userModel.create({
            email,
            password: hash,
            fullName,
          });
          let token = generateToken(user);
          res.cookie("token", token);
          res.send("User created successfully!");
        }
      });
    });
  } catch (err) {
    res.send(err.message);
  }
};
