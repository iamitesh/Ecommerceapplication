import React from "react";
import "./detailedproduct.styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const DetailedSection = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="detail-section-container">
      <div className="container">
        <div className="flex-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div>
                <div className="product-img-container">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-detail-container">
                  <h4> {product.category}</h4>
                  <h1>{product.title}</h1>
                  <p>
                    Rating : {product.rating && product.rating.rate}
                    <h3>&#10038;</h3>
                  </p>
                  <p className="product-description">{product.description}</p>
                  <h3>&#8377;{product.price}</h3>
                  <button className="button-primary">Add To Cart</button>
                </div>
              </div>
            ))
          ) : (
            <div>No products found.</div>
          )}
        </div>
      </div>
    </section>
  );
};
export default DetailedSection;