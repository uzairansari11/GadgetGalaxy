const express = require("express");
const {
	getProduct,
	getSingleProduct,
	addProduct,
	updateProduct,
	deleteProduct,
	getSearched,
	
} = require("../controller/products.controller");
const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/add", addProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.get("/search/result",getSearched)


module.exports = { productRouter };
