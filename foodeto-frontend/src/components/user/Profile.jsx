import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProfileImage from "../../images/Profile.png";
import MetaData from "../layout/metaData/MetaData";
import Header from "../layout/header/Header";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <MetaData title={`${user?.name}'s Profile`} />
      <Header />
      <Grid
        gap={3}
        height={"100vh"}
        alignItems="center"
        justifyContent="center"
        templateColumns={{ base: "90%", md: "1fr 1fr" }}
      >
        <Box
          flexDirection={"column"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
        >
          <Text>My Profile</Text>
          <Image
            borderRadius={"100%"}
            border="1px"
            borderColor="gray.200"
            w="114px"
            h="114px"
            src={user?.avatar[0]?.url ? user?.avatar[0]?.url : ProfileImage}
          />

          <Button colorScheme="teal" paddingX={"30px"} size={"sm"}>
            Edit Profile
          </Button>
        </Box>
        <Box
          gap={{ base: 6, md: 10 }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <div>
            <Text fontWeight={"bold"} textAlign={"center"}>
              Name
            </Text>
            <Text textAlign={"center"}>{user?.name}</Text>
          </div>
          <div>
            <Text fontWeight={"bold"} textAlign={"center"}>
              Email
            </Text>
            <Text textAlign={"center"}>{user?.email}</Text>
          </div>
          <div>
            <Text fontWeight={"bold"} textAlign={"center"}>
              Joined At
            </Text>
            <Text textAlign={"center"}>
              {String(user?.createdAt).substr(0, 10) || ""}
            </Text>
          </div>
          <div>
            <Button colorScheme="teal" paddingX={"30px"} size={"sm"}>
              My Order
            </Button>
          </div>
          <div>
            <Button colorScheme="teal" paddingX={"30px"} size={"sm"}>
              Edit Profile
            </Button>
          </div>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default Profile;
