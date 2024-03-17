import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: null,
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_API_BASE_URL + "/user/register", {
        ...user,
      });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8">Register</h1>
      <form
        onSubmit={registerSubmit}
        className="flex flex-col space-y-4 w-full max-w-md"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            autoComplete="off"
            value={user.name}
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            autoComplete="off"
            value={user.email}
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={user.phoneNo}
            autoComplete="off"
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Register
        </button>
      </form>
      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
        <Link to="/login" className="hover:underline">
          Already have an account? Login
        </Link>
        <a href="#" className="hover:underline mx-1 text-green-500 ">
          Forgot Password?
        </a>
      </div>
      <div className="flex items-center mt-1 text-gray-500">
        <span className="mr-2">Or sign up with:</span>
        <a
          href="#"
          className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          <FcGoogle />
        </a>
      </div>
    </div>
  );
};

export default Register;
