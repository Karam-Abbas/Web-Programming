const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGODB_URI")}/Store`)
  .then(() => {
    dbgr("Connected to MongoDB");
  })
  .catch((err) => {
    dbgr("Error connecting to MongoDB", err);
  });

module.exports = mongoose.connection;
