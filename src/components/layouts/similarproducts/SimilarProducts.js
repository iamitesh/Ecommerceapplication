import React from "react";
import "./similarproducts.styles.css";

const SimilarProducts = () => {
  return (
    <div className="similar-product-listing-container">
      <div className="container">
        <h2>Similar Products</h2>
        <div className="listing-container">
          <div className="product-listing-card">
            <div className="product-listing-image-container">
              <img
                src="image link"
                alt="product-listing-image"
                className="product-listing-image"
              />
            </div>
            <div className="product-listing-details-container">
              <h3>Title</h3>
              <p className="pricing">&#8377; Price</p>
              <button className="button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimilarProducts;
