const express = require("express");
const { userRegister, userLogin, userData } = require("../controller/users.controller");
const userRouter = express.Router();

userRouter.get("/", userData);
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

module.exports = { userRouter };
