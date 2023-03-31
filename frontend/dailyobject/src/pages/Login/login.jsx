import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { SiTwitter } from "react-icons/si";
import { Box, Button, Center, Heading, useToast } from "@chakra-ui/react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import { FiMail } from "react-icons/fi";

export function Login(props) {
    const [type, toggle] = useToggle(["login", "register"]);

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
            if ("userReg".email === "email" && "userReg".password === "password") {
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
    }

    return (
        <div>
            <div className="log_main">
                <Paper
                    radius="md"
                    p="xl"
                    withBorder
                    {...props}
                    style={{ width: "40%" }}>
                    <Heading size="lg" weight={300}>
                        Welcome to GadgetGalaxy, {type} with
                    </Heading>

                    <Box
                        style={{
                            display: "flex",
                            marginTop: "5rem",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                        {/* <GoogleButton radius="xl">Google</GoogleButton> */}
                        {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
                        <Button
                            style={{ borderRadius: "5rem", width: "170px" }}
                            variant={"outline"}
                            leftIcon={<FcGoogle />}>
                            <Center>
                                <Text>Google</Text>
                            </Center>
                        </Button>
                        <Button
                            // colorScheme={"twitter"}
                            variant={"outline"}
                            style={{ borderRadius: "5rem", width: "170px" }}
                            leftIcon={<SiTwitter color="#1da1f2" />}>
                            <Center>
                                <Text>Twitter</Text>
                            </Center>
                        </Button>
                    </Box>

                    <Divider
                        label="Or continue with email"
                        labelPosition="center"
                        my="lg"
                    />

                    <form>
                        <Stack>
                            {type === "register" && (
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    value={form.values.name}
                                    prefix={<FiMail/>}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            "name",
                                            event.currentTarget.value
                                        )
                                    }
                                    radius="md"
                                />
                            )}

                            <TextInput
                                required
                                label="Email"
                                placeholder="youremail@mail.com"
                                value={form.values.email}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "email",
                                        event.currentTarget.value
                                    )
                                }
                                error={form.errors.email && "Invalid email"}
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

                            {type === "register" && (
                                <Checkbox
                                    label="I accept terms and conditions"
                                    checked={form.values.terms}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            "terms",
                                            event.currentTarget.checked
                                        )
                                    }
                                />
                            )}
                        </Stack>

                        <Group position="apart" mt="xl">
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={handleClick}
                                size="xs">
                                {type === "register"
                                    ? "Already have an account? Login"
                                    : "Don't have an account? Register"}
                            </Anchor>
                            <Button
                                onClick={handleSubmit}
                                style={{
                                    borderRadius: "25px",
                                    backgroundColor: "black",
                                    color: "white",
                                    transition: "all .3s ease-in-out",
                                }}
                                _hover={{
                                    backgroundColor: "#fafafa",
                                    boxShadow:
                                        "10px 10px 47px 0px rgba(158,158,158,1)",
                                }}>
                                {upperFirst(type)}
                            </Button>
                        </Group>
                    </form>
                </Paper>
                <Box style={{ width: "60%" }}>
                    <img
                        style={{ borderRadius: "10px" }}
                        src="https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80,"
                        alt=""
                    />
                </Box>
            </div>
            <Footer />
        </div>
    );
}
