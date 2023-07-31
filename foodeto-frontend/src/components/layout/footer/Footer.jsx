import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box background={"tomato"} padding={"20px"} marginTop={"50px"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={3}
          justifyContent={"space-between"}
          marginX={"40px"}
        >
          <Flex direction="column" gap={1}>
            <Text color="white" marginBottom={"4px"}>
              Links
            </Text>
            {links.map((link) => (
              <NavLink key={link.name} to="/">
                <Text
                  color="white"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  {link.name}
                </Text>
              </NavLink>
            ))}
          </Flex>

          <Flex direction="column" gap={"2"}>
            <Text color="white" marginBottom={"4px"}>
              Social Media
            </Text>
            {socialMedia.map((link) => (
              <a key={link.name} href={link.link} target="_blank">
                <Text
                  color="white"
                  fontSize="sm"
                  _hover={{ textDecoration: "underline" }}
                >
                  {link.name}
                </Text>
              </a>
            ))}
          </Flex>
        </Flex>

        <Box
          padding={"20px"}
          fontSize={"sm"}
          textAlign={"center"}
          color={"white"}
        >
          © All Rights Reserved by Foodeto
        </Box>
      </Box>
    </>
  );
};

export default Footer;

const links = [
  { name: "Home" },
  { name: "About us" },
  { name: "Contact" },
  { name: "Help" },
];

const socialMedia = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/shivraj-gurjar-iamshiv007007",
  },
  { name: "Instagram", link: "https://www.instagram.com/iam_shiv_726" },
  { name: "Github", link: "https://www.github.com/iamshiv007" },
  { name: "x", link: "https://www.twitter.com/ShivrajGurjar15" },
];
