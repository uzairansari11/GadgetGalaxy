import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/adminproduct/action";
import { ProductCard } from "../component/Card";
import { LoadingSkeleton } from "../component/LoadingSkeleton";
import { AdminNav } from "../component/AdminNav";

export const Product = () => {
	const product = useSelector((store) => store.adminProductReducer.products);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, []);

	return (
		<>
			<AdminNav />
			<Flex margin={"auto"} justifyContent={"space-around"} p={"2"} mt="80px">
				<Grid
					width={"85%"}
					justifyContent={"space-between"}
					templateColumns={{
						base: `repeat(1, 1fr)`,
						sm: `repeat(1,1fr)`,
						md: `repeat(2,1fr)`,
						lg: `repeat(3,1fr)`,
					}}
					gap={"4"}
				>
					{product?.length ? (
						product
							.reverse()
							.map((ele) => <ProductCard key={ele._id} {...ele} />)
					) : (
						<LoadingSkeleton />
					)}
				</Grid>
			</Flex>
		</>
	);
};
