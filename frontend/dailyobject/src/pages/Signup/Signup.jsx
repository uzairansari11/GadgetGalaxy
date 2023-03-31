import React from "react";
import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { VscArrowRight } from "react-icons/vsc";
import {
    TextInput,
    PasswordInput,
    // Text,
    // Stack,
    Select,
} from "@mantine/core";
import {
    Box,
    Flex,
    useToast,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Icon,
} from "@chakra-ui/react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import  Navbar  from "../../components/Navbar/Navbar.jsx";

const Signup = (props) => {
    const navigate = useNavigate();
    const toast = useToast();

    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    const handleClick = () => {
        navigate("/signup");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ("email" !== "" && "password" !== "") {
            if (
                "userReg".email === "email" &&
                "userReg".password === "password"
            ) {
                toast({
                    title: "Login Successful",
                    description: "",
                    status: "success",
                    duration: 2500,
                    isClosable: true,
                    position: "top",
                });
                navigate("/");
            } else {
                toast({
                    title: "Wrong Credentials",
                    description: "Please check your details",
                    status: "error",
                    duration: 2500,
                    isClosable: true,
                    position: "bottom-right",
                });
            }
        } else {
            toast({
                title: "Details Missing",
                description: "Please fill all details",
                status: "warning",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };
    return (
        <div>
            <div>
                <Navbar />
                <div className="log_main">
                    <Container
                        as={SimpleGrid}
                        maxW={"7xl"}
                        columns={{ base: 1, md: 2 }}
                        spacing={{ base: 10, lg: 32 }}
                        // py={{ base: 10, sm: 20, lg: 32 }}
                    >
                        <Stack spacing={{ base: 10, md: 20 }}>
                            <Heading
                                lineHeight={1.1}
                                fontSize={{
                                    base: "xl",
                                    sm: "4xl",
                                    md: "5xl",
                                    lg: "6xl",
                                }}>
                                Never Miss Out Again
                                <Text
                                    as={"span"}
                                    color="hsla(0, 0%, 30%, 0.5)"
                                    // bgClip="text"
                                >
                                    <span>&nbsp;</span> & <span>&nbsp;</span>
                                </Text>
                                Sign Up Now and Stay in the Loop!
                            </Heading>
                            <Stack
                                direction={"row"}
                                spacing={4}
                                align={"center"}>
                                <AvatarGroup>
                                    {avatars.map((avatar) => (
                                        <Avatar
                                            key={avatar.name}
                                            name={avatar.name}
                                            src={avatar.url}
                                            position={"relative"}
                                            zIndex={2}
                                            _before={{
                                                content: '""',
                                                width: "full",
                                                height: "full",
                                                rounded: "full",
                                                transform: "scale(1.125)",
                                                // bgGradient:
                                                //     "linear(to-bl, red.400,pink.400)",
                                                position: "absolute",
                                                zIndex: -1,
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    ))}
                                </AvatarGroup>
                                <Text
                                    fontFamily={"heading"}
                                    fontSize={{ base: "4xl", md: "6xl" }}>
                                    +
                                </Text>
                                <Flex
                                    align={"center"}
                                    justify={"center"}
                                    fontFamily={"heading"}
                                    fontSize={{ base: "sm", md: "lg" }}
                                    // bg={"gray.800"}
                                    color={"white"}
                                    rounded={"full"}
                                    minWidth={useBreakpointValue({
                                        base: "44px",
                                        md: "60px",
                                    })}
                                    minHeight={useBreakpointValue({
                                        base: "44px",
                                        md: "60px",
                                    })}
                                    position={"relative"}
                                    _before={{
                                        content: '""',
                                        width: "full",
                                        height: "full",
                                        rounded: "full",
                                        transform: "scale(1.125)",
                                        backgroundColor:
                                            "hsla(0, 0%, 50%, 0.5)",
                                        position: "absolute",
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}>
                                    YOU
                                </Flex>
                            </Stack>
                        </Stack>
                        <Stack
                            // bg={"gray.50"}
                            style={{
                                border: ".5px solid hsla(0, 0%, 75%, 0.5)",
                            }}
                            rounded={"xl"}
                            p={{ base: 4, sm: 6, md: 8 }}
                            spacing={{ base: 8 }}
                            maxW={{ lg: "lg" }}>
                            <Stack spacing={4}>
                                <Heading
                                    color={"gray.800"}
                                    lineHeight={1.1}
                                    fontSize={{
                                        base: "2xl",
                                        sm: "3xl",
                                        md: "4xl",
                                    }}>
                                    Join our team
                                    <Text
                                        as={"span"}
                                        bgGradient="linear(to-r, red.400,pink.400)"
                                        bgClip="text">
                                        !
                                    </Text>
                                </Heading>
                                <Text
                                    color={"gray.500"}
                                    fontSize={{ base: "sm", sm: "md" }}>
                                    Welcome to our Signup page! Join the fun and
                                    be part of the action - create your account
                                    now!
                                </Text>
                            </Stack>
                            <Box as={"form"} mt={10}>
                                <Stack spacing={4}>
                                    <TextInput
                                        required
                                        label="Full Name"
                                        placeholder="Enter your name"
                                        value={form.values.email}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                "name",
                                                event.currentTarget.value
                                            )
                                        }
                                        radius="md"
                                    />

                                    <TextInput
                                        required
                                        label="Email"
                                        placeholder="______@mail.com"
                                        value={form.values.email}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                "email",
                                                event.currentTarget.value
                                            )
                                        }
                                        error={
                                            form.errors.email && "Invalid email"
                                        }
                                        radius="md"
                                    />
                                    <Select
                                        required
                                        mt="md"
                                        withinPortal
                                        data={[
                                            "Male",
                                            "Female",
                                            "Custom",
                                            "Not set",
                                        ]}
                                        placeholder="Select gender"
                                        label="Gender"
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                "age",
                                                event.currentTarget.value
                                            )
                                        }
                                    />
                                    <TextInput
                                        required
                                        type="number"
                                        label="Age"
                                        placeholder="Enter your age"
                                        value={form.values.age}
                                        maxLength="2"
                                        radius="md"
                                    />

                                    <PasswordInput
                                        required
                                        label="Password"
                                        placeholder="Your password"
                                        value={form.values.password}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                "password",
                                                event.currentTarget.value
                                            )
                                        }
                                        error={
                                            form.errors.password &&
                                            "Password should include at least 6 characters"
                                        }
                                        radius="md"
                                    />
                                    <TextInput
                                        label="Mobile No"
                                        placeholder="+91 _____-_____"
                                        required
                                        radius="md"
                                    />
                                    {/* <Button
                                        fontFamily={"heading"}
                                        bg={"gray.200"}
                                        color={"gray.800"}>
                                        Upload CV
                                    </Button> */}
                                </Stack>
                                <Button
                                    fontFamily={"heading"}
                                    mt={8}
                                    marginLeft={"70%"}
                                    w={"30%"}
                                    style={{
                                        borderRadius: "25px",
                                        backgroundColor: "black",
                                        color: "white", // or color: "whiteAlpha.900"
                                        transition: "all .3s ease-in-out",
                                    }}
                                    _hover={{
                                        bgColor: "white",

                                        color: "black",
                                        boxShadow:
                                            "10px 10px 47px 0px rgba(158,158,158,1)",
                                    }}>
                                    Submit
                                    <span style={{ marginLeft: "5px" }}>
                                        <VscArrowRight />
                                    </span>
                                </Button>
                            </Box>
                            form
                        </Stack>
                    </Container>
                    <Box>
                        <Blur
                            position={"absolute"}
                            top={-10}
                            left={-10}
                            style={{ filter: "blur(70px)" }}
                        />
                    </Box>
                    {/* <Box style={{ width: "60%" }}>
                        <img
                            style={{ borderRadius: "10px" }}
                            src="https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80,"
                            alt=""
                        />
                    </Box> */}
                </div>
                <Footer />
            </div>
            );
        </div>
    );
};

export default Signup;

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};

const avatars = [
    {
        name: "Uzair Ansari",
        url: "https://avatars.githubusercontent.com/u/112272822?v=4",
    },
    {
        name: "Shantanu",
        url: "https://avatars.githubusercontent.com/u/110021464?v=4",
    },
    {
        name: "Prajwal",
        url: "https://avatars.githubusercontent.com/u/112638002?v=4",
    },
    {
        name: "Nitin",
        url: "https://avatars.githubusercontent.com/u/107460712?v=4",
    },

    {
        name: "Pooja",
        url: "https://avatars.githubusercontent.com/u/103634045?v=4",
    },
];
