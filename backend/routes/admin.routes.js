const express = require("express");
const { adminRegister, adminLogin } = require("../controller/admin.controller");
const adminRouter = express.Router();

adminRouter.post("/register", adminRegister);
adminRouter.post("/login", adminLogin);

module.exports = { adminRouter };
