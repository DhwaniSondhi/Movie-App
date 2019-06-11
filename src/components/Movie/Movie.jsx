import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API_URL, API_KEY } from "../../config";
import Navigation from "../Navigation/Navigation";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Grid from "../Grid/Grid";
import Actor from "../Actor/Actor";
import Spinner from "../Spinner/Spinner";
import "./Movie.css";

class Movie extends Component {
  state = {};
  render() {
    console.log(this.props.movieName);
    return (
      <div className="rmdb-movie">
        <Navigation />
        <MovieInfo />
        <MovieInfoBar />
        <Grid />
        <Spinner />
      </div>
    );
  }
}

export default Movie;
