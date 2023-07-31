import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import MobileHome from "./MobileHome";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Fragment>
      <Layout>
        <MetaData title="Foodeto" />
        <Box display={{ base: "none", md: "block" }} padding={"30px"}>
          Main Home
        </Box>

        <MobileHome />
      </Layout>
    </Fragment>
  );
};

export default Home;
