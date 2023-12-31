import React from "react";
import "./detailedproduct.styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const DetailedSection = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowProduct = () => {
    return (
      <section className="detail-section-container">
        <div className="flex-container">
          <div className="product-img-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-container">
            <h4> {product.category}</h4>
            <h1>{product.title}</h1>
            <p>Rating : {product.rating && product.rating.rate}&#10038;</p>
            <p className="product-description">{product.description}</p>
            <h3>&#8377;{product.price}</h3>
            <button className="button">Add To Cart</button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <div>
        <div>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};
export default DetailedSection;
