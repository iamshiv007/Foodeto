import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Box, Text } from "@chakra-ui/react";
import { clear_errors } from "../../../featured/slices/productsSlice";
import { getAllProducts } from "../../../featured/actions/productActions";
import ProductCard from "./ProductCard";
import Loader from "../../layout/loader/Loader";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());

    if (error) {
      toast.error(error);
      dispatch(clear_errors());
    }
  }, [dispatch, error]);

  return (
    <>
      <Text fontSize={"3xl"} fontWeight={"bold"} padding={"10px 20px"}>
        Products
      </Text>
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
        {loading ? (
          <Loader height={"20vh"} />
        ) : (
          products.map((product) => (
            <ProductCard
              productId={product._id}
              productName={product.productName}
              productImage={product.productImage.url}
              price={product.price}
              time={product.time}
              city={product.partner.city}
            />
          ))
        )}
      </Box>
    </>
  );
};

export default ProductList;
