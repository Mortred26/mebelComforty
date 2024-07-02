import React from "react";
import FeaturedProducts from "./main/FeaturedProuduct";

import CenterMode from "./main/TopCategory";
import AllProduct from "./main/AllProduct";
import Comments from "./main/Comments";
import NewProducts from "./main/NewProducts";

function Main({ onAddToCart }) {
  return (
    <>
      <FeaturedProducts onAddToCart={onAddToCart}></FeaturedProducts>
      <CenterMode />
      <AllProduct onAddToCart={onAddToCart} />
      <Comments />
      <NewProducts onAddToCart={onAddToCart} />
    </>
  );
}

export default Main;
