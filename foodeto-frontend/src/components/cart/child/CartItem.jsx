import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { AiFillDelete } from "react-icons/ai";

export const CartItem = ({ cartItem }) => {
  const { name, image, quantity, price } = cartItem;
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
      >
        <QauntityButtons quantity={quantity} />
        <PriceTag price={price} currency={"INR"} />
        <Button>
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
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QauntityButtons quantity={quantity} />
        <PriceTag price={price} currency={"INR"} />
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
