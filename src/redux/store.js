// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Import the authSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Register the auth slice in the store
  },
});

export default store;
