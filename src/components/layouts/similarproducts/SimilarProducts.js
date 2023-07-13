import React from "react";
import "./similarproducts.styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SimilarProducts = () => { 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?sort=limit=4`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="similar-product-listing-container">
      <div className="container">
        <h2>Similar Products</h2>
        <div className="listing-container">
        <div>
            {products.length > 0 ? (
              products.map((product) => (
                <div className="product-listing-card">
                <div className="product-listing-image-container"> 
                <div key={product.id}>
                  <img src={product.image} alt={product.title} className="product-listing-image" />
                  <div className="product-listing-details-container">
                    <h3>{product.title}</h3>
                    <p className="pricing">Price: &#8377;{product.price}</p>
                    <button className="button">Add to Cart</button>
                  </div>
                </div>
              ))
            ) : (
              <div>No products found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
