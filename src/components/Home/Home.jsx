import React, { Component } from "react";
import HeroImage from "../HeroImage/HeroImage";
import SearchBar from "../SearchBar/SearchBar";
import Grid from "../Grid/Grid";
import MovieThumb from "../MovieThumb/MovieThumb";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Spinner from "../Spinner/Spinner";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="rmdb-home">
        <HeroImage />
        <SearchBar />
        <Grid />
        <Spinner />
        <LoadMoreBtn />
      </div>
    );
  }
}

export default Home;
