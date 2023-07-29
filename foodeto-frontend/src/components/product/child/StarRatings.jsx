import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import StarRatings from "react-star-ratings";
import { BsPeopleFill } from "react-icons/bs";

const StarRatingsComp = ({ productId }) => {
  return (
    <Fragment>
      <Box display={"flex"} alignItems={"end"} gap={3}>
        <Text fontSize={"sm"}>3.5</Text>
        <StarRatings
          rating={3.5}
          starRatedColor="#FFD700"
          numberOfStars={5}
          starEmptyColor={"#C0C0C0"}
          name="rating"
          starDimension="16px"
          starSpacing="3px"
        />
        <Text display={"flex"} alignItems={"center"} gap={1} fontSize={"sm"}>
          <BsPeopleFill /> 12
        </Text>
      </Box>
    </Fragment>
  );
};

export default StarRatingsComp;
