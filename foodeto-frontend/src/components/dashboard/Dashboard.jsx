import React, { Fragment } from "react";
import SideBar from "../partnerLayout/SideBar";
import MetaData from "../layout/metaData/MetaData";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import Shop from "../../images/shop.png";

const Dashboard = () => {
  const { partner } = useSelector((state) => state.authPartner);

  return (
    <Fragment>
      <MetaData title={`${partner?.shopName}`} />

      <Box display={"flex"}>
        <SideBar />

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
              padding={"5px"}
              overflow={"hidden"}
            >
              <img
                src={
                  partner?.shopImage[0]?.url ? partner?.shopImage[0]?.url : Shop
                }
                alt="shop"
              />
            </Box>

            <Box>
              <Text fontSize={"2xl"} padding={"10px"}>
                {partner?.shopName}
              </Text>
              <Text padding={"10px"}>Owner : {partner?.partnerName}</Text>
              <Text padding={"10px"}>
                Address : {partner?.adress}, {partner?.city}, {partner?.state}
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
              >
                Products
              </Box>
              <Text textAlign={"center"}>Products</Text>
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
              <Text textAlign={"center"}>Orders</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
