import React, { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineLocalGroceryStore,
} from "react-icons/md";

import "../../style/header.css";
import "../../style/main.css";

function AllProduct() {
  const itemsPerPage = 9;
  const items = [
    {
      id: 1,
      imageSrc: "/image/product/product1.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
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
    },
    {
      id: 4,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
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
      oldprice: "$40",
    },
    {
      id: 7,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 8,
      imageSrc: "/image/product/Product3.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 9,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 10,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 11,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 12,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 13,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 14,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
    {
      id: 15,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 16,
      imageSrc: "/image/product/product4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 17,
      imageSrc: "/image/product/product2.png",
      title: "Library Stool Chair",
      price: "$20",
      oldprice: "$40",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

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
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

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
            <div key={item.id} className="allproduct">
              <img src={item.imageSrc} alt={item.title} />
              <div className="addstore-flex">
                <div className="item-text">
                  <h3>{item.title}</h3>
                  <div className="addstore-price">
                    <p>
                      {item.price} <span>{item.oldprice}</span>
                    </p>
                  </div>
                </div>
                <div className="addstore2">
                  <button className="btn-addstore">
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
