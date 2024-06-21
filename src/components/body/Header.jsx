import React from "react";
import "../style/header.css";
import "../style/laptopmedia.css";
import "../style/mobilemedia.css";
import HeadSearch from "./header/HeadSearch";
import Navbar from "./header/Navbar";
import HeaderCarousel from "./header/HeaderCarousel";

function Header() {
  return (
    <div>
      <div className="mobile-navbar">
        <HeadSearch></HeadSearch>
        <Navbar></Navbar>
      </div>
      <HeaderCarousel></HeaderCarousel>
    </div>
  );
}

export default Header;
