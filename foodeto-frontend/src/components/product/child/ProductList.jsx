import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Text } from "@chakra-ui/react";
import { clear_errors } from "../../../featured/slices/productsSlice";
import ProductCard from "./ProductCard";
import Loader from "../../layout/loader/Loader";
import { BiError } from "react-icons/bi";
import Footer from "../../layout/footer/Footer";

const ProductList = ({ myFunction, link, category, address }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(myFunction("", "", category === "All" ? "" : category, address));

    if (error) {
      toast.error(error);
      dispatch(clear_errors());
    }
  }, [dispatch, error, myFunction, category, address]);

  return (
    <>
      {loading ? (
        <Loader height="30vh" />
      ) : products ? (
        <>
          <Box
            display={"grid"}
            gap={4}
            gridTemplateColumns={{
              base: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            }}
            padding={"20px"}
          >
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                productId={product._id}
                productName={product.productName}
                productImage={product.productImage[0]?.url}
                price={product.price}
                time={product.time}
                city={product.partner.city}
                link={link}
              />
            ))}
          </Box>
        </>
      ) : (
        <Box
          height={"30vh"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <BiError color="red" />
          <Text color={"red"}>No Products Found</Text>
        </Box>
      )}
    </>
  );
};

export default ProductList;
