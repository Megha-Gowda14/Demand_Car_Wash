const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const WasherController = require("../controllers/washerController");

router.get(
  "/findAvailable",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  WasherController.findAvailable
);

router.get(
  "/findAll",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  WasherController.findAll
);

module.exports = router;
