import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import usersSlice from "./featured/slices/usersSlice";
import authSlices from "./featured/slices/authSlice";
import authSlice from "./featured/partnerSlices/authSlice";
import productSlice from "./featured/slices/productSlice";
import productsSlice from "./featured/slices/productsSlice";
import productDetailsSlice from "./featured/slices/productDetailsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlices,
        users: usersSlice,
        authPartner: authSlice,
        product: productSlice,
        productDetails: productDetailsSlice,
        products: productsSlice
    },
    middleware: [ThunkMiddleware]
})