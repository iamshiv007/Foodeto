import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import Header from "../layout/header/Header";
import home from "../../foodeto images/cakes/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash.jpg";
import Cake2 from "../../foodeto images/cakes/kaouther-djouada-hcEDfkiVmMI-unsplash.jpg";

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Foodeto" />
      <Box display={{ base: "none", md: "block" }}>
        <Box
          backgroundSize={"cover"}
          backgroundRepeat={"none"}
          backgroundImage={`url(${home})`}
          height={"100vh"}
          width={"100vw"}
        >
          <Header />
        </Box>
      </Box>
      <MobileHome />
    </Fragment>
  );
};

export default Home;

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
        </Box>
      </Box>
    </>
  );
};
