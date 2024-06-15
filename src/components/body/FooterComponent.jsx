import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import "../style/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="footer-head">
            <div className="footericon-main">
              <img src="/image/Logo Icon.png" alt="" />
              <h3 className="footer-name">Comforty</h3>
            </div>
            <p className="footer-text">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
            <ul className="footer-social">
              <li>
                <FaFacebook className="footer-icon" />
              </li>
              <li>
                <FaTwitter className="footer-icon" />
              </li>
              <li>
                <CiInstagram className="footer-icon" />
              </li>
              <li>
                <FaPinterest className="footer-icon" />
              </li>
              <li>
                <FaYoutube className="footer-icon" />
              </li>
            </ul>
          </div>
          <ul className="footerCategory-list">
            <li>Category</li>
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>wooden Chair</li>
            <li>Park Bench</li>
          </ul>
          <ul className="footerSupport-list">
            <li>Help & Support</li>
            <li>Tearms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
          <div className="footer-search">
            <h3>Newsletter</h3>
            <div className="footerSearch">
              <input type="text" placeholder="Your email" />
              <button className="btn-footeSearch">Subscribe</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
