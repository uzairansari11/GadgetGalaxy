import { Box, Button, Grid, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import AllProductsCart from "./AllProductsCart";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { useLocation } from "react-router-dom";



const AllProducts = () => {
    const location=useLocation()
    const [filters, setfilters] = useState(false);
    const [data, setdata] = useState([]);
    const [cases,setcases]=useState(false)
    let names = location.pathname;
    const last = names.split("/");
    let x = last[last.length - 1]

    useEffect(() => {
        if(x==="Passport%20wallet"||x==="Airpods%20pro%20Cases" ||x==="Eyewear%20cases"||
        x==="Ipad%20cover"|| x==="Laptop%20cover"|| x==="Phone%20Cases"){
            setcases(false)
        }else{
          setcases(true)
        }
        axios
            .get(`http://localhost:8080/products?Category=${x}`)
            .then((res) => setdata(res.data));
    }, [x]);

    //sort
    const lowtohigh = () => {
        const numDescending = [...data].sort(
            (a, b) => a.Discount_price - b.Discount_price
        );
        setdata(numDescending);
    };

    const hightolow = () => {
        const numDescending = [...data].sort(
            (a, b) => b.Discount_price - a.Discount_price
        );
        setdata(numDescending);
    };

    //category
    const productcategory = (category) => {
        setdata([]);
        axios
            .get(`http://localhost:8080/products?Category=${category}`)
            .then((res) => setdata(res.data));
    };

    //Allproduct show
    const Allproctsshow = () => {
        setdata([]);
        axios
            .get(`http://localhost:8080/products?Category=Watchbands&Category=Charging Solutions&Category=Macbook Sleeve&Category=Messanger Bags&Category=Eyewear&Category=Desks`)
            .then((res) => setdata(res.data));
    }

    const Allproctsshowcase = () => {
        setdata([]);
        axios
            .get(`http://localhost:8080/products?Category=Passport wallet&Category=Airpods pro Cases&Category=Eyewear cases&Category=Ipad cover&Category=Laptop cover&Category=Phone Cases`)
            .then((res) => setdata(res.data));
    }

    return (
        <>
        <Navbar/>
        <Box mt={20}>
            <Box>
                <Image src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" />
            </Box>
           { cases?<Box>
            <Text
                fontSize={"xl"}
                mt="2%"
                fontWeight="bold"
                textAlign={"center"}>
                NEW ARRIVALS
            </Text>
            <Box w={{lg:"55%",md:"95%"}} display={"flex"} gap="2%" m="auto" mt="3%">
                <Box onClick={Allproctsshow}>
                    <Box borderRadius={"50%"} h="61%" w="68px" bg="green">
                        <Text textAlign={"center"} pt="25px" color={"white"}>
                            All
                        </Text>
                    </Box>
                    <Text textAlign={"center"} fontSize={"sm"}>
                        All
                    </Text>
                </Box>

                <Box value="Desks" onClick={() => productcategory("Desks")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        Desks
                    </Text>
                </Box>

                <Box  value="Pedal Backpack"
                    onClick={() => productcategory("Pedal Backpack")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"}>Pedal Backpack</Text>
                </Box>

                <Box
                    value="Charging Solutions"
                    onClick={() => productcategory("Charging Solutions")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        Charging Solutions
                    </Text>
                </Box>
                <Box
                    value="Macbook Sleeve"
                    onClick={() => productcategory("Macbook Sleeve")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        Mackbook Sleeves
                    </Text>
                </Box>
                <Box
                    value="Messanger Bags"
                    onClick={() => productcategory("Messanger Bags")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        Messenger Bags
                    </Text>
                </Box>
                <Box value="Eyewear" onClick={() => productcategory("Eyewear")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/filter/eyewear-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        Eyeswear Cases
                    </Text>
                </Box>
                <Box
                    value="Watchbands"
                    onClick={() => productcategory("Watchbands")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                        Watchbands
                    </Text>
                </Box>
            </Box>
            </Box>:
            <Box>
            <Text
                fontSize={"xl"}
                mt="2%"
                fontWeight="bold"
                textAlign={"center"}>
                CASES & SLEEVES
            </Text>
            <Box w={{lg:"55%",md:"95%"}} display={"flex"} gap="5%" m="auto" mt="3%">
                <Box onClick={Allproctsshowcase}>
                    <Box borderRadius={"50%"} h="55%" w="65px" bg="green">
                        <Text textAlign={"center"} pt="25px" color={"white"}>
                            All
                        </Text>
                    </Box>
                    <Text textAlign={"center"} fontSize={"sm"}>
                        All
                    </Text>
                </Box>

                <Box value="Phone Cases" onClick={() => productcategory("Phone Cases")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/tmp/phone-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                    Phone Cases
                    </Text>
                </Box>

                <Box value="Laptop cover"
                    onClick={() => productcategory("Laptop cover")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/cases-sleeves-intermediate-image.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1"
                    />
                    <Text textAlign={"center"}>Laptop Sleeves</Text>
                </Box>

                <Box
                    value="Airpods pro Cases"
                    onClick={() => productcategory("Airpods pro Cases")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/airpod-case-cover-updated.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                    Airpods Cases Cover
                    </Text>
                </Box>
                <Box
                    value="Ipad cover"
                    onClick={() => productcategory("Ipad cover")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/ipad-new.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                    Ipad covers & Sleeves
                    </Text>
                </Box>
                <Box
                    value="Passport wallet"
                    onClick={() => productcategory("Passport wallet")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/passport.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                    Passport Wallets
                    </Text>
                </Box>
                <Box value="Eyewear cases" onClick={() => productcategory("Eyewear cases")}>
                    <Image
                        borderRadius={"50%"}
                        m="auto"
                        src="https://images.dailyobjects.com/marche/icons/category/eyewear-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1"
                    />
                    <Text textAlign={"center"} fontSize={"sm"}>
                    Eyewear cases
                    </Text>
                </Box>

            </Box>
            </Box>}

            <Button
                fontSize={"lg"}
                display={"block"}
                ml="auto"
                mr="4%"
                mb="2%"
                colorScheme="teal"
                variant="link"
                onClick={(e) => setfilters(!filters)}>
                Filters
            </Button>
            <Box display={"flex"}>
                <Box>
                    <Grid
                        templateColumns={{lg:filters ? "repeat(3, 1fr)" : "repeat(4, 1fr)",md:filters ? "repeat(2, 1fr)" : "repeat(3, 1fr)",md:filters ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}}
                        gap={7}
                        w="95%"
                        m="auto">
                        {data.map((ele) => (
                            <AllProductsCart key={ele._id} {...ele} />
                        ))}
                    </Grid>
                </Box>
                {filters && (
                    <Box w={"25%"}>
                        <Box pl="20px">
                            <Button
                                borderRadius={"25px"}
                                colorScheme="teal"
                                backgroundColor="#20a87e"
                                variant="solid"
                                display={"block"}
                                mt="15px"
                                mr="auto">
                                Sort
                            </Button>
                            <Button
                                colorScheme="white"
                                variant="link"
                                display={"block"}
                                mt="20px"
                                mr="auto"
                                onClick={lowtohigh}>
                                Price: Low To High
                            </Button>
                            <Button
                                colorScheme="white"
                                variant="link"
                                display={"block"}
                                mt="20px"
                                mr="auto"
                                onClick={hightolow}>
                                Price: High To Low
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
        <Footer/>
        </>
    );
};

export default AllProducts;
