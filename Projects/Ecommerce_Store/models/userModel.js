const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Store");
const userSchema = mongoose.createSchema({
    fullName: String,
    email: String,
    password: String,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    isAdmin: Boolean,
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    contact: Number,
    picture: String
});

 module.exports = mongoose.createModel("user",userSchema);

