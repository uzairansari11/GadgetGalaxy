import { adminRegistration } from "./api";

import * as types from "./action.type";

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

export const adminLoginSuccess = () => {
	return {
		type: types.Login_Success,
	};
};

export const adminRegisterSuccess = (payload) => {
	return {
		type: types.Register_Success,
		payload,
	};
};

export const adminLogoutSuccess = () => {
	return {
		type: types.User_Logout,
	};
};

export const adminRegisterToServer = (payload) => async (dispatch) => {
	dispatch(loading());

	try {
        const data = await adminRegistration(payload);
        if(data)
		dispatch(adminRegisterSuccess(data));
		return true;
	} catch (e) {
		dispatch(error());
		return false;
	}
};

// export const userLogout = () => (dispatch) => {
// 	dispatch(logoutSuccess());
// };

// export const gettingUsersData = () => async (dispatch) => {
// 	dispatch(loading());

// 	try {
// 		const res = await getUserDataFromApi();

// 		dispatch(userSuccess(res));
// 	} catch (e) {
// 		dispatch(error());
// 	}
// };
