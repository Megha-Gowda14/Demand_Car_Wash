const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const OrderController = require("../controllers/orderController");

//Get all the placed orders
router.get(
  "/findPlacedOrder",
 // [checkAuth.verifyToken, checkAuth.isAdmin],
  OrderController.findPlacedOrders
);

//update a particular order
router.put(
  "/updateOrder/:orderId",
 // [checkAuth.verifyToken, checkAuth.isAdmin],
  OrderController.updateOrder
);

module.exports = router;
