import { Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/adminproduct/action";

export const EditProduct = () => {
	const product = useSelector((store) => store.adminProductReducer.products);
	const dispatch = useDispatch();
	const params = useParams();
	const productID = params.id;

	const isDataPresent = product?.filter((ele) => ele._id === productID);
	console.log(isDataPresent);

	useEffect(() => {
		if (product.length === 0) {
			dispatch(getData());
		}
  }, []);
  
	useEffect(() => {
		if (product.length === 0) {
			dispatch(getData());
		}
	}, []);
	return (
		<div>
			EditProduct
			<Input value={isDataPresent?.[0]?.Title} />
		</div>
	);
};
