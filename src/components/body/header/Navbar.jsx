import React, { useState } from "react";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import "../../style/mobilemedia.css";
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="section1">
      <div className="container">
        <div className="navbar">
          <div className="all-category">
            <button className="btn-menu" onClick={toggleMenu}>
              <MdOutlineMenu className="menu-svg" />
            </button>
            <p>All Categories</p>
          </div>
          <ul className={`nav ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Pages</li>
            <li>About</li>
          </ul>
          <div className="contact">
            <p className="contact-name">Contact:</p>
            <p className="contact-number">(808) 555-0111</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
