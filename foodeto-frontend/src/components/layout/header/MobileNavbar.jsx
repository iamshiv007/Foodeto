import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneHome } from "react-icons/ai";
import { FiMenu, FiLogOut, FiLogIn } from "react-icons/fi";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import Logo from "../../../images/Logo.png";
import { logout } from "../../../featured/actions/userActions";
import { toast } from "react-toastify";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const navbarData = [
    { name: "Home", icon: <AiTwotoneHome />, link: "/" },
    { name: "Products", icon: <PiBowlFoodFill />, link: "/products" },
    {
      name:
        cartItems.length !== 0 ? (
          <>
            {" "}
            <Text>Cart</Text>{" "}
            <Text
              fontSize={"xs"}
              color={"white"}
              background={"tomato"}
              borderRadius={"100%"}
              padding={"3px"}
              width={"20px"}
              height={"20px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {cartItems.length}
            </Text>
          </>
        ) : (
          <Text>Cart</Text>
        ),
      icon: <FaShoppingCart />,
      link: "/cart",
    },
    isAuthenticated
      ? {
          name: "Profile",
          icon: <FaUserCircle />,
          link: "/profile",
        }
      : { name: "Login", icon: <FiLogIn />, link: "/login" },
  ];

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    onClose();
    navigate("/");
  };

  return (
    <>
      <Box>
        <IconButton
          display={{ base: "flex", md: "none" }}
          ref={btnRef}
          onClick={onOpen}
          variant="outline"
          color={"black"}
          aria-label="Call Sage"
          fontSize="20px"
          icon={<FiMenu />}
          position={"fixed"}
          right={"20px"}
          top="20px"
        />
      </Box>
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        display={{ base: "block", sm: "none" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <NavLink to="/">
              <Box display={"flex"} gap={3}>
                <Image
                  width="44px"
                  objectFit={"contain"}
                  src={Logo}
                  alt="Logo"
                />
                <Text
                  fontSize={"4xl"}
                  fontStyle={"italic"}
                  color={"tomato"}
                  padding={"0 10px"}
                >
                  Foodeto
                </Text>
              </Box>
            </NavLink>
          </DrawerHeader>

          <DrawerBody>
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={6}
            >
              {navbarData.map((data) => (
                <NavLink key={data.name} to={data.link}>
                  <Box
                    _hover={{ color: "tomato" }}
                    _active={{ color: "tomato" }}
                    padding={"4px 15px"}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    fontSize={"xl"}
                  >
                    {data.icon} {data.name}
                  </Box>
                </NavLink>
              ))}

              {isAuthenticated && (
                <Box>
                  <Button
                    onClick={logoutHandler}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                    fontSize={"xl"}
                  >
                    {" "}
                    <FiLogOut /> Logout
                  </Button>
                </Box>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
