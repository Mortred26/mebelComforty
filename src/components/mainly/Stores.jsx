import React from "react";
import HeadSearch from "../body/header/HeadSearch";
import Navbar from "../body/header/Navbar";
import Footer from "../body/FooterComponent";
import Store from "../body/Store";

function Stores({ cartCount, cartItems, handleDeleteFromCart }) {
  return (
    <>
      <HeadSearch cartCount={cartCount} />
      <Navbar />
      <Store
        cartItems={cartItems}
        handleDeleteFromCart={handleDeleteFromCart}
      />
      <Footer />
    </>
  );
}

export default Stores;
