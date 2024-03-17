import React, { useContext, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import SearchBar from "../headers/Searchbar";
import LinkButtons from "../utils/linkButtons";
import axios from "axios";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  const logoutUser = async () => {
    await axios.get(import.meta.env.VITE_API_BASE_URL + "/user/logout");

    localStorage.clear();
    setIsAdmin(false);
    setIsLogged(false);
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories </Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <LinkButtons path="/history" title="History" />
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  return (
    <header>
      <div className="menu">
        <MdOutlineMenu size={30} />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "MANDI"}</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
        </li>
        <li>
          <SearchBar />
        </li>
        {isAdmin && adminRouter()}
        {isLogged ? (
          loggedRouter()
        ) : (
          <>
            <li>
              <LinkButtons
                path="/login"
                title="Login"
                reqClass="text-cyan-500 "
              />
            </li>
            <li>
              <div className="px-2 py-2 rounded-xl bg-sky-700">
                <LinkButtons
                  path="/register"
                  title="Register"
                  reqClass="text-stone-50"
                />
              </div>
            </li>
          </>
        )}

        <li>
          <MdClose size={30} className="menu" />
        </li>
      </ul>

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <MdOutlineAddShoppingCart size={30} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
