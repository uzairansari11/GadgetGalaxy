import * as types from "./action.type";

const initialState = {
	isLoading: false,
	token: localStorage.getItem("adminToken") ? true : false,
	isAuth: localStorage.getItem("adminToken") ? true : false,
	isError: false,
};

export const reducer = (state = initialState, { type,payload }) => {
	switch (type) {
		case types.isLoading:
			return {
				...state,
				isLoading: true,
			};

		case type.Admin_Login_Success:
			return {
				...state,
				isAuth: payload,
				token: true,
				isLoading: false,
			};

		case types.isError:
			return {
				...state,
				isAuth: false,
				token: false,
				isLoading: false,
				isError: true,
			};
		case types.Admin_Logout_Success:
			return {
				...state,
				isAuth: false,
				token: false,
				isLoading: false,
			};
		default:
			return { ...state };
	}
};
