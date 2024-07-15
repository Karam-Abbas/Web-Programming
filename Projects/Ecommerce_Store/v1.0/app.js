const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

// Middleware to parse JSON request bodies 
app.use(express.json());
app.use(express.urlencoded({encoded: true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.set("view engine", "ejs");
// Route to handle GET requests at /api/products

app.get("/", (req, res) => {
  res.send("Everything going great!");
});

app.listen(3000);