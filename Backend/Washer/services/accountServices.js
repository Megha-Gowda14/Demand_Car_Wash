const express = require("express");
const router = express.Router();
//const checkAuth = require("../middlewares/check-auth");
const AccountController = require("../controllers/accountController");


/**
 * @swagger
 * /washer/account/updateProfile/:washId:
 *   put:
 *     summary: update the profile
 *     description: update washer details
 *     requestBody: 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               id: 
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password: 
 *                 type: number
 *               role:
 *                 type: String 
 *     responses:
 *       "200":
 *         description: profile updated Successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string
 * 
 */
router.put(
  "/update/:washId",
  //[checkAuth.verifyToken],
  AccountController.updateProfile
);


/**
 * @swagger
 * /washer/account/deleteAccount/:washId:
 *   delete:
 *     summary: delete the washer profile
 *     description: delete the washer profile
 *     requestBody: 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               id: 
 *                 type: string
 *     responses:
 *       "200":
 *         description: Profile deleted Successfully
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type:string 
 *  
 */
router.delete(
  "/delete/:washId",
  //[checkAuth.verifyToken],
  AccountController.deleteProfile
);

module.exports = router;
