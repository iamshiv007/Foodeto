import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KachoriImage from "../../../images/aloo-pyaj-kachori.jpg";
import BurgerImage from "../../../images/Cheese-burger.jpg";
import CakeImage from "../../../images/david-holifield.jpg";
import PizzaImage from "../../../images/italian pizza.jpg";
import ThaliImage from "../../../images/thali-image.jpg";
import Logo from "../../../images/Logo.png";
import { NavLink } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

const menuData = [
  { name: "All", img: Logo },
  { name: "Kachori", img: KachoriImage },
  { name: "Cake", img: CakeImage },
  { name: "Burger", img: BurgerImage },
  { name: "Pizza", img: PizzaImage },
  { name: "Thali", img: ThaliImage },
  { name: "kachori", img: KachoriImage },
  { name: "Cake", img: CakeImage },
  { name: "Burger", img: BurgerImage },
  { name: "Pizza", img: PizzaImage },
  { name: "Thali", img: ThaliImage },
];

const FoodMenu = () => {
  const FoodMenu = menuData.map((item) => (
    <Box
      key={item.name}
      width={{ base: "140px", md: "200px" }}
      padding={"20px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box>
        <NavLink to={`/products?category=${item.name}`}>
          <Image
            margin={"auto"}
            width={"70px"}
            height={"70px"}
            objectFit={"cover"}
            borderRadius={"100%"}
            src={item.img}
            alt={item.name}
          />
        </NavLink>
      </Box>
      <Text align={"center"} padding={"10px"}>
        {item.name}
      </Text>
    </Box>
  ));

  return (
    <>
      <Box marginBottom={"30px"} width={"100%"}>
        <Text
          padding={"10px 20px"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", md: "3xl" }}
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
    </>
  );
};

export default FoodMenu;
