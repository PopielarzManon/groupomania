const express = require("express");
const router = express.Router();


const passValidate = require('../middleware/pass');
const userCtrl = require("../controllers/userCtrl");

router.post("/signup", passValidate, userCtrl.signup);
router.post("/login", userCtrl.login);


module.exports = router;
