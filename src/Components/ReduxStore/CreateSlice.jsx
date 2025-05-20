import React, { act } from "react";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  forgetPassword,
  login,
  newPassword,
  signup,
  verifyOtp,
} from "../AuthApi/AuthApi";
import { Loader } from "rsuite";
import Cookies from "js-cookie";

const initialState = {
  loading: false,
  accessToken: null,
  token: null,
  email: null,

  isAuthentication: Cookies.get("accessToken"),
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await login(payload);
      console.log("response is run +++ ---------------------", response);

      const tokenAccess = response?.data?.token?.access;
      console.log("Access Token is here __________", tokenAccess);

      Cookies.set("accessToken", tokenAccess, {
        expires: 7,
        secure: true,
        path: "/",
        sameSite: "strict",
      });

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          return rejectWithValue("Invalid signup details. Please try again.");
        } else if (error.response.status === 400) {
          return rejectWithValue("User already exists. Try logging in.");
        } else {
          return rejectWithValue("Server error. Please try again later.");
        }
      } else {
        return rejectWithValue("Network error. Please check your connection.");
      }
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signup(payload);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          return rejectWithValue("Invalid signup details. Please try again.");
        } else if (error.response.status === 400) {
          return rejectWithValue("User already exists. Try logging in.");
        } else {
          return rejectWithValue("Server error. Please try again later.");
        }
      } else {
        return rejectWithValue("Network error. Please check your connection.");
      }
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/verifyOtp",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await verifyOtp(payload);
      if (response.data) {
        return response.data;
      }
    } catch {
      if (error.response) {
        if (error.response.status === 409) {
          return rejectWithValue("Invalid signup details. Please try again.");
        } else if (error.response.status === 400) {
          return rejectWithValue("User already exists. Try logging in.");
        } else {
          return rejectWithValue("Server error. Please try again later.");
        }
      } else {
        return rejectWithValue("Network error. Please check your connection.");
      }
    }
  }
);

export const forget = createAsyncThunk(
  "auth/forgetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await forgetPassword(payload);

      console.log("FORGET PASSWORD RUN ------------- ", response);

      if (response.data) {
        return response.data;
      }
    } catch {
      if (error.response) {
        if (error.response.status === 409) {
          return rejectWithValue("Invalid signup details. Please try again.");
        } else if (error.response.status === 400) {
          return rejectWithValue("User already exists. Try logging in.");
        } else {
          return rejectWithValue("Server error. Please try again later.");
        }
      } else {
        return rejectWithValue("Network error. Please check your connection.");
      }
    }
  }
);

export const conformPassword = createAsyncThunk(
  "auth/newPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await newPassword(payload);
      console.log("respsone is new password", response);
    } catch {
      if (error.response) {
        if (error.response.status === 409) {
          return rejectWithValue("Invalid signup details. Please try again.");
        } else if (error.response.status === 400) {
          return rejectWithValue("User already exists. Try logging in.");
        } else {
          return rejectWithValue("Server error. Please try again later.");
        }
      } else {
        return rejectWithValue("Network error. Please check your connection.");
      }
    }
  }
);

const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthentication = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.access_token;
        state.isAuthentication = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthentication = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.access_token;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(forget.pending, (state) => {
        state.loading = true;
      })
      .addCase(forget.fulfilled, (state, action) => {
        state.loading = false;
        // state.accessToken = action.payload.access_token;
      })
      .addCase(forget.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(conformPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(conformPassword.fulfilled, (state, action) => {
        state.loading = false;
        // state.accessToken = action.payload.access_token;
      })
      .addCase(conformPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setEmail } = counterSlice.actions;
export default counterSlice.reducer;
