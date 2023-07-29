import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../layout/header/Header";
import Cake2 from "../../../foodeto images/cakes/kaouther-djouada-hcEDfkiVmMI-unsplash.jpg";
import Cities from "../../product/child/Cities";

const MobileHome = () => {
  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <Box
          backgroundSize={"cover"}
          backgroundRepeat={"none"}
          backgroundImage={`url(${Cake2})`}
          height={"100vh"}
          width={"100vw"}
        >
          <Header />

          <Box marginTop={"150px"}>
            <Cities />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileHome;
