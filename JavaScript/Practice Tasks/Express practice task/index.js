// setting up parse for the form
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/",function(req,res){
    res.render("index");
});

app.get("/profile/:username/:age",function(req,res){
    res.send(`Welcome ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});