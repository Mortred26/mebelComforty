import React from "react";
import "../style/header.css";
import "../style/laptopmedia.css";
import "../style/mobilemedia.css";
import HeadSearch from "./header/HeadSearch";
import Navbar from "./header/Navbar";
import HeaderCarousel from "./header/HeaderCarousel";

function Header({ cartCount, handleSearch }) {
  return (
    <div>
      <div className="mobile-navbar">
        <HeadSearch cartCount={cartCount} handleSearch={handleSearch} />
        <Navbar></Navbar>
      </div>
      <HeaderCarousel></HeaderCarousel>
    </div>
  );
}

export default Header;
