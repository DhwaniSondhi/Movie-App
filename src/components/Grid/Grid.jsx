import React from "react";
import PropTypes from "prop-types";
import "./Grid.css";

const Grid = props => {
  const gridElements = () => {
    const gridImages = props.children.map(function(element, i) {
      return (
        <div key={"image" + i} className="app-grid-element">
          {element}
        </div>
      );
    });
    return gridImages;
  };
  return (
    <div className="app-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="app-grid-content">{gridElements()}</div>
    </div>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
};

export default Grid;
