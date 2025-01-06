import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mr-auto">
            <img
              className="ipl-logo"
              src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png"
              alt="logoImage"
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/matches" className="nav-link">
                  MATCHES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/teams" className="nav-link">
                  TEAMS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  NEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pointstable" className="nav-link">
                  POINTSTABLE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
