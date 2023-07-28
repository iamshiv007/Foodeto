import React, { Fragment } from "react";
import Header from "../layout/header/Header";
import ProductList from "./components/ProductList";

const Products = () => {
  return (
    <Fragment>
      <Header />
      <ProductList />
    </Fragment>
  );
};

export default Products;
