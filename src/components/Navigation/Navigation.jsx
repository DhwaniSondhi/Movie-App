import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

const Navigation = props => {
  return (
    <div className="app-navigation">
      <div className="app-navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie}</p>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  movie: PropTypes.object
};

export default Navigation;
