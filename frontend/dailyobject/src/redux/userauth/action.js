import { getUserDataFromApi, registerUser } from "./api";
import * as types from "./action.type.js";

export const loading = () => {
	return {
		type: types.isLoading,
	};
};

export const error = () => {
	return {
		type: types.isError,
	};
};

export const authSuccess = () => {
	return {
		type: types.Login_Success,
	};
};

export const registerSuccess = (payload) => {
	return {
		type: types.Register_Success,
		payload,
	};
};

export const userSuccess = (payload) => {
	return {
		type: types.User_Data_Success,
		payload,
	};
};

export const logoutSuccess = () => {
	return {
		type: types.User_Logout,
	};
};

export const userRegisterationToApi = (userDetails) => async (dispatch) => {
	dispatch(loading());

	try {
		const data = await registerUser(userDetails);
		console.log("dataUserReges", data);
		dispatch(registerSuccess(data));
		return true;
	} catch (e) {
		dispatch(error());
		return false;
	}
};

export const userLogout = () => (dispatch) => {
	dispatch(logoutSuccess());
};

export const gettingUsersData = () => async (dispatch) => {
	dispatch(loading());

	try {
		const res = await getUserDataFromApi();

		dispatch(userSuccess(res));
	} catch (e) {
		dispatch(error());
	}
};
