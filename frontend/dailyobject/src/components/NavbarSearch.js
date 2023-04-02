import {
	Box,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
	useBoolean,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const { useThrottle } = require("use-throttle");

const NavSearch = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showDropdown, setShowDropdown] = useBoolean();
	const products = useSelector((store) => store.adminProductReducer.products);

	const throttledText = useThrottle(query, 400);

	useEffect(() => {
		//run some logic
		if (throttledText === "") {
			setSuggestions([]);
		} else {
			console.log(throttledText);
			let newSuggestions = products.filter((item) => {
				return item.title
					.split(" ")
					.join("")
					.trim()
					.toLowerCase()
					.indexOf(throttledText) !== -1
					? true
					: false;
			});
			setSuggestions(newSuggestions);
			setShowDropdown.on();
		}
	}, [throttledText]);

	return (
		<Box w="100%" position="relative">
			<InputGroup>
				<InputLeftElement children={<BsSearch color="gray.300" />} />
				<Input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					placeholder="Search"
				/>
			</InputGroup>
			{suggestions.length > 0 && (
				<Box
					border="1px solid black"
					borderRadius="5px"
					position="absolute"
					top="50px"
					zIndex="10"
					bgColor="white"
					overflow="scroll"
					w="100%"
					maxH="400px"
				>
					{suggestions.map((item) => {
						return (
							<Link to={`/productdetails/${item._id}`}>
								<Text
									fontSize="xl"
									cursor="pointer"
									onClick={setShowDropdown.off}
								>
									{item.title}
								</Text>
							</Link>
						);
					})}
				</Box>
			)}
		</Box>
	);
};

export default NavSearch;
