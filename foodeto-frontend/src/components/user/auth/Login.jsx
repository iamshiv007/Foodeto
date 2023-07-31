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
import { login } from "../../../featured/actions/userActions";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import MetaData from "../../layout/metaData/MetaData";
import { clearErrors } from "../../../featured/slices/authSlice";
import Logo from "../../../images/Logo.png";
import Layout from "../../layout/Layout";

const Login = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Logged in successfully");
      navigate("/");
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, dispatch, navigate]);

  return (
    <Fragment>
      <Layout>
        <MetaData title="Login to -- Foodeto" />
        <form onSubmit={handleLogin} action="" method="post">
          <Box
            margin={"auto"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"10px"}
            minHeight={"88vh"}
          >
            <Box
              width={{ base: "100%", md: "500px" }}
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
                <Image width="44px" height={"44px"} src={Logo} alt="logo" />{" "}
                Login to Foodeto
              </Text>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  size="md"
                  onChange={collectData}
                  type="email"
                  name="email"
                />
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
                <NavLink to="/signup">
                  <Text fontSize={"sm"} textColor={"tomato"}>
                    Signup
                  </Text>
                </NavLink>
              </Box>{" "}
              <Box
                textAlign={"center"}
                display={"flex"}
                gap={2}
                justifyContent="center"
              >
                <Text>Are you a foodeto partner?</Text>
                <NavLink to="/partner/login">
                  <Text fontSize={"sm"} textColor={"tomato"}>
                    Login as Partner
                  </Text>
                </NavLink>
              </Box>{" "}
            </Box>
          </Box>
        </form>
      </Layout>
    </Fragment>
  );
};

export default Login;
