import React from "react";
import "./navbar.styles.css";
import logoimg from "../../../assets/favicon.ico";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="container flex justify-between align-center">
        <a href="#" className="logo">
          <img src={logoimg} alt="logo"></img>
          Clothing<span className="text-primary">Store</span>
        </a>
        <nav className="nav-links-container">
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
