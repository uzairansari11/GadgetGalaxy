import React, { useState } from "react";
import { TextInput, PasswordInput } from "@mantine/core";
import {
    Box,
    Flex,
    FormControl,
    useToast,
    Spinner,
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
    Select,
    FormLabel,
} from "@chakra-ui/react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [mobile_no, setMobile_no] = useState("");
    const [isButLoading, setIsButLoading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            email,
            gender,
            age,
            password,
            mobile_no,
        };
        if (
            name !== "" &&
            email !== "" &&
            gender !== "" &&
            age !== "" &&
            password !== "" &&
            mobile_no !== ""
        ) {
            try {
                const res = await axios.post(
                    `http://localhost:8080/users/register`,
                    payload
                );
                if (res.data.message === "User AlreadyExists") {
                    toast({
                        title: "Email already Exist",
                        description: "Try using other details",
                        status: "warning",
                        duration: 2500,
                        isClosable: true,
                        position: "bottom-right",
                    });
                } else {
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
                        navigate("/login");
                    }, 2000);
                }
            } catch (error) {
                toast({
                    title: "Something Went Wrong",
                    status: "error",
                    duration: 500,
                    isClosable: true,
                    position: "bottom-right",
                });
            }
        } else {
            toast({
                title: "Details Missing",
                description: "Please fill your details",
                status: "warning",
                duration: 2500,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };
    return (
        <div>
            <div style={{ marginTop: "125px" }}>
                <Navbar />
                <div className="sign_main">
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
                                        value={name}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                        radius="md"
                                    />
                                    <TextInput
                                        required
                                        label="Email"
                                        placeholder="______@mail.com"
                                        value={email}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        radius="md"
                                    />
                                    <FormControl isRequired>
                                        <FormLabel>Gender</FormLabel>
                                        <Select
                                            variant="outline"
                                            placeholder="Select Gender"
                                            value={gender}
                                            onChange={(event) =>
                                                setGender(event.target.value)
                                            }>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
                                            <option value="custom">
                                                Custom
                                            </option>
                                            <option value="not">Not Set</option>
                                        </Select>
                                    </FormControl>
                                    <TextInput
                                        required
                                        type="number"
                                        label="Age"
                                        placeholder="Enter your age"
                                        value={age}
                                        onChange={(event) =>
                                            setAge(event.target.value)
                                        }
                                        maxLength="2"
                                        radius="md"
                                    />
                                    <PasswordInput
                                        required
                                        label="Password"
                                        placeholder="Your password"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        radius="md"
                                    />
                                    <TextInput
                                        label="Mobile No"
                                        placeholder="+91 _____-_____"
                                        required
                                        radius="md"
                                        value={mobile_no}
                                        onChange={(event) =>
                                            setMobile_no(event.target.value)
                                        }
                                    />
                                </Stack>
                                <Button
                                    fontFamily={"heading"}
                                    mt={8}
                                    marginLeft={"70%"}
                                    w={"30%"}
                                    onClick={handleSubmit}
                                    style={{
                                        borderRadius: "25px",
                                        backgroundColor: "black",
                                        color: "white", // or color: "whiteAlpha.900"
                                        transition: "all .3s ease-in-out",
                                    }}
                                    _hover={{
                                        boxShadow:
                                            "10px 10px 47px 0px rgba(158,158,158,1)",
                                    }}>
                                    {/* <span style={{ marginLeft: "5px" }}> */}
                                    {/* <VscArrowRight /> */}
                                    {/* </span> */}
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
