import React, { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import GameScreen from "./components/GameScreen";
import CompletionScreen from "./components/CompletionScreen";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("landing");

  const startGame = () => setScreen("game");
  const completeGame = () => setScreen("completion");
  const restartGame = () => setScreen("landing");

  return (
    <div className="App">
      {screen === "landing" && <LandingScreen startGame={startGame} />}
      {screen === "game" && <GameScreen completeGame={completeGame} />}
      {screen === "completion" && (
        <CompletionScreen restartGame={restartGame} />
      )}
    </div>
  );
}

export default App;
