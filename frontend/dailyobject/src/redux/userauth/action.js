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

export const loginSuccess = (payload) => {
	return {
		type: types.Login_Success,
		payload,
	};
};

export const logoutSuccess = () => {
	return {
		type: types.User_Logout,
	};
};

export const userLogout = () => (dispatch) => {
	dispatch(logoutSuccess());
};

export const userLogin = (payload) => (dispatch) => {
	dispatch(loginSuccess(payload));
};
