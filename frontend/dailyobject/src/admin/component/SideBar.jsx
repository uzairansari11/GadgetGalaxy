// import React, { useEffect, useState } from "react";
// import {
// 	IconButton,
// 	Avatar,
// 	Box,
// 	CloseButton,
// 	Flex,
// 	HStack,
// 	VStack,
// 	Icon,
// 	useColorModeValue,
// 	Link,
// 	Drawer,
// 	DrawerContent,
// 	Text,
// 	useDisclosure,
// 	Menu,
// 	MenuButton,
// 	MenuDivider,
// 	MenuItem,
// 	MenuList,
// } from "@chakra-ui/react";
// import {
// 	FiHome,
// 	FiTrendingUp,
// 	FiCompass,
// 	FiStar,
// 	FiSettings,
// 	FiMenu,
// 	FiBell,
// 	FiChevronDown,
// } from "react-icons/fi";

// import { Product } from "../pages/Product";
// import { Dashboard } from "../pages/Dashboard";
// import { AddProduct } from "../pages/AddProduct";

// const LinkItems = [
// 	{
// 		name: "Home",
// 		icon: FiHome,
// 		path: "/admin",
// 		current: "Dashboard",
// 	},
// 	{
// 		name: "Products",
// 		icon: FiTrendingUp,
// 		path: "/admin/product",
// 		current: "Products",
// 	},
// 	{
// 		name: "Add Products",
// 		icon: FiTrendingUp,
// 		path: "/admin/product/add",
// 		current: "Add Products",
// 	},
// ];

// export const SideBar = ({ children }) => {
// 	const { isOpen, onOpen, onClose } = useDisclosure();


// 	const SidebarContent = ({ onClose, ...rest }) => {
// 		return (
// 			<Box
// 				transition="3s ease"
// 				bg={useColorModeValue("white", "gray.900")}
// 				borderRight="1px"
// 				borderRightColor={useColorModeValue("gray.200", "gray.700")}
// 				w={{ base: "full", md: 60 }}
// 				pos="fixed"
// 				h="full"
// 				{...rest}
// 			>
// 				<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
// 					<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
// 						<span style={{ color: "#e1fc31" }}>G</span>adget{" "}
// 						<span style={{ color: "#6d8c17" }}>G</span>alaxy
// 					</Text>
// 					<CloseButton
// 						display={{ base: "flex", md: "none" }}
// 						onClick={onClose}
// 					/>
// 				</Flex>
// 				{LinkItems.map((link) => (
// 					<NavItem
// 						key={link.name}
// 						icon={link.icon}
// 						// href={link.path}
						
// 					>
// 						{link.name}
// 					</NavItem>
// 				))}
// 			</Box>
// 		);
// 	};
// 	return (
// 		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
// 			<SidebarContent
// 				onClose={() => onClose}
// 				display={{ base: "none", md: "block" }}
// 			/>
// 			<Drawer
// 				autoFocus={false}
// 				isOpen={isOpen}
// 				placement="left"
// 				onClose={onClose}
// 				returnFocusOnClose={false}
// 				onOverlayClick={onClose}
// 				size="full"
// 			>
// 				<DrawerContent>
// 					<SidebarContent onClose={onClose} />
// 				</DrawerContent>
// 			</Drawer>
// 			{/* mobilenav */}
// 			<MobileNav onOpen={onOpen} />
// 			<Box ml={{ base: 0, md: 60 }} p="4" onClick={() => console.log("home")}>
// 				{children}
// 			</Box>
// 		</Box>
// 	);
// };

// const NavItem = ({ icon, children, href, ...rest }) => {
// 	return (
// 		<Link
// 			href={href}
// 			style={{ textDecoration: "none" }}
// 			_focus={{ boxShadow: "none" }}
// 		>
// 			<Flex
// 				align="center"
// 				p="4"
// 				mx="4"
// 				borderRadius="lg"
// 				role="group"
// 				cursor="pointer"
// 				_hover={{
// 					bg: "cyan.400",
// 					color: "white",
// 				}}
// 				{...rest}
// 			>
// 				{icon && (
// 					<Icon
// 						mr="4"
// 						fontSize="16"
// 						_groupHover={{
// 							color: "white",
// 						}}
// 						as={icon}
// 					/>
// 				)}
// 				{children}
// 			</Flex>
// 		</Link>
// 	);
// };

// const MobileNav = ({ onOpen, ...rest }) => {
// 	return (
// 		<Flex
// 			ml={{ base: 0, md: 60 }}
// 			px={{ base: 4, md: 4 }}
// 			height="20"
// 			alignItems="center"
// 			bg={useColorModeValue("white", "gray.900")}
// 			borderBottomWidth="1px"
// 			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
// 			justifyContent={{ base: "space-between", md: "flex-end" }}
// 			{...rest}
// 		>
// 			<IconButton
// 				display={{ base: "flex", md: "none" }}
// 				onClick={onOpen}
// 				variant="outline"
// 				aria-label="open menu"
// 				icon={<FiMenu />}
// 			/>

// 			<Text
// 				display={{ base: "flex", md: "none" }}
// 				fontSize="2xl"
// 				fontFamily="monospace"
// 				fontWeight="bold"
// 			>
// 				Logo
// 			</Text>

// 			<HStack spacing={{ base: "0", md: "6" }}>
// 				<IconButton
// 					size="lg"
// 					variant="ghost"
// 					aria-label="open menu"
// 					icon={<FiBell />}
// 				/>
// 				<Flex alignItems={"center"}>
// 					<Menu>
// 						<MenuButton
// 							py={2}
// 							transition="all 0.3s"
// 							_focus={{ boxShadow: "none" }}
// 						>
// 							<HStack>
// 								<Avatar
// 									size={"sm"}
// 									src={
// 										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
// 									}
// 								/>
// 								<VStack
// 									display={{ base: "none", md: "flex" }}
// 									alignItems="flex-start"
// 									spacing="1px"
// 									ml="2"
// 								>
// 									<Text fontSize="sm">Justina Clark</Text>
// 									<Text fontSize="xs" color="gray.600">
// 										Admin
// 									</Text>
// 								</VStack>
// 								<Box display={{ base: "none", md: "flex" }}>
// 									<FiChevronDown />
// 								</Box>
// 							</HStack>
// 						</MenuButton>
// 						<MenuList
// 							bg={useColorModeValue("white", "gray.900")}
// 							borderColor={useColorModeValue("gray.200", "gray.700")}
// 						>
// 							<MenuItem>Profile</MenuItem>
// 							<MenuItem>Settings</MenuItem>
// 							<MenuItem>Billing</MenuItem>
// 							<MenuDivider />
// 							<MenuItem>Sign out</MenuItem>
// 						</MenuList>
// 					</Menu>
// 				</Flex>
// 			</HStack>
// 		</Flex>
// 	);
// };
