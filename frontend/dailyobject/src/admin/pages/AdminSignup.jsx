import { TextInput, PasswordInput, Text, Button } from "@mantine/core";
import {
	Flex,
	Box,
	FormControl,
	HStack,
	Stack,
	Heading,
	useColorModeValue,
	Link,
	useToast,
	Spinner,
} from "@chakra-ui/react";
import { AdminNav } from "../component/AdminNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AdminRegister } from "../utils";

export const AdminSignup = () => {
	const toast = useToast();
	const [isButLoading, setIsButLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [mobile_no, setMobile_no] = useState("");
	const handleSignup = async () => {
		const payload = {
			name,
			email,
			password,
			mobile_no,
		};

		if (name === "" || email === "" || password === "" || mobile_no === "") {
			toast({
				title: "Details Missing",
				description: "Please fill your details",
				status: "warning",
				duration: 2500,
				isClosable: true,
				position: "bottom-right",
			});
		} else {
			const response = await AdminRegister(payload);
			if (
				response.status === 200 &&
				response.data.data.hasOwnProperty("name")
			) {
				setIsButLoading(true);
				setTimeout(() => {
					setIsButLoading(false);
					toast({
						title: "Registration Successful",
						description: "",
						status: "success",
						duration: 2500,
						isClosable: true,
						position: "top",
					});
					navigate("/admin/login");
				}, 2000);
			} else if (response.data.data.length === 0) {
				toast({
					title: "User Already Exist",
					description: "",
					status: "error",
					duration: 2500,
					isClosable: true,
					position: "bottom-right",
				});
			} else {
				toast({
					title: "Something Went Wrong",
					description: "",
					status: "error",
					duration: 2500,
					isClosable: true,
					position: "bottom-right",
				});
			}
		}
	};
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/admin/login");
	};
	return (
		<div className="AdminSignup">
			{/* <AdminNav /> */}
			<Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				bg={useColorModeValue("gray.50", "gray.800")}
			>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"} style={{ display: "flex" }}>
							Admin Signup
						</Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							to enjoy all of our cool features
						</Text>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<HStack>
								<Box>
									<FormControl id="fullname" isRequired>
										<TextInput
											label="Full name"
											placeholder="full name..."
											required
											value={name}
											onChange={(event) => setName(event.target.value)}
										/>
									</FormControl>
								</Box>
								<Box>
									<FormControl id="mobile">
										<TextInput
											label="Mobile"
											placeholder=""
											type="number"
											required
											value={mobile_no}
											onChange={(event) => setMobile_no(event.target.value)}
										/>
									</FormControl>
								</Box>
							</HStack>
							<FormControl id="email" isRequired>
								<TextInput
									label="Email"
									placeholder="you@gmail.com"
									required
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
							</FormControl>
							<FormControl id="password" isRequired>
								<PasswordInput
									label="Password"
									placeholder="Your password"
									required
									mt="md"
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
							</FormControl>
							<Stack>
								<Button
									loadingText="Submitting"
									style={{
										borderRadius: "25px",
										backgroundColor: "black",
										color: "white", // or color: "whiteAlpha.900"
										transition: "all .3s ease-in-out",
										width: "50%",
										margin: "auto",
									}}
									_hover={{
										boxShadow: "10px 10px 47px 0px rgba(158,158,158,1)",
									}}
									onClick={handleSignup}
								>
									{!isButLoading &&
										`Submit →
                                    `}
									{isButLoading && (
										<Spinner
											thickness="2px"
											speed="0.50s"
											emptyColor="gray.200"
											color="black"
											size="md"
										/>
									)}
								</Button>
								<Text align={"center"}>
									Already a user?
									<Link color={"blue.400"} onClick={handleClick}>
										Login
									</Link>
								</Text>
							</Stack>
							{/* <Stack pt={6}>
                            </Stack> */}
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</div>
	);
};
