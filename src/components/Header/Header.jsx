import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-content">
        <Link to="/">
          <img
            className="app-logo"
            src="./images/reactMovie_logo.png"
            alt="app-logo"
          />
        </Link>
        <img
          className="app-tmdb-logo"
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
        />
      </div>
    </div>
  );
};

export default Header;
