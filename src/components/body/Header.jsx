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
      <HeadSearch></HeadSearch>
      <Navbar></Navbar>
      <HeaderCarousel></HeaderCarousel>
    </div>
  );
}

export default Header;
