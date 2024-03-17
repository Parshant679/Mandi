import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import LinkButtons from "../../utils/linkButtons";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart] = state.userAPI.cart;

  console.log(cart);

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div>
      {cart.map((product) => (
        <div className="detail">
          <img src={product.product.images.url} alt="" />
          <div className="box-detail">
            <div className="row">
              <h2>{product.product.title}</h2>
              <h6>{product.product_id}</h6>
            </div>
            <span>${product.product.price}</span>
            <p>{product.description}</p>
            <p>{product.content}</p>
            <p>Sold:{product.sold}</p>
            <Link to="/cart" className="cart">
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cart;

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-around min-w-screen text-gray-500 py-3">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        alt="Empty cart Image"
        className="md:w-3/12 lg:w-4/12 rounded-md"
      />
      <div className="flex flex-col text-center">
        <h1 className="text-xl font-bold mb-4">Your cart is Empty</h1>
        <p className="text-gray-700 text-base font-semibold">
          You have no items in your shoping cart.
        </p>
        <p className="text-gray-700 text-base mb-4 font-semibold">
          Let's Go and Buy Something!
        </p>
        <LinkButtons
          path="/"
          title="ShopNow"
          reqClass="rounded-2xl font-semibold bg-red-700 px-2 py-2 text-white"
        />
      </div>
    </div>
  );
};
