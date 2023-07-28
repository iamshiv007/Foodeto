import axios from "axios"
import { AllProductsFailed, allProductsRequest, allProductsSuccess, partnerProductsFailed, partnerProductsRequest, partnerProductsSuccess } from "../slices/productsSlice"
import { productDetailsFailed, productDetailsRequest, productDetailsSuccess } from "../slices/productDetailsSlice"
import { deleteProductFailed, deleteProductRequest, deleteProductSuccess, updateProductFailed, updateProductRequest, updateProductSuccess, newProductFailed, newProductRequest, newProductSuccess } from "../slices/productSlice"

const port = process.env.REACT_APP_BACKEND_URL

// 1. Get All Products
export const getAllProducts = (query, page, category) => async (dispatch) => {
    dispatch(allProductsRequest())
    try {

        let link = `${port}/api/products?query=${query || ""}&page=${page || ""}&category=${category || ""}`

        // Make API request for load user
        const { data } = await axios.get(link)
        dispatch(allProductsSuccess(data))

    } catch (error) {
        dispatch(AllProductsFailed(error?.response?.data.message))
    }
}

// 2. Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
    dispatch(productDetailsRequest())
    try {
        // Make API request for load user
        const { data } = await axios.get(`${port}/api/product/${id}`)
        dispatch(productDetailsSuccess(data))

    } catch (error) {
        dispatch(productDetailsFailed(error?.response?.data.message))
    }
}

// 3. Create New Product
export const newProduct = (productData) => async (dispatch) => {
    dispatch(newProductRequest())

    try {

        const { data } = await axios.post(`${port}/api/partner/product/new`, productData)

        dispatch(newProductSuccess(data))

    } catch (error) {
        dispatch(newProductFailed(error?.response?.data.message))
    }
}

// 4. Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
    dispatch(updateProductRequest())

    try {

        const { data } = await axios.put(`${port}/api/partner/product/${id}`, productData)

        dispatch(updateProductSuccess(data))

    } catch (error) {
        dispatch(updateProductFailed(error?.response?.data.message))
    }
}

// 5. Delete Product
export const deleteProduct = (id) => async (dispatch) => {

    dispatch(deleteProductRequest())

    try {

        const { data } = await axios.delete(`${port}/api/partner/product/${id}`)

        dispatch(deleteProductSuccess(data))

    } catch (error) {
        dispatch(deleteProductFailed(error?.response?.data.message))
    }
}

// 6. Get Partner Products
export const getPartnerProducts = () => async (dispatch) => {
    dispatch(partnerProductsRequest())

    try {

        const { data } = await axios.get(`${port}/api/partner/products`)

        dispatch(partnerProductsSuccess(data))

    } catch (error) {
        dispatch(partnerProductsFailed(error))
    }
}