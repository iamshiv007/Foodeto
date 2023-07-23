import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"10px 30px"}
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
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
