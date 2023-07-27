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
import { register } from "../../featured/actions/userActions";
import Profile from "../../images/Profile.png";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import MetaData from "../layout/metaData/MetaData";
import { clearErrors } from "../../featured/slices/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(Profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const collectData = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Registered Successfully");
      navigate("/");
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, error, navigate, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();

    const { name, email, password, mobile, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("mobile", mobile);
    myForm.append("avatar", avatar);
    dispatch(register(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Signup to -- Foodeto" />

      <form onSubmit={handleRegister} action="" method="post">
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
            Register to Foodeto
          </Text>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input onChange={collectData} type="text" name="name" />
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
            <FormLabel>Avatar</FormLabel>
            <Input
              onChange={collectData}
              hidden
              id="avatar"
              type="file"
              name="avatar"
              accept="image/*"
            />
            <label htmlFor="avatar">
              <Box
                borderRadius={"100%"}
                border="1px"
                borderColor="gray.200"
                w="64px"
                h="64px"
              >
                <img
                  cursor={"pointer"}
                  w="100%"
                  src={avatarPreview}
                  alt="Dan Abramov"
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
            <NavLink to="/login">
              <Text fontSize={"sm"} textColor={"tomato"}>
                Login
              </Text>
            </NavLink>
          </Box>
          <Box
            textAlign={"center"}
            display={"flex"}
            gap={2}
            justifyContent="center"
          >
            <Text>Register as a Partner</Text>
            <NavLink to="/partner/signup">
              <Text fontSize={"sm"} textColor={"tomato"}>
                Sign Up
              </Text>
            </NavLink>
          </Box>
        </Grid>
      </form>
    </Fragment>
  );
};

export default Register;
