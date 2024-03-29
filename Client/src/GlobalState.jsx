import { createContext, useState, useEffect } from "react";
import ProductApi from "./API/ProductApi";
import UserAPI from "./API/UserAPI";
import axios from "axios";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const refreshToken = async () => {
    const res = await axios.get(
      import.meta.env.VITE_API_BASE_URL + "/user/refresh_token",
      { withCredentials: true }
    );

    setToken(res.data.accesstoken);
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      console.log("before refresh token", token);
      refreshToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    productApi: ProductApi(),
    userAPI: UserAPI(token),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
