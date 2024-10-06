import { configureStore } from '@reduxjs/toolkit'
import { userAuth } from './authSlice'
import { productReducer } from './productsSlice'

export const store = configureStore({
  reducer: {
    auth: userAuth,
    products: productReducer
  },
})