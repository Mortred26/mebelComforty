import React from "react";
import "../style/header.css";
import "../style/laptopmedia.css";
import "../style/mobilemedia.css";
import HeadSearch from "./header/HeadSearch";
import Navbar from "./header/Navbar";
import HeaderCarousel from "./header/HeaderCarousel";

function Header({ cartCount }) {
  return (
    <div>
      <div className="mobile-navbar">
        <HeadSearch cartCount={cartCount} />
        <Navbar></Navbar>
      </div>
      <HeaderCarousel></HeaderCarousel>
    </div>
  );
}

export default Header;
