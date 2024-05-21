import Logo from '../../assets/img/adp-logo.svg?react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

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
            <li className={`nav__link ${currentPath === "/" ? "active" : ""}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`nav__link ${currentPath === "/about" ? "active" : ""}`}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
