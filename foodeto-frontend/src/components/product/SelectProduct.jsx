import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPartnerProducts,
  getProductDetails,
} from "../../featured/actions/productActions";
import { Box, Text } from "@chakra-ui/react";
import StarRatingsComp from "./child/StarRatings";
import SelectProductCard from "./child/SelectProductCard";
import { toast } from "react-toastify";
import { addToCartReset } from "../../featured/slices/cartSlice";
import Loader from "../layout/loader/Loader";
import Layout from "../layout/Layout";
import MetaData from "../layout/metaData/MetaData";

const SelectProduct = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.productDetails);
  const { products } = useSelector((state) => state.products);
  const { cartAdded } = useSelector((state) => state.cart);
  const { id } = useParams();

  useEffect(() => {
    if (!product || product === {} || product._id !== id) {
      dispatch(getProductDetails(id));
    }

    if (product && product !== {} && product._id === id) {
      dispatch(getPartnerProducts(product.partner._id));
    }

    if (cartAdded) {
      toast.success("Product Added to cart");
      dispatch(addToCartReset());
    }
  }, [product, dispatch, id, cartAdded]);

  return (
    <>
      <Layout>
        <MetaData
          title={product?.category + " - " + product?.partner?.shopName}
        />
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

        {product ? <SelectProductCard product={product} /> : <Loader />}

        {products &&
          product !== {} &&
          products
            .filter(
              (product1) =>
                product1?._id !== id && product1?.category === product?.category
            )
            .map((product2) => (
              <SelectProductCard key={product2._id} product={product2} />
            ))}
      </Layout>
    </>
  );
};

export default SelectProduct;
