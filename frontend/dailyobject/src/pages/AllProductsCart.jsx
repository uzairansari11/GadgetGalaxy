import { Flex,Box,Text, Button, Image} from '@chakra-ui/react';
import { useState } from 'react';
    import HoverImage from "react-hover-image";
const AllProductsCart=({Image1,Image2,Title,Discount_price,Original_price})=>{
  const [wishlist,setwishlist]=useState(true)
      return(
            <Box>
                   <Flex  alignItems="center" justifyContent="center" >
          <Box
          
          backgroundColor={"#fafafa"}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative">
       
             {wishlist?<Image
               src='https://icon-library.com/images/wishlist-icon/wishlist-icon-19.jpg'
              
                size="10px"
                position="absolute"
                top={2}
                right={2}
                w="10%"
                onClick={()=>setwishlist(!wishlist)}
              />:<Image
              
             src="https://pngimg.com/d/heart_PNG51349.png"
               size="10px"
               position="absolute"
               top={2}
               right={2}
               w="9%"
               onClick={()=>setwishlist(!wishlist)}
             />}
          
    
            <HoverImage
              
        
              src={Image1}
              hoverSrc={Image2}
              alt={`Picture of `}
              roundedTop="xl"
            />
    
            <Box backgroundColor={"white"} p="6">
    
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated>
                  
                </Box>
    
              </Flex>
              <Text>{Title}</Text>
              <Flex mt='10px' justifyContent={"space-evenly"} >
                  <Text fontWeight={"bold"} fontSize="lg">Rs.{Discount_price}</Text>
                <Box  color={('gray.800')}>
                   <Text color={"rgb(164, 161, 161)"} fontWeight={"bold"} fontSize="lg"><s>{Original_price}</s></Text>
                </Box>
              </Flex>
              <Flex mt='20px'  >
              <Button bg="#20a87e" color={"white"} w='85%' m='auto'  colorScheme="green" >
                 <Text>Add To Cart </Text><Image ml='5%' src="https://images.dailyobjects.com/marche/icons/Bag.png?tr=cm-pad_resize,v-2,w-16,h-16,dpr-1"/>
                  </Button>
                  
              </Flex>
            </Box>
          </Box>
        </Flex>
       
            </Box>
      )
}


export default AllProductsCart

