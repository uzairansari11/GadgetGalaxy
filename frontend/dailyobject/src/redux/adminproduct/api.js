import axios from "axios";

export const getProductFromApi = async () => {
	try {
		let response = await axios.get(`http://localhost:8080/products`);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const getSingleProductFromApi = async (id) => {
	try {
		let response = await axios.get(`http://localhost:8080/products/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const postDataToApi = async (payload) => {
	try {
		let response = await axios.post(
			`http://localhost:8080/products/add`,
			payload
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const deleteDataFromApi = async (id) => {
	try {
		let response = await axios.delete(
			`http://localhost:8080/products/delete/${id}`
		);
		return response;
	} catch (error) {
		console.log(error);
	}
};
