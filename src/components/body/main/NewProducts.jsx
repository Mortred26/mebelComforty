import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../style/main.css";
import "../../style/header.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const NewProducts = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
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
    <section className="section6">
      <div className="container">
        <div className="FeaturedProduct">
          <h2 className="FeaturedProduct-name">recently Added</h2>
          <AliceCarousel
            mouseTracking
            items={renderItems}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls // This disables the pagination dots
            renderPrevButton={({ isDisabled, onClick }) => (
              <CustomNavigationButtons prevButton={{ onClick, isDisabled }} />
            )}
            renderNextButton={({ isDisabled, onClick }) => (
              <CustomNavigationButtons nextButton={{ onClick, isDisabled }} />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
