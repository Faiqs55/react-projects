import { configureStore } from '@reduxjs/toolkit'
import { userAuth } from './authSlice'

export const store = configureStore({
  reducer: {
    auth: userAuth
  },
})