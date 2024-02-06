const express = require("express");
const controller = require("../controllers/authentication");
const router = express.Router();
router.get("/signup", controller.handleSignup);
router.get("/create");
module.exports = router;
