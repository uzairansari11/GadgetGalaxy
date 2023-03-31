const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
	Image1: String,
	Title: { type: String, require: true },
	Brand: { type: String, require: true },
	Discount_price: Number,
	Quantity: Number,
	userID: String,
	
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
