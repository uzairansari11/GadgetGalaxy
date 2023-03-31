import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
    Box,
    Button,
    Container,
    Flex,
    Image,
    Spacer,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import Carousel from "better-react-carousel";
import "./home.css";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
    return (
        <>
            <Box>
                <Navbar />
            </Box>
            <Box className="main_box">
                <Box className="top_image_box">
                    <Box>
                        <Image src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" />
                    </Box>
                    <br />
                    <Box>
                        <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/pangea_collection_homepage_desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                    </Box>
                    <br />
                    <Box>
                        <Image src="https://images.dailyobjects.com/marche/assets/images/other/watchband-homepage-sdesktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                    </Box>
                    <br />
                </Box>
                <Box className="carousel_text_button_box" p={"2rem"}>
                    <Flex>
                        <VStack
                            textAlign={"left"}
                            className="text_button"
                            align={"center"}
                            justify={"center"}>
                            <Text as={"b"} fontSize={"3xl"}>
                                NEW ARRIVALS
                            </Text>
                            <Text>Check out our newest Launches!</Text>
                            <Button
                                color="white"
                                bg="blue.500"
                                boxShadow={
                                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                                }
                                _hover={{ bg: "blue.700" }}>
                                Shop New Arrivals
                            </Button>
                        </VStack>
                        <Spacer />
                        <Box className="carousel_box">
                            <Carousel
                                cols={4}
                                rows={1}
                                gap={5}
                                mobileBreakpoint={767}
                                scrollSnap={true}>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/halo-magsafe-case-with-stand-new-arrival-homepage-image.png?tr=cm-pad_resize,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/convoy-leather-adapter-case-new-arrival-homepage-image.png?tr=cm-pad_resize,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/Desktop-banner_backpacks-updated.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
                <br />
                <Box>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/deals-of-the-day-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
                <br />
                <Box className="carousel_text_button_box" p={"2rem"}>
                    <Flex>
                        <VStack
                            textAlign={"left"}
                            className="text_button"
                            align={"center"}
                            justify={"center"}>
                            <Text as={"b"} fontSize={"3xl"}>
                                SHOP CATEGORIES
                            </Text>
                            <Container textAlign={"center"}>
                                Now browse our selection of carefully curated
                                products in sorted categories
                            </Container>
                        </VStack>
                        <Spacer />
                        <Box className="carousel_box">
                            <Carousel
                                cols={4}
                                rows={1}
                                gap={5}
                                mobileBreakpoint={767}
                                scrollSnap={true}>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/crossbody-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/deskmat-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image
                                        height={"300px"}
                                        objectFit="cover"
                                        src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Box>
                    </Flex>
                </Box>
                <br />
                <Box>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
                <Box>
                    <Flex
                        justifyContent={"space-between"}
                        px={"3rem"}
                        py={"2rem"}>
                        <Text as={"b"} fontSize={"2xl"} letterSpacing={"2px"}>
                            COLLECTIONS
                        </Text>
                        <Button color={"black"} variant={"link"}>
                            View All
                        </Button>
                    </Flex>
                    <Flex width={"95%"} margin={"auto"} gap={5}>
                        <VStack>
                            <Image
                                boxSize="480px"
                                objectFit={"cover"}
                                src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-1"
                            />
                            <Text as={"b"} fontSize={"2xl"}>
                                08:01 COLLECTION
                            </Text>
                            <Text>
                                A collection featured to preserve all brief
                                encounters on your everyday journey
                            </Text>
                            <Button
                                color={"black"}
                                variant={"link"}
                                fontSize={"sm"}>
                                Shop Now
                            </Button>
                        </VStack>
                        <VStack>
                            <Image
                                boxSize="480px"
                                objectFit={"cover"}
                                src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-1"
                            />
                            <Text as={"b"} fontSize={"2xl"}>
                                TRAP COLLECTION
                            </Text>
                            <Text>
                                Urban-Inspired carriers, made for free-spirited
                                and powerful wearers.
                            </Text>
                            <Button
                                color={"black"}
                                variant={"link"}
                                fontSize={"sm"}>
                                Shop Now
                            </Button>
                        </VStack>
                        <VStack>
                            <Image
                                boxSize="480px"
                                objectFit={"cover"}
                                src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-1"
                            />
                            <Text as={"b"} fontSize={"2xl"}>
                                PLATFORM COLLECTION
                            </Text>
                            <Text>
                                Designed with minimal geometric innovtions to
                                add comfort to your workspace.
                            </Text>
                            <Button
                                color={"black"}
                                variant={"link"}
                                fontSize={"sm"}>
                                Shop Now
                            </Button>
                        </VStack>
                    </Flex>
                </Box>
                <br />
                <Box>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
                <br />
                <Flex width={"95%"} margin={"auto"}>
                    <VStack>
                        <Image src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1" />
                        <Text as={"b"} fontSize={"2xl"}>
                            CHARGING SOLUTIONS
                        </Text>
                        <Button
                            color={"black"}
                            variant={"link"}
                            fontSize={"sm"}>
                            Shop Now
                        </Button>
                    </VStack>
                    <Spacer />
                    <VStack>
                        <Image src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1" />
                        <Text as={"b"} fontSize={"2xl"}>
                            WORK ESSENTIALS
                        </Text>
                        <Button
                            color={"black"}
                            variant={"link"}
                            fontSize={"sm"}>
                            Shop Now
                        </Button>
                    </VStack>
                </Flex>
                <br />
                <Box>
                    <Flex
                        justifyContent={"space-between"}
                        px={"3rem"}
                        py={"2rem"}>
                        <Text as={"b"} fontSize={"2xl"} letterSpacing={"2px"}>
                            STUDIO COLLECTIONS
                        </Text>
                    </Flex>
                    <Flex width={"95%"} margin={"auto"} gap={5}>
                        <VStack>
                            <Image
                                boxSize="480px"
                                objectFit={"cover"}
                                src="https://images.dailyobjects.com/marche/assets/images/other/homepage-dreamscape-collection-banner.jpg?tr=cm-pad_crop,v-2,dpr-1"
                            />
                            <Text as={"b"} fontSize={"2xl"}>
                                DREAMSCAPE
                            </Text>
                            <Text>
                                A vivid dream journal that lets you carry your
                                daydreaming stance into real life.
                            </Text>
                            <Button
                                color={"black"}
                                variant={"link"}
                                fontSize={"sm"}>
                                Shop Now
                            </Button>
                        </VStack>
                        <VStack>
                            <Image
                                boxSize="480px"
                                objectFit={"cover"}
                                src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,dpr-1"
                            />
                            <Text as={"b"} fontSize={"2xl"}>
                                ZODIAC
                            </Text>
                            <Text>
                                Zodiac Collection reflects the unique
                                personality of every individual out there!
                            </Text>
                            <Button
                                color={"black"}
                                variant={"link"}
                                fontSize={"sm"}>
                                Shop Now
                            </Button>
                        </VStack>
                        <VStack>
                            <Image
                                boxSize="480px"
                                objectFit={"cover"}
                                src="https://images.dailyobjects.com/marche/assets/images/other/homepage-arcade-collection-banner.jpg?tr=cm-pad_crop,v-2,dpr-1"
                            />
                            <Text as={"b"} fontSize={"2xl"}>
                                PIXEL
                            </Text>
                            <Text>
                                A reflection of modern pop-culture with a
                                vintage appeal that evokes nostalgia.
                            </Text>
                            <Button
                                color={"black"}
                                variant={"link"}
                                fontSize={"sm"}>
                                Shop Now
                            </Button>
                        </VStack>
                    </Flex>
                </Box>
                <br />
                <Box>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
                <br />
                <Box>
                    <Image src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
                </Box>
            </Box>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
