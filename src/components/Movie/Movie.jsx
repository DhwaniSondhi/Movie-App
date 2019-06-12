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
  state = {
    movie: null,
    actor: null,
    director: [],
    loading: false
  };
  fetchImages = endpt => {
    fetch(endpt)
      .then(result => result.json())
      .then(result => {
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          console.log(result);
          this.setState({
            movie: result
          });
          const endptNew = `${API_URL}movie/${
            this.props.match.params.movieId
          }/credits?api_key=${API_KEY}&language=en-US`;
          fetch(endptNew)
            .then(result => result.json())
            .then(result => {
              this.setState({
                director: result.crew.filter(
                  crewMem => crewMem.job === "Director"
                ),
                actor: result.cast,
                loading: false
              });
            });
        }
      })
      .catch(exp => console.log("Error: ", exp));
  };
  componentWillMount() {
    this.setState({ loading: true });
    //fetch movie details
    const endpt = `${API_URL}movie/${
      this.props.match.params.movieId
    }?api_key=${API_KEY}&langauge-en-US`;
    this.fetchImages(endpt);
  }

  render() {
    return (
      <div className="rmdb-movie">
        {this.state.movie ? (
          <div>
            <Navigation movie={this.props.location.movieName} />
            <MovieInfo
              movie={this.state.movie}
              director={this.state.director}
            />
            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />
          </div>
        ) : null}
        {this.state.actor ? (
          <div className="rmdb-movie-grid">
            <Grid header="Actors">
              {this.state.actor.map((actorEle, i) => {
                return <Actor key={"Actor" + i} actor={actorEle} />;
              })}
            </Grid>
          </div>
        ) : null}
        {!this.state.actor && !this.state.loading ? (
          <h1>No Movie Found!</h1>
        ) : null}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;
