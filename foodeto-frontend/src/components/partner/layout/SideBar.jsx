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
  Button,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../featured/actions/partnerActions";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiMenu } from "react-icons/fi";

const SideBar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <Fragment>
      <Box width="100%" display={{ base: "none", md: "flex" }}>
        <Box
          width={"100%"}
          hidden={open}
          padding={"20px"}
          borderRight={"1px"}
          minHeight={"100vh"}
          borderColor={"rgba(0, 0, 0, 0.2)"}
        >
          <Box marginBottom={"40px"} textAlign={"center"}>
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

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={3}
          >
            <NavLink to="/dashboard">
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
                Dashboard
              </Box>
            </NavLink>

            <NavLink to="/partner/products">
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
                My Products
              </Box>
            </NavLink>

            <NavLink to="/product/new">
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
                New Product
              </Box>
            </NavLink>

            <NavLink to="/orders">
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
                Orders
              </Box>
            </NavLink>

            <NavLink to="/history">
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
                {" "}
                History
              </Box>
            </NavLink>

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
            >
              <Button onClick={logoutHandler}>Logout</Button>
            </Box>
          </Box>
        </Box>

        <Box padding={"10px"}>
          <IconButton
            variant="outline"
            color={"black"}
            aria-label="Call Sage"
            fontSize="20px"
            icon={<FiMenu />}
            onClick={() => setOpen(!open)}
          />
        </Box>
      </Box>
      <MobileSideBar
        logoutHandler={logoutHandler}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Fragment>
  );
};

export default SideBar;

const MobileSideBar = ({ isOpen, onOpen, onClose, logoutHandler }) => {
  const btnRef = React.useRef();

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
          position={"fixed"}
          right={"15px"}
          top="15px"
        />
      </Box>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Box marginBottom={"40px"} textAlign={"center"}>
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
          </DrawerHeader>

          <DrawerBody>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={3}
              >
                <NavLink to="/dashboard">
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
                    Dashboard
                  </Box>
                </NavLink>

                <NavLink to="/partner/products">
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
                    My Products
                  </Box>
                </NavLink>

                <NavLink to="/product/new">
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
                    New Product
                  </Box>
                </NavLink>

                <NavLink to="/orders">
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
                    Orders
                  </Box>
                </NavLink>

                <NavLink to="/history">
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
                    {" "}
                    History
                  </Box>
                </NavLink>

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
                >
                  <Button onClick={logoutHandler}>Logout</Button>
                </Box>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
