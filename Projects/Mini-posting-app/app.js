const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const path = require("path");
const userModel = require("./models/user");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  let { email, username, name, age, password } = req.body;
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(500).send("Email already registered!");
  }

  bcrypt.hash(password, 10, async (err, hash) => {
    let user = await userModel.create({
      email,
      username,
      name,
      age,
      password: hash,
    });
    let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
    res.cookie("token", token);
    res.send("registered!");
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    return res.status(500).send("Wrong email/password");
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
      res.cookie("token", token);
      res.status(200).send("Logged in Successfully");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/profile", isLoggedIn,(req, res) => {
  console.log(req.user)
  res.send('You can log in now!');
});


function isLoggedIn (req,res,next)
{
    if(req.cookies.token === "")
    {
      res.send("You need to login first!")
    }
    else
    {
      let data = jwt.verify(req.cookies.token,"shhhh");
      req.user = data;
      next();
    }
}


app.listen(3000);
