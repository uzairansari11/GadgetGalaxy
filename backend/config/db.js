const mongoose = require("mongoose");
require("dotenv").config();

/<---------import  end ------------->/;

// <--------- connection start-------------> //
const connection = async () => {
	try {
		await mongoose.connect(process.env.mongoUrl);
		console.log(`Connected to DB`);
	} catch (error) {
		console.log(`Can't Connected to DB`);
		console.log(`Error: ${error}`);
	}
};
/<---------connection end ------------->/;

module.exports = { connection };
