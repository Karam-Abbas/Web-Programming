const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hey this is working!");
});

// Create in the  database
app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "Abbas",
    email: "nice@gmail.com",
    username: "unknown",
  });
  res.send(user);
});

//Read from the database

app.get("/read", async (req, res) => {
  //For reading a specific object in the database
  //let user = await userModel.findOne({ username: "unknown" })
  //For reading all the objects in the database
  let user = await userModel.find();
  res.send(user);
});

//Update in the database
app.get("/update", async (req, res) => {
  let user = await userModel.findOneAndUpdate(
    { name: "Karam Abbas" },
    { username: "DK007", email: "nala@14xyz.com" },
    { new: true }
  );
  res.send(user);
});

//Delete in the database
app.get("/delete", async (req, res) => {
  let user = await userModel.findOneAndDelete({ username: "unknown" });
  res.send(`${user.name} ,sorry to see you go!`);
});

app.listen(3000, () => {
  console.log("App is up and running!");
});
