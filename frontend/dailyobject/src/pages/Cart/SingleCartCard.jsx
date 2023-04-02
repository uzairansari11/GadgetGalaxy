import React, { useState } from 'react'
import {

    Button,
    Card,
    CardBody,
    Flex,
    HStack,
    Image,
    Select,
    Spacer,
    Stack,
    Text,


} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { handleQuantity, handleRemove } from '../../redux/usercart/action';
import { DeleteIcon } from '@chakra-ui/icons'

const SingleCartCard = ({ product }) => {
    const [qty, setQty] = useState(product.Quantity);
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch()

    const handleQuanityChange = (qty) => {
        // console.log(qty);
        dispatch(handleQuantity(product._id, qty))
    }

    const handleRemoveItem = () => {
        // console.log(product._id)
        dispatch(handleRemove(product._id))
    }

    return (

        <Flex border="1px solid" borderColor="#D9E1EA" w="100%" h="auto" bg="white" borderRadius="5px" padding="0.5rem">
            <HStack w="100%">
                <Flex margin="auto" w="30%" border="1px solid" borderColor="#D9E1EA" borderRadius="5px">
                    <Image maxW="100%" bg="white" maxWidth="100%" src={product.Image1}></Image>
                </Flex>
                <Flex margin="auto" h="100%" w="50%">
                    <Card margin="auto" w="95%" >
                        <CardBody w="100%"  >
                            <br></br>
                            <Text textAlign="left" textfamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem" color="rgb(35, 21, 53)">{product.Title}</Text>
                            <br></br>
                            
                            <Text textAlign="left" textfamily="MuliBold,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem">₹{product.Discount_price * product.Quantity}</Text>
                            <br></br>
                            <HStack>
                            {/* <Text as="b">Quantity:</Text> */}
                                <Button
                                    fontWeight={"800"}
                                    fontSize="lg"
                                    isDisabled={product.Quantity <= 1}
                                    onClick={() => handleQuanityChange(-1)}
                                >
                                    -
                                </Button>
                                <Button fontWeight={"800"}>{product.Quantity}</Button>
                                <Button
                                    fontWeight={"800"}
                                    fontSize="lg"
                                    isDisabled={product.Quantity >= 5}
                                    onClick={() => handleQuanityChange(+1)}
                                >
                                    +
                                </Button>

                               
                            </HStack>
                           
                            {/* <Text textAlign="left" textfamily="MuliSemiBold,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem" color="rgb(136, 99, 251)">Delivery by - 23rd Jan</Text> */}
                            {/* <HStack w="100%">
                            <Text as="b">Quantity:</Text>
                                <Select w="15" size="sm" border="none" value={qty} onChange={e => setQty(e.target.value)} onClick={handleQuanityChange}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Select>

                            </HStack> */}
                        </CardBody>
                    </Card>
                </Flex>
                <Flex margin="auto" h="100%" w="30%">
                    <Stack alignSelf="end" direction='column' spacing={6} align='center' width="70%">
                        <Button

                            padding="0.7rem"
                            border="1px solid black"

                            bg="transparent"
                            w="50%"
                            borderRadius="0.2rem"
                            onClick={handleRemoveItem}
                        >
                            <DeleteIcon w={6} h={6}></DeleteIcon>
                        </Button>

                    </Stack>
                </Flex>
            </HStack>
        </Flex>


    )
}

export default SingleCartCard