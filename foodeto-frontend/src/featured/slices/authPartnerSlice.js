import { createSlice } from "@reduxjs/toolkit";

const sendRequest = (state) => ({ ...state, loading: true })


const requestSuccess = (state, action) => ({ ...state, loading: false, isPartner: true, partner: action.payload.partner })


const requestFailed = (state, action) => ({ ...state, loading: false, error: action.payload })

const authSlice = createSlice({
    name: 'authPartner',
    initialState: {
        isPartner: false,
        partner: null,
        loading: false,
        error: null,
    },
    reducers: {
        loginRequest: sendRequest,
        signupRequest: sendRequest,
        loadPartnerRequest: sendRequest,

        loginSuccess: requestSuccess,
        signupSuccess: requestSuccess,
        loadPartnerSuccess: requestSuccess,

        loginFailed: requestFailed,
        signupFailed: requestFailed,
        loadPartnerFailed: requestFailed,

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
                partner: null,
                isPartner: false
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
    loadPartnerRequest,
    loadPartnerSuccess,
    loadPartnerFailed,
    clearErrors,
    logoutRequest,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice.reducer;

