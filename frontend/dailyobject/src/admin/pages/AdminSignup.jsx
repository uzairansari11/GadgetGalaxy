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
} from "@chakra-ui/react";
import { AdminNav } from "../component/AdminNav";
import { useNavigate } from "react-router-dom";

export const AdminSignup = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/admin/login");
    };
    return (
        <div className="AdminSignup">
            <AdminNav />
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}>
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
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <TextInput
                                            label="First name"
                                            placeholder="you@mantine.dev"
                                            required
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <TextInput
                                            label="Last name"
                                            placeholder="you@mantine.dev"
                                            required
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <TextInput
                                    label="Email"
                                    placeholder="you@mantine.dev"
                                    required
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <PasswordInput
                                    label="Password"
                                    placeholder="Your password"
                                    required
                                    mt="md"
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
                                        boxShadow:
                                            "10px 10px 47px 0px rgba(158,158,158,1)",
                                    }}>
                                    Sign up
                                </Button>
                                <Text align={"center"}>
                                    Already a user?
                                    <Link
                                        color={"blue.400"}
                                        onClick={handleClick}>
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
