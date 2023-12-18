import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import productSlice from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    product: productSlice,
  },
});

export default store;
