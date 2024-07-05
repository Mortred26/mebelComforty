import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/main.css";
import axios from "axios";

function CenterMode() {
  const [slideIndex, setSlideIndex] = useState(4); // Set initial slideIndex to 0
  const [settings, setSettings] = useState({});
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://remonabackend.onrender.com/api/v1/category"
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

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
            if (next === category.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(category.length - 1);
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
            if (next === category.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(category.length - 1);
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
            if (next === category.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(category.length - 1);
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
            if (next === category.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(category.length - 1);
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
            if (next === category.length) {
              setSlideIndex(0);
            } else if (next === -1) {
              setSlideIndex(category.length - 1);
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
  }, [slideIndex, category.length]);

  useEffect(() => {
    if (slideIndex < 0) {
      setSlideIndex(category.length - 1);
    } else if (slideIndex >= category.length) {
      setSlideIndex(0);
    }
  }, [slideIndex, category.length]);

  const images = [
    { image: "/image/product/DeskChair.png", name: "Desk Chair", stock: 10 },
    { image: "/image/product/ParkBench.png", name: "Park Bench", stock: 5 },
    { image: "/image/product/WingChair.png", name: "Wing Chair", stock: 7 },
    { image: "/image/product/WoodenChair.png", name: "Wooden Chair", stock: 3 },
    { image: "/image/product/product8.png", name: "Product 8", stock: 15 },
  ];

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
                  (slideIndex === 0 ? category.length - 1 : slideIndex - 1) ||
                index ===
                  (slideIndex === category.length - 1 ? 0 : slideIndex + 1)
                  ? "slide slide-active"
                  : "slide"
              }
              key={index}
            >
              <img className="slider-img" src={image.image} alt={image.name} />
              <div className="slider-text">
                <h3>{image.name}</h3>
                <p>{`${image.stock} Products`}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CenterMode;
