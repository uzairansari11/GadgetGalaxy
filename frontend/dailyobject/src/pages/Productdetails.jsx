import { Box,Image ,Text,Button,InputGroup,Input,InputRightAddon} from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDetails=()=>{
      const [data,setdata]=useState({})
      const location=useLocation()
      let names = location.pathname;
      const last = names.split("/");
       let x = last[last.length - 1]
  useEffect(()=>{
      axios.get(`http://localhost:8080/products/${x}`)
      .then((res) => setdata(res.data))
  },[x])
 console.log(data)
      return(
            <>
            <Box display={"flex"}>
           <Box w="50%">
                  <Box  backgroundColor={"#fafafa"}><Carousel backgroundColor={"#fafafa"} infiniteLoop useKeyboardArrows autoPlay>
                <Box>
                    <Image src={data.Image1} />
                </Box>
                <Box>
                    <Image src={data.Image2} />
                </Box>
            </Carousel>
                  </Box>
                  <Box>
                        <Text fontWeight={"bold"} fontSize="2xl" textAlign={"center"} m="auto" mt="30%">{data.Title}</Text>
                     <Text m="auto" mt="3%" fontSize="xl" fontWeight={"400"} w="70%">{data.Product_details}</Text>
                  </Box>
            </Box>
                  <Box w="50%" mt='8%'>
                        <Box>
                        <Text fontSize={"2xl"} fontWeight="400" textAlign={"center"}>{data.Title}</Text>
                        <Box display={"flex"} mt="2%">
                              <Text fontSize={"2xl"} ml="18%"   fontWeight="500">Rs.{data.Discount_price}</Text>
                              <Text  fontSize={"2xl"} ml="3%" color={"rgb(164, 161, 161)"}   fontWeight="500"><s>{data.Original_price}</s></Text>
                              <Text mt="auto" mb="auto" fontSize={"md"} ml="2%" color={"rgb(164, 161, 161)"}  >Inclusive of all taxes</Text>
                        </Box>
                        <Button bg="#20a87e" colorScheme={"green"}  color={"white"} display={"block"} w="65%" m="auto" mt="8%">ADD TO CART</Button>
                        <InputGroup color={"gray.300"} m="auto" mt="7%" w="65%" border={"none"}>
   
                         <Input backgroundColor={"#fafafa"} variant='unstyled'  focusBorderColor='#20a87e' placeholder='Enter Pincode To Check Delivery' />
                            <InputRightAddon ml="0%" border={"1px solid #fafafa"}   children='CHECK' />
                     </InputGroup>
                     
                     <Box  w="65%" borderBottom={"1px solid #C4C4C4"}  display="flex" m="auto" mt='2%'>
                      <Text mt="20px">Product Details</Text><Text ml="auto" mt="auto" ><ArrowForwardIcon /></Text>
                    </Box>
                    <Box  w="65%" borderBottom={"1px solid #C4C4C4"}  display="flex" m="auto" mt='2%'>
                      <Text mt="20px">Specifications</Text><Text ml="auto" mt="auto" ><ArrowForwardIcon /></Text>
                    </Box>
                    <Box  w="65%" borderBottom={"1px solid #C4C4C4"}  display="flex" m="auto" mt='2%'>
                      <Text mt="20px">Compatibility</Text><Text ml="auto" mt="auto" ><ArrowForwardIcon /></Text>
                    </Box>
                    <Box  w="65%" borderBottom={"1px solid #C4C4C4"}  display="flex" m="auto" mt='2%'>
                      <Text mt="20px">Delivery Time & Returns</Text><Text ml="auto" mt="auto" ><ArrowForwardIcon /></Text>
                    </Box>
                       </Box>
                       <Box  backgroundColor={"#fafafa"} mt="8%">
                        <Image src={data.Image2}/>
                       </Box>
                  </Box>
            </Box>
            </>
      )
}

