import React, { useEffect, useState } from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import "../../style/mobilemedia.css";

function HeadSearch({ cartCount = "0", handleSearch }) {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
    navigate("/search");
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="header-search">
          <div className="logo">
            <Link to="/">
              <img className="logotip" src="/image/Logo Icon.png" alt="" />
            </Link>
            <h2>Remona Mebel</h2>
          </div>
          <form className="input-search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="btn-search">
              <IoSearch className="headerSearch-img" />
            </button>
          </form>
          <div className="head-button">
            <Link to="/store" className="router-link margin-right">
              <button className="btn-addcart">
                <MdOutlineLocalGroceryStore className="btn-addcart-svg" />
                <p>Cart</p>
                <h4 className="header-counts">{cartCount}</h4>
              </button>
              <button className="btn-addcart2">
                <MdOutlineLocalGroceryStore className="btn-addcart-svg" />
                <h4 className="header-counts">{cartCount}</h4>
              </button>
            </Link>
            <button
              className="heart"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp} // Ensure icon resets if mouse leaves the button
            >
              {isActive ? (
                <FaHeart className="heart-svg" />
              ) : (
                <FaRegHeart className="heart-svg" />
              )}
            </button>
            <button className="profile">
              <CgProfile className="profile-svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadSearch;
