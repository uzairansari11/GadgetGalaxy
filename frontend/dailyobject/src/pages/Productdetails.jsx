import { Box,Image ,Text,Button,InputGroup,Input,InputRightAddon, Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalBody,
      ModalCloseButton,useDisclosure} from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDetails=()=>{

      const { isOpen, onOpen, onClose } = useDisclosure()
      const [data,setdata]=useState({})
      const location=useLocation()
      let names = location.pathname;
      const last = names.split("/");
       let x = last[last.length - 1]
  useEffect(()=>{
      axios.get(`http://localhost:8080/products/${x}`)
      .then((res) => setdata(res.data))
  },[x])


 const handlesumit=()=>{
      let payload={
            Image1: data.Image1,
            Title: data.Title,
            Brand: data.Brand,
            Discount_price: data.Discount_price,
            Quantity:1
      }
console.log(payload)
      fetch("http://localhost:8080/cart/add",{
            method:"POST",
            headers:{
                  'Authorization': "Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI2Zjg0OWQxMTE5NWUzNWNiYWEwMjUiLCJpYXQiOjE2ODAyNzY4NTZ9.bsZ7IUYTFaZw3l8WfLP_4_yqbodiGEf843SF8kfhTxI",
                  "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
      }).then(res=>res.json())
      .then(res=>{
            console.log(res)
            alert(res.msg)
      })
      .catch(err=>console.log(err))
 }
      return(
            <>
            <Box display={"flex"}>
           <Box w="50%">
                  <Box  backgroundColor={"#fafafa"}>
                        {/* <Carousel backgroundColor={"#fafafa"} infiniteLoop useKeyboardArrows autoPlay>
                <Box>
                    <Image src={data.Image1} />
                </Box>
                <Box>
                    <Image src={data.Image2} />
                </Box>
            </Carousel> */}
            <Image src={data.Image1}/>
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
                        <Button bg="#20a87e" colorScheme={"green"}  color={"white"} display={"block"} w="65%" m="auto" mt="8%"onClick={handlesumit}>ADD TO CART</Button>
                        <InputGroup color={"gray.300"} m="auto" mt="7%" w="65%" border={"none"}>
   
                         <Input backgroundColor={"#fafafa"} variant='unstyled'  focusBorderColor='#20a87e' placeholder='Enter Pincode To Check Delivery' />
                            <InputRightAddon ml="0%" border={"1px solid #fafafa"}   children='CHECK' />
                     </InputGroup>
                     
                     <Box  w="65%" borderBottom={"1px solid #C4C4C4"}  onClick={onOpen} display="flex" m="auto" mt='2%'>
                      <Text mt="20px">Product Details</Text><Text ml="auto" mt="auto" ><ArrowForwardIcon /></Text>
                      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
       h="200px"
       size={"2xl"}
      >
        <ModalOverlay  color="red"/>
        <ModalContent>
          <ModalHeader>PRODUCT DETAILS</ModalHeader>
          <ModalCloseButton bg="white" border={"1px solid"}/>

          <ModalBody>
          <Text>{data.Product_details}</Text>
          </ModalBody>
          <ModalBody>
          <li>High-grade PVC protective bumper case for dial with durable and shockproof TPU Watchand.</li>
          <li>Offers consolidated and all-round protection for your Apple Watch.</li>
          <li>Precise cutouts for dial and buttons for easy and quick access to all functions.</li>
          <li>Smooth PVC case safeguards the screen, edges and dial.</li>
          <li>Soft, breathable strap provides long-lasting comfort.</li>
          <li>The versatile length of the adjustable strap fits almost all wrists.</li>
          <li>Let’s you charge your Watch without removing the bumper case.</li>
           <li>Easy two step installation and removal.</li>
           <li>Compatible with all Apple Watch Series 1-6 & SE (40/44 mm).</li>
          </ModalBody>
        </ModalContent>
      </Modal>
                    </Box>
                    <Box  onClick={onOpen} w="65%" borderBottom={"1px solid #C4C4C4"}  display="flex" m="auto" mt='2%'>
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

