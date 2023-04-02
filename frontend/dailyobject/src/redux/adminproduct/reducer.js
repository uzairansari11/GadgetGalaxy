import * as types from "./action.types";
const initialState = {
	isLoading: false,
	isError: false,
	products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.loading: {
			return { ...state, isLoading: true };
		}
		case types.error: {
			return { ...state, isLoading: false, isError: true };
		}
		case types.get_product: {
			return { ...state, isLoading: false, isError: false, products: payload };
		}
		case types.add_product: {
			return {
				...state,
				isLoading: false,
				products: [payload, ...state.products],
			};
		}
		case types.update_product: {
			return {
				...state,
				isLoading: false,
				isError: false,
				products: [
					...state.products,
					...state.products.filter((product) => product._id === payload.id),
				],
			};
		}
		case types.delete_product: {
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		}

		default:
			return {...state};
	}
};
