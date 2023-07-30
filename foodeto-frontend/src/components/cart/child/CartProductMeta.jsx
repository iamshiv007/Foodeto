import {
  Box,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const CartProductMeta = (props) => {
  const {
    image,
    name,
    description = " Caffè latte hello Sab Badhiya Hai kya Haya to Sab badhiya Hai",
  } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Box width="150px" height="120px">
        <Img
          rounded="lg"
          height={"100%"}
          width={"100%"}
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
          objectFit={"cover"}
        />
      </Box>
      <Box>
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {description}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
