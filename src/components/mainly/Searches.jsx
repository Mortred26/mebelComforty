import React, { useEffect, useState } from "react";
import HeadSearch from "../body/header/HeadSearch";
import Navbar from "../body/header/Navbar";
import Footer from "../body/FooterComponent";
import Search from "../body/Search";

function Searches({ cartCount, onAddToCart, filteredProducts, handleSearch }) {
  return (
    <>
      <HeadSearch cartCount={cartCount} handleSearch={handleSearch} />
      <Navbar />
      <Search
        filteredProducts={filteredProducts}
        onAddToCart={onAddToCart}
      ></Search>
      <Footer />
    </>
  );
}

export default Searches;
