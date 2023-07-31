import React from "react";
import { Box } from "@chakra-ui/react";

const MobileHome = () => {
  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <Box padding={"20px"}>Mobile Home</Box>
      </Box>
    </>
  );
};

export default MobileHome;
