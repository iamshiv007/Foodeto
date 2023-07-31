import React, { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import ProductList from "./child/ProductList";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../featured/actions/productActions";
import FoodMenu from "./child/FoodMenu";
import Layout from "../layout/Layout";

const CategoryProducts = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  return (
    <Fragment>
      <Layout>
        <FoodMenu />
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"bold"}
          padding={"10px 20px"}
        >
          Products - {category ? category : "All"}
        </Text>
        <ProductList
          link={"/product"}
          myFunction={getAllProducts}
          category={category}
        />
      </Layout>
    </Fragment>
  );
};

export default CategoryProducts;
