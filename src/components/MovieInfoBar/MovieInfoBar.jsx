import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcTime, convertMoney } from "../../helpers";
import "./MovieInfoBar.css";

const MovieInfoBar = props => {
  return (
    <div className="app-movieinfobar">
      <div className="app-movieinfobar-content">
        <div className="app-movieinfobar-content-col">
          <i className="fa fa-clock-o fa-2x" />
          <p className="app-movieinfobar-info">
            Running Time: {calcTime(props.time)}
          </p>
        </div>
        <div className="app-movieinfobar-content-col">
          <i className="fa fa-money fa-2x" />
          <p className="app-movieinfobar-info">
            Budget: {convertMoney(props.budget)}
          </p>
        </div>
        <div className="app-movieinfobar-content-col">
          <i className="fa fa-ticket  fa-2x" />
          <p className="app-movieinfobar-info">
            Revenue: {convertMoney(props.revenue)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoBar;
