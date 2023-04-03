import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getData } from "../../redux/adminproduct/action";
import axios from "axios";
import { AdminNav } from "../component/AdminNav";

export const EditProduct = () => {
	const toast = useToast();
	const navigate = useNavigate();
	const products = useSelector((store) => store.adminProductReducer.products);
	const dispatch = useDispatch();
	const [image1, setImage1] = useState("a");
	const [image2, setImage2] = useState("a");
	const [title, setTitle] = useState("a");
	const [category, setCategory] = useState("a");
	const [brand, setBrand] = useState("a");
	const [discount_price, setDiscount_price] = useState(0);
	const [original_price, setOriginal_price] = useState(0);
	const [product_details, setProduct_details] = useState("a");

	const { id } = useParams();

	const handleSubmit = async () => {
		const payload = {
			Image1: image1,
			Image2: image2,
			Title: title,
			Category: category,
			Brand: brand,
			Discount_price: discount_price,
			Original_price: original_price,
			Product_details: product_details,
		};

		try {
			const response = await axios.patch(
				`http://localhost:8080/products/update/${id}`,
				payload
			);
			console.log(response.data);
			setTimeout(() => {
				toast({
					title: "Product Updated Successful",
					description: "",
					status: "success",
					duration: 1000,
					isClosable: true,
					position: "bottom",
				});
			}, 1500);
			setTimeout(() => {
				navigate("/admin/product");
			}, 500);
		} catch (error) {
			toast({
				title: "Something Went Wrong",
				description: "",
				status: "error",
				duration: 2500,
				isClosable: true,
				position: "top",
			});
		}
	};

	useEffect(() => {
		if (products.length === 0) {
			dispatch(getData());
		}
	}, []);
	useEffect(() => {
		console.log(products, "products");
		const pdt = products.find((item) => item._id === id);
		console.log(pdt, "pdt");
		setTitle(pdt?.Title);
		setImage1(pdt?.Image1);
		setImage2(pdt?.Image2);
		setCategory(pdt?.Category);
		setBrand(pdt?.Brand);
		setDiscount_price(pdt?.Discount_price);
		setOriginal_price(pdt?.Original_price);
		setProduct_details(pdt?.Product_details);
	}, []);

	return (
		<>
			<AdminNav />

			<Box
				w="60%"
				margin="auto"
				justifyContent={"center"}
				textAlign="center"
				boxShadow={"xl"}
				mt="80px"
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

				<Button
					colorScheme="red"
					variant="outline"
					m="4"
					onClick={handleSubmit}
				>
					Button
				</Button>
			</Box>
		</>
	);
};
