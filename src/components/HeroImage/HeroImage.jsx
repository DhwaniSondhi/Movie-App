import React from "react";
import "./HeroImage.css";

const HeroImage = props => {
  console.log(props.image);
  return (
    <div
      className="app-heroimage"
      style={{
        //backgroundImage:"url("+props.image+"")"
        //coz background image is a string so we include it like this
        backgroundImage: `url("${props.image}")` //`linear-gradient(to bottom, rgba(0,0,0,0))`
      }}
    >
      <div className="app-heroimage-content">
        <div className="app-heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
export default HeroImage;
