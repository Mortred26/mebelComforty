import React from "react";
import FeaturedProducts from "./main/FeaturedProuduct";

import CenterMode from "./main/TopCategory";
import AllProduct from "./main/AllProduct";

import NewProducts from "./main/NewProducts";

function Main({ onAddToCart }) {
  return (
    <>
      <FeaturedProducts onAddToCart={onAddToCart}></FeaturedProducts>
      <CenterMode />
      <AllProduct onAddToCart={onAddToCart} />
      <NewProducts onAddToCart={onAddToCart} />
    </>
  );
}

export default Main;
