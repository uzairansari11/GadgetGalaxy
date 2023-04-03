const express = require("express");
const {
	adminRegister,
	adminLogin,
	adminData,
} = require("../controller/admin.controller");
const adminRouter = express.Router();

adminRouter.get("/", adminData);
adminRouter.post("/register", adminRegister);
adminRouter.post("/login", adminLogin);

module.exports = { adminRouter };
