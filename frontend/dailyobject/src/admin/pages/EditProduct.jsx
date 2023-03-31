import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getData } from "../../redux/adminproduct/action";
export const EditProduct = () => {
	const { products } = useSelector((store) => store.adminProductReducer);
	const dispatch = useDispatch();
	const [data, setData] = useState({});
	const [image1, setImage1] = useState("");
	const [image2, setImage2] = useState("");
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [brand, setBrand] = useState("");
	const [discount_price, setDiscount_price] = useState(0);
	const [original_price, setOriginal_price] = useState(0);
	const [product_details, setProduct_details] = useState("");

	const { id } = useParams();

	// const params = useParams();
	// const productID = params.id;

	// const handleSubmit = () => {
	// 	try {
	// 		axios.patch(
	// 			`http://localhost:8080/products/update/${productID}`,
	// 			payload
	// 		);
	// 		console.log("data updated successfully");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// const getSingleProduct = () => {
	// 	try {
	// 		const res = axios.get(`http://localhost:8080/products/${productId}`);
	// 		setData(res.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	useEffect(() => {
		dispatch(getData());
	}, []);
	useEffect(() => {
		console.log(products)
		const pdt = products.find((item) => item._id === Number(id));
		setTitle(pdt?.Title);
		console.log(pdt,"pdt")
		setData(pdt);
	}, []);
// console.log(products)
	useEffect(() => {
		// setTitle(products?.Title);
		setImage1(data?.Image1);
		setImage2(data?.Image2);
		setCategory(data?.Category);
		setBrand(data?.Brand);
		setDiscount_price(data?.Discount_price);
		setOriginal_price(data?.Original_price);
		setProduct_details(data?.Product_details);
	}, []);
console.log(id, "suse2");
	return (
		<Box
			w="60%"
			margin="auto"
			justifyContent={"center"}
			textAlign="center"
			boxShadow={"xl"}
		>
			<InputGroup>
				<InputLeftAddon children="Title" color={"red"} background="none" />
				<Input
					value={title}
					type="text"
					onChange={(e) => setTitle(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon children="Brand" color={"red"} background="none" />
				<Input
					value={brand}
					type="text"
					onChange={(e) => setBrand(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon children="Category" color={"red"} background="none" />
				<Input
					value={category}
					type="text"
					onChange={(e) => setCategory(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon
					children="Original_price"
					color={"red"}
					background="none"
				/>

				<Input
					value={original_price}
					type="number"
					onChange={(e) => setOriginal_price(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon
					children="Discount_price"
					color={"red"}
					background="none"
				/>

				<Input
					value={discount_price}
					type="number"
					onChange={(e) => setDiscount_price(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon children="Image1" color={"red"} background="none" />
				<Input
					value={image1}
					type="text"
					onChange={(e) => setImage1(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon children="Image2" color={"red"} background="none" />
				<Input
					value={image2}
					type="text"
					onChange={(e) => setImage2(e.target.value)}
				/>
			</InputGroup>
			<InputGroup>
				<InputLeftAddon
					children="Product_details"
					color={"red"}
					background="none"
				/>
				<Textarea
					value={product_details}
					type="text"
					onChange={(e) => setProduct_details(e.target.value)}
				/>
			</InputGroup>

			<Button colorScheme="red" variant="outline" m="4">
				Button
			</Button>
		</Box>
	);
};
