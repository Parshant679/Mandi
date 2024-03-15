import React, { useEffect, useState } from "react";
import axios from "axios";
function ProductApi() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get(
      import.meta.env.VITE_API_BASE_URL + "/api/products"
    );
    if (res != null) setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return {
    products: [products, setProducts],
  };
}

export default ProductApi;
