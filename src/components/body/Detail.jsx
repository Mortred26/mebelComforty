import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import "../style/header.css";
import "../style/details.css";
import "../style/laptopmedia.css";
import "../style/mobilemedia.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Detail({ onAddToCart }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://remonabackend.onrender.com/api/v1/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountPercentage =
    ((product.oldprice - product.price) / product.oldprice) * 100;

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  return (
    <div className="detail-container">
      <div className="detail-flex">
        <img
          className="detail-image"
          src={`https://remonabackend.onrender.com/${product.image}`}
          alt={product.name}
        />
        <div className="content-container">
          <h3 className="detail-heading">{product.name}</h3>
          <div className="detailprice-flex">
            <p className="detail-price">
              ${product.price}{" "}
              <span className="detail-span">${product.oldprice}</span>
            </p>
            <p className="detail-action">
              {discountPercentage.toFixed(2)}% off
            </p>
          </div>
          <p className="detail-text">{product.description}</p>
          <ul className="detail-info">
            <li>
              Material:{" "}
              <span className="detailinfo-span">{product.material}</span>
            </li>
            <li>
              Brand:{" "}
              <span className="detailinfo-span">{product.brand.name}</span>
            </li>
            <li>
              Category:{" "}
              <span className="detailinfo-span">{product.category.name}</span>
            </li>
            <li>
              Tag: <span className="detailinfo-span">{product.name}</span>
            </li>
          </ul>
          <div className="detailstore-flex">
            <div className="stock-add">
              <button onClick={() => handleQuantityChange(1)}>+</button>
              <p>{quantity}</p>
              <button onClick={() => handleQuantityChange(-1)}>-</button>
            </div>
            <Link to="/store" className="detail-addcart-link">
              <button
                className="detail-addcart"
                onClick={() => onAddToCart(product, quantity)}
              >
                <MdOutlineLocalGroceryStore className="detailstore-btn" />
                Add To Cart
              </button>
            </Link>
            <button className="detail-heart">
              <FaRegHeart className="detailheart-btn" />
            </button>
          </div>
        </div>
      </div>
      <h3 className="detaildescription-name">Product Descriptions</h3>
      <p className="detail-desctiption">{product.description}</p>
    </div>
  );
}

export default Detail;
