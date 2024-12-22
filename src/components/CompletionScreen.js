import React, { useEffect } from "react";
import celebrationSound from "../assets/sounds/celebration.mp3";
import Confetti from "../animations/confetti";
import "../App.css";

function CompletionScreen({ restartGame }) {
  useEffect(() => {
    new Audio(celebrationSound).play();
    Confetti.start();

    return () => {
      Confetti.stop();
    };
  }, []);

  const handleRestartGame = () => {
    Confetti.stop();
    restartGame();
  };

  return (
    <div className="completion-screen">
      <h1>🎉 Congratulations 🎉</h1>
      <button onClick={handleRestartGame}>Play Again</button>
    </div>
  );
}

export default CompletionScreen;
