import React, { Component } from "react";
import HeroImage from "../HeroImage/HeroImage";
import SearchBar from "../SearchBar/SearchBar";
import Grid from "../Grid/Grid";
import MovieThumb from "../MovieThumb/MovieThumb";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  HERO_SIZE,
  GRID_IMAGE_SIZE
} from "../../config.js";
import "./Home.css";

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPage: 0,
    searchItem: ""
  };
  searchImages = searchItem => {
    let endpt = "";
    this.setState({ movies: [], loading: true, searchItem: searchItem.trim() });
    if (searchItem.trim() === "") {
      endpt = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpt = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchItem}`;
    }
    this.fetchImages(endpt);
  };
  loadMoreImages = () => {
    let endpt = "";
    this.setState({ loading: true });
    if (this.state.searchItem.trim() === "") {
      endpt = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpt = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${
        this.state.searchItem
      }&page=${this.state.currentPage + 1}`;
    }

    this.fetchImages(endpt);
  };
  fetchImages = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movies: this.state.movies.concat(result.results),
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPage: result.total_pages
        });
      });
  };
  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchImages(endpoint);
  }

  render() {
    return (
      <div className="app-home">
        {this.state.heroImage ? (
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${HERO_SIZE}/${
                this.state.heroImage.poster_path
              }`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />

            <SearchBar searchFunc={this.searchImages} />
          </div>
        ) : null}
        <div className="app-home-grid">
          {" "}
          <Grid
            header={this.state.searchItem ? "Search Result" : "Popular Movies"}
            loading={this.state.loading}
          >
            {this.state.movies.map((element, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable
                  image={
                    element.poster_path
                      ? `${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}/${
                          element.poster_path
                        }`
                      : "./images/no_image.jpg"
                  }
                  movieId={element.id}
                  movieName={element.original_title}
                />
              );
            })}
          </Grid>
        </div>
        {this.state.loading ? <Spinner /> : null}
        <LoadMoreBtn onClick={this.loadMoreImages} />
        <div className="app-space" />
      </div>
    );
  }
}

export default Home;
