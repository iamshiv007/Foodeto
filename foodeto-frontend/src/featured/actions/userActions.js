import axios from "axios"
import { loginFailed, loginRequest, loginSuccess, logoutFailed, logoutRequest, logoutSuccess, signupFailed, signupSuccess, userLoadFailed, userLoadRequest, signupRequest, userLoadSuccess } from "../slices/authSlice";

const port = process.env.REACT_APP_BACKEND_URL

// 1. Login
export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        // Make API request for login
        const { data } = await axios.post(`${port}/api/user/login`, userData);
        dispatch(loginSuccess(data));
    } catch (error) {
        dispatch(loginFailed(error.response?.data.message));
    }
};

// 2. Signup
export const register = (userData) => async (dispatch) => {
    dispatch(signupRequest());
    try {
        // Make API request for signup
        const { data } = await axios.post(`${port}/api/user/register`, userData);
        dispatch(signupSuccess(data));
    } catch (error) {
        dispatch(signupFailed(error.response.data.message));
    }
};


// 3. Load user
export const loadUser = () => async (dispatch) => {
    dispatch(userLoadRequest())
    try {
        // Make API request for load user
        const { data } = await axios.get(`${port}/api/user/me`)
        dispatch(userLoadSuccess(data))

    } catch (error) {
        dispatch(userLoadFailed(error.response?.data.message))
    }
}

// 4. Logout
export const logout = () => async (dispatch) => {
    dispatch(logoutRequest())
    try {
        // Make API request for load user
        const { data } = await axios.get(`${port}/api/user/logout`)
        dispatch(logoutSuccess(data))

    } catch (error) {
        dispatch(logoutFailed(error.response?.data.message))
    }
}