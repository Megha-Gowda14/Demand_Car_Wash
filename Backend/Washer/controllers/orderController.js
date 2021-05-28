const OrderModel = require("../model/orderModel");
const MemberModel = require("../model/washerModel");

//Find IN-PROCESS Orders
exports.findInProcessOrders = (req, res) => {
  OrderModel.find({
    $or: [
      { washer_Id: req.params.washerId, status: "IN-PROCESS" },
      { washer_Id: req.params.washerId, status: "ACCEPTED" },
    ],
  })
    .exec()
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({
          message: "No Orders are available",
        });
      } else {
        res.status(200).json({
          orders: response,
        });
      }
    })
    .catch((err) => {
      console.log("Find All Placed Orders Error: " + err);
      res.status(500).json({
        error: err,
      });
    });
};

//Update Status of Order
exports.updateOrder = (req, res) => {
  OrderModel.updateOne(
    { _id: req.params.orderId },
    { $set: { status: req.body.status } }
  )
    .exec()
    .then((response) => {
      OrderModel.findOne({ _id: req.params.orderId })
        .exec()
        .then((obj) => {
          //console.log(obj);
          const washerId = obj.Washer_Id;
          console.log("Washer Id: " + washerId);
          if (req.body.status === "ACCEPTED") {
            WasherModel.updateOne(
              { _id: obj.washer_Id },
              {
                $set: { status: "NOT AVAILABLE" },
              }
            )
              .then((response) => {
                console.log("Member Status: NOT AVAILABLE");
              })
              .catch((err) => {
                console.log("Member Status Error: " + err);
              });
          } else {
            WasherModel.updateOne(
              { _id: obj.washer_Id },
              {
                $set: { status: "AVAILABLE" },
              }
            )
              .then((response) => {
                console.log("Member Status: AVAILABLE");
              })
              .catch((err) => {
                console.log("Member Status Error: " + err);
              });
          }
        })
        .catch((err) => {
          console.log("Find Order Error: " + err);
        });
      console.log("Order Updated Successfully");
      res.status(200).json({
        message: "Request Updated Successfully",
      });
    })
    .catch((err) => {
      console.log("Order Update error: " + err);
      res.status(500).json({ "Order Update error ": err });
    });
};

//Find My Orders
exports.findMyOrders = (req, res) => {
  OrderModel.find({ washer_Id: req.params.washerId })
    .exec()
    .then((response) => {
      if (response.length == 0) {
        res.status(200).json({
          message: "No Orders are available",
        });
      } else {
        res.status(200).json({ orders: response });
      }
    })
    .catch((err) => {
      console.log("Find All Orders Error: " + err);
      res.status(500).json({
        error: err,
      });
    });
};
