import { Flex, Box, Text, Button,Image} from "@chakra-ui/react";

import { useState } from "react";
import HoverImage from "react-hover-image";
import { useNavigate } from "react-router-dom";
const AllProductsCart = ({
	Image1,
	Image2,
	Title,
	Brand,
	Discount_price,
	Original_price,_id
}) => {
	const [wishlist, setwishlist] = useState(true);
	const navigate=useNavigate()
	let token=localStorage.getItem("token")

const hadleidcheck=(Title)=>{
	if(token===null){
		alert("Please login first")
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
				alert("Product Alreacy  Added In Cart")
				
			}else{
				handlesumit()
			}
			
            })
            .catch(err=>console.log(err))
	}
     }
    
const handlesumit=()=>{

		let payload={
			Image1: Image1,
			Title: Title,
			Brand: Brand,
			Discount_price: Discount_price,
			Quantity:1
		}
		fetch("http://localhost:8080/cart/add",{
			method:"POST",
			headers:{
				"Authorization":`Bearer ${token}`,
				"Content-type":"application/json"
			},
			body:JSON.stringify(payload)
		}).then(res=>res.json())
		.then(res=>{
			
			    alert(res.msg)
		
		})
		.catch(err=>{
			alert(err.message)
			console.log(err)})
	   
	 }
	return (
		<>
	
		<Box>
			
			<Flex alignItems="center" justifyContent="center">
				<Box
					backgroundColor={"#fafafa"}
					maxW="sm"
					borderWidth="1px"
					rounded="lg"
					shadow="lg"
					position="relative"
					// h={{lg:"573px",md:"400px",sm:"350px"}}
				>
					{wishlist ? (
						<Image
							src="https://icon-library.com/images/wishlist-icon/wishlist-icon-19.jpg"
							size="10px"
							position="absolute"
							top={2}
							right={2}
							w="10%"
							onClick={() => setwishlist(!wishlist)}
						/>
					) : (
						<Image
							src="https://pngimg.com/d/heart_PNG51349.png"
							size="10px"
							position="absolute"
							top={2}
							right={2}
							w="9%"
							onClick={() => setwishlist(!wishlist)}
						/>
					)}

					<HoverImage
						src={Image1}
						hoverSrc={Image2}
						alt={`Picture of `}
						roundedTop="xl"
						onClick={() => navigate(`/productdetails/${_id}`)}
					/>

					<Box backgroundColor={"white"} p="6">
						<Flex mt="1" justifyContent="space-between" alignContent="center">
							<Box
								fontSize="2xl"
								fontWeight="semibold"
								as="h4"
								lineHeight="tight"
								isTruncated
							></Box>
						</Flex>
						<Text h="80px" fontSize={{md:"10px",lg:"lg"}} textAlign={"center"}>{Title}</Text>
						<Flex mt="10px" justifyContent={"space-evenly"}>
							<Text fontSize={{md:"17px",lg:"lg"}} fontWeight={"bold"} >
								Rs.{Discount_price}
							</Text>
							<Box color={"gray.800"}>
								<Text fontSize={{md:"17px",lg:"lg"}}
									color={"rgb(164, 161, 161)"}
									fontWeight={"bold"}
									
								>
									<s>{Original_price}</s>
								</Text>
							</Box>
						</Flex>
						<Flex mt="5%" >
							<Button
								bg="#20a87e"
								color={"white"}
								w="85%"
								m="auto"
								colorScheme="green"
								onClick={()=>hadleidcheck(Title)}
							>
								<Text>Add To Cart </Text>
								<Image
									ml="5%"
									src="https://images.dailyobjects.com/marche/icons/Bag.png?tr=cm-pad_resize,v-2,w-16,h-16,dpr-1"
								/>
							</Button>
						</Flex>
					</Box>
				</Box>
			</Flex>
		</Box>
		
		
		</>
	);
};

export default AllProductsCart;
