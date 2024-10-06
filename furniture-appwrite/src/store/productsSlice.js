import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    filteredProducts: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.allProducts = action.payload;
        },
    }
});

export const {setProducts} = productSlice.actions;

export const productReducer = productSlice.reducer;