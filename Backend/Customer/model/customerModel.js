//import mongoose module
const mongoose = require("mongoose");

//customer schema
const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        min: 5,
        max: 15
    },
    email:{
        type:String,
        unique : true,
        required:true,
        match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default : "CUSTOMER",
    }
});

//export the schema
module.exports = mongoose.model("customer",customerSchema);

