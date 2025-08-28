import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-title">
          <a href="/">
            <h2>Laundry 24 Orlando</h2>
          </a>
        </div>
        <div>
          <ul className="footer-links">
            <li>
              <Link className="link2" to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="link2" to="/services">
                SERVICES
              </Link>
            </li>
            <li>
              <Link className="link2" to="/laundroworks">
                LAUNDROWORKS
              </Link>
            </li>
            <li>
              <Link className="link2" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo-footer">
        <a href="/">
          <img src="/laundry24logo4.png" alt="Home" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
