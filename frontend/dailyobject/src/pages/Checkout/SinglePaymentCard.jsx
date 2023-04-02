
import {
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  Text,
 
  
} from '@chakra-ui/react'

const SinglePaymentCard = ({ product }) => {
  

return (

  <Box w="100%"  shadow="md" >
              <HStack w="100%">
                <Image maxW="20%" src={product.Image1}></Image>
                <Card w="60%">
                  <CardBody>
                    <Text>{product.Title}|Brand: {product.Brand}</Text>
                    <Text>Quantity: {product.Quantity}</Text>
                    <Text>Expected Delivery - within 15 days</Text>
                  </CardBody>
                </Card>
                <Box w="20%" justifyContent="bottom">
                  <Text as="b" textAlign="right" ml="0.5rem">₹{product.Discount_price * product.Quantity}</Text>
                    

                </Box>
              </HStack>
            </Box>
            
                                
  
)
}

export default SinglePaymentCard