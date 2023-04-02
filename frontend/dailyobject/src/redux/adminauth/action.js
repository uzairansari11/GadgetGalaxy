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

export const adminLoginSuccess = (payload) => {
	return {
		type: types.Admin_Login_Success,
		payload,
	};
};

export const adminLogoutSuccess = () => {
	return {
		type: types.Admin_Logout_Success,
	};
};

export const adminLoginVerificationSuccess = (payload) => (dispatch) => {
	dispatch(adminLoginSuccess(payload));
};
// export const adminLoginVerificationSuccess = (payload) => async (dispatch) => {
// 	dispatch(loading());
// 	try {
// 		const data = await adminLoginApi(payload);
// 		dispatch(adminLoginSuccess());
// 		return data;
// 	} catch (error) {
// 		dispatch(error());
// 		return false;
// 	}
// };
