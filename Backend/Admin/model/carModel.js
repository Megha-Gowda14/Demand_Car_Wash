//Require mongoose
const mongoose = require("mongoose");

//Car Schema
const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }
});

//export module
module.exports = mongoose.model("car", carSchema);
