const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const CarController = require("../controllers/carController");

//Add Car
router.post(
  "/addCar",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  CarController.addCar
);

//Get list of all the cars
router.get("/findAll", CarController.findAllCars);

//Update Car Details
router.put(
  "/updateCar/:id",
 // [checkAuth.verifyToken, checkAuth.isAdmin],
  CarController.updateCar
);

//delete a particular car
router.delete(
  "/deleteCar/:carId",
 // [checkAuth.verifyToken, checkAuth.isAdmin],
  CarController.deleteCar
);

module.exports = router;
