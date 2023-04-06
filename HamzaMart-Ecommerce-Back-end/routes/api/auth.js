const express = require("express");
const registrationControllers = require("../../controllers/reg");
const router = express.Router();

router.post("/reg", registrationControllers )


module.exports = router;
