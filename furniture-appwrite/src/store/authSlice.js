import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    loggedIn : false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state, action) => {
            state.userData = action.payload;
            state.loggedIn = true;
        },

        authLogout: (state) => {
            state.userData = {}
            state.loggedIn = false;
        }
    }
});

export const {authLogin, authLogout} = authSlice.actions;
export const userAuth = authSlice.reducer