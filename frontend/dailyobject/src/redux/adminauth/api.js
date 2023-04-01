import axios from "axios";

export const adminRegistration = async (payload) => {
	try {
		const res = await axios.post(
			`http://localhost:8080/admin/register`,
			payload
		);
		return res.data;
	} catch (error) {
		return error;
	}
};

export const getUserDataFromApi = async () => {
	try {
		const res = await axios.get(`https://homeelementry.onrender.com/users`);
		return res.data;
	} catch (error) {
		return error;
	}
};
