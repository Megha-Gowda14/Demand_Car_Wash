//require mongoose module 
const mongoose = require("mongoose");

//washer schema
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { 
    type: String,
    required: true
   },
  mobile: { 
    type: String 
  },
  role: {
    type: String,
    default: "WASHER",
  },
  status: { 
    type: String,
     default: "AVAILABLE"
     }
});

//export model
module.exports = mongoose.model("member", userSchema);
