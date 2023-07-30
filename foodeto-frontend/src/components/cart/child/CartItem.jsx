import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { CartProductMeta } from "./CartProductMeta";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../../featured/actions/cartActions";
import { toast } from "react-toastify";

export const CartItem = ({ cartItem }) => {
  const { name, image, quantity, price, product } = cartItem;

  const dispatch = useDispatch();

  const removeToCartFun = (id) => {
    dispatch(removeToCart(id));
    toast.success("Item Remove From cart");
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      gap={3}
    >
      <CartProductMeta name={name} image={image} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-around"
        display={{
          base: "none",
          md: "flex",
        }}
        align={"center"}
      >
        <QauntityButtons quantity={quantity} />
        <Text fontSize={"sm"}>
          ₹{price} X {quantity}
        </Text>
        <Button colorScheme="red" onClick={() => removeToCartFun(product)}>
          <AiFillDelete />
        </Button>
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Button colorScheme="red" onClick={() => removeToCartFun(product)}>
          <AiFillDelete />
        </Button>
        <Text fontSize={"sm"}>
          ₹{price} X {quantity}
        </Text>
        <QauntityButtons quantity={quantity} />
      </Flex>
    </Flex>
  );
};

const QauntityButtons = ({ quantity }) => {
  const setQuantity = () => {};
  return (
    <Box display={"flex"} alignItems={"center"} gap={3}>
      <Button
        onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
        fontSize={"xl"}
      >
        -
      </Button>
      <Text>{quantity}</Text>
      <Button onClick={() => setQuantity(quantity + 1)} fontSize={"xl"}>
        +
      </Button>
    </Box>
  );
};
