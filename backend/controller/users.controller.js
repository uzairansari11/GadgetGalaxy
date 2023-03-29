const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { UserModel } = require("../model/user.model");

/<-------------------Register User ----------------------->/;

const userRegister = async (req, res) => {
	const payload = req.body;
	const { name, email, password, gender, age, mobile_no } = payload;
	const isUserPresent = await UserModel.find({ email: email });
	if (isUserPresent.length) {
		return res.send({ message: "User AlreadyExists" });
	}
	try {
		if (name && email && password && gender && age && mobile_no) {
			const hashedPassword = bcrypt.hashSync(password, 6);

			const newUser = new UserModel({ ...payload, password: hashedPassword });

			await newUser.save();

			res.status(200).send({ message: "User Has Been Created " });
		} else {
			res
				.status(400)
				.send({ message: " Please Try Again Provide All Details" });
		}
	} catch (error) {
		res.status(400).send({
			message: `Please Try Again Something Went Wrong!\n , ${error.message}`,
		});
	}
};

/<-------------------Login User ----------------------->/;

const userLogin = async (req, res) => {
	const payload = req.body;
	const { email, password } = payload;
	try {
		const isUserPresent = await UserModel.find({ email: email });
		if (isUserPresent.length) {
			const isAuthorized = await bcrypt.compare(
				password,
				isUserPresent[0].password
			);
			if (isAuthorized) {
				const token = await jwt.sign(
					{ userID: isUserPresent[0]._id },
					process.env.secretKey
				);
				res.status(200).send({ message: "Login Successful", token: token });
			} else {
				res.status(400).send({ message: "Wrong Credentials!" });
			}
		}
	} catch (error) {
		res.status(400).send({
			message: `Please Try Again Something Went Wrong! \n ${error.message}`,
		});
	}
};

module.exports = { userRegister, userLogin };
