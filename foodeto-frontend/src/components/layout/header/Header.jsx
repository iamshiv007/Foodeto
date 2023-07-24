import {
  Box,
  Text,
  useDisclosure,
  Button,
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
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../featured/actions/userActions";
import { toast } from "react-toastify";
import { FiMenu, FiLogOut } from "react-icons/fi";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("Logout Successfully");
  };

  return (
    <Fragment>
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        padding={"10px 30px"}
        background={"rgba(0, 0, 0, 0.4)"}
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
          <NavLink to="/">
            <Box
              _hover={{ background: "#2e2e2e;" }}
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

          <NavLink to="/profile">
            <Box
              _hover={{ background: "#2e2e2e;" }}
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

          {isAuthenticated ? (
            <Box
              _hover={{ background: "#2e2e2e;" }}
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
                _hover={{ background: "#2e2e2e;" }}
                borderRadius={"10px"}
                padding={"4px 10px"}
                display={"flex"}
                gap={2}
                alignItems={"center"}
                color={"white"}
              >
                <FaUserCircle /> Login
              </Box>
            </NavLink>
          )}
        </Box>
      </Box>
      <MobileNavbar logoutHandler={logoutHandler} />
    </Fragment>
  );
};

export default Header;

const MobileNavbar = ({ logoutHandler }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <Box padding={"20px"} display={"flex"} justifyContent={"flex-end"}>
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
                  padding={"4px 10px"}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                >
                  <FaShoppingCart /> Cart
                </Box>
              </NavLink>

              <NavLink to="/profile">
                <Box
                  padding={"4px 10px"}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                >
                  <FaUserCircle /> Profile
                </Box>
              </NavLink>

              {isAuthenticated ? (
                <Box
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
                    padding={"4px 10px"}
                    display={"flex"}
                    gap={2}
                    alignItems={"center"}
                  >
                    <FaUserCircle /> Login
                  </Box>
                </NavLink>
              )}
            </Box>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};
