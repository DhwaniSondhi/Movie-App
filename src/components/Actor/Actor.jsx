import React from "react";
import { IMAGE_BASE_URL } from "../../config";
import PropTypes from "prop-types";
import "./Actor.css";

const Actor = props => {
  const GRID_SIZE = "w154";

  return (
    <div className="app-actor">
      <img
        src={
          props.actor.profile_path
            ? `${IMAGE_BASE_URL}${GRID_SIZE}/${props.actor.profile_path}`
            : "./images/no_image.jpg"
        }
        alt="actorthumb"
      />
      <span className="app-actor-name">{props.actor.name}</span>
      <span className="app-actor-character">
        {"- " + props.actor.character}
      </span>
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.object
};

export default Actor;
