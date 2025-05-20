import React from "react";
import Cookies from "js-cookie";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { CatagoriesItem, CategoriesAdd } from "../AuthApi/AuthApi";

const initialState = {
  categoryItem: null,
  loading: false,
};

export const categoryList = createAsyncThunk(
  "products/CategoriesAdd",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await CategoriesAdd({
        firstName: formData.get("category_name"),
        image: formData.get("image"),
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add category");
    }
  }
);

export const CategoryProduct = createAsyncThunk(
  "products/CatagoriesItem",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CatagoriesItem(payload);
      console.log("response of Category get :::::::::::", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add category");
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
        state.loading = false;
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
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
