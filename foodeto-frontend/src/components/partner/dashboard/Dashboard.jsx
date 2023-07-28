import React, { Fragment, useEffect } from "react";
import SideBar from "../layout/SideBar";
import MetaData from "../../layout/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { Box, Image, Text } from "@chakra-ui/react";
import Shop from "../../../images/shop.png";
import Loader from "../../layout/loader/Loader";
import { getPartnerProducts } from "../../../featured/actions/productActions";

const Dashboard = () => {
  const { partner, loading } = useSelector((state) => state.authPartner);
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPartnerProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title={`${partner?.shopName}`} />

      <Box display={"flex"}>
        <Box width={{ base: "0%", md: "20%" }}>
          <SideBar />
        </Box>

        <Box width={{ base: "100%", md: "80%" }}>
          {loading ? (
            <Loader />
          ) : (
            <Box
              minHeight={"100vh"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              width="auto"
              padding={"20px 10px"}
            >
              <Box display={"flex"}>
                <Box
                  borderRadius={"10px"}
                  width={"150px"}
                  height={"150px"}
                  border={"1px"}
                  overflow={"hidden"}
                >
                  <Image
                    src={
                      partner?.shopImage[0]?.url
                        ? partner?.shopImage[0]?.url
                        : Shop
                    }
                    alt="shop"
                    objectFit={"cover"}
                    width='100%'
                    height={'100%'}
                  />
                </Box>

                <Box>
                  <Text fontSize={"2xl"} padding={"10px"}>
                    {partner?.shopName}
                  </Text>
                  <Text padding={"10px"}>Owner : {partner?.partnerName}</Text>
                  <Text padding={"10px"}>
                    Address : {partner?.street}, {partner?.city},{" "}
                    {partner?.state}
                  </Text>
                </Box>
              </Box>

              <Box gap="3" display={"flex"} paddingTop={"20px"}>
                <Box>
                  <Box
                    background={"gray"}
                    width="130px"
                    height={"130px"}
                    borderRadius={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    <p>Products</p>
                    <p>{products.length}</p>
                  </Box>
                </Box>
                <Box>
                  <Box
                    background={"gray"}
                    width="130px"
                    height={"130px"}
                    borderRadius={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    Orders
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
