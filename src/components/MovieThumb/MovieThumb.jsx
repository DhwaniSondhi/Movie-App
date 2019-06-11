import React from "react";
import "./MovieThumb.css";
import { Link } from "react-router-dom";

const MovieThumb = props => {
  const getImage = linkImage => {
    return props.clickable ? (
      <Link to={{ pathname: "/" + props.movieId, movieName: props.movieName }}>
        <img className="rmdb-gridImages" src={linkImage} alt="moviethumb" />
      </Link>
    ) : (
      <img className="rmdb-gridImages" src={linkImage} alt="moviethumb" />
    );
  };
  return <div className="rmdb-moviethumb">{getImage(props.image)}</div>;
};
export default MovieThumb;
