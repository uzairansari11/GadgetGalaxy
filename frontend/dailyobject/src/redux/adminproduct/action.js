import * as types from "./action.types";
import { deleteDataFromApi, getProductFromApi, postDataToApi } from "./api";

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

export const delete_products = () => {
	return {
		type: types.delete_product,
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
		if (data) {
			dispatch(get_products(data));
		}
	} catch (error) {
		dispatch(error());
	}
};

export const addData = (payload) => async (dispatch) => {
	dispatch(loading());
	try {
		const data = await postDataToApi(payload);
		if (data) {
			add_products(data);
		}
	} catch (error) {
		dispatch(error());
	}
};

export const deleteData = () => async (dispatch) => {
	dispatch(loading());
	try {
		const data = await deleteDataFromApi();
		if (data) {
			add_products(data);
		}
	} catch (error) {
		dispatch(error());
	}
};
