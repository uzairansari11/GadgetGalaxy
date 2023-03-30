import { Box,Image } from "@chakra-ui/react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const ProductDetails=()=>{
      return(
            <>
            <Box display={"flex"}>
                  <Box w="50%" backgroundColor={"#fafafa"}><Carousel backgroundColor={"#fafafa"} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://images.dailyobjects.com/marche/product-images/1801/blue-plunge-apple-watchband-42-44-45-49mm-images/Blue-Plunge-Apple-WatchBand-3.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1" />
                </div>
                <div>
                    <img src="https://images.dailyobjects.com/marche/product-images/1801/blue-plunge-apple-watchband-42-44-45-49mm-images/Blue-Plunge-Apple-WatchBand-1.png?tr=cm-pad_resize,v-2,w-800,h-707,dpr-1" />
                </div>
            </Carousel></Box>
                  <Box w="50%"></Box>
            </Box>
            </>
      )
}

