const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
	Image1: String,
	Image2: String,
	Title: { type: String, require: true },
	Category: { type: String, require: true },
	Brand: { type: String, require: true },
	Discount_price: Number,
	Original_price: { type: Number, require: true },
	Product_details: String,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
