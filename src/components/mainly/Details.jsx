import React from "react";
import HeadSearch from "../body/header/HeadSearch";
import Navbar from "../body/header/Navbar";
import Footer from "../body/FooterComponent";
import Detail from "../body/Detail";
import SimilarProduct from "../body/main/SimilarProduct";

function Details() {
  return (
    <>
      <HeadSearch />
      <Navbar />
      <Detail />
      <SimilarProduct />
      <Footer />
    </>
  );
}

export default Details;
