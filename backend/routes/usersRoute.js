const express = require("express");
const { registerUserCtrl } = require("../controller/userCtrl");

const userRoute = express.Router();

userRoute.post("/register", registerUserCtrl);

module.exports = userRoute;
