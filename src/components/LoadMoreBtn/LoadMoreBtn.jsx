import React from "react";
import PropTypes from "prop-types";
import "./LoadMoreBtn.css";

const LoadMoreBtn = props => {
  return (
    <div className="app-loadMore" onClick={props.onClick}>
      Load More
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func
};

export default LoadMoreBtn;
