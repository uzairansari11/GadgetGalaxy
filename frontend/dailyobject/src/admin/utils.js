import axios from "axios";

export const deleteProduct = async (id) => {
	try {
		await axios.delete(`https://gadgetgalaxy.cyclic.app/products/delete/${id}`);
		console.log("delete");
	} catch (error) {
		console.log(error);
	}
};

export const AdminRegister = async (payload) => {
	try {
		const response = await axios.post(
			`https://gadgetgalaxy.cyclic.app/admin/register`,
			payload
		);
		console.log(response);
		return response;
	} catch (error) {
		return error;
	}
};

export const setToken = (token) => {
	return token;
};

export const getDataFromAPi = async (url) => {
	try {
		const res = await axios.get(url);
		return res.data;
	} catch (error) {
		return error;
	}
};
