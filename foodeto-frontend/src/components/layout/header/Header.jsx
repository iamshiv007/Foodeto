import React, { Fragment } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { PiBowlFoodFill } from "react-icons/pi";
import { AiTwotoneHome } from "react-icons/ai";
import { logout } from "../../../featured/actions/userActions";
import MobileNavbar from "./MobileNavbar";
import Logo from "../../../images/Logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };

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

  return (
    <Fragment>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        padding={"10px 30px"}
        background={"teal"}
        position={"sticky"}
        top={"0"}
        zIndex={10}
        alignItems={"center"}
      >
        <NavLink to="/">
          <Box display={"flex"} alignItems={"center"} gap={5}>
            <Image width="44px" objectFit={"contain"} src={Logo} alt="Logo" />
            <Text
              fontSize={"3xl"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"tomato"}
            >
              Foodeto
            </Text>
          </Box>
        </NavLink>

        <Box gap={3} display={"flex"} alignItems={"center"}>
          {navbarData.map((data) => (
            <NavLink to={data.link}>
              <Box
                _hover={{ background: "tomato;" }}
                borderRadius={"6px"}
                padding={"4px 10px"}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                color={"white"}
                fontWeight={"bold"}
              >
                {data.icon} {data.name}
              </Box>
            </NavLink>
          ))}

          {isAuthenticated && (
            <Box borderRadius={"6px"} padding={"4px 10px"}>
              <Button
                onClick={logoutHandler}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                fontSize={"xl"}
              >
                <FiLogOut /> Logout
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <MobileNavbar logoutHandler={logoutHandler} />
    </Fragment>
  );
};

export default Header;
