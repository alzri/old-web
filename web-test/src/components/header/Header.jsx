import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/adp-logo.svg?react';

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  return (
    <header>
      <div className="header">
        <span className="header--logo-section">
          <a href="">
            <img src={Logo} alt="test" />
          </a>
        </span>
        <nav>
          <ul className="header--links">
            <li className={`nav__link ${activeLink === "home" ? "active" : ""}`}>
              <Link
                to="/"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
            </li>
            <li className={`nav__link ${activeLink === "about" ? "active" : ""}`}>
              <Link
                to="/about"
                onClick={() => handleLinkClick("about")}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
