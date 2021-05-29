//require modules
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

//login
router.post('/login', AuthController.login);

//signup
router.post('/signup', AuthController.signup);

//export module
module.exports = router;
