//Require mongoose
const mongoose = require("mongoose");

//Car Schema
const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

//export module
module.exports = mongoose.model("car", carSchema);
