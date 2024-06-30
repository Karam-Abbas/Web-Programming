const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/AppDB");

let postSchema = mongoose.Schema({

});

module.exports = mongoose.model("post",postSchema)