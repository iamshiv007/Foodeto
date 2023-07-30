import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
  Text,
} from "@chakra-ui/react";
import { CartItem } from "./child/CartItem";
import { CartOrderSummary } from "./child/CartOrderSummary";
// import { cartData } from "./child/_data";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="bold">
              Shopping Cart ({cartItems?.length} items)
            </Heading>

            <Stack spacing="6">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.product} cartItem={cartItem} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>Still hungry</p>
              <NavLink to="/products?category=All">
                <Text color={mode("blue.500", "blue.200")}>
                  {" "}
                  Add More Items
                </Text>
              </NavLink>
            </HStack>
          </Flex>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};
