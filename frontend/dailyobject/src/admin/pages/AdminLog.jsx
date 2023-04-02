import {
	TextInput,
	PasswordInput,
	Checkbox,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Group,
	Button,
} from "@mantine/core";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Center,
	HStack,
	useDisclosure,
	PinInput,
	PinInputField,
	useToast,
} from "@chakra-ui/react";

import { AdminNav } from "../component/AdminNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginVerificationSuccess } from "../../redux/adminauth/action";

export const AdminLogin = () => {
	const isAuth = useSelector((store) => store.adminAuthReducer.isAuth);

	const toast = useToast();
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [model, setModel] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [verifyKey, setVerifyKey] = useState();
	const navigate = useNavigate();
	const secretKey = `${process.env.REACT_APP_SecretKey}`;

	const handlePinVerification = () => {
		if (verifyKey == secretKey) {
			onClose();
			toast({
				title: "Login Successful",
				description: "",
				status: "success",
				duration: 2500,
				isClosable: true,
				position: "top",
			});
			const payload = localStorage.getItem("adminToken");
			dispatch(adminLoginVerificationSuccess(payload)).then(() => {
				navigate("/admin", { replace: true });
			});
		} else if (verifyKey === "") {
			toast({
				title: "Please Enter Pin",
				description: "",
				status: "error",
				duration: 2500,
				isClosable: true,
				position: "bottom-right",
			});
		} else if (verifyKey != secretKey) {
			toast({
				title: "Wrong Pin",
				description: "",
				status: "error",
				duration: 2500,
				isClosable: true,
				position: "bottom-right",
			});
		}
	};
	const handleClick = async () => {
		navigate("/admin/signup");
	};
	const handleLogin = async () => {
		console.log("sss");

		const payload = { email, password };
		console.log("payload", payload);
		if (email !== "" && password !== "") {
			try {
				const response = await axios.post(
					"https://gadgetgalaxy.cyclic.app/admin/login",
					payload
				);
				console.log(response);
				const token = response.data.token;
				if (response.data.message == "Login Successful") {
					if (token) {
						setModel(true);
						onOpen();
						localStorage.setItem("adminToken", token);
					}
				} else {
					toast({
						title: "Wrong Credentials",
						description: "",
						status: "error",
						duration: 2500,
						isClosable: true,
						position: "bottom-right",
					});
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<>
			<AdminNav />
			<div
				className="admin_log"
				style={{  marginTop: "60px" }}
			>
				<Container size={420} my={40}>
					<Title
						align="center"
						sx={(theme) => ({
							fontFamily: `Greycliff CF, ${theme.fontFamily}`,
							fontWeight: 900,
						})}
					>
						Welcome back!
					</Title>
					<Text color="dimmed" size="sm" align="center" mt={5}>
						Do not have an account yet?
						<Anchor onClick={handleClick} size="sm" component="button">
							Create account
						</Anchor>
					</Text>

					<Paper withBorder shadow="md" p={30} mt={30} radius="md">
						<TextInput
							label="Email"
							placeholder="you@mantine.dev"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<PasswordInput
							label="Password"
							placeholder="Your password"
							required
							mt="md"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Group position="apart" mt="lg">
							<Checkbox label="Remember me" />
							<Anchor component="button" size="sm">
								Forgot password?
							</Anchor>
						</Group>
						<Button
							fullWidth
							mt="sm"
							style={{
								borderRadius: "25px",
								backgroundColor: "black",
								color: "white", 
								transition: "all .3s ease-in-out",
							}}
							_hover={{
								boxShadow: "10px 10px 47px 0px rgba(158,158,158,1)",
							}}
							onClick={handleLogin}
						>
							Login
						</Button>
					</Paper>
				</Container>
				{model === true ? (
					<Modal
						onClose={onClose}
						isOpen={isOpen}
						isCentered
						motionPreset="slideInBottom"
					>
						<ModalOverlay
							// bg="blackAlpha.300"
							backdropFilter="blur(5px) hue-rotate(90deg)"
						/>
						<ModalContent>
							<ModalHeader>Enter Verification Code</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								{/* <FormControl> */}
								<Center>
									<HStack>
										<PinInput onChange={(e) => setVerifyKey(e)}>
											<PinInputField />
											<PinInputField />
											<PinInputField />
											<PinInputField />
										</PinInput>
									</HStack>
								</Center>
								{/* </FormControl> */}
							</ModalBody>
							<ModalFooter
								style={{
									display: "flex",
									// border: "1px solid red",
									justifyContent: "space-evenly",
								}}
							>
								<Button
									onClick={onClose}
									style={{
										borderRadius: "25px",
										backgroundColor: "white",
										color: "black",
										// color: "white",
										border: ".5px solid gray",
										transition: "all .3s ease-in-out",
									}}
									_hover={{
										boxShadow: "10px 10px 47px 0px rgba(158,158,158,1)",
									}}
								>
									Close
								</Button>
								<Button
									style={{
										borderRadius: "25px",
										backgroundColor: "black",
										color: "white", // or color: "whiteAlpha.900"
										transition: "all .3s ease-in-out",
									}}
									_hover={{
										boxShadow: "10px 10px 47px 0px rgba(158,158,158,1)",
									}}
									onClick={handlePinVerification}
								>
									Verify
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				) : (
					""
				)}
			</div>
		</>
	);
};
