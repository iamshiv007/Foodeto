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
import { useNavigate } from "react-router-dom";
import MetaData from "../../layout/metaData/MetaData";
import {
  clear_errors,
  newProductReset,
} from "../../../featured/slices/productSlice";
import { newProduct } from "../../../featured/actions/productActions";
import SideBar from "../layout/SideBar";

const NewProduct = () => {
  const [formData, setFormData] = useState({ status: "Available" });
  const [productImage, setProductImage] = useState("");
  const [productImagePreview, setProductImagePreview] = useState(plate);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productCreated, error, loading } = useSelector(
    (state) => state.product
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
    if (productCreated) {
      toast.success("Product Created");
      dispatch(newProductReset());
      navigate("/dashboard");
    }

    if (error) {
      toast.error(error);
      dispatch(clear_errors());
    }
  }, [productCreated, error, navigate, dispatch]);

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
    myForm.append("productImage", productImage);
    dispatch(newProduct(myForm));
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
                Create A Product
              </Text>
              <FormControl isRequired>
                <FormLabel>Product Name</FormLabel>
                <Input onChange={collectData} type="text" name="productName" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Price (INR)</FormLabel>
                <Input onChange={collectData} type="number" name="price" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Unit</FormLabel>
                <Input onChange={collectData} type="number" name="unit" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <Select
                  onChange={collectData}
                  name="status"
                  defaultValue={"Available"}
                  placeholder="Select Status"
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
                >
                  <option value="Kachori">Kachori</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                  <option value="Cake">Cake</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Time (Minutes)</FormLabel>
                <Input onChange={collectData} type="number" name="time" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>discount (%)</FormLabel>
                <Input onChange={collectData} type="number" name="discount" />
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
                      height={"100%"}
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
                Create
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </Fragment>
  );
};

export default NewProduct;
