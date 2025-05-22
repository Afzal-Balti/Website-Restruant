import React from "react";
import Cookies from "js-cookie";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  CatagoriesItem,
  CategoriesAdd,
  ProductItems,
  ProductShow,
} from "../AuthApi/AuthApi";

const initialState = {
  categoryItem: [],
  loading: false,
  product: [],
  postProduct: [],
  // category: null,
};

export const categoryList = createAsyncThunk(
  "products/CategoriesAdd",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await CategoriesAdd(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add category");
    }
  }
);

export const CategoryProduct = createAsyncThunk(
  "products/CatagoriesItem",
  async (page, { rejectWithValue }) => {
    try {
      const response = await CatagoriesItem(page);
      // console.log("response of Category get :::::::::::", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add category");
    }
  }
);

export const Productdata = createAsyncThunk(
  "products/ProductItems",
  async (categoryId, page, { rejectWithValue }) => {
    try {
      const response = await ProductItems(categoryId, page);
      // console.log("RESPONSE OF PRODUCT ::::::::::::: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Falied to add products");
    }
  }
);

export const ProductDatas = createAsyncThunk(
  "products/ProductShow",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await ProductShow(formData);
      // console.log("RESPONSE POST OF PRODUCT ::::::::::::: ", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Falied to add products");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(categoryList.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoryList.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(categoryList.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(CategoryProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(CategoryProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryItem = action.payload;
      })
      .addCase(CategoryProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })
      .addCase(Productdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(Productdata.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(Productdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(ProductDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(ProductDatas.fulfilled, (state, action) => {
        state.loading = false;
        state.postProduct = action.payload;
      })
      .addCase(ProductDatas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
