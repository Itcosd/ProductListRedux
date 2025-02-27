import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/userSlice";
import productSlice from "../Slices/productSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
  },
});

export default store;
