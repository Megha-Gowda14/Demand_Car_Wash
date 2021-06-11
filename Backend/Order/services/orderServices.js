const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const OrderController = require("../controllers/ordersController");

router.post("/addorder", 
//[checkAuth.verifyToken], 
OrderController.addorder);

router.get("/findorders", OrderController.findorders);

router.put(
    "/updateOrder/:orderId",
   // [checkAuth.verifyToken, checkAuth.isAdmin],
   OrderController.updateOrder
  );
  
module.exports = router;
