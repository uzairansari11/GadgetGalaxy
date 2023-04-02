import { Box,Image ,Text,Button,InputGroup,Input,InputRightAddon, Modal,
      ModalOverlay,
      ModalContent,
      ModalHeader,
      ModalBody,
      ModalCloseButton,useDisclosure,useToast,Spinner} from "@chakra-ui/react"

import {ArrowForwardIcon} from '@chakra-ui/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./../components/Navbar/Navbar"
import Footer from "./../components/Footer/Footer"
export const ProductDetails=()=>{

      const { isOpen, onOpen, onClose } = useDisclosure()
      const [data,setdata]=useState({})
      const location=useLocation()
      const toast = useToast()
      const [isButLoading, setIsButLoading] = useState(false);
      let names = location.pathname;
      const last = names.split("/");
       let x = last[last.length - 1]
       let token=localStorage.getItem("token")
  useEffect(()=>{
      axios.get(`http://localhost:8080/products/${x}`)
      .then((res) => setdata(res.data))
  },[x])

  const hadleidcheck=(Title)=>{
      
	if(token===null){
            toast({
                  title: "Please login first",
                  description: "",
                  status: "error",
                  duration: 2500,
                  isClosable: true,
                  position: "top",
                  
              })
              
		
	   }else{
      fetch("http://localhost:8080/cart",{
           headers:{
                 "Authorization":`Bearer ${token}`   
           },
     }).then(res=>res.json())
     .then(res=>{
           
           let datacheck=(res) 
           
           const alreadyAdded=datacheck.filter((el)=>el.Title===Title)
            
           if(alreadyAdded.length>=1){
                 
                 toast({
                  title: "Product Alreacy  Added In Cart",
                  description: "",
                  status: "error",
                  duration: 2500,
                  isClosable: true,
                  position: "top",
                  
              })
             
           }else{
                 handlesumit()
           }
           
     })
     .catch(err=>console.log(err))
}
}
 const handlesumit=()=>{
      let payload={
            Image1: data.Image1,
            Title: data.Title,
            Brand: data.Brand,
            Discount_price: data.Discount_price,
            Quantity:1
      }

      fetch("http://localhost:8080/cart/add",{
            method:"POST",
            headers:{
                  'Authorization': `Bearer ${token}`,
                  "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
      }).then(res=>res.json())
      .then(res=>{
            setIsButLoading(true) 
            setTimeout(() => {
                  setIsButLoading(false)     
                  toast({
                        title: `${res.msg}`,
                        description: "",
                        status: "success",
                        duration: 2500,
                        isClosable: true,
                        position: "top",
                    })
             
            }, 2000);
            
           
      })
      .catch(err=>console.log(err))
 }
      return(
            <>
            <Navbar/>
            <Box>
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
                        <Text fontWeight={"bold"} fontSize={{lg:"2xl",md:"xl"}} textAlign={"center"} m="auto" mt="30%">{data.Title}</Text>
                     <Text m="auto" mt="3%" fontSize="xl" fontWeight={"400"} w="70%">{data.Product_details}</Text>
                  </Box>
            </Box>
                  <Box w="50%" mt={{lg:'8%',md:"1%"}}>
                        <Box>
                        <Text fontSize={{lg:"2xl",md:"xl"}} fontWeight="400" textAlign={"center"}>{data.Title}</Text>
                        <Box display={"flex"} mt="2%">
                              <Text fontSize={"2xl"} ml="18%"   fontWeight="500">Rs.{data.Discount_price}</Text>
                              <Text  fontSize={"2xl"} ml="3%" color={"rgb(164, 161, 161)"}   fontWeight="500"><s>{data.Original_price}</s></Text>
                              <Text mt="auto" mb="auto" fontSize={"md"} ml="2%" color={"rgb(164, 161, 161)"}  >Inclusive of all taxes</Text>
                        </Box>
                        <Button bg="#20a87e" colorScheme={"green"}  color={"white"} display={"block"} w="65%" m="auto" mt="8%"onClick={()=>hadleidcheck(data.Title)}>
                              
                        {!isButLoading &&
                                     `ADD TO CART`}
                                {isButLoading && (
                                    <Spinner
                                        thickness="2px"
                                        speed="0.50s"
                                        emptyColor="gray.200"
                                        color="black"
                                        size="md"
                                    />
                                )}
                                        
                              </Button>
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
            <Box w="100%" display={"flex"} m="auto" mt="7%" gap={"30px"} overflowX={"auto"}>
                <Box ml="2%" mb="30px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w="15%">
                          <Text mt="5%" fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>All Reviews </Text>
                          <Text mt="5%" fontSize={"xl"} fontWeight={"bold"} textAlign={"center"}>5.0</Text>
                          <Box mt="5%" >
                              <Image m="auto" w="70%" src="data:image/jpeg;base64,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"/>
                          </Box>
                          <Text mt="5%" textAlign={"center"}>3 Reviews</Text>
                          <Button mb="5%" mt="5%" display={'bolck'}  ml="20%" bg="green" color={"white"}>Write A Review</Button>
                  </Box> 
                  <Box mb="30px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w="15%">
                          <Text mt="5%" fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>KARANPREET SINGH</Text>
                          <Text mt="5%" fontSize={"md"}  textAlign={"center"}>Verified Buyer</Text>
                          <Box mt="5%" >
                              <Image m="auto" w="70%" src="data:image/jpeg;base64,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"/>
                          </Box>
                          <Text mt="5%" textAlign={"center"}>Good quality and size.</Text>
                         
                  </Box>   
                  <Box mb="30px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w="15%">
                          <Text mt="5%" fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>AKSHAY PRADHAN</Text>
                          <Text mt="5%" fontSize={"md"}  textAlign={"center"}>Verified Buyer</Text>
                          <Box mt="5%" >
                              <Image m="auto" w="70%" src="data:image/jpeg;base64,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"/>
                          </Box>
                          <Text mt="5%" textAlign={"center"}>It gives good protection to the sides and also looks like a GShock watch belt.</Text>
                         
                  </Box>  
                  <Box mb="30px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w="15%">
                          <Text mt="5%" fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>TAMANNA JORRA</Text>
                          <Text mt="5%" fontSize={"md"}  textAlign={"center"}>Verified Buyer</Text>
                          <Box mt="5%" >
                              <Image m="auto" w="70%" src="data:image/jpeg;base64,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"/>
                          </Box>
                          <Text mt="5%" textAlign={"center"}>Bag is really aesthetic, holds "khatarnaak" quality, easily washable. Happy with the purchase.</Text>
                         
                  </Box> 
                  <Box mb="30px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w="15%">
                          <Text mt="5%" fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>N S VARUN KUMAR</Text>
                          <Text mt="5%" fontSize={"md"}  textAlign={"center"}>Verified Buyer</Text>
                          <Box mt="5%" >
                              <Image m="auto" w="70%" src="data:image/jpeg;base64,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"/>
                          </Box>
                          <Text mt="5%" textAlign={"center"}>Perfect Fit for daily use.</Text>
                         
                  </Box>  
                  <Box mb="30px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} w="15%">
                          <Text mt="5%" fontSize={"lg"} fontWeight={"bold"} textAlign={"center"}>SAI GANESH</Text>
                          <Text mt="5%" fontSize={"md"}  textAlign={"center"}>Verified Buyer</Text>
                          <Box mt="5%" >
                              <Image m="auto" w="70%" src="data:image/jpeg;base64,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"/>
                          </Box>
                          <Text mt="5%" textAlign={"center"}>Good product</Text>
                         
                  </Box>   
                  
                  
                  
            </Box>
            </Box>
            <Footer/>
            </>
      )
}

