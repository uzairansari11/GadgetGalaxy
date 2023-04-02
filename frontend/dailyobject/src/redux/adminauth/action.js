import * as types from "./action.type";
import { adminLoginApi } from "./api";
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

export const adminLoginSuccess = (payload) => {
	return {
		type: types.Admin_Login_Success,
		payload,
	};
};

export const adminLoginVerificationSuccess = (payload) => async (dispatch) => {
	dispatch(loading());
	try {
		let data = await adminLoginApi(payload);
		if (data) {
			dispatch(adminLoginSuccess(data));
		}
	} catch (e) {
		dispatch(error());
	}
};

export const adminLogoutSuccess = () => {
	return {
		type: types.Admin_Logout_Success,
	};
};

// export const adminLoginVerificationSuccess = (payload) => (dispatch) => {
// 	dispatch(adminLoginSuccess(payload));
// };
