import {
  Box,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../featured/actions/userActions";
import { toast } from "react-toastify";
import { FiMenu, FiLogOut, FiLogIn } from "react-icons/fi";
import { AiTwotoneHome } from "react-icons/ai";
import { PiBowlFoodFill } from "react-icons/pi";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    onClose();
    toast.success("Logout Successfully");
  };

  return (
    <Fragment>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        padding={"10px 30px"}
        background={"rgba(135, 218, 237)"}
        position={"sticky"}
        top={"0"}
      >
        <Box>
          <NavLink to="/">
            <Text
              fontSize={"xl"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"tomato"}
            >
              Foodeto
            </Text>
          </NavLink>
        </Box>

        <Box gap={3} display={"flex"}>
          <NavLink to="/products">
            <Box
              _hover={{ background: "tomato;" }}
              borderRadius={"10px"}
              padding={"4px 10px"}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              color={"white"}
            >
              <PiBowlFoodFill /> products
            </Box>
          </NavLink>

          <NavLink to="/">
            <Box
              _hover={{ background: "tomato;" }}
              borderRadius={"10px"}
              padding={"4px 10px"}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              color={"white"}
            >
              <FaShoppingCart /> Cart
            </Box>
          </NavLink>

          {isAuthenticated && (
            <NavLink to="/profile">
              <Box
                _hover={{ background: "tomato;" }}
                borderRadius={"10px"}
                padding={"4px 10px"}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                color={"white"}
              >
                <FaUserCircle /> Profile
              </Box>
            </NavLink>
          )}

          {isAuthenticated ? (
            <Box
              _hover={{ background: "tomato" }}
              borderRadius={"10px"}
              padding={"4px 10px"}
              display={"flex"}
              gap={2}
              alignItems={"center"}
              color={"white"}
              cursor={"pointer"}
              onClick={logoutHandler}
            >
              <FiLogOut /> Logout
            </Box>
          ) : (
            <NavLink to="/login">
              <Box
                _hover={{ background: "tomato;" }}
                borderRadius={"10px"}
                padding={"4px 10px"}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                color={"white"}
              >
                <FiLogIn /> Login
              </Box>
            </NavLink>
          )}
        </Box>
      </Box>
      <MobileNavbar
        logoutHandler={logoutHandler}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </Fragment>
  );
};

export default Header;

const MobileNavbar = ({ logoutHandler, isOpen, onClose, onOpen }) => {
  const btnRef = React.useRef();

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Box
        padding={"20px"}
        display={{ base: "flex", md: "none" }}
        justifyContent={"flex-end"}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          ref={btnRef}
          onClick={onOpen}
          variant="outline"
          color={"black"}
          aria-label="Call Sage"
          fontSize="20px"
          icon={<FiMenu />}
        />
      </Box>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        display={{ base: "block", sm: "none" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <NavLink to="/">
              <Box>
                <Text
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.1s",
                  }}
                  fontSize={"xl"}
                  fontStyle={"italic"}
                  fontWeight={"bold"}
                  color={"tomato"}
                  padding={"4px 10px"}
                >
                  Foodeto
                </Text>
              </Box>
            </NavLink>
          </DrawerHeader>

          <DrawerBody>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <NavLink to="/">
                <Box
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.1s",
                  }}
                  padding={"4px 10px"}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                >
                  <AiTwotoneHome /> Home
                </Box>
              </NavLink>
              <NavLink to="/">
                <Box
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.1s",
                  }}
                  padding={"4px 10px"}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                >
                  <FaShoppingCart /> Cart
                </Box>
              </NavLink>

              {isAuthenticated && (
                <NavLink to="/profile">
                  <Box
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "all 0.1s",
                    }}
                    padding={"4px 10px"}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                  >
                    <FaUserCircle /> Profile
                  </Box>
                </NavLink>
              )}

              {isAuthenticated ? (
                <Box
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "all 0.1s",
                  }}
                  padding={"4px 10px"}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                  cursor={"pointer"}
                  onClick={logoutHandler}
                >
                  <FiLogOut /> Logout
                </Box>
              ) : (
                <NavLink to="/login">
                  <Box
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "all 0.1s",
                    }}
                    padding={"4px 10px"}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                  >
                    <FiLogIn /> Login
                  </Box>
                </NavLink>
              )}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
