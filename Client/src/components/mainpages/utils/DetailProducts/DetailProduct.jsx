import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [product] = state.productApi.products;
  const [detailProduct, setDetailsProduct] = useState([]);
  useEffect(() => {
    if (params) {
      product.forEach(
        (element) => {
          if (element._id === params.id) setDetailsProduct(element);
        },
        [params, product]
      );
    }
  });
  if (detailProduct.length === 0) return null;
  return (
    <div className="details">
      <img src={detailProduct.images.url} alt="" />
      <div className="row">
        <h2>{detailProduct.title}</h2>
        <h6>{detailProduct.product._id}</h6>
      </div>
      <span>${detailProduct.price}</span>
      <p>${detailProduct.descrition}</p>
      <p>{detailProduct.content}</p>
      <Link to="/cart" className="card">
        Bye Now
      </Link>
    </div>
  );
}

export default DetailProduct;
