import React from "react";
import FeaturedProducts from "./main/FeaturedProuduct";

import CenterMode from "./main/TopCategory";
import AllProduct from "./main/AllProduct";
import Comments from "./main/Comments";
import NewProducts from "./main/NewProducts";

function Main() {
  return (
    <>
      <FeaturedProducts></FeaturedProducts>
      <CenterMode />
      <AllProduct />
      <Comments />
      <NewProducts />
    </>
  );
}

export default Main;
