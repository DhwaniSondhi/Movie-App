import React from "react";
import "./Grid.css";

const Grid = props => {
  const gridElements = () => {
    const gridImages = props.children.map(function(element, i) {
      return (
        <div key={"image" + i} className="rmdb-grid-element">
          {element}
        </div>
      );
    });
    return gridImages;
  };
  return (
    <div className="rmdb-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">{gridElements()}</div>
    </div>
  );
};

export default Grid;
