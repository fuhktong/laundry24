import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import NavBar from "./navbar";
import Toggle from "./toggle.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/" className="header-link">
        <img src="/laundry24logo4.png" alt="Custom Quizzes" />
      </Link>
      <div>
        <NavBar />
        <Toggle isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
