const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
	name: { type: String, require: true },
	email: { type: String, require: true },
	password: { type: String, require: true },
	mobile_no: { type: Number, require: true },
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
