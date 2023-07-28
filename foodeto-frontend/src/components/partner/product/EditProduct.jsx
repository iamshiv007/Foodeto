import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import plate from "../../../images/plate.png";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import MetaData from "../../layout/metaData/MetaData";
import {
  clear_errors,
  updateProductReset,
} from "../../../featured/slices/productSlice";
import { clear_errors as productDetailsClearError } from "../../../featured/slices/productDetailsSlice";
import {
  getProductDetails,
  updateProduct,
} from "../../../featured/actions/productActions";
import SideBar from "../layout/SideBar";

const EditProduct = () => {
  const [formData, setFormData] = useState({});
  const [productImage, setProductImage] = useState("");
  const [productImagePreview, setProductImagePreview] = useState(plate);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { productUpdated, error, loading } = useSelector(
    (state) => state.product
  );

  const { product, error: productDetailsError } = useSelector(
    (state) => state.productDetails
  );

  const collectData = (e) => {
    if (e.target.name === "productImage") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setProductImagePreview(reader.result);
          setProductImage(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (productUpdated) {
      toast.success("Product Updated");
      dispatch(updateProductReset());
      navigate("/dashboard");
    }

    if (error || productDetailsError) {
      toast.error(error);
      dispatch(clear_errors());
      dispatch(productDetailsClearError());
    }

    if (
      ((!product || product === {}) && !productDetailsError) ||
      product._id !== id
    ) {
      dispatch(getProductDetails(id));
    }

    if (product) {
      setFormData(product);
      setProductImagePreview(product.productImage[0]?.url);
    }
  }, [
    productUpdated,
    error,
    navigate,
    dispatch,
    product,
    productDetailsError,
    id,
  ]);

  const handleNewProduct = (e) => {
    e.preventDefault();

    const { productName, price, time, discount, unit, status, category } =
      formData;

    const myForm = new FormData();

    myForm.append("productName", productName);
    myForm.append("price", price);
    myForm.append("unit", unit);
    myForm.append("time", time);
    myForm.append("discount", discount);
    myForm.append("status", status);
    myForm.append("category", category);
    if (productImage !== "") {
      myForm.append("productImage", productImage);
    }
    dispatch(updateProduct(id, myForm));
  };
  return (
    <Fragment>
      <MetaData title="New Product -- Partner" />

      <Box display={"flex"}>
        <Box width={{ base: "0%", md: "20%" }}>
          <SideBar />
        </Box>
        <Box paddingY="15px" width={{ base: "100%", md: "80%" }}>
          <form onSubmit={handleNewProduct} action="" method="post">
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
                Edit Product
              </Text>
              <FormControl isRequired>
                <FormLabel>Product Name</FormLabel>
                <Input
                  value={formData.productName || ""}
                  onChange={collectData}
                  type="text"
                  name="productName"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Price (INR)</FormLabel>
                <Input
                  value={formData.price || ""}
                  onChange={collectData}
                  type="number"
                  name="price"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Unit</FormLabel>
                <Input
                  value={formData.unit || 0}
                  onChange={collectData}
                  type="number"
                  name="unit"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <Select
                  onChange={collectData}
                  name="status"
                  defaultValue={"Available"}
                  placeholder="Select Status"
                  value={formData.status || ""}
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Category</FormLabel>
                <Select
                  name="category"
                  onChange={collectData}
                  placeholder="Select Category"
                  value={formData.category || ""}
                >
                  <option value="Kachori">Kachori</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                  <option value="Cake">Cake</option>
                  <option value="Thali">Thali</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Time (Minutes)</FormLabel>
                <Input
                  value={formData.time || 0}
                  onChange={collectData}
                  type="number"
                  name="time"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>discount (%)</FormLabel>
                <Input
                  value={formData.discount || 0}
                  onChange={collectData}
                  type="number"
                  name="discount"
                />
              </FormControl>
              <FormControl
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <FormLabel>Product Image</FormLabel>
                <Input
                  onChange={collectData}
                  hidden
                  id="productImage"
                  type="file"
                  name="productImage"
                  accept="image/*"
                />
                <label htmlFor="productImage">
                  <Box
                    borderRadius={"10px"}
                    border="1px"
                    borderColor="gray.200"
                    w="150px"
                    h="150px"
                    overflow={"hidden"}
                  >
                    <Image
                      cursor={"pointer"}
                      src={productImagePreview}
                      alt="Product"
                      objectFit={"cover"}
                      width="100%"
                      height="100%"
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
                Update
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Fragment>
  );
};

export default EditProduct;
