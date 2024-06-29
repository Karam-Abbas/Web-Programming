const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("good");
});

app.get("/create",async (req, res) => {
  let user = await userModel.create({
    username: "Karam",
    email: "karamabbas03@gmail.com",
    age: 21,
  });
  res.send(user);
});

app.get("/post/create",async (req, res) => {
  let post  = await postModel({
    postData:"hello my name is karam abbas",
    user:"667fb3971747a623f9eb655f",
  });
  let user = await userModel.findOne({_id:"667fb3971747a623f9eb655f"});
  user.posts.push(post.id);
  await user.save();
  res.send({post,user});
});

app.listen(3000, (req, res) => {
  console.log("Everything going good so far!");
});
