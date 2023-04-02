import { useState } from "react";
import { Dz, Sr, Li, Bm, Di, Se } from "./NavComponents";
import "./Navbar.css";
import Logo from "./Gadget.png";
import { Link, useNavigate } from "react-router-dom";
// import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
// import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import {
    Tooltip,
    VStack,
    Button,
    Badge,
    Box,
    HStack,
    Text,
    Toast,
} from "@chakra-ui/react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/userauth/action";
import { getCartData } from "../../redux/usercart/action";
import {useEffect} from 'react'
const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const items = useSelector((store) => store.cartReducer.totalItems);
    // console.log(items) // for Cart items
    const items = useSelector((store) => store.cartReducer.totalItems);
    console.log(items)

    useEffect(() => {
       
        dispatch(getCartData);
    }, [items])
    const isUserLogin = useSelector((store) => store.userAuthReducer.isAuth);
    console.log(isUserLogin);

    const initState = {
        dz: false,
        sr: false,
        li: false,
        bm: false,
        di: false,
        se: false,
        // sy: false,
        // ld: false,
        // or: false,
        // in: false,
        // tr: false,
    };
    const [navCat, setNavCat] = useState(initState);
    const handleMouseLeave = (e, val) => {
        if (e.target.innerText === "NEW ARRIVALS" || val === "NEW ARRIVALS") {
            setNavCat({ ...initState, dz: false });
        } else if (
            e.target.innerText === "CASES & SLEEVES" ||
            val === "CASES & SLEEVES"
        ) {
            setNavCat({ ...initState, sr: false });
        } else if (
            e.target.innerText === "ACCESSORIES" ||
            val === "ACCESSORIES"
        ) {
            setNavCat({ ...initState, li: false });
        } else if (
            e.target.innerText === "BAGS & WALLETS" ||
            val === "BAGS & WALLETS"
        ) {
            setNavCat({ ...initState, bm: false });
        } else if (
            e.target.innerText === "HOME OFFICE" ||
            val === "HOME OFFICE"
        ) {
            setNavCat({ ...initState, di: false });
        } else if (
            e.target.innerText === "COLLECTIONS" ||
            val === "COLLECTIONS"
        ) {
            setNavCat({ ...initState, se: false });
        }
    };
    const handleMouseEnter = (e) => {
        if (e.target.innerText === "NEW ARRIVALS") {
            setTimeout(() => {
                setNavCat({ ...initState, dz: true });
            }, 200);
        } else if (e.target.innerText === "CASES & SLEEVES") {
            setTimeout(() => {
                setNavCat({ ...initState, sr: true });
            }, 200);
        } else if (e.target.innerText === "ACCESSORIES") {
            setTimeout(() => {
                setNavCat({ ...initState, li: true });
            }, 200);
        } else if (e.target.innerText === "BAGS & WALLETS") {
            setTimeout(() => {
                setNavCat({ ...initState, bm: true });
            }, 200);
        } else if (e.target.innerText === "HOME OFFICE") {
            setTimeout(() => {
                setNavCat({ ...initState, di: true });
            }, 200);
        } else if (e.target.innerText === "COLLECTIONS") {
            setTimeout(() => {
                setNavCat({ ...initState, se: true });
            }, 200);
        }
    };
    const handleLogo = () => {
        navigate("/");
    };
    const handleLogout = () => {
        dispatch(userLogout());
        localStorage.removeItem("token");
        Toast({
            title: "Logout Successful",
            description: "",
            status: "success",
            duration: 2500,
            isClosable: true,
            position: "top",
        });
    };

    return (
        <Box
            style={{
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                top: "0",
                backgroundColor: "white",
                borderBottom: "0.1px solid #e2e8f0",
                zIndex: "100",
                // padding: "0px 20px",
            }}>
            <img
                onClick={handleLogo}
                src={Logo}
                alt=""
                style={{ width: "84px", marginLeft: "20px", cursor: "pointer" }}
            />
            <Box
                style={{
                    // position: "fixed",
                    width: "70%",
                    padding: "20px 40px",
                    alignItems: "center",
                }}
                id="catNavMain"
                top={0}>
                <HStack
                    className="scroller"
                    position={"relative"}
                    justify={"space-between"}
                    h={"42px"}
                    fontSize={"15px"}
                    id="stack3"
                    width={"100%"}
                    align={"center"}>
                    <Link
                        to="/products/Watchbands"
                        onMouseEnter={handleMouseEnter}>
                        NEW ARRIVALS
                    </Link>
                    <Link
                        to="/products/Phone Cases"
                        onMouseEnter={handleMouseEnter}>
                        CASES & SLEEVES
                    </Link>
                    <Link
                        to="/products/Laptop cover"
                        onMouseEnter={handleMouseEnter}>
                        ACCESSORIES
                    </Link>
                    <Link
                        to="/products/Macbook Sleeve"
                        onMouseEnter={handleMouseEnter}>
                        BAGS & WALLETS
                    </Link>
                    <Link
                        to="/products/Eyewear"
                        onMouseEnter={handleMouseEnter}>
                        HOME OFFICE
                    </Link>
                    <Link
                        to="/products/Passport wallet"
                        onMouseEnter={handleMouseEnter}>
                        COLLECTIONS
                    </Link>
                    <Link
                        to="/products/Pedal Backpack"
                        onMouseEnter={handleMouseEnter}>
                        GIFTING
                    </Link>
                    {/* <Text onMouseEnter={handleMouseEnter}>
                        Lighting & Decor
                    </Text>
                    <Text onMouseEnter={handleMouseEnter}>Outdoor</Text>
                    <Text onMouseEnter={handleMouseEnter}>Interiors</Text>
                    <Text onMouseEnter={handleMouseEnter}>Trending</Text> */}
                </HStack>
                <Box id="catNav">
                    {navCat.dz && <Dz mouseLeave={handleMouseLeave} />}
                    {navCat.sr && <Sr mouseLeave={handleMouseLeave} />}
                    {navCat.li && <Li mouseLeave={handleMouseLeave} />}
                    {navCat.bm && <Bm mouseLeave={handleMouseLeave} />}
                    {navCat.di && <Di mouseLeave={handleMouseLeave} />}
                    {navCat.se && <Se mouseLeave={handleMouseLeave} />}
                </Box>
            </Box>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "40px",
                }}>
                <VStack>
                    <Tooltip
                        hasArrow
                        label="Search"
                        bg="gray.300"
                        color="black">
                        <Button
                            h={{ base: "1rem", lg: "1.7rem" }}
                            bg={"white"}
                            onClick={() => {
                                navigate("/search");
                            }}
                            _hover={{
                                bg: "#ffffff",
                            }}>
                            <CiSearch style={{ fontSize: "25px" }} />
                        </Button>
                    </Tooltip>
                </VStack>

                <div className="dropdown-menu">
                    <button className="hover-account">
                        <Tooltip
                            hasArrow
                            label="Account"
                            bg="gray.300"
                            color="black">
                            <CiUser style={{ fontSize: "25px" }} />
                        </Tooltip>
                    </button>
                    <ul className="all-log">
                        {isUserLogin === false ? (
                            <>
                                <Button
                                    style={{
                                        width: "100%",
                                        borderTopRightRadius: "20px",
                                        borderTopLeftRadius: "20px",
                                        borderBottomRightRadius: "0px",
                                        borderBottomLeftRadius: "0px",
                                        transition: "all .5s ease-in-out",
                                        textAlign: "left",
                                    }}
                                    bg={"white"}
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                    _hover={{
                                        backgroundColor: "black",
                                        color: "white",
                                    }}>
                                    Login
                                </Button>
                                <Button
                                    style={{
                                        width: "100%",
                                        borderTopRightRadius: "0px",
                                        borderTopLeftRadius: "0px",
                                        borderBottomRightRadius: "20px",
                                        borderBottomLeftRadius: "20px",
                                        transition: "all .5s ease-in-out",
                                        textAlign: "left",
                                    }}
                                    bg={"white"}
                                    onClick={() => {
                                        navigate("/signup");
                                    }}
                                    _hover={{
                                        backgroundColor: "black",
                                        color: "white",
                                    }}>
                                    Signup
                                </Button>
                            </>
                        ) : (
                            <Button
                                style={{
                                    width: "100%",
                                    borderTopRightRadius: "20px",
                                    borderTopLeftRadius: "20px",
                                    borderBottomRightRadius: "20px",
                                    borderBottomLeftRadius: "20px",
                                    transition: "all .5s ease-in-out",
                                    textAlign: "left",
                                }}
                                onClick={handleLogout}
                                bg={"white"}
                                _hover={{
                                    backgroundColor: "black",
                                    color: "white",
                                }}>
                                Logout
                            </Button>
                        )}
                    </ul>
                </div>
                <div className="navCart">
                    <Tooltip hasArrow label="Cart" bg="gray.300" color="black">
                        <Button
                            h={{ base: "1rem", lg: "1.7rem" }}
                            bg={"white"}
                            onClick={() => {
                                navigate("/cart");
                            }}
                            _hover={{
                                bg: "#ffffff",
                            }}>
                            <CiShoppingCart style={{ fontSize: "25px" }} />
                            <Badge
                                borderRadius={"8px"}
                                variant="subtle"
                                colorScheme="green">
                                {items.length > 0 ? items : ""}
                            </Badge>
                        </Button>
                    </Tooltip>
                </div>

        </Box>
        </Box>



    );
};
export default Navbar;
