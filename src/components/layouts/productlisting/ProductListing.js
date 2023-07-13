import React from "react";
import "./productlisting.styles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?sort=${sortField}`
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

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  return (
    <div className="product-listing-container">
      <div className="container">
        <h3>Latest Collection</h3>
        <div className="select-container">
          <select
            className="select"
            value={sortField}
            onChange={handleSortFieldChange}
            placeholder="Sort by"
          >
            <option selected disabled value="">
              Sort By
            </option>
            <option value="low to high">Low to High</option>
            <option value="high to low">High to Low</option>
          </select>
        </div>
        <div>
          <div className="product-list">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product-card">
                  <Link to={`/productdetails/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                  <div>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
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
export default ProductListing;
