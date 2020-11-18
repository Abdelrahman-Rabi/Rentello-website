import React, { useState } from "react";
import "../search_box.css";
import axios from "axios";

const SearchBox = () => {
  const [searchInput, setsearchIput] = useState("");

  const submitSearch = () => {
    axios.post("");
  };
  return (
    <div className="search-container">
      <label className="search-label">
        <input
          type="text"
          name="searchInput"
          placeholder="search"
          onChange={(e) => {
            setsearchIput(e.target.value);
          }}
        />
        <i className="fas fa-search search-icon" />
      </label>
      <button onClick={submitSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
