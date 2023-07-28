import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import StarRatings from "react-star-ratings";

const StarRatings = ({ productId }) => {
  return (
    <Fragment>
      <Box display={"flex"} alignItems={"end"} gap={2}>
        <StarRatings
          rating={3.5}
          starRatedColor="#FFD700"
          numberOfStars={5}
          starEmptyColor={"#C0C0C0"}
          name="rating"
          starDimension="20px"
          starSpacing="4px"
        />
        <Text fontSize={"sm"}>12</Text>
      </Box>
    </Fragment>
  );
};

export default StarRatings;
