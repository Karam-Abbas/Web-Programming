const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/AppDB");

let userSchema = mongoose.Schema({
username:String,
name:String,
age:Number,
email:String,
password:String,
posts:[]
});

module.exports = mongoose.model("user",userSchema)