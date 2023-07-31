import React, { Fragment } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import MetaData from "../layout/metaData/MetaData";
import Layout from "../layout/Layout";
import KachoriImage from "../../images/aloo-pyaj-kachori.jpg";
import BurgerImage from "../../images/Cheese-burger.jpg";
import CakeImage from "../../images/david-holifield.jpg";
import ThaliImage from "../../images/thali-image.jpg";
import AliceCarousel from "react-alice-carousel";
import { NavLink } from "react-router-dom";

const menuData = [
  { name: "Street Food", img: KachoriImage },
  { name: "Birthday", img: CakeImage },
  { name: "FastFood", img: BurgerImage },
  { name: "Dinner", img: ThaliImage },
];

const Home = () => {
  const FoodMenu = menuData.map((item) => (
    <Box key={item.name} padding={"20px"}>
      <Box>
        <NavLink to={`/products`}>
          <Image
            width={{ base: "200px", md: "250px" }}
            height={{ base: "200px", md: "250px" }}
            objectFit={"cover"}
            borderRadius={"100%"}
            src={item.img}
            alt={item.name}
            margin={"auto"}
          />
        </NavLink>
      </Box>
      <Text
        fontWeight={"bold"}
        fontSize={"xl"}
        color={"tomato"}
        align={"center"}
        padding={"20px"}
      >
        {item.name}
      </Text>
    </Box>
  ));
  return (
    <Fragment>
      <Layout>
        <MetaData title="Foodeto" />

        <Box
          alignItems={"center"}
          height={"88vh"}
          display={"flex"}
          padding={"30px"}
          gap={{ base: "20px", md: "100px" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box width={{ base: "100%", md: "50%" }}>
            <AliceCarousel
              autoPlay
              items={FoodMenu}
              infinite
              autoPlayInterval={2000}
              animationType={"fadeout"}
              disableDotsControls
            />
          </Box>

          <Box width={{ base: "100%", md: "50%" }}>
            <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight={"bold"}>
              {" "}
              It seems like you are hungry{" "}
              <Button colorScheme="teal">
                <NavLink to="/products">Explore Food</NavLink>
              </Button>
            </Text>

            <Text fontSize={"xl"} marginTop={"30px"}>
              😀 Free delivery for orders up to Rs. 1000
            </Text>
          </Box>
        </Box>
      </Layout>
    </Fragment>
  );
};

export default Home;
