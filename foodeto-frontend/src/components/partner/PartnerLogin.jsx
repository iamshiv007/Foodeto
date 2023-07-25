import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import MetaData from "../layout/metaData/MetaData";
import { login } from "../../featured/partnerActions/partnerActions";

const PartnerLogin = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isPartner, loading } = useSelector((state) => state.authPartner);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

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
        <Grid
          gap={3}
          alignItems="center"
          justifyContent="center"
          templateColumns={{ base: "90%", md: "40%" }}
        >
          <Text
            colorScheme="teal"
            align={"center"}
            mt={3}
            as="b"
            color="tomato"
            fontSize="2xl"
          >
            Login as a Partner
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
        </Grid>
      </form>
    </Fragment>
  );
};

export default PartnerLogin;
