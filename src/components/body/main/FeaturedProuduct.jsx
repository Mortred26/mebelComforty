import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../style/main.css";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import axios from "axios";

const FeaturedProducts = ({ onAddToCart }) => {
  const [items, setProducts] = useState([]);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <HiArrowNarrowRight className="featured-arrow" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <HiArrowNarrowLeft className="featured-arrow" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://remonabackend.onrender.com/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const images = [
    "/image/product/product1.png",
    "/image/product/product2.png",
    "/image/product/product3.png",
    "/image/product/product4.png",
    "/image/product/product5.png",
    "/image/product/product6.png",
    "/image/product/product7.png",
    "/image/product/product8.png",
  ];

  const renderItems = items.map((item, index) => {
    const imageUrl = images[index % images.length];

    const finalImageUrl = imageUrl;

    return (
      <div key={item.id} className="item">
        <Link
          className="router-link"
          onClick={() => {
            localStorage.setItem(`image_${item._id}`, imageUrl);
          }}
          to={`/details/${item._id} `}
        >
          <img
            src={finalImageUrl}
            alt={item.name}
            className="carousel-image"
            onClick={() => console.log(`Clicked on ${item.name}`)}
          />
        </Link>
        <div className="addstore-flex">
          <div className="item-text">
            <Link
              className="router-link"
              onClick={() => {
                localStorage.setItem(`image_${item._id}`, imageUrl);
              }}
              to={`/details/${item._id} `}
            >
              <h3>{item.name}</h3>
            </Link>
            <div className="addstore-price">
              <p>
                ${item.price} <span>${item.oldprice}</span>
              </p>
            </div>
          </div>
          <div className="addstore">
            <button
              className="btn-addstore"
              onClick={() => {
                onAddToCart({ ...item, image: imageUrl });
                localStorage.setItem(`image_${item._id}`, imageUrl);
              }}
            >
              <MdOutlineLocalGroceryStore className="btnStore" />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="FeaturedProduct">
        <h2 className="FeaturedProduct-name">Featured Products</h2>
        <Slider {...settings}>{renderItems}</Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
