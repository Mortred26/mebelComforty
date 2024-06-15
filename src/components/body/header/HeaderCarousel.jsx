import React, { useState } from "react";
import "../../style/header.css";
import "../../style/laptopmedia.css";

const HeaderCarousel = () => {
  const slides = [
    {
      imageSrc: "/image/Product Image.png",
      title: "Welcome to chairy",
      description: "Best Furniture Collection for your interior.",
    },
    {
      imageSrc: "/image/Product Image.png",
      title: "Modern Designs",
      description:
        "Explore our modern furniture designs for a contemporary look.",
    },
    {
      imageSrc: "/image/Product Image.png",
      title: "Quality Craftsmanship",
      description: "Experience the best quality craftsmanship in every piece.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <section className="section2">
      <div className="header-baground">
        <button className="left-arrow" onClick={prevSlide}>
          <img src="/image/Left Arrow.png" alt="" />
        </button>

        <div className="container2">
          <div className="body-header">
            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>

            <div className="header-main">
              <div className="header-info">
                <p className="headerinfo-text">{slides[currentIndex].title}</p>
                <h1 className="headerinfo-name">
                  {slides[currentIndex].description}
                </h1>
                <button className="btn-shopping">
                  <p>Shop Now</p>
                  <img src="/image/right.png" alt="" />
                </button>
              </div>
              <div className="carousel">
                <div className="carousel-image">
                  <img
                    src={slides[currentIndex].imageSrc}
                    alt={`Slide ${currentIndex + 1}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="right-arrow" onClick={nextSlide}>
          <img src="/image/Right Arrow.png" alt="" />
        </button>
      </div>
    </section>
  );
};

export default HeaderCarousel;
