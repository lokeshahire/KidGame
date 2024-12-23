import React from "react";
import "../App.css";
function ShapeCard({ shape, setCurrentTouchShape }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("shapeName", shape.name);
    e.target.classList.add("dragging");
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("dragging");
  };

  const handleTouchStart = () => {
    setCurrentTouchShape(shape.name);
  };

  const handleTouchEnd = () => {
    setCurrentTouchShape(null);
  };

  return (
    <div
      className="shape-card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundImage: `url(${shape.img})`,
        width: "150px",
        height: "150px",
      }}
    ></div>
  );
}

export default ShapeCard;
