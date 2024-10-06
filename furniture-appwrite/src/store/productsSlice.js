import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filteredProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    filterProducts: (state, action) => {
      state.filteredProducts = state.allProducts;
      if (action.payload?.sort) {
        if (action.payload.sort === "lh") {
          state.filteredProducts.sort((a, b) => {
            let priceA = (a.price * a.discount) / 100;
            priceA = a.price - priceA;

            let priceB = (b.price * b.discount) / 100;
            priceB = b.price - priceB;

            return priceA - priceB;
          });
        }
        if (action.payload.sort === "hl") {
          state.filteredProducts.sort((a, b) => {
            let priceA = (a.price * a.discount) / 100;
            priceA = a.price - priceA;

            let priceB = (b.price * b.discount) / 100;
            priceB = b.price - priceB;

            return priceB - priceA;
          });
        }
      }

      if (action.payload?.price) {
        state.filteredProducts = state.filteredProducts.filter(
          (item) => item.price <= action.payload.price
        );
      }

      if (action.payload?.category) {
        state.filteredProducts = state.filteredProducts.filter(
          (item) => item.category.title === action.payload.category
        );
      }
    },
  },
});

export const { setProducts, filterProducts } = productSlice.actions;

export const productReducer = productSlice.reducer;
