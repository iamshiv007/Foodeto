import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import Header from "../layout/header/Header";
import home from "../../foodeto images/cakes/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash.jpg";

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Foodeto" />
      <Box>
        <Box backgroundSize={'cover'} backgroundRepeat={'none'} backgroundImage={`url(${home})`} height={"100vh"} width={"100vw"}>
          <Header />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
