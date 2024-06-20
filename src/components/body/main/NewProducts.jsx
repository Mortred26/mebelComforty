import React from "react";
import Slider from "react-slick";
import "../../style/main.css";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const FeaturedProducts = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <HiArrowNarrowRight className="featured-arrow" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <HiArrowNarrowLeft className="featured-arrow" />
      </div>
    );
  };

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
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
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

  const items = [
    {
      id: 1,
      imageSrc: "/image/product/product1.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 2,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 3,
      imageSrc: "/image/product/Product3.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 4,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 5,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 6,
      imageSrc: "/image/product/product1.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 7,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 8,
      imageSrc: "/image/product/Product3.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 9,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 10,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
  ];

  const renderItems = items.map((item) => (
    <div key={item.id} className="item">
      <img
        src={item.imageSrc}
        alt={item.title}
        className="carousel-image"
        onClick={() => console.log(`Clicked on ${item.title}`)}
      />
      <div className="addstore-flex">
        <div className="item-text">
          <h3>{item.title}</h3>
          <div className="addstore-price">
            <p>
              {item.price} <span>{item.oldprice}</span>
            </p>
          </div>
        </div>
        <div className="addstore">
          <button className="btn-addstore">
            <MdOutlineLocalGroceryStore className="btnStore" />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container">
        <div className="FeaturedProduct">
          <h2 className="FeaturedProduct-name ">recently Added</h2>
          <Slider {...settings}>{renderItems}</Slider>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
