import React from "react";
import "./showcase.styles.css";
import Navbar from "../navbar/Navbar";

const Showcase = () => {
  return (
    <section className="showcase-container">
      <Navbar />
      <div className="overlay"></div>
      <div className="showcase-content">
        <h2>Welcome to the greatest shopping destination!</h2>
        <p>Great quality & Affordable pricing</p>
      </div>
    </section>
  );
};
export default Showcase;
