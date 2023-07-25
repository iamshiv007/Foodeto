import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import usersSlice from "./featured/slices/usersSlice";
import authSlices from "./featured/slices/authSlice";
import authSlice from "./featured/partnerSlices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlices,
        users: usersSlice,
        authPartner: authSlice
    },
    middleware: [ThunkMiddleware]
})