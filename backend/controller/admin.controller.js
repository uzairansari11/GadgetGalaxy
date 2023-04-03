const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { AdminModel } = require("../model/admin.model");

// <-------------------Register Admin ----------------------->/

const adminRegister = async (req, res) => {
	const payload = req.body;
	const { name, email, password, mobile_no } = payload;
	const isAdminPresent = await AdminModel.find({ email: email });
	if (isAdminPresent.length) {
		return res.status(200).send({ message: "Admin AlreadyExists", data: [] });
	}
	try {
		if (name && email && password && mobile_no) {
			const hashedPassword = bcrypt.hashSync(password, 6);

			const newAdmin = new AdminModel({ ...payload, password: hashedPassword });

			await newAdmin.save();

			res
				.status(200)
				.send({ message: "Admin Has Been Created ", data: newAdmin });
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

/<-------------------Login Admin ----------------------->/;

const adminLogin = async (req, res) => {
	const payload = req.body;
	const { email, password } = payload;
	try {
		const isAdminPresent = await AdminModel.find({ email: email });
		if (isAdminPresent.length) {
			const isAuthorized = await bcrypt.compare(
				password,
				isAdminPresent[0].password
			);
			if (isAuthorized) {
				const token = await jwt.sign(
					{ adminID: isAdminPresent[0]._id },
					process.env.adminSecretKey
				);
				res.status(200).send({ message: "Login Successful", token: token });
			} else {
				res.status(201).send({ message: "Wrong Credentials!", data: [] });
			}
		} else {
			res.status(201).send({ message: "Wrong Credentials!", data: [] });
		}
	} catch (error) {
		res.status(400).send({
			message: `Please Try Again Something Went Wrong! \n ${error.message}`,
		});
	}
};

const adminData = async (req, res) => {
	try {
		const allAdmin = await AdminModel.find();
		res.send({ message: `All Admin Data`, data: allAdmin });
	} catch (error) {
		res.status(400).send({
			message: `Please Try Again Something Went Wrong!\n , ${error.message}`,
		});
	}
};

module.exports = { adminRegister, adminLogin, adminData };
