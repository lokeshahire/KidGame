import React from "react";
import Bounce from "../animations/bounce";
import "../App.css";

import turtleOut from "../assets/images/outlines/turtle-outline.jpg";
import lionOut from "../assets/images/outlines/lion-outline.jpg";
import starfishOut from "../assets/images/outlines/starfish-outline.jpg";

const outlineImages = {
  turtle: turtleOut,
  lion: lionOut,
  starfish: starfishOut,
};

function Outline({ name, onDrop, matchedImg }) {
  const handleDrop = (e) => {
    const shapeName = e.dataTransfer.getData("shapeName");
    const outlineElement = e.target;

    if (shapeName === name) {
      Bounce.apply(outlineElement);
    }
    onDrop(shapeName, name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="outline"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        backgroundImage: `url(${matchedImg || outlineImages[name]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "150px",
        height: "150px",
      }}
    ></div>
  );
}

export default Outline;
