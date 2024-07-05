import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";
import axios from "axios";
import "../../style/header.css";
import "../../style/main.css";
import { Link } from "react-router-dom";

function AllProduct({ onAddToCart }) {
  const [items, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else if (pageNumber < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items
    .slice(startIndex, startIndex + itemsPerPage)
    .map((item, index) => ({
      ...item,
      image: images[index % images.length],
    }));

  const renderPageNumbers = () => {
    const maxPagesToShow = 7;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    const pageNumbers = [];

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`page-number ${currentPage === 1 ? "active" : ""}`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span key="dots1" className="dots">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`page-number ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="dots2" className="dots">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`page-number ${
            currentPage === totalPages ? "active" : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <section className="section4">
      <div className="container">
        <h2 className="allProduct-name">Our Products</h2>
        <ul className="allProducts-page">
          <li>All</li>
          <li>Newest</li>
          <li>Trending</li>
          <li>Best Sellers</li>
          <li>Featured</li>
        </ul>
        <div className="allProduct-main">
          {currentItems.map((item) => (
            <div key={item._id} className="allproduct">
              <Link
                className="router-link"
                onClick={() => {
                  localStorage.setItem(`image_${item._id}`, item.image);
                }}
                to={`/details/${item._id}`}
              >
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="addstore-flex">
                <div className="item-text">
                  <Link
                    className="router-link"
                    onClick={() => {
                      localStorage.setItem(`image_${item._id}`, item.image);
                    }}
                    to={`/details/${item._id}`}
                  >
                    <h3>{item.name}</h3>
                  </Link>
                  <div className="addstore-price">
                    <p>
                      ${item.price} <span>${item.oldprice}</span>
                    </p>
                  </div>
                </div>
                <div className="addstore2">
                  <button
                    className="btn-addstore"
                    onClick={() => onAddToCart(item)}
                  >
                    <MdOutlineLocalGroceryStore className="btnStore" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <div className="pagination-style">
              <button
                className="page-arrow"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <MdOutlineKeyboardDoubleArrowLeft className="arrow-page" />
              </button>
              {renderPageNumbers()}
              <button
                className="page-arrow"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <MdOutlineKeyboardDoubleArrowRight className="arrow-page" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProduct;
