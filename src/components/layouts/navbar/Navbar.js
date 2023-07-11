import React from "react";
import "./navbar.styles.css";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";
import logoimg from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">
          <im src={logoimg} alt="logo" />
          Clothing<span className="text-primary">Store</span>
        </a>
        <SearchInputForm />
        <nav className="nav-links-container">
          <a href="#" className="nav-links">
            Offers
          </a>
          <a href="#" className="nav-links">
            Account
          </a>
          <a href="#" className="nav-links">
            Wishlist
          </a>
          <a href="#" className="nav-links">
            Cart
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
