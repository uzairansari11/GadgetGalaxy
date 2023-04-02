import React from 'react'
import {

    Button,
    Card,
    CardBody,
    Flex,
    HStack,
    Image,
    Stack,
    Text,
    useBreakpointValue,


} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { handleQuantity, handleRemove } from '../../redux/usercart/action';
import { DeleteIcon } from '@chakra-ui/icons'

const SingleCartCard = ({ product }) => {
    const dispatch = useDispatch()

    const handleQuanityChange = (qty) => {
        // console.log(qty);
        dispatch(handleQuantity(product._id, qty))
    }

    const handleRemoveItem = () => {
        // console.log(product._id)
        dispatch(handleRemove(product._id))
    }

    const fontSize = useBreakpointValue({ base: "md", md: "md", sm: "sm" });

    return (

        <Flex w="100%" h="auto" bg="white" padding="0.5rem">
            <HStack w="100%">
                <Flex margin="auto" w={{ base: "100%", md: "30%", sm: "30%"}}>
                    <Image maxW="100%" bg="white" maxWidth="100%" src={product.Image1}></Image>
                </Flex>
                <Flex margin="auto" h="100%" w={{ base: "100%", md: "70%", sm: "70%" }}>
                    <Card margin="auto" w="95%" border="none" >
                        <CardBody w="100%" >
                            <br></br>
                            <Text textAlign="left" textfamily="MuliLight,Helvetica Neue,Helvetica,Arial, sans-serif" lineHeight="1rem" fontSize={fontSize} color="rgb(35, 21, 53)">{product.Title}</Text>
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

                                <Stack alignSelf="end" direction='column' spacing={6} align='center' width="70%">
                        <Button

                            padding="0.7rem"
                            //border="1px solid black"
                            // borderRadius="0.2rem"
                            bg="transparent"
                            w="50%"
                            onClick={handleRemoveItem}
                        >
                            <DeleteIcon w={6} h={6}></DeleteIcon>
                        </Button>

                    </Stack>
                            </HStack>                           
                        </CardBody>
                    </Card>
                </Flex>
            </HStack>
        </Flex>


    )
}

export default SingleCartCard