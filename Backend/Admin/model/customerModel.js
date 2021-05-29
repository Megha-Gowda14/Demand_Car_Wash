//require mongoose module
const mongoose = require("mongoose");

//customer schema
const customerSchema = mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    min: 4,
    max: 20,
  },
  email: {
    type: String,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { 
    type: String 
  },
  role: {
    type: String,
    default: "CUSTOMER",
  },
});

//export module
module.exports = mongoose.model("customer", customerSchema);
