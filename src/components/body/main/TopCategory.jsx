import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/main.css";

function CenterMode() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [settings, setSettings] = useState({});

  const images = [
    { src: "/image/product/category.png", name: "Wing Chair", stock: "3,584" },
    { src: "/image/product/category2.png", name: "Wooden Chair", stock: "157" },
    { src: "/image/product/category3.png", name: "Desk Chair", stock: "154" },
    { src: "/image/product/category4.png", name: "Park Bench", stock: "35" },
    {
      src: "/image/product/category5.png",
      name: "Wooden Chair",
      stock: "2,584",
    },
    { src: "/image/product/category3.png", name: "Desk Chair", stock: "154" },
  ];

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setSettings({
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "225px",
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          dots: false,
          initialSlide: slideIndex,
          beforeChange: (current, next) => {
            if (next === images.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(images.length - 1);
            } else {
              setSlideIndex(next);
            }
          },
        });
      } else if (width >= 1024) {
        setSettings({
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "125px",
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          dots: false,
          initialSlide: slideIndex,
          beforeChange: (current, next) => {
            if (next === images.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(images.length - 1);
            } else {
              setSlideIndex(next);
            }
          },
        });
      } else if (width >= 768) {
        setSettings({
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "85px",
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          dots: false,
          initialSlide: slideIndex,
          beforeChange: (current, next) => {
            if (next === images.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(images.length - 1);
            } else {
              setSlideIndex(next);
            }
          },
        });
      } else if (width >= 480) {
        setSettings({
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "45px",
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          dots: false,
          initialSlide: slideIndex,
          beforeChange: (current, next) => {
            if (next === images.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(images.length - 1);
            } else {
              setSlideIndex(next);
            }
          },
        });
      } else {
        setSettings({
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "50px",
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          dots: false,
          initialSlide: slideIndex,
          beforeChange: (current, next) => {
            if (next === images.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(images.length - 1);
            } else {
              setSlideIndex(next);
            }
          },
        });
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, [slideIndex, images.length]);

  useEffect(() => {
    if (slideIndex < 0) {
      setSlideIndex(images.length - 1);
    } else if (slideIndex >= images.length) {
      setSlideIndex(0);
    }
  }, [slideIndex, images.length]);

  return (
    <section className="section3">
      <div className="container">
        <h2 className="topCategory-name">Top categories</h2>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              className={
                index === slideIndex ||
                index ===
                  (slideIndex === 0 ? images.length - 1 : slideIndex - 1) ||
                index ===
                  (slideIndex === images.length - 1 ? 0 : slideIndex + 1)
                  ? "slide slide-active"
                  : "slide"
              }
              key={index}
            >
              <img className="slider-img" src={image.src} alt={image.name} />
              <div className="slider-text">
                <h3>{image.name}</h3>
                <p>{image.stock} Products</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CenterMode;
