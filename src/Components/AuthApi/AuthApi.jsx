import React from "react";
import api from "./Api";
import Cookies from "js-cookie";

export function signup(values) {
  console.log("valuesss", values);
  return api.post("/Signup_User/", values);
}

export function login(values) {
  return api.post("/login/", values);
}

export function verifyOtp(values) {
  return api.post("/password-reset/request/", values);
}

export function forgetPassword(values) {
  console.log(values);

  return api.post("/password-reset/verify-otp/", values);
}

export function newPassword(values) {
  return api.post("/password-reset/change-password/", values);
}

export function CategoriesAdd(values) {
  const token = Cookies.get("accessToken");
  console.log("Token being used:", token);

  const formData = new FormData();
  formData.append("category_name", values.firstName);
  formData.append("image", values.image);

  return api.post("/category/", formData, {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "multipart/form-data",
    },
  });
}

export function CatagoriesItem(page) {
  console.log("page in saga______________", page);

  return api.get(`/category/?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function ProductItems(categoryId, page) {
  console.log("categoryId**", categoryId);

  return api.get(`/add_products/?category?page=${(categoryId, page)}`);
}

export function ProductShow(values) {
  const token = Cookies.get("accessToken");
  return api.post("/add_products/", values, {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": "multipart/form-data",
    },
  });
}
