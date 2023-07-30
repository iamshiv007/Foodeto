import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CartProductMeta } from "./CartProductMeta";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../../featured/actions/cartActions";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const CartItem = ({ cartItem }) => {
  const [newQuantity, setNewQuantity] = useState(1);

  const { name, image, quantity, price, product, discount } = cartItem;

  const dispatch = useDispatch();

  const removeToCartFun = (id) => {
    dispatch(removeToCart(id));
    toast.success("Item Remove From cart");
  };

  const addToCartFun = async (q) => {
    await dispatch(addToCart(product, q));
    toast.success("Product Quantity Updated");
  };

  useEffect(() => {
    setNewQuantity(quantity);
  }, []);

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      gap={3}
    >
      <CartProductMeta discount={discount} name={name} image={image} />

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
        <QauntityButtons
          addToCartFun={addToCartFun}
          newQuantity={newQuantity}
          setNewQuantity={setNewQuantity}
        />
        <Text fontSize={"sm"}>
          ₹{price} X {newQuantity}
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
          ₹{price} X {newQuantity}
        </Text>
        <QauntityButtons
          addToCartFun={addToCartFun}
          newQuantity={newQuantity}
          setNewQuantity={setNewQuantity}
        />
      </Flex>
    </Flex>
  );
};

const QauntityButtons = ({ addToCartFun, newQuantity, setNewQuantity }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={3}>
      <Button
        onClick={() => {
          setNewQuantity(newQuantity === 1 ? 1 : newQuantity - 1);
          addToCartFun(newQuantity === 1 ? 1 : newQuantity - 1);
        }}
        fontSize={"xl"}
      >
        -
      </Button>
      <Text>{newQuantity}</Text>
      <Button
        onClick={() => {
          setNewQuantity(newQuantity + 1);
          addToCartFun(newQuantity + 1);
        }}
        fontSize={"xl"}
      >
        +
      </Button>
    </Box>
  );
};
