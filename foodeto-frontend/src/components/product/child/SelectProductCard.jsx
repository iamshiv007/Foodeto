import React, { useState } from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import StarRatingsComp from "./StarRatings";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../featured/actions/cartActions";

const SelectProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addToCartFun = async (id) => {
    setLoading(true);
    await dispatch(addToCart(id, quantity));
    setLoading(false);
    setQuantity(1);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={6}
        padding={"20px 40px"}
      >
        <Image
          objectFit="cover"
          width={"180px"}
          height={"150px"}
          src={product?.productImage[0]?.url}
          alt={product?.productName}
          borderRadius={"md"}
        />

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Box>
            <Heading size="md" display={"flex"} gap={3} alignItems={"center"}>
              {product?.productName}{" "}
              <Text fontSize={"xs"} color={"green"}>
                {product?.discount} % discount
              </Text>{" "}
            </Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
          </Box>

          <Box
            color={"red"}
            padding={"10px 0"}
            display={"flex"}
            justifyContent={"space-between"}
            fontSize={"sm"}
          >
            <Text>{product?.time} min</Text>
            <Text>
              ₹{product?.price} for {product?.unit} Unit
            </Text>
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={3}
          >
            <StarRatingsComp />

            <Box display={"flex"} gap={4}>
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <Button
                  onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
                  fontSize={"xl"}
                >
                  -
                </Button>
                <Text>{quantity}</Text>
                <Button
                  onClick={() => setQuantity(quantity + 1)}
                  fontSize={"xl"}
                >
                  +
                </Button>
              </Box>

              <Button
                isLoading={loading}
                onClick={() => addToCartFun(product._id)}
                variant="solid"
                colorScheme="teal"
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SelectProductCard;
