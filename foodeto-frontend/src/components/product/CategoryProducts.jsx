import React, { Fragment } from "react";
import Header from "../layout/header/Header";
import { Text } from "@chakra-ui/react";
import ProductList from "./child/ProductList";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../featured/actions/productActions";
import FoodMenu from "./child/FoodMenu";

const CategoryProducts = () => {
  // const [myAddress, setMyAddress] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  return (
    <Fragment>
      <Header />
      <>
        <FoodMenu />
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"bold"}
          padding={"10px 20px"}
        >
          Products - {category}
        </Text>
        <ProductList
          link={"/product"}
          myFunction={getAllProducts}
          category={category}
          // address={myAddress}
        />
      </>
    </Fragment>
  );
};

export default CategoryProducts;
