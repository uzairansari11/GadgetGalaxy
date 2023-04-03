import React, { useEffect, useState } from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
// import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { CiSearch } from "react-icons/ci";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import "./Style.css";
import Footer from "../../components/Footer/Footer";
import { NotFoundImage } from "../../components/404/404";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text, useBoolean } from "@chakra-ui/react";
import { useThrottle } from "use-throttle";
import { getData } from "../../redux/adminproduct/action";
import { Link } from "react-router-dom";

const Search = (props) => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showDropdown, setShowDropdown] = useBoolean();
	const product = useSelector((store) => store.adminProductReducer.products);

	const throttledText = useThrottle(query, 400);
	useEffect(() => {
		dispatch(getData());
	}, []);

	useEffect(() => {
		//run some logic
		if (throttledText === "") {
			setSuggestions([]);
		} else {
			console.log(throttledText);
			let newSuggestions = product.filter((item) => {
				return item.Title.split(" ")
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
console.log(product)
	return (
		<div className="search_main">
			<Navbar />

			<div className="search_tile" style={{ marginTop: "8rem" }}>
				<TextInput
					icon={<CiSearch size="1.1rem" stroke={1.5} />}
					radius="xl"
					size="md"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search Products"
					rightSectionWidth={42}
					{...props}
				/>
			</div>
			<div className="search_result">
				<Box w="70%" margin="auto" display={'flex'} justifyContent={'space-around'}>
					{suggestions.length > 0 && (
						<Box
							margin="auto"
							border="1px solid black"
							borderRadius="5px"
							position="absolute"
							top="100"
							zIndex="10"
							bgColor="white"
							overflow="scroll"
							maxH="250px"
							w="60%"
						>
							{suggestions.map((item) => {
								return (
									<Link to={`/productdetails/${item._id}`}>
										<Text
											fontSize="xl"
											cursor="pointer"
											onClick={setShowDropdown.off}
										>
											{item.Title}
										</Text>
									</Link>
								);
							})}
						</Box>
					)}
				</Box>
				{/* <NotFoundImage /> */}
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Search;
