const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const washerController = require("../controllers/washerController");

router.get(
  "/findAvailable",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  washerController.findAvailable
);

router.get(
  "/findAll",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  washerController.findAll
);

module.exports = router;
