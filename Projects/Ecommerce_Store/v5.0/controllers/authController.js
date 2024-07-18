const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

async function registerUser(req, res) {
  try {
    let { email, fullName, password } = req.body;
    let user = await userModel.findOne({ email: email });
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
}

async function loginUser(req, res) {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email }); //check if user already exists by email
    if (!user) return res.status(400).send("Invalid email or password!");
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = generateToken(user); // if both correct then setting up cookie
        res.cookie("token", token);
        res.send("User logged in successfully!");
      } else {
        return res.status(401).send("Invalid email or password!");
      }
    });
  } catch (err) {
    res.send(err.message);
  }
}

async function logoutUser(req, res){
  res.cookie("token","");
  res.redirect("/");
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser
};
