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

const CartOrderSummary = () => {
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
              <Text>XXXX</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Discount</Text>
              <Text>XXXX</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>Shipping</Text>
              <Text>XXXX</Text>
            </Box>
            <Box
              marginTop={"8px"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Text>Amount to pay</Text>
              <Text>XXXX</Text>
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
