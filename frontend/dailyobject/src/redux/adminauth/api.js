import axios from "axios";

// export const adminLoginApi = async (payload) => {
// 	try {
// 		const response = axios.post("http://localhost:8080/admin/login", payload);
// 	return(response);
// 	} catch (error) {
// 		return error
// 	}
// };

export const adminLoginApi = async (payload) => {
	try {
		let response = await axios.post(
			"http://localhost:8080/admin/login",
			payload
		);
		return response.data.token;
	} catch (e) {
		console.error("userLoginAPI error", e);
	}
};
