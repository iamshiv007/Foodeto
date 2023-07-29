import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import MetaData from "../../layout/metaData/MetaData";
import { login } from "../../../featured/actions/partnerActions";
import Logo from "../../../images/Logo.png";
import { clearErrors } from "../../../featured/slices/authPartnerSlice";

const PartnerLogin = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPartner, loading, error } = useSelector(
    (state) => state.authPartner
  );

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (isPartner) {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [isPartner]);

  return (
    <Fragment>
      <MetaData title="Login as Partner" />
      <form onSubmit={handleLogin} action="" method="post">
        <Box
          margin={"auto"}
          minHeight={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"10px"}
        >
          <Box
            width={{ base: "90%", md: "500px" }}
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            borderWidth={{ base: "md", md: "1px" }}
            borderRadius={"8px"}
            padding={"20px"}
            height={"fit-content"}
            borderColor={"blackAlpha.300"}
          >
            <Text
              colorScheme="teal"
              align={"center"}
              color="tomato"
              fontSize="2xl"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              marginBottom={"10px"}
            >
              <Image width="44px" height={"44px"} src={Logo} alt="logo" /> Login
              as a Partner
            </Text>
            <FormControl isRequired>
              <FormLabel fontSize={"16px"}>Email</FormLabel>
              <Input onChange={collectData} type="email" name="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input onChange={collectData} type="password" name="password" />
            </FormControl>
            <Button
              type="submit"
              size="sm"
              isLoading={loading}
              loadingText="Processing"
              colorScheme="teal"
            >
              Log In
            </Button>
            <Box
              textAlign={"center"}
              display={"flex"}
              gap={2}
              justifyContent="center"
            >
              <Text>Don't have any acount?</Text>
              <NavLink to="/partner/signup">
                <Text fontSize={"sm"} textColor={"tomato"}>
                  Signup for Partner
                </Text>
              </NavLink>
            </Box>{" "}
            <Box
              textAlign={"center"}
              display={"flex"}
              gap={2}
              justifyContent="center"
            >
              <Text>Not a Partner?</Text>
              <NavLink to="/login">
                <Text fontSize={"sm"} textColor={"tomato"}>
                  Login as User
                </Text>
              </NavLink>
            </Box>{" "}
          </Box>
        </Box>
      </form>
    </Fragment>
  );
};

export default PartnerLogin;
