import { Container, Box } from "@mantine/core";
import { AdminNav } from "../component/AdminNav";
import { Grid } from "@chakra-ui/react";
import { DashboardProductCart } from "../component/DashboardProductCart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../redux/adminproduct/action";
import { getDataFromAPi } from "../utils";

export const Dashboard = () => {
	const product = useSelector((store) => store.adminProductReducer.products);
	const dispatch = useDispatch();
	const [admin, setAdmin] = useState([]);
	const [user, setUser] = useState([]);
	const [order, setOrder] = useState([]);
	const [earning, setEarning] = useState([]);
	const usersUrl = "http://localhost:8080/users";
	const adminsUrl = "http://localhost:8080/admin";
	const ordersUrl = "http://localhost:8080/shipping";

	useEffect(() => {
		dispatch(getData());
		getDataFromAPi(adminsUrl).then((res) => {
			setAdmin(res.data.length);
		});
		getDataFromAPi(usersUrl).then((res) => {
			setUser(res.data.length);
		});
		getDataFromAPi(ordersUrl).then((res) => {
			console.log(res, "orders");
			const totalProductOrder = res.reduce(
				(acc, item) => acc + item.numOfItems,
				0
			);
			console.log(totalProductOrder);
			setOrder(totalProductOrder);
		});
		getDataFromAPi(ordersUrl).then((res) => {
			console.log(res, "orders");
			const totalEarning = res.reduce(
				(acc, item) => acc + item.numOfItems*item.orderAmount,
				0
			);
			console.log(totalEarning);
			setEarning(totalEarning);
		});
	}, []);

	return (
		<div>
			<AdminNav />
			<Container mt="90px" justifyContent={"center"} display={"flex"}>
				<Grid
					margin={"auto"}
					templateColumns={{
						sm: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					justifyContent={"center"}
					alignItems={"center"}
					gap={"4"}
					textAlign={"center"}
					alignSelf={"center"}
				>
					<Box>
						<DashboardProductCart
							CardTitle={"No of Product"}
							data1={product.length}
							data2={
								"Above Number Show The Live Quantity of Products 	Available On Our Website"
							}
						/>
					</Box>
					<Box>
						<DashboardProductCart
							CardTitle={"No of Users"}
							data1={user}
							data2={
								"Above Number Show The Total Number of Active Users On Our Website"
							}
						/>
					</Box>
					<Box>
						<DashboardProductCart
							CardTitle={"No of Orders"}
							data1={order}
							data2={
								"Above Number Show  ProductS Ordered By The Users From  Our Website"
							}
						/>
					</Box>
					<Box>
						<DashboardProductCart
							CardTitle={"Total Earning"}
							data1={earning}
							data2={"Above Amount Is In INR."}
							data3={"New Features Coming Soon ...."}
						/>
					</Box>
					<Box>
						<DashboardProductCart
							CardTitle={"No of Admin"}
							data1={admin}
							data2={"Above Number Show The Total Number of Admins"}
						/>
					</Box>
				</Grid>
			</Container>
		</div>
	);
};
