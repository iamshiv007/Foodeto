import React, { Fragment } from "react";
import { Box, Image, Select, Text } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import Header from "../layout/header/Header";
import home from "../../foodeto images/cakes/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash.jpg";
import Cake2 from "../../foodeto images/cakes/kaouther-djouada-hcEDfkiVmMI-unsplash.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KachoriImage from "../../images/aloo-pyaj-kachori.jpg";
import BurgerImage from "../../images/Cheese-burger.jpg";
import CakeImage from "../../images/david-holifield.jpg";
import PizzaImage from "../../images/italian pizza.jpg";
import ProductList from "../product/components/ProductList";

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
          <Box marginTop={"150px"}>
            <Select
              background={"white"}
              margin={"auto"}
              width={"400px"}
              placeholder="Select city"
            >
              <option value="Jaipur">Jaipur</option>
            </Select>
          </Box>
        </Box>
      </Box>
      <MobileHome />
      <Menu />

      <ProductList />
    </Fragment>
  );
};

const Menu = () => {
  const FoodMenu = [
    <Box
      width={{ base: "140px", md: "200px" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box>
        <Image
          margin={"auto"}
          width={"70px"}
          height={"70px"}
          objectFit={"cover"}
          borderRadius={"100%"}
          src={KachoriImage}
          alt="kachori"
        />
      </Box>
      <Text align={"center"} padding={"10px"}>
        Kachori
      </Text>
    </Box>,
    <Box
      width={{ base: "140px", md: "200px" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box>
        <Image
          margin={"auto"}
          width={"70px"}
          height={"70px"}
          objectFit={"cover"}
          borderRadius={"100%"}
          src={CakeImage}
          alt="kachori"
        />
      </Box>
      <Text align={"center"} padding={"10px"}>
        Cake
      </Text>
    </Box>,
    <Box
      width={{ base: "140px", md: "200px" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box>
        <Image
          margin={"auto"}
          width={"70px"}
          height={"70px"}
          objectFit={"cover"}
          borderRadius={"100%"}
          src={BurgerImage}
          alt="kachori"
        />
      </Box>
      <Text align={"center"} padding={"10px"}>
        Burger
      </Text>
    </Box>,
    <Box
      width={{ base: "140px", md: "200px" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box>
        <Image
          margin={"auto"}
          width={"70px"}
          height={"70px"}
          objectFit={"cover"}
          borderRadius={"100%"}
          src={PizzaImage}
          alt="kachori"
        />
      </Box>
      <Text align={"center"} padding={"10px"}>
        Pizza
      </Text>
    </Box>,
    <Box width={{ base: "140px", md: "200px" }}>
      <Text
        align={"center"}
        padding={"10px"}
        fontWeight={"bold"}
        fontSize="6xl"
      >
        🍔
      </Text>
      <Text align={"center"} padding={"10px"}>
        Hamburger
      </Text>
    </Box>,
    <Box width={{ base: "140px", md: "200px" }}>
      <Text
        align={"center"}
        padding={"10px"}
        fontWeight={"bold"}
        fontSize="6xl"
      >
        🍰
      </Text>
      <Text align={"center"} padding={"10px"}>
        Cake
      </Text>
    </Box>,
    <Box width={{ base: "140px", md: "200px" }}>
      <Text
        align={"center"}
        padding={"10px"}
        fontWeight={"bold"}
        fontSize="6xl"
      >
        🍕
      </Text>
      <Text align={"center"} padding={"10px"}>
        Pizza
      </Text>
    </Box>,
  ];
  return (
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
          <Box marginTop={"150px"}>
            <Select
              background={"white"}
              margin={"auto"}
              width={"90%"}
              placeholder="Select city"
            >
              <option value="Jaipur">Jaipur</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </>
  );
};
