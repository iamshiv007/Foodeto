import axios from "axios";
import {
  addToCartFailed,
  addToCartRequest,
  addToCartSuccess,
  removeToCartSuccess,
  saveShippingInfoSuccess,
} from "../slices/cartSlice";

const PORT = process.env.REACT_APP_BACKEND_URL;

// ADD TO  CART
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  dispatch(addToCartRequest());
  try {
    const { data } = await axios.get(`${PORT}/api/product/${id}`);
    console.log(data)
    dispatch(
      addToCartSuccess({
        product: data.productDetails._id,
        name: data.productDetails.productName,
        price: data.productDetails.price,
        discount: data.productDetails.discount,
        image: data.productDetails.productImage[0].url,
        quantity,
      })
    );

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart?.cartItems)
    );
  } catch (error) {
    addToCartFailed(error);
  }
};

// REMOVE FROM CART
export const removeToCart = (id) => async (dispatch, getState) => {
  dispatch(removeToCartSuccess(id));

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch(saveShippingInfoSuccess(data));

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
