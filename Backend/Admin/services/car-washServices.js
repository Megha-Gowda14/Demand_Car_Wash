const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/check-auth");
const ServiceController = require("../controllers/serviceController");


/**
 * @swagger
 * /admin/car-services/addService
 *   post:
 *     summary: Add Services
 *     requestBody: 
 *     content: 
 *       application/json:
 *         schema:
 *           type: object
 *           properties:  
 * 
 */
router.post("/addService",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  ServiceController.addService
);

router.get('/findAll', ServiceController.findAll);

//router.get('/findById/:serviceId', ServiceController.findByServiceId);

router.patch(
  "/updateService/:serviceId",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  ServiceController.updateService
);

router.delete(
  "/deleteService/:serviceId",
  [checkAuth.verifyToken, checkAuth.isAdmin],
  ServiceController.deleteService
);
module.exports = router;
