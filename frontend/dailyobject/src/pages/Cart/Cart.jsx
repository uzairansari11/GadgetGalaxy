import {
    Box, Button, Flex, Heading, HStack, Image, Spacer, Text, VStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Input,
    Badge,
    useBreakpointValue
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleCartCard from './SingleCartCard';
import { getCartData, handleCouponDiscount, handleGiftCardDiscount } from '../../redux/usercart/action'






const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState("");
    const [giftCard,setGiftCard] = useState("");
    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cartReducer.cart)
    const amount = useSelector((store) => store.cartReducer.totalCartAmount)
    const items = useSelector((store) => store.cartReducer.totalItems);
    const discount = useSelector((store) => store.cartReducer.discount);

    useEffect(() => {
        dispatch(getCartData);
    }, [items])

    const handleCouponCode = () => {
        // console.log(data);
        dispatch(handleCouponDiscount(data, amount));
    }

    const handleGiftCard = ()=>{
        //cosole.log(giftCard);
        dispatch(handleGiftCardDiscount(giftCard,amount))
    }

    const flexDirection = useBreakpointValue({ base: "column", md: "row" });

    return (
        <Box width="100%">
            <Flex width="100%" zIndex="9999" pos={"fixed"} top="0" left="0" right="0" height="80px" textTransform={"capitalize"} background="white"  boxShadow="rgba(0,0,0,0.24) 0px 3px 8px">
                <Box ml="10">
                    <Image w="80px" h="80px" src="https://i.ibb.co/k0J7FB2/Gadget.png" ></Image>
                </Box>
                <Spacer />
                <Box mr="10" mt="4" >
                    <Image src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" width="50px" h="50px"></Image>
                </Box>
            </Flex>
            <Box marginTop="100px">
                <Heading textAlign="center" marginBottom="5">Shopping Bag <Badge colorScheme="green" borderRadius="full" px="3" py="2">{items}</Badge></Heading>
            </Box>

            <Box shadow="sm" w="85%" margin="auto">
                <Flex 
                    h={{base:"500px",md:"350px",sm:"200px",xs:"140px"}} padding="0.5rem"
                    flexDirection={flexDirection}
                >
                    <Box flex='1' h={{base:"500px",md:"350px",sm:"200px",xs:"140px"}} w={{base:"70%",md:"70%",sm:"100%",xs:"100%"}} >
                        <VStack 
                            h={{base:"500px",md:"500px",sm:"200px"}}
                            overflowY="auto"
                            css={{
                                "&::-webkit-scrollbar": {
                                width: "5px",
                                height: "5px",
                                },
                                "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                background: "#888",
                                },
                                "&::-webkit-scrollbar-thumb:hover": {
                                background: "#555",
                                },
                            }}
                        >
                            {cart ?.map((el) => <SingleCartCard key={el.id} product={el} />)}
                        </VStack>

                    </Box>
                    <Box flex='1'  >
                        <Flex w={{base:"70%",md:"70%",sm:"100%"}} h="auto" marginLeft={{base:"150px", md:"100px", sm:"0px"}} marginTop="50px">
                            <VStack w={{base:"90%",sm:"100%"}} >
                                <Box w="100%" borderRadius="0.2rem" bg="rgb(246, 239, 246)" border="rgb(233, 233, 233)">
                                    <Button onClick={onOpen} borderColor="blue" w="100%" h="auto" bg="teal.200" borderRadius="0.5rem" padding="0.5rem" >Apply Coupon</Button>
                                </Box>
                                <Box border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="0.2rem">
                                    <HStack w="100%">

                                        <Image padding="0.2rem" src='https://www.invoguespa.com/wp-content/uploads/2018/01/giftcard.jpg' maxW="20%"></Image>
                                        <Input placeholder="Enter Gift Card" value={giftCard} onChange={e => setGiftCard(e.target.value)}></Input>
                                        <Button bg="teal.200" onClick={()=> handleGiftCard}>Apply</Button>
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
                                        <Text padding="0.2rem" textAlign="right">₹ {amount}</Text>
                                    </HStack>
                                    {/* <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">You Saved</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">₹</Text>
                                    </HStack> */}
                                    <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">Coupon Discount</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">₹{discount}</Text>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text padding="0.2rem" textAlign="left">Shipping</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" textAlign="right">FREE</Text>
                                    </HStack>
                                    <HStack w="100%">
                                        <Text padding="0.2rem" fontSize="1.2rem" textAlign="left" as='b'>Total Cost</Text>
                                        <Spacer></Spacer>
                                        <Text padding="0.2rem" fontSize="1.2rem" textAlign="right" as="b">₹ {amount - discount}</Text>
                                    </HStack>
                                </Box>
                                <Link to={{pathname:"/checkout"}}
                                >
                                    <Button color="black" variant='solid' w="100%" padding="0.5rem" border="none" bg="linear-gradient(to right, rgb(222, 87, 229), rgb(136, 99, 251))" borderRadius="0.3rem" fontFamily="MuliSemiBold, Helvetica Neue, Helvetica, Arial, sans-serif" fontSize="1.2rem">Checkout </Button>
                                </Link>
                            </VStack>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box>



                {discount === 0 ? (<Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Enter Coupon Code</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <Input placeholder="Enter Coupon Code" value={data} onChange={e => setData(e.target.value)}></Input>
                            <br></br>
                            <br></br>
                            <Text color="blue.300"> Use code 'masai30' to get 30% discount on cart total. </Text>
                            <br></br>
                            <Button onClick={handleCouponCode}>Apply</Button>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>) : ""}


            </Box>


        </Box>

    )

}
export default Cart;