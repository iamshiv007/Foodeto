import React, { Fragment } from "react";
import Header from "../layout/header/Header";
import ProductList from "./components/ProductList";
import { getAllProducts } from "../../featured/actions/productActions";
import { Text } from "@chakra-ui/react";

const Products = () => {
  return (
    <Fragment>
      <Header />
      <Text fontSize={"3xl"} fontWeight={"bold"} padding={"10px 20px"}>
        Products
      </Text>
      <ProductList link={"/product"} myFunction={getAllProducts} />
    </Fragment>
  );
};

export default Products;
