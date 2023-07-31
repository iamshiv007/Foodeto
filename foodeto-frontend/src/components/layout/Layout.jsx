import React from "react";
import Header from "./header/Header";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Box minHeight={"100vh"}>
          <Header />
          <Box minHeight={"88vh"}>{children}</Box>
        </Box>

        <Box>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
