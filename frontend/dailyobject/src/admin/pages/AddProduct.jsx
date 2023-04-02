import {
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/adminproduct/action";
import { SideBar } from "../component/SideBar";
import { AdminNav } from "../component/AdminNav";

export const AddProduct = () => {
	const dispatch = useDispatch();
	const toast = useToast();
	const [spinner, setSpinner] = useState(false);
	const [image1, setImage1] = useState("");
	const [image2, setImage2] = useState("");
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [brand, setBrand] = useState("");
	const [discount_price, setDiscount_price] = useState(0);
	const [original_price, setOriginal_price] = useState(0);
	const [product_details, setProduct_details] = useState("");
	const handleAddProduct = () => {
		setSpinner(true);
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
			dispatch(addData(payload));
			setTimeout(() => {
				setSpinner(false);
				toast({
					title: `Product: ${title} has been Added!`,
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
			}, 1000);
		} catch (error) {
			console.log(error);
			setSpinner(false);
		}
	};
	return (
		<>
			<AdminNav />
			<Box
				w="60%"
				margin="auto"
				justifyContent={"center"}
				textAlign="center"
				boxShadow={"xl"}
				p="4"
				mt="80px"
			>
				<InputGroup>
					<InputLeftAddon children="Title" color={"red"} background="none" />
					<Input
						value={title}
						type="text"
						onChange={(e) => {
							setTitle(e.target.value);
							console.log(title);
						}}
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
						children="Original_Price"
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
						children="Discount_Price"
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
						children="Product_Details"
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
					isDisabled={
						(title === "") | (brand === "") ||
						category === "" ||
						original_price === 0 ||
						discount_price === 0 ||
						image1 === "" ||
						image2 === "" ||
						product_details === ""
					}
					isLoading={spinner}
					onClick={handleAddProduct}
				>
					Add Product
				</Button>
			</Box>
		</>
	);
};
