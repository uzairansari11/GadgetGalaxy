import * as types from "./action.type.js";

const initialState = {
	isLoading: false,
	isAuth: localStorage.getItem("isAuth") ? true : false,
	user: [],
	token: false,
	isError: false,
	isRegisterSuccess: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.isLoading:
			return {
				...state,
				isLoading: true,
			};

		case types.Login_Success:
			return {
				...state,
				isAuth: true,
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

		case types.Register_Success:
			return {
				...state,
				isLoading: false,
				user: [...state.user, payload],
			};

		case types.User_Data_Success:
			return {
				...state,
				isLoading: false,
				user: payload,
			};

		case types.User_Logout:
			return {
				isAuth: false,
				token: false,
				isLoading: false,
			};
		default:
			return { state };
	}
};
