import React, { useState } from "react";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import "../../style//mobilemedia.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function HeadSearch() {
  const [isActive, setIsActive] = useState(false);

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
          <div className="input-search">
            <input type="text" placeholder="Search here..." />
            <button className="btn-search">
              <IoSearch className="headerSearch-img" />
            </button>
          </div>
          <div className="head-button">
            <button className="btn-addcart">
              <MdOutlineLocalGroceryStore className="btn-addcart-svg" />
              <p>Cart</p>
            </button>
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
