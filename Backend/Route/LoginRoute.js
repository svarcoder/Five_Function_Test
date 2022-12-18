/** @format */

const express = require("express");
const {
	addUser,
	userLogin,
	allUserView,
} = require("../Controller/Login/LoginController");
const authRoute = require("../Middlewire/UserMiddlewire");
const router = express.Router();
const { myValidations } = require("../Validator/Validator");

router.post("/api-user-singup", myValidations, addUser);
router.post("/api-user-login", userLogin);
router.get("/api-user-view", authRoute, allUserView);

module.exports = router;
