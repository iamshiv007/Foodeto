import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        background={"tomato"}
        fontSize={"sm"}
        padding={"10px"}
        textAlign={"center"}
        color={"white"}
      >
        © All Rights Reserved by Foodeto
      </Box>
    </>
  );
};

export default Footer;
