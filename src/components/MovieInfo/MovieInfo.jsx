import React from "react";
import { IMAGE_BASE_URL, HERO_SIZE, GRID_IMAGE_SIZE } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieInfo.css";

const MovieInfo = props => {
  return (
    <div
      className="app-movieInfo"
      style={{
        background: props.movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${HERO_SIZE}/${props.movie.backdrop_path}')`
          : "#0000"
      }}
    >
      <div className="app-movieinfo-content">
        <div className="app-moviethumb">
          <MovieThumb
            image={
              props.movie.backdrop_path
                ? `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}/${
                    props.movie.poster_path
                  }`
                : "./images/no_image.jpg"
            }
            clickable={false}
          />
          <div className="app-movie-info-text">
            <h1>{props.movie.title}</h1>
            <h3>PLOT</h3>
            <p className="app-overview">{props.movie.overview}</p>
            <h3>IMDB Rating</h3>
            <div className="app-rating">
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={props.movie.vote_average * 10}
              />
              <p className="app-score">{props.movie.vote_average * 10 + "%"}</p>
            </div>
            <h3>{props.director.length > 1 ? "DIRECTORS" : "DIRECTOR"}</h3>
            <div className="app-director">
              {props.director.map((director, i) => {
                return <p key={"Director" + i}>{director.name}</p>;
              })}
            </div>
            <i className="fa fa-film fa-4x" name="film" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
