import axios from "axios"
import { loginFailed, loginRequest, loginSuccess, logoutFailed, logoutRequest, logoutSuccess, signupFailed, signupSuccess, loadPartnerFailed, loadPartnerRequest, signupRequest, loadPartnerSuccess } from "../slices/authPartnerSlice";

const port = process.env.REACT_APP_BACKEND_URL

// 1. Login
export const login = (partnerData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        // Make API request for login
        const { data } = await axios.post(`${port}/api/partner/login`, partnerData);
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginFailed(error.response?.data.message));
    }
};

// 2. Signup
export const register = (partnerData) => async (dispatch) => {
    dispatch(signupRequest());
    try {
        // Make API request for signup
        const { data } = await axios.post(`${port}/api/partner/register`, partnerData);
        dispatch(signupSuccess(data));
    } catch (error) {
        dispatch(signupFailed(error.response.data.message));
    }
};


// 3. Load partner
export const loadpartner = () => async (dispatch) => {
    dispatch(loadPartnerRequest())
    try {
        // Make API request for load partner
        const { data } = await axios.get(`${port}/api/partner/me`)
        dispatch(loadPartnerSuccess(data))

    } catch (error) {
        dispatch(loadPartnerFailed(error.response?.data.message))
    }
}

// 4. Logout
export const logout = () => async (dispatch) => {
    dispatch(logoutRequest())
    try {
        // Make API request for load partner
        const { data } = await axios.get(`${port}/api/partner/logout`)
        dispatch(logoutSuccess(data))

    } catch (error) {
        dispatch(logoutFailed(error.response?.data.message))
    }
}