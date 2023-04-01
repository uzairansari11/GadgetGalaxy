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
    FormControl,
    Center,
    HStack,
    useDisclosure,
    PinInput,
    PinInputField,
} from "@chakra-ui/react";
import { AdminNav } from "../component/AdminNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AdminLogin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    var [model, setModel] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/admin/signup");
    };
    const handleSubmit = () => {
        setModel(true);
        onOpen();

        // navigate("/admin/signup");
    };

    return (
        <div className="admin_log">
            <AdminNav />
            <Container size={420} my={40}>
                <Title
                    align="center"
                    sx={(theme) => ({
                        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                        fontWeight: 900,
                    })}>
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
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
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
                        onClick={handleSubmit}
                        style={{
                            borderRadius: "25px",
                            backgroundColor: "black",
                            color: "white", // or color: "whiteAlpha.900"
                            transition: "all .3s ease-in-out",
                        }}
                        _hover={{
                            boxShadow: "10px 10px 47px 0px rgba(158,158,158,1)",
                        }}>
                        Login
                    </Button>
                </Paper>
            </Container>
            {model === true ? (
                <Modal
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                    motionPreset="slideInBottom">
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
                                    <PinInput>
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
                            }}>
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
                                    boxShadow:
                                        "10px 10px 47px 0px rgba(158,158,158,1)",
                                }}>
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
                                    boxShadow:
                                        "10px 10px 47px 0px rgba(158,158,158,1)",
                                }}>
                                Verify
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            ) : (
                ""
            )}
        </div>
    );
};
