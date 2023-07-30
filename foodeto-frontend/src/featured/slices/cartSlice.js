import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shippingInfo: {},
    cartItems: [],
    cartAdded: "false",
    loading: false,
    error: null,
  },
  reducers: {
    addToCartRequest: (state) => ({ ...state, loading: true }),
    addToCartSuccess: (state, action) => {
      const item = action.payload;

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        return {
          ...state,
          loading: false,
          cartAdded: true,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          loading: false,
          cartAdded: true,
          cartItems: [...state.cartItems, item],
        };
      }
    },
    addToCartFailed: (state, action) => ({ ...state, error: action.payload }),
    removeToCartSuccess: (state, action) => ({
      ...state,
      cartItems: state.cartItems.filter((i) => i.product !== action.payload),
    }),
    saveShippingInfoSuccess: (state, action) => ({ ...state, shippingInfo: action.payload }),
    addToCartReset: (state) => ({ ...state, cartAdded: false })
  },
});

export const { addToCartRequest, addToCartSuccess, addToCartFailed, removeToCartSuccess, saveShippingInfoSuccess, addToCartReset } =
  cartSlice.actions;

export default cartSlice.reducer;
