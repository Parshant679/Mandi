import React from "react";
import Product from "./products/Product";
import Login from "./login/Login";
import Register from "./login/Register";
import Cart from "./cart/cart";
import DetailProduct from "./utils/DetailProducts/DetailProduct";
import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details/:id" element={<DetailProduct />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Pages;
