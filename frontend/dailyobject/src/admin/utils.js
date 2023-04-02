import axios from "axios";

export const deleteProduct = async (id) => {
	try {
		await axios.delete(`http://localhost:8080/products/delete/${id}`);
		console.log("delete");
	} catch (error) {
		console.log(error);
	}
};

export const AdminRegister = async (payload) => {
	try {
		const response = await axios.post(
			`http://localhost:8080/admin/register`,
			payload
		);
		console.log(response);
		return response;
	} catch (error) {
		return error;
	}
};

export const  setToken = (token) => {
	return token
}