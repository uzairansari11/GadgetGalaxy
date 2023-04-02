import {
    Box, FormControl, Input, Button, FormLabel, Grid, GridItem, Image, Spacer, StackDivider, VStack, Flex, Text, HStack, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Select,
    ModalCloseButton,
    useDisclosure,
    InputGroup,
    InputLeftAddon
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addCustomerData } from '../../redux/usercart/action'
import SinglePaymentCard from './SinglePaymentCard'
import { Link } from 'react-router-dom'
import { postRequestAddress } from '../../redux/shipping/action'

const Checkout = () => {
    const cart = useSelector((store) => store.cartReducer.cart)
    const amount = useSelector((store) => store.cartReducer.totalCartAmount)
    const items = useSelector((store) => store.cartReducer.totalItems);
    const discount = useSelector((store) => store.cartReducer.discount);
    const dispatch = useDispatch();
    const [dataCheck, setDataCheck] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    

    const [paymentDetails, setPaymentDetails] = useState({
        fullName: "",
        address: "",
        phone: "",
        cardNumber: ""
    });

    const handleChange = e => {
        setPaymentDetails({
            ...paymentDetails,
            [e.target.name]: e.target.value
        });
        if (paymentDetails.fullName.length > 0 && paymentDetails.address.length > 0 && paymentDetails.phone.length > 0 && selectedOption) {
            setDataCheck(true);
        }
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        
            let newItem = {
                ...paymentDetails,
                paymentMethod: selectedOption,
                orderAmount: amount - discount,
                numOfItems: items,
                userID : cart[0].userID
            }
            console.log(newItem);
            dispatch(postRequestAddress(newItem))
               
        
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    

    return (
        <Box w="100%">
            <VStack
                divider={<StackDivider borderColor='white' />}
                spacing={10}
                align='stretch'
            >

<Flex width="100%" zIndex="9999" pos={"fixed"} top="0" left="0" right="0" height="80px" textTransform={"capitalize"} background="white"  boxShadow="rgba(0,0,0,0.24) 0px 3px 8px">
                <Box ml="10">
                    <Image w="80px" h="80px" src="https://i.ibb.co/k0J7FB2/Gadget.png" ></Image>
                </Box>
                <Spacer />
                <Box mr="10" mt="4" >
                    <Image src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" width="50px" h="50px"></Image>
                </Box>
            </Flex>
                
                
                <Box w="100%" h={{base:"auto",md:"350px",sm:"300px",xs:"250px"}}>
                    <Grid w={{base:"85%",md:"85%"}} margin="auto" padding={{base:"1rem",sm:"0.5rem"}} templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 2fr)"}} gap={6}>
                        <GridItem w='100%' border="1px solid" borderColor="rgb(233,233,233)" padding="1.2rem">
                            {/* Order Details */}
                            <Box w="100%" padding="0.5rem" borderColor='gray.200'>
                                <Text w="100%" textAlign="center" fontWeight="bold" lineHeight={{base:"2rem",md:"2rem",sm:"1.6rem"}} fontSize={{base:"24px",md:"24px",sm:"22px"}}  >Order Summary</Text>
                                <VStack
                                    divider={<StackDivider />}
                                    spacing={4}
                                    w="100%"
                                >
                                    <VStack 
                                        h={{base:"300px",md:"300px",sm:"200px"}}
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
                                        {cart?.map((el) => <SinglePaymentCard key={el.id} product={el} />)}
                                    </VStack>
                                    <Box w="100%">
                                        <VStack>
                                            <HStack w={{base:"495px",md:"495px",sm:"400px"}}>
                                                <Text textAlign="left" fontSize={{base:"1.1rem",md:"1.1rem",sm:"0.9rem"}}>SUBTOTAL</Text>
                                                <Spacer></Spacer>
                                                <Text textAlign="right" fontSize={{base:"1.1rem",md:"1.1rem",sm:"0.9rem"}}>₹{amount}</Text>
                                            </HStack>
                                        </VStack>
                                        <VStack>
                                            <HStack w={{base:"495px",md:"495px",sm:"400px"}}>
                                                <Text textAlign="left" fontSize={{base:"1.1rem",md:"1.1rem",sm:"0.9rem"}}>CART DISCOUNT</Text>
                                                <Spacer></Spacer>
                                                <Text textAlign="right" fontSize={{base:"1.1rem",md:"1.1rem",sm:"0.9rem"}}>₹{discount}</Text>
                                            </HStack>
                                        </VStack>
                                        <VStack>
                                            <HStack w={{base:"495px",md:"495px",sm:"400px"}}>
                                                <Text textAlign="left" fontSize={{base:"1.1rem",md:"1.1rem",sm:"0.9rem"}}>SHIPPING CHARGES</Text>
                                                <Spacer></Spacer>
                                                <Text textAlign="right" fontSize={{base:"1.1rem",md:"1.1rem",sm:"0.9rem"}}>₹0</Text>
                                            </HStack>
                                        </VStack>
                                    </Box>
                                    <Spacer></Spacer>
                                    <Box>
                                        <HStack w={{base:"495px",md:"495px",sm:"400px"}}>
                                            <Text textAlign="left" fontWeight="bold" fontSize={{base:"1.3rem",md:"1.3rem",sm:"1.1rem"}}>TOTAL COST</Text>
                                            <Spacer></Spacer>
                                            <Text textAlign="right" fontWeight="bold" fontSize={{base:"1.3rem",md:"1.3rem",sm:"1.1rem"}}>₹{amount - discount}</Text>
                                        </HStack>
                                    </Box>
                                </VStack>

                            </Box>

                        </GridItem>
                        <GridItem w='100%' border="1px solid" borderColor="rgb(233,233,233)" padding={{base:"1rem",md:"1rem",sm:"0.8rem"}}>
                            <form padding="4rem" onSubmit={handleSubmit}>
                                <FormControl width="70%" margin="auto">
                                    <FormLabel htmlFor="fullName" fontSize={{base:"16px",md:"16px",sm:"12px"}}>Full Name</FormLabel>
                                    <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={paymentDetails.fullName}
                                        onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                        required 
                                    />
                                </FormControl>
                                <FormControl width="70%" margin="auto">
                                    <FormLabel htmlFor="address" fontSize={{base:"16px",md:"16px",sm:"12px"}}>Delivery Address</FormLabel>
                                    <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={paymentDetails.address}
                                        onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                        required
                                    />
                                </FormControl>
                                <FormControl width="70%" margin="auto">
                                    <FormLabel htmlFor="phone" fontSize={{base:"16px",md:"16px",sm:"12px"}}>Phone Number</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon children="+91" />
                                        <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={paymentDetails.phone}
                                        onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                        required
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl width="70%" margin="auto">
                                    <FormLabel fontSize={{base:"16px",md:"16px",sm:"12px"}}>
                                        Payment Method
                                    </FormLabel>
                                    <Select  
                                        id='selectOption'
                                        placeholder='Payment Method'  
                                        border="1px solid" 
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}} 
                                        borderColor="rgb(150, 150, 150)" 
                                        value={selectedOption}
                                        onChange={handleOptionChange}
                                        required
                                    >
                                        <option value='Card'>Card</option>
                                        <option value='Paytm'>Paytm</option>
                                        <option value='Google Pay'>Google Pay</option>
                                        <option value='Cash on Delivery'>Cash on Delivery</option>
                                    </Select>
                                </FormControl>
                                {selectedOption === "Card" && (
                                <FormControl  width="70%" margin="auto">
                                    <FormLabel htmlFor="cardNumber" fontSize={{base:"16px",md:"16px",sm:"12px"}}>Card Number</FormLabel>
                                    <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={paymentDetails.cardNumber}
                                        onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                    />
                                </FormControl>
                                )}
                                {selectedOption === "Card" && (
                                <FormControl width="70%" margin="auto">
                                    <FormLabel htmlFor="expirationDate" fontSize={{base:"16px",md:"16px",sm:"12px"}}>Expiration Date</FormLabel>
                                    <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="expirationDate"
                                        name="expirationDate"
                                        // value={paymentDetails.expirationDate}
                                        // onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                        required
                                    />
                                </FormControl>
                                )}
                                {selectedOption === "Card" && (
                                <FormControl width="70%" margin="auto">
                                    <FormLabel htmlFor="cvv" fontSize={{base:"16px",md:"16px",sm:"12px"}}>CVV</FormLabel>
                                    <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        // value={paymentDetails.cvv}
                                        // onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                        required
                                    />
                                </FormControl>
                                )}
                                {(selectedOption === "Paytm" || selectedOption === "Google Pay") && (
                                <FormControl width="70%" margin="auto">
                                    <FormLabel htmlFor="UPI" fontSize={{base:"16px",md:"16px",sm:"12px"}}>UPI ID</FormLabel>
                                    <Input
                                        border="1px solid" borderColor="rgb(150, 150, 150)"
                                        type="text"
                                        id="UPI"
                                        name="UPI"
                                        // value={paymentDetails.cvv}
                                        // onChange={handleChange}
                                        fontSize={{base:"16px",md:"16px",sm:"12px"}}
                                        required
                                    />
                                </FormControl>
                                )}
                                <br></br>
                                <Flex margin="auto" w="70%" padding="0.5rem">
                                    <Button border="1px solid" isDisabled={selectedOption.length === 0} borderColor="rgb(150, 150, 150)" bg="#20a87e" w="70%" margin="auto" type="submit" fontSize={{base:"16px",md:"16px",sm:"12px"}} onClick={dataCheck ? onOpen : null}>Place Order</Button>
                                </Flex>

                            </form>
                        </GridItem>
                        
                    </Grid>
                </Box>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Order Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <HStack>
                                <Box>
                                    <p>Contact Details :</p>
                                    <p><Text as="b">{paymentDetails.fullName}</Text></p>
                                    <p><Text as="cite">{paymentDetails.address}</Text></p>
                                    <p><Text as="cite">{paymentDetails.city}</Text></p>
                                </Box>
                                <Spacer></Spacer>
                                <Box>
                                    <p>Payment Details:</p>
                                    <p><Text >{paymentDetails.cardNumber}</Text></p>
                                </Box>
                            </HStack>
                            <br></br>
                            <p>Congratulations your order with order id #201216 is successfully placed</p>


                        </ModalBody>
                        <ModalFooter>
                            <Link to="/"><Button colorScheme='blue' mr={1} onClick={onClose}>Confirm</Button></Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </VStack>

        </Box>
    )
}

export default Checkout