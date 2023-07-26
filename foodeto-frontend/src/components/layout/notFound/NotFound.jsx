import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        flexDirection={"column"}
        gap={4}
      >
        <Text fontSize={"2xl"}>Not Found</Text>
        <NavLink to="/">
          <Button colorScheme="teal" size="md">
            Home
          </Button>
        </NavLink>
      </Box>
    </>
  );
};

export default NotFound;
