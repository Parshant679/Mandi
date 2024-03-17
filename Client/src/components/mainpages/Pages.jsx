import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy Loading components
const Login = lazy(() => import("./login/Login"));
const Register = lazy(() => import("./login/Register"));
const Product = lazy(() => import("./products/Product"));
const DetailProduct = lazy(() =>
  import("./utils/DetailProducts/DetailProduct")
);
const Cart = lazy(() => import("./cart/cart"));

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Product />} />
      <Route path="/details/:id" element={<DetailProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Pages;
