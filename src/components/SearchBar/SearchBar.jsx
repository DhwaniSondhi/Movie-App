import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    inputSearch: ""
  };
  timeout = null;
  searchOption = event => {
    this.setState({ inputSearch: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.searchFunc(this.state.inputSearch);
    }, 500);
  };
  render() {
    return (
      <div className="app-searchbar">
        <div className="app-searchbar-content">
          <i className="fa fa-search fa-lg changes-search " />
          <input
            type="text"
            className="app-searchbar-input"
            placeholder="Search"
            value={this.state.value}
            onChange={this.searchOption}
          />
        </div>
      </div>
    );
  }
}
export default SearchBar;
