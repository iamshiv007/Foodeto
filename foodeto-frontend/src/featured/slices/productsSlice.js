import { createSlice } from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'Products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        allProductsRequest: (state) => ({ ...state, loading: true }),
        partnerProductsRequest: (state) => ({ ...state, loading: true }),
        allProductsSuccess: (state, action) => ({ ...state, loading: false, products: action.payload.products, resultPerPage: action.payload.resultPerPage, productsCount: action.payload.productsCount, filteredProductsCount: action.payload.filteredProductsCount }),
        partnerProductsSuccess: (state, action) => ({ ...state, loading: false, products: action.payload.products }),
        AllProductsFailed: (state, action) => ({ ...state, loading: false, error: action.payload }),
        partnerProductsFailed: (state, action) => ({ ...state, loading: false, error: action.payload.error }),
        clear_errors: (state) => ({ ...state, error: null })
    }
})

export const {
    allProductsRequest,
    partnerProductsRequest,
    allProductsSuccess,
    partnerProductsSuccess,
    AllProductsFailed,
    partnerProductsFailed,
    clear_errors
} = productsSlice.actions;

export default productsSlice.reducer;
