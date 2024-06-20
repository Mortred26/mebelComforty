import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/header.css";
import "../style/details.css";
import "../style/laptopmedia.css";
import "../style/mobilemedia.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

function Detail() {
  const images = [
    {
      original: "/image/product/product1.png",
      thumbnail: "/image/product/product1.png",
    },
    {
      original: "/image/product/product2.png",
      thumbnail: "/image/product/product2.png",
    },
    {
      original: "/image/product/product3.png",
      thumbnail: "/image/product/product3.png",
    },
  ];

  return (
    <div className="detail-container">
      <div className="detail-flex">
        <img
          className="detail-image"
          src="/image/product/product1.png"
          alt=""
        />
        <div className="content-container">
          <h3 className="detail-heading">Isolate Sofa Chair</h3>
          <div className="detailprice-flex">
            <p className="detail-price">
              $250 <span className="detail-span">$500</span>
            </p>
            <p className="detail-action">50% off</p>
          </div>
          <p className="detail-text">
            As you run your fingers across the surface of this golden oak
            colored vanity set, you’ll understand why it stands out from the
            rest; from the table to the legs.
          </p>
          <ul className="detail-info">
            <li>
              Material:{" "}
              <span className="detailinfo-span">Polyester, Fabric</span>
            </li>
            <li>
              Brand: <span className="detailinfo-span">Purefit</span>
            </li>
            <li>
              Category: <span className="detailinfo-span">Wing Chair</span>
            </li>
            <li>
              Tag:{" "}
              <span className="detailinfo-span">
                minimalistic, Sofa, Living room
              </span>
            </li>
          </ul>
          <div className="detailstore-flex">
            <div className="stock-add">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <button className="detail-addcart">
              <MdOutlineLocalGroceryStore className="detailstore-btn" />
              add To Cart
            </button>
            <button className="detail-heart">
              <FaRegHeart className="detailheart-btn" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="detaildescription-name">Product Descriptions</h3>
      <p className="detail-desctiption">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        illum expedita numquam, eius laborum ipsa delectus, quis ipsum itaque
        eum iste illo quasi cum cumque repellat. Dolorum iste nulla dolor porro
        officiis, quasi molestias nostrum, voluptatum doloribus illum iure non
        consequuntur dicta repudiandae enim fugiat odio nihil quas! Asperiores,
        dolorum.'
      </p>
    </div>
  );
}

export default Detail;
