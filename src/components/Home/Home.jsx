import React, { Component } from "react";
import HeroImage from "../HeroImage/HeroImage";
import SearchBar from "../SearchBar/SearchBar";
import Grid from "../Grid/Grid";
import MovieThumb from "../MovieThumb/MovieThumb";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";
import { API_URL, API_KEY, IMAGE_BASE_URL, SIZE } from "../../config.js";
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
  loadMoreImages = () => {
    let endpt = "";
    this.setState({ loading: true });
    if (this.setState.searctItem === "") {
      endpt = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this
        .state.currentPage + 1}`;
    } else {
      endpt = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${
        this.state.searchItem
      }&page=${this.state.currentPage + 1}`;
    }
    this.fetchImages(endpt);
  };
  fetchImages = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        const updateMovies = [...this.state.movies, ...result.results];
        this.setState({
          movies: [...updateMovies],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPage: result.total_pages
        });
        console.log(result);
      });
  };
  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchImages(endpoint);
  }

  render() {
    return (
      <div className="rmdb-home">
        {
          (this.state.heroImage = this.state.heroImage ? (
            <div>
              <HeroImage
                image={`${IMAGE_BASE_URL}${SIZE}/${
                  this.state.heroImage.poster_path
                }`}
                title={this.state.heroImage.original_title}
                text={this.state.heroImage.overview}
              />

              <SearchBar />
            </div>
          ) : null)
        }
        <Grid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    );
  }
}

export default Home;
