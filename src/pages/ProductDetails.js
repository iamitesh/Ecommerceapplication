import React from "react";
import Navbar from "../components/layouts/navbar/Navbar";
import DetailedProduct from "../components/layouts/detailedproduct/DetailedProduct";
import SimilarProducts from "../components/layouts/similarproducts/SimilarProducts";
import Footer from "../components/layouts/footer/Footer";
import "./productdetails.styles.css";

const ProductDetails = () => {
  return (
    <section>
      <Navbar />
      <DetailedProduct />
      <SimilarProducts />
      <Footer />
    </section>
  );
};
export default ProductDetails;
