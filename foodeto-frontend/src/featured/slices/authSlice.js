import { createSlice } from "@reduxjs/toolkit";

const sendRequest = (state) => ({ ...state, loading: true })


const requestSuccess = (state, action) => ({ ...state, loading: false, isAuthenticated: true, user: action.payload.user })


const requestFailed = (state, action) => ({ ...state, loading: false, error: action.payload })

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        loginRequest: sendRequest,
        signupRequest: sendRequest,
        userLoadRequest: sendRequest,

        loginSuccess: requestSuccess,
        signupSuccess: requestSuccess,
        userLoadSuccess: requestSuccess,

        loginFailed: requestFailed,
        signupFailed: requestFailed,
        userLoadFailed: requestFailed,

        clearErrors: (state) => {
            return {
                ...state,
                error: null
            }
        },

        logoutRequest: (state) => {
            return {
                ...state,
                loading: true,
            }
        },
        logoutSuccess: (state) => {
            return {
                ...state,
                loading: false,
                user: null,
                isAuthenticated: false
            }
        },
        logoutFailed: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailed,
    signupRequest,
    signupSuccess,
    signupFailed,
    userLoadRequest,
    userLoadSuccess,
    userLoadFailed,
    clearErrors,
    logoutRequest,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice.reducer;

