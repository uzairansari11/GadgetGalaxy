import { Box, Button, Flex, Heading, HStack, Image, Link, Spacer, Text, VStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Input,



} from '@chakra-ui/react'
import { useState } from 'react';






const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState("");
 

    return (
        <Box border="1px solid red" width="100%">
            <Flex width="100%" height="100px" >
                <Box padding="10">
                    <Image src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1" ></Image>
                </Box>
                <Spacer />
                <Box padding="8" >
                    <Image src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" width="50px" h="50px"></Image>
                </Box>
            </Flex>
            <Box>
                <Heading>Shopping Bag</Heading>
            </Box>

            <Box>
                <Flex h="500px">
                    <Box flex='1' border="1px solid black" w="70%" >

                    </Box>
                    <Box flex='1' border="1px solid red" >
                        <Flex w="70%" h="auto" marginLeft="150px" marginTop="50px">
                            <VStack w="90%" >
                                <Box w="100%" borderRadius="0.2rem" bg="rgb(246, 239, 246)" border="rgb(233, 233, 233)">
                                    <Button onClick="onOpen" borderColor="blue" w="100%" h="auto" bg="teal.200" borderRadius="0.5rem" padding="0.5rem" >Apply Coupan</Button>
                                </Box>
                                <Box border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="0.2rem">
                                    <HStack w="100%">

                                        <Image padding="0.2rem" src='https://www.invoguespa.com/wp-content/uploads/2018/01/giftcard.jpg' maxW="20%"></Image>
                                      <Input></Input>
                                      <Button bg="teal.200">Apply</Button>
                                    </HStack>
                                </Box>
                                <Box w="100%">
                                    <Text textAlign="left">
                                        Order Summary:
                                    </Text>
                                </Box>
                                <Box border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="0.2rem">
                                    <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">Subtotal</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">₹ amount</Text>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">You Saved</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">₹discount</Text>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">Coupon Discount</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">₹discount</Text>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">Delivery Charges (Standard)</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">₹0</Text>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text padding="0.2rem" fontSize="1.2rem" textAlign="left" as='b'>Total Cost</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" fontSize="1.2rem" textAlign="right" as="b">₹ amount - discount</Text>
                                    </HStack>
                                </Box>
                                <Link
                                    >
                                    <Button color="black" variant='solid' w="100%" padding="0.5rem" border="none" bg="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))" borderRadius="0.3rem" fontFamily="MuliSemiBold, Helvetica Neue, Helvetica, Arial, sans-serif" fontSize="1.2rem">Checkout </Button>
                                </Link>
                            </VStack>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            

        </Box>

    )

}
export default Cart;