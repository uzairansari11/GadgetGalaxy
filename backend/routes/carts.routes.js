const express = require("express");
const {
	getCart,
	addCart,
	updateCart,
	deleteCart,
} = require("../controller/carts.controller");

const cartRoute = express.Router();

cartRoute.get("/", getCart);
cartRoute.post("/add", addCart);
cartRoute.patch("/update/:id", updateCart);
cartRoute.delete("/delete/:id", deleteCart);

module.exports = { cartRoute };
