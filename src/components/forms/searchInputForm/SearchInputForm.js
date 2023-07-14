import React from "react";
import "./searchinputform.styles.css";

const SearchInputForm = () => {
  const handleSearch=()=>{
    //TODO
  }
  return (
    <div className="search-input-form-container">
      <input type="text" className="search-input" placeholder="Search here" />
      <button className="search-button" onClick={handleSearch}> Search </button>
    </div>
  );
};
export default SearchInputForm;
