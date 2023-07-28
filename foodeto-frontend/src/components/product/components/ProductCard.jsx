import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import StarRatingsComp from "./StarRatings";

const ProductCard = ({
  productId,
  productImage,
  productName,
  price,
  time,
  city,
}) => {
  return (
    <Fragment>
      <Card key={productId}>
        <CardBody>
          <NavLink to={`product/${productId}`}>
            <Image src={productImage} alt={productName} borderRadius="lg" />
          </NavLink>

          <Stack mt="6" spacing="3">
            <Heading size="sm">{productName}</Heading>

            <Box display="flex" justifyContent={"space-between"}>
              <Text color="blue.600" fontSize="md">
                ₹{price}
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={1}
                color="red.600"
                fontSize="sm"
              >
                <IoMdTime />
                {time} min
              </Text>
            </Box>
          </Stack>

          <Box
            display={"flex"}
            paddingY={"8px"}
            justifyContent={"space-between"}
          >
            <StarRatingsComp productId={productId} />

            <Text
              display={"flex"}
              alignItems={"center"}
              gap={1}
              fontSize={"sm"}
            >
              <CiLocationOn /> {city}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ProductCard;
