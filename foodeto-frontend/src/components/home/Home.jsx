import React, { Fragment } from "react";
import { Box, Text } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import Header from "../layout/header/Header";
import home from "../../foodeto images/cakes/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash.jpg";
import Cake2 from "../../foodeto images/cakes/kaouther-djouada-hcEDfkiVmMI-unsplash.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home = () => {
  const FoodMenu = [
    <Box width={{ base: "140px", md: "200px" }}>
      <Text align={"center"} padding={"10px"} fontWeight={'bold'} fontSize="6xl">
        🍔
      </Text>
      <Text align={"center"} padding={"10px"}>
        Hamburger
      </Text>
    </Box>,
    <Box width={{ base: "140px", md: "200px" }}>
      <Text align={"center"} padding={"10px"} fontWeight={'bold'} fontSize="6xl">
        🍰
      </Text>
      <Text align={"center"} padding={"10px"}>
        Cake
      </Text>
    </Box>,
    <Box width={{ base: "140px", md: "200px" }}>
      <Text align={"center"} padding={"10px"} fontWeight={'bold'} fontSize="6xl">
        🍕
      </Text>
      <Text align={"center"} padding={"10px"}>
        Pizza
      </Text>
    </Box>,
  ];

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
        </Box>
      </Box>
      <MobileHome />
      <Box marginBottom={"30px"} width={"100%"}>
        <Text
          marginTop={"20px"}
          padding={"10px 20px"}
          fontWeight={"bold"}
          fontSize={"3xl"}
        >
          Menu
        </Text>
        <Box>
        <AliceCarousel
          mouseTracking
          items={FoodMenu}
          slideBy="page"
          autoWidth
          disableButtonsControls
          disableDotsControls
        />
        </Box>
      </Box>
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
