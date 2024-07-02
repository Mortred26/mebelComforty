import React from "react";
import HeadSearch from "../body/header/HeadSearch";
import Navbar from "../body/header/Navbar";
import Footer from "../body/FooterComponent";
import Detail from "../body/Detail";
import SimilarProduct from "../body/main/SimilarProduct";

function Details({ cartCount, onAddToCart }) {
  return (
    <>
      <HeadSearch cartCount={cartCount} />
      <Navbar />
      <Detail onAddToCart={onAddToCart} />
      <SimilarProduct onAddToCart={onAddToCart} />
      <Footer />
    </>
  );
}

export default Details;
