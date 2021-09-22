import React from "react";
import "./SearchBar.css";

function SearchBar({ handleChange, handleClick }) {
  return (
    <div className="search">
      <input
        type="text"
        className="search_input"
        onChange={handleChange}
        placeholder="Type here to search"
      />
      <button className="search_button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
