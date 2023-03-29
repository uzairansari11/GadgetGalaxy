const express = require("express");
const {
	getProduct,
	getSingleProduct,
	addProduct,
	updateProduct,
	deleteProduct,
} = require("../controller/products.controller");
const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/add", addProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

module.exports = { productRouter };
