import React from "react";
import "./showcase.styles.css";
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
  return (
    <section>
      <Navbar />
      <div className="showcase-gap"></div>
      <div className="showcase-container">
        <div className="overlay"></div>
        <div className="showcase-content">
          <h2>Welcome to the greatest shopping destination!</h2>
          <p>Great quality & Affordable pricing</p>
        </div>
        <div className="search-container">
          <h2>
            Search in <span className="text-primary">Fashion</span>
          </h2>
          <SearchInputForm />
        </div>
      </div>
    </section>
  );
};
export default Showcase;
