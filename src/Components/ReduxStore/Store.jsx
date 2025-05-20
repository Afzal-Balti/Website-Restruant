import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import resortReducer from "../ReduxStore/CreateSlice";
import ProductReducer from "../ReduxStore/ProductSlice";

export const store = configureStore({
  reducer: {
    resort: resortReducer,
    products: ProductReducer,
  },
});
