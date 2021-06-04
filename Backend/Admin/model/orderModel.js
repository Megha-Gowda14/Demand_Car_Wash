//require module
const mongoose = require("mongoose");

//order schema
const orderSchema = mongoose.Schema({
  customerId: { type: String },
  customerName: {type: String },            
  carName: { type: String},        
  carNumber: { type: String },        
  custAddress: { type: String,
                  max: 40 
               },          
  serviceName: { type: String},         
  servicePrice: { type: Number},          
  washerId: { type: String },     
  requestedOn: { 
                 type: Date,
                 default: Date.now() 
              },
  deliveredOn: { type: Date},             
  status: {type: String },       
});

//export model
module.exports = mongoose.model("order", orderSchema);
