const mongoose = require('mongoose');
// making the database
mongoose.connect('mongodb://127.0.0.1:27017/new_practice');
// making the schema :------------- bare bone structure of the types of data to be stored in the documents.
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    username:String
});
//making the model
module.exports = mongoose.model('user',userSchema); 