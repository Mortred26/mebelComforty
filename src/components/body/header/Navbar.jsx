import React, { useEffect, useState } from "react";
import "../../style/header.css";
import "../../style/laptopmedia.css";
import "../../style/mobilemedia.css";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { BsTelephoneInboundFill } from "react-icons/bs";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="section1">
      <div className="container">
        <div className="navbar">
          <div className="all-category" onClick={toggleMenu}>
            {menuOpen && isMobile ? (
              <MdClose className="menu-svg" />
            ) : (
              <MdOutlineMenu className="menu-svg" />
            )}
            <button className="btn-menu"></button>
            <p>All Categories</p>
          </div>

          <ul className={`nav ${menuOpen && isMobile ? "active" : ""}`}>
            <li className="close-button" onClick={closeMenu}>
              <MdClose className="navbar-close" />
            </li>
            <li className="navmenu">
              <img className="logotip" src="/image/Logo Icon.png" alt="" />
              <h3 className="navmenu-name"> Remona mebel</h3>
            </li>
            <li>
              <a className="navcomfort-list" href="#">
                Comfort
              </a>
            </li>
            <li>
              <a href="#">Lux</a>
            </li>
            <li>
              <a href="#">Ultra-lux</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Favorite</a>
            </li>
          </ul>
          <div className="contact">
            <p className="contact-name">Contact:</p>
            <p className="contact-number">(808) 555-0111</p>
            <a href="https://remona-mebel.uz" className="navbar-telephone">
              <BsTelephoneInboundFill className="btn-telephone" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
