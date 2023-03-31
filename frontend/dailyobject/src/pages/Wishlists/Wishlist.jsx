import React, { useEffect, useState } from "react";
import { NotFoundImage } from "../../components/404/404";
import Footer from "../../components/Footer/Footer";
import "./Style.css";
import Navbar from "../../components/Navbar/Navbar";
import AllProductsCart from "../Product/AllProductsCart.jsx";
import axios from "axios";
import { Box, Button, Grid, Text, Image } from "@chakra-ui/react";

const Wishlist = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/products`)
            .then((res) => setData(res.data));
    }, []);
    return (
        <div className="wish_main">
            <Navbar />
            <h1>Wishlist Items</h1>
            <div className="wish_tile">
                <Box>
                    <Grid
                        templateColumns={"repeat(4, 1fr)"}
                        gap={7}
                        w="95%"
                        m="auto">
                        {data.map((ele) => (
                            <AllProductsCart key={ele._id} {...ele} />
                        ))}
                    </Grid>
                </Box>
            </div>
            <div className="wish_result">
                <NotFoundImage />
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
