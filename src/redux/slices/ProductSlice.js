import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductList = createAsyncThunk("list/getProduct", async () => {
  try {
    const fetchData = await axios.get("https://fakestoreapi.com/products");
    return fetchData?.data;
  } catch (e) {
    return e;
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: false,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
