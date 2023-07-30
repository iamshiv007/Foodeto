import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import usersSlice from "./featured/slices/usersSlice";
import authSlices from "./featured/slices/authSlice";
import authSlice from "./featured/slices/authSlice";
import productSlice from "./featured/slices/productSlice";
import productsSlice from "./featured/slices/productsSlice";
import productDetailsSlice from "./featured/slices/productDetailsSlice";
import cartSlice from "./featured/slices/cartSlice";

let preloadedState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {}
    }
}

export const store = configureStore({
    reducer: {
        auth: authSlices,
        users: usersSlice,
        authPartner: authSlice,
        product: productSlice,
        productDetails: productDetailsSlice,
        products: productsSlice,
        cart: cartSlice
    },
    preloadedState,
    middleware: [ThunkMiddleware]
})