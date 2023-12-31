import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CartOrderSummary = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity * item.discount) / 100,
    0
  );
  const finalAmountPay =
    totalPrice - discount > 2000
      ? totalPrice - discount
      : totalPrice - discount + 100;

  return (
    <>
      <Stack spacing="8" width="full">
        <Card borderWidth={"1px"} borderColor={"rgba(0, 0, 0, 0.2)"}>
          <CardHeader fontWeight={"bold"} fontSize={"xl"}>
            Order Summary
          </CardHeader>
          <CardBody>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Total Price</Text>
              <Text>₹{totalPrice}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Discount</Text>
              <Text>₹{discount}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Shipping</Text>
              <Text>{totalPrice - discount > 2000 ? "free" : "₹100"}</Text>
            </Box>
            <Box
              marginTop={"8px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text>Amount to pay</Text>
              <Text>₹{finalAmountPay}</Text>
            </Box>
          </CardBody>
          <CardFooter>
            {" "}
            <Button width={"100%"} colorScheme="teal">
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </Stack>
    </>
  );
};

export default CartOrderSummary;
