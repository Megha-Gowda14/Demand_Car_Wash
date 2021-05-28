const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const AccountController = require("../controllers/accountController");

router.patch(
  "/update/:washId",
  [checkAuth.verifyToken],
  AccountController.updateProfile
);

router.delete(
  "/delete/:washId",
  [checkAuth.verifyToken],
  AccountController.deleteProfile
);

module.exports = router;
