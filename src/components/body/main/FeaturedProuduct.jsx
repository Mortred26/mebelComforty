import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../style/main.css";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const FeaturedProducts = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
    1920: { items: 4 },
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

  const CustomNavigationButtons = ({ prevButton, nextButton }) => {
    return (
      <div className="custom-navigation">
        {prevButton && (
          <button
            className="custom-navigation-button prev"
            onClick={prevButton.onClick}
            disabled={prevButton.isDisabled}
          >
            <HiArrowNarrowLeft className="featured-arrow" />
          </button>
        )}
        {nextButton && (
          <button
            className="custom-navigation-button next"
            onClick={nextButton.onClick}
            disabled={nextButton.isDisabled}
          >
            <HiArrowNarrowRight className="featured-arrow" />
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <ul className="logo">
          {[...Array(7)].map((_, index) => (
            <li key={index}>
              <img
                className="logo-img"
                src={`/image/logo/Logo (${index + 1}).png`}
                alt={`Logo ${index + 1}`}
              />
            </li>
          ))}
        </ul>
        <div className="FeaturedProduct">
          <h2 className="FeaturedProduct-name">Featured Products</h2>
          <AliceCarousel
            mouseTracking
            items={renderItems}
            responsive={responsive}
            controlsStrategy="alternate"
            renderPrevButton={({ isDisabled, onClick }) => (
              <CustomNavigationButtons prevButton={{ onClick, isDisabled }} />
            )}
            renderNextButton={({ isDisabled, onClick }) => (
              <CustomNavigationButtons nextButton={{ onClick, isDisabled }} />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
