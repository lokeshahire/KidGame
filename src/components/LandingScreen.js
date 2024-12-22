import React from "react";
import "../App.css";

function LandingScreen({ startGame }) {
  return (
    <div className="landing-screen">
      <h1 className="title">🎉 Fun Learning Game 🎉</h1>
      <div className="loading-animation">
        <div className="spinner"></div>
        <p>Loading Fun...</p>
      </div>
      <button className="start-button" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
}

export default LandingScreen;
