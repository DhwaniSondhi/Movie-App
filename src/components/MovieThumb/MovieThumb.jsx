import React from "react";
import "./MovieThumb.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieThumb = props => {
  const getImage = linkImage => {
    return props.clickable ? (
      <Link to={{ pathname: "/" + props.movieId, movieName: props.movieName }}>
        <img
          className="app-gridImages border-images app-click"
          src={linkImage}
          alt="moviethumb"
        />
      </Link>
    ) : (
      <img className="app-gridImages" src={linkImage} alt="moviethumb" />
    );
  };
  return <div className="app-moviethumb">{getImage(props.image)}</div>;
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  movieName: PropTypes.string
};

export default MovieThumb;
