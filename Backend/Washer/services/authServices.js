const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const UsersController = require("../controllers/authController");

/*
//For handling Get Requests
router.get("/allAccess", (req, res) => {
  res.status(200).send("Public Content.");
});

router.get(
  "/customerAccess",
  [checkAuth.verifyToken, checkAuth.isCustomer],
  (req, res) => {
    res.status(200).send("Customer Content.");
  }
);  
*/

/**
 * @swagger
 * /washer/auth/signup:
 *   post:
 *     summary: washer Signup
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: name
 *                 email:
 *                   type: string
 *                   description: email
 *                   example: test@test.com
 *                 password:
 *                   type: string
 *                   description: password
 *                 mobile:
 *                   type: string
 *                   description: number
 *                 role:
 *                   type: string
 *                 status:
 *                   type: string
 *     responses:
 *       "200":
 *         description: Registration Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *                 usedId:
 *                   type:string
 *                 name:  
 *                   type:string
 *                 email:
 *                   type:string
 *                 role:  
 *                   type:string
 *                 token:
 *                   type:string
 */

//signup/login
router.post("/signup", UsersController.signup);

/**
 * @swagger
 * /washer/auth/login:
 *   post:
 *     summary: washer Login
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: email
 *                   example: test@test.com
 *                 password:
 *                   type: string
 *                   description: password
 *     responses:
 *       "200":
 *         description: Authentication Successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *                 usedId:
 *                   type:string
 *                 name:  
 *                   type:string
 *                 email:
 *                   type:string
 *                 role:  
 *                   type:string
 *                 token:
 *                   type:string
 */

router.post("/login", UsersController.login);

module.exports = router;
