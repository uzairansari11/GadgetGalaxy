import * as types from "./action.types";
import { getProductFromApi } from "./api";

export const loading = () => {
	return {
		type: types.loading,
	};
};

export const error = () => {
	return {
		type: types.error,
	};
};

export const get_products = (data) => {
	return {
		type: types.get_product,
		payload: data,
	};
};

export const add_products = (data) => {
	return {
		type: types.add_product,
		payload: data,
	};
};

export const delete_products = (data) => {
	return {
		type: types.delete_product,
		payload: data,
	};
};

export const update_products = (data) => {
	return {
		type: types.update_product,
		payload: data,
	};
};

//<-------Action Functions  Using Api Calls   of  api.js----->//

export const getData = () => async (dispatch) => {
	dispatch(loading());
	try {
		const data = await getProductFromApi();
		dispatch(get_products(data));
	} catch (error) {
		dispatch(error());
	}
};
