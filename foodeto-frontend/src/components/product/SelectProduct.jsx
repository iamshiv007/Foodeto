import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPartnerProducts,
  getProductDetails,
} from "../../featured/actions/productActions";
import { Box, Text } from "@chakra-ui/react";
import Header from "../layout/header/Header";
import StarRatingsComp from "./child/StarRatings";
import SelectProductCard from "./child/SelectProductCard";

const SelectProduct = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.productDetails);
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();

  useEffect(() => {
    if (!product || product === {} || product._id !== id) {
      dispatch(getProductDetails(id));
    }

    if (product && product !== {} && product._id === id) {
      dispatch(getPartnerProducts(product.partner._id));
    }
  }, [product, dispatch]);

  return (
    <>
      <Header />

      <Box padding={"10px"}>
        <Text textAlign={"center"} fontSize={"2xl"}>
          {product?.partner?.shopName} -{" "}
          <Text display={"inline-block"} fontSize={"lg"} color={"tomato"}>
            {" "}
            {product?.category}
          </Text>
        </Text>

        <Box display={"flex"} justifyContent={"center"}>
          <StarRatingsComp />
        </Box>
      </Box>

      <SelectProductCard product={product} />

      {products &&
        product !== {} &&
        products
          .filter(
            (product1) =>
              product1?._id !== id && product1?.category === product?.category
          )
          .map((product2) => <SelectProductCard product={product2} />)}
    </>
  );
};

export default SelectProduct;
