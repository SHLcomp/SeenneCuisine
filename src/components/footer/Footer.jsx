import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer noise">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <h1>Seenne</h1>
          <p>
            Experience premium cuisine made with passion and fresh ingredients.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li><Link className="a" to="/">Home</Link></li>
            <li><Link className="a" to="/menu">Menu</Link></li>
            <li><Link className="a" to="/about">About</Link></li>
            <li><Link className="a" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>📍 Amman, Jordan</li>
            <li>📞 +962 7 0000 0000</li>
            <li>✉️ info@seenne.com</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Seenne Cuisine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
