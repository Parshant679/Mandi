import React from "react";
import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductList/ProductList";

function Product() {
  const state = useContext(GlobalState);
  const [products] = state.productApi.products;
  if (products == null || products.length === 0) {
    return <h1>no Products listed</h1>;
  }
  return (
    <div className="products">
      {products.map((item) => {
        return <ProductList product={item} />;
      })}
    </div>
  );
}

export default Product;
