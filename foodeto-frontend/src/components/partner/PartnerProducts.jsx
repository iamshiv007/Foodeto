import React from "react";
import ProductList from "../product/components/ProductList";
import { getPartnerProducts } from "../../featured/actions/productActions";
import { Box, Text } from "@chakra-ui/react";
import SideBar from "../partnerLayout/SideBar";

const PartnerProducts = () => {
  return (
    <>
      <Box display={"flex"}>
        <Box width={{ base: "0%", md: "20%" }}>
          <SideBar />
        </Box>

        <Box width={{ base: "100%", md: "80%" }}>
          <Text fontSize={"3xl"} fontWeight={"bold"} padding={"10px 20px"}>
            My Products
          </Text>
          <ProductList
            link={"/partner/product/update"}
            myFunction={getPartnerProducts}
          />
        </Box>
      </Box>
    </>
  );
};

export default PartnerProducts;
