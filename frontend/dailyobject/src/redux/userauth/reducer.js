import * as types from "./action.type.js";

const initialState = {
    isLoading: false,
    token: localStorage.getItem("token") ? true : false,
    isAuth: localStorage.getItem("token") ? true : false,
    isError: false,
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
                token: payload,
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

        case types.User_Logout:
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
