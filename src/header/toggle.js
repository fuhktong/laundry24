import React from "react";
import "./toggle.css";

const Toggle = ({ isOpen, toggleMenu }) => {
  return (
    <div className="mobile-nav">
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-content">
          <a href="/about">
            <p>ABOUT</p>
          </a>
          <a href="/services">
            <p>SERVICES</p>
          </a>
          <a href="/laundroworks">
            <p>LAUNDROWORKS</p>
          </a>
          <a href="/contact">
            <p>CONTACT</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
