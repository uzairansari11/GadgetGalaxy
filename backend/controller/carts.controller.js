const { CartModel } = require("../model/cart.model");

/<-------------------Create Product ----------------------->/;

const addCart = async (req, res) => {
	const payload = req.body;
	const { Image1, Title, Brand, Discount_price, Quantity, userID } = payload;

	try {
		if (Image1 && Title && Brand && Discount_price && Quantity && userID) {
			const newCart = req.body;
			console.log("getting from post notes body", newCart);
			const cartItem = new CartModel(newCart);
			const savedItem = await cartItem.save();
			res.status(200).send({ msg: "Item Added successfully", data: savedItem });
		} else {
			res.status(401).send({ msg: "Please Provide All The Fields" });
		}
	} catch (error) {
		res.status(400).send({ msg: error.message });
	}
};

/<-------------------Read Category Wise Product ----------------------->/;

const getCart = async (req, res) => {
	console.log("req body", req.body);
	const userID = req.body.userID;

	try {
		const allProduct = await CartModel.find({ userID });
		res.status(200).send(allProduct);
	} catch (error) {
		res.status(400).send({
			message: error.message,
		});
	}
};

/<-------------------Update Product ----------------------->/;
const updateCart = async (req, res) => {
	const id = req.params.id;
	const payload = req.body;
	const userID = req.body.userID;
	const isProductPresent = await CartModel.find({ _id: id, userID: userID });

	try {
		if (isProductPresent.length) {
			const finalQuantity = {
				Quantity: payload.Quantity + isProductPresent[0].Quantity,
			};
			await CartModel.findByIdAndUpdate(
				{ _id: id, userID: userID },
				finalQuantity
			);
			res.status(200).send({
				message: `Product has been updated`,
			});
		} else if (isProductPresent.length === 0) {
			const finalQuantity = {
				Quantity: payload.Quantity,
			};
			await CartModel.findByIdAndUpdate(
				{ _id: id, userID: userID },
				finalQuantity
			);
			res.status(200).send({
				message: `Product has been updated`,
			});
		} else {
			res.status(400).send({
				message: `Product does not exist`,
			});
		}
	} catch (error) {
		res.status(400).send({
			message: error.message,
		});
	}
};
/<-------------------Delete Product ----------------------->/;
const deleteCart = async (req, res) => {
	const id = req.params.id;
	const userID = req.body.userID;
	const isProductPresent = await CartModel.find({ _id: id, userID: userID });
	try {
		if (isProductPresent.length) {
			await CartModel.findByIdAndDelete({ _id: id, userID: userID });
			res.status(200).send({
				message: `Product has been deleted`,
			});
		} else {
			res.status(400).send({
				message: `Product With ID: ${id} does not exist`,
			});
		}
	} catch (error) {
		res.status(400).send({
			message: error.message,
		});
	}
};

module.exports = {
	addCart,
	getCart,
	updateCart,
	deleteCart,
};
