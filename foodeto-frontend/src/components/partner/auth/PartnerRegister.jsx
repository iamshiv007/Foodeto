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
import Shop from "../../../images/shop.png";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import MetaData from "../../layout/metaData/MetaData";
import { register } from "../../../featured/actions/partnerActions";
import Logo from "../../../images/Logo.png";

const PartnerRegister = () => {
  const [formData, setFormData] = useState({});
  const [shopImage, setShopImage] = useState("");
  const [shopImagePreview, setShopImagePreview] = useState(Shop);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isPartner, loading } = useSelector((state) => state.authPartner);

  const collectData = (e) => {
    if (e.target.name === "shopImage") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setShopImagePreview(reader.result);
          setShopImage(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (isPartner) {
      toast.success("Registered Successfully");
      navigate("/dashboard");
    }
  }, [isPartner, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    const {
      partnerName,
      shopName,
      email,
      password,
      mobile,
      city,
      state,
      street,
      confirmPassword,
    } = formData;

    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }
    const myForm = new FormData();
    myForm.append("partnerName", partnerName);
    myForm.append("shopName", shopName);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("mobile", mobile);
    myForm.append("city", city);
    myForm.append("state", state);
    myForm.append("street", street);
    myForm.append("shopImage", shopImage);
    dispatch(register(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Signup as Partner" />

      <form onSubmit={handleRegister} action="" method="post">
        <Box
          minHeight={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          padding={"10px"}
        >
          <Box
            width={{ base: "96%", md: "500px" }}
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
              <Image width="44px" height={"44px"} src={Logo} alt="logo" />
              Signup as a Partner
            </Text>
            <FormControl isRequired>
              <FormLabel>Partner Name</FormLabel>
              <Input onChange={collectData} type="text" name="partnerName" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Shop Name</FormLabel>
              <Input onChange={collectData} type="text" name="shopName" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input onChange={collectData} type="email" name="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input onChange={collectData} type="Number" name="mobile" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input onChange={collectData} type="text" name="city" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Input onChange={collectData} type="text" name="state" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Street</FormLabel>
              <Input onChange={collectData} type="text" name="street" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input onChange={collectData} type="text" name="password" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                onChange={collectData}
                type="password"
                name="confirmPassword"
              />
            </FormControl>
            <FormControl
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FormLabel>Shop Image</FormLabel>
              <Input
                onChange={collectData}
                hidden
                id="shopImage"
                type="file"
                name="shopImage"
                accept="image/*"
              />
              <label htmlFor="shopImage">
                <Box
                  borderRadius={"10px%"}
                  border="1px"
                  borderColor="gray.200"
                  w="100px"
                  h="100px"
                >
                  <img
                    cursor={"pointer"}
                    w="100%"
                    src={shopImagePreview}
                    alt="Shop"
                  />
                </Box>
              </label>
            </FormControl>

            <Button
              type="submit"
              size="sm"
              isLoading={loading}
              loadingText="Processing"
              colorScheme="teal"
            >
              Sign Up
            </Button>

            <Box
              textAlign={"center"}
              display={"flex"}
              gap={2}
              justifyContent="center"
            >
              <Text>Already have an acount?</Text>
              <NavLink to="/partner/login">
                <Text fontSize={"sm"} textColor={"tomato"}>
                  Login for Partner
                </Text>
              </NavLink>
            </Box>
            <Box
              textAlign={"center"}
              display={"flex"}
              gap={2}
              justifyContent="center"
            >
              <Text>Register as an User?</Text>
              <NavLink to="/signup">
                <Text fontSize={"sm"} textColor={"tomato"}>
                  Signup for User
                </Text>
              </NavLink>
            </Box>
          </Box>
        </Box>
      </form>
    </Fragment>
  );
};

export default PartnerRegister;
