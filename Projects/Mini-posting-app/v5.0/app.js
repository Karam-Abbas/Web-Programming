const express = require("express");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
// const multer = require ("multer");
const crypto = require("crypto");

const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/uploads')
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12,(err,bytes)=>{
//       const fn = bytes.toString("hex") + path.extname(file.originalname );
//       cb(null, fn)
//     });
//   }
// })

// const upload = multer({ storage: storage })

// app.get("/test",(req,res)=>{
//   res.render("test");
// });

// app.post("/upload",upload.single("name"),(req,res)=>{
//   console.log(req.body);
//   console.log(req.file);
//   res.redirect("/test")
// });

app.get("/", async(req, res) => {
    res.render("index");
});

app.get("/posts", async (req, res) => {
  let posts = await postModel.find({}).populate("user");
  res.render("feed", { posts });
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
    res.redirect("profile");
  });
});

app.get("/login", (req, res) => {
  res.render("login");
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
      res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

//Protected Route
app.get("/profile", isLoggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }
  await post.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  res.render("edit", { post });
});

app.post("/edit/:id", isLoggedIn, async (req, res) => {
  await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content }
  );
  res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;
  if (content === "") {
    res.redirect("/profile");
  }
  let post = await postModel.create({
    user: user._id,
    content,
  });
  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.redirect("/login");
  } else {
    let data = jwt.verify(req.cookies.token, "shhhh");
    req.user = data;
    next();
  }
}

app.listen(3000);
