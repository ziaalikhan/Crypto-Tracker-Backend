const express = require("express");
const router = express.Router();
const { Register } = require("../Controllers/Register");
const { Login } = require("../Controllers/Login");


router.post("/register", Register);
router.post("/login", Login);


module.exports = router;
