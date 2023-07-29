import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import Header from "../layout/header/Header";
import home from "../../foodeto images/cakes/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash.jpg";
import Footer from "../layout/footer/Footer";
import MobileHome from "./child/MobileHome";

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
        >
          <Header />
          <Box marginTop={"150px"}>{/* <Cities /> */}</Box>
        </Box>
      </Box>
      <MobileHome />
      <Footer />
    </Fragment>
  );
};

export default Home;
