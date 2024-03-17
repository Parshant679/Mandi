import React, { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { CiSearch } from "react-icons/ci";

function Searchbar() {
  const state = useContext(GlobalState);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex items-center">
      <input
        className="px-4 py-1 w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <CiSearch className="w-10  rounded-md focus:outline-none focus:ring focus:border-blue-500 " />
    </div>
  );
}

export default Searchbar;
