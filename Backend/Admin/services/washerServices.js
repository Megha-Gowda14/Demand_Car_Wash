const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const washerController = require("../controllers/washerController");

//Get all the avaliable washers
router.get(
  "/findAvailable",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  washerController.findAvailable
);

//get all the washers list
router.get(
  "/findAll",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  washerController.findAll
);

module.exports = router;
