import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"10px 30px"}
        background={"black"}
        backdropBlur={"0.5"}
      >
        <Box>
          <NavLink to="/">
            <Text
              fontSize={"xl"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"tomato"}
            >
              Foodeto
            </Text>
          </NavLink>
        </Box>

        <Box gap={3} display={"flex"}>
          <a href="/">
            <Box
              _hover={{ background: "#2e2e2e;" }}
              borderRadius={"10px"}
              padding={"4px 10px"}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              color={"white"}
            >
              <FaShoppingCart /> Cart
            </Box>
          </a>
          <NavLink to="/profile">
            <Box
              _hover={{ background: "#2e2e2e;" }}
              borderRadius={"10px"}
              padding={"4px 10px"}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              color={"white"}
            >
              <FaUserCircle /> Profile
            </Box>
          </NavLink>
          {isAuthenticated ? (
            <Box
              _hover={{ background: "#2e2e2e;" }}
              borderRadius={"10px"}
              padding={"4px 10px"}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              color={"white"}
              cursor={"pointer"}
            >
              <FaUserCircle /> Logout
            </Box>
          ) : (
            <NavLink to="/login">
              <Box
                _hover={{ background: "#2e2e2e;" }}
                borderRadius={"10px"}
                padding={"4px 10px"}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                color={"white"}
              >
                <FaUserCircle /> Login
              </Box>
            </NavLink>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
