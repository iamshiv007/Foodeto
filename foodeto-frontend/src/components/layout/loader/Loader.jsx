import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <>
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
      >
        <Spinner />
      </Box>
    </>
  );
};

export default Loader;
