import React, { useState, useEffect } from "react";
import ShapeCard from "./ShapeCard";
import Outline from "./Outline";
import correctSound from "../assets/sounds/correct.mp3";
import incorrectSound from "../assets/sounds/incorrect.mp3";
import lionimg from "../assets/images/shapes/lion.png";
import starfishimg from "../assets/images/shapes/starfish.png";
import turtleimg from "../assets/images/shapes/turtle.png";
import lionMatchImg from "../assets/images/match/lion-match.jpg";
import starfishMatchImg from "../assets/images/match/starfish-match.jpg";
import turtleMatchImg from "../assets/images/match/turtle-match.jpg";
import "../App.css";

const shapesData = [
  { id: 1, name: "lion", img: lionimg, matchImg: lionMatchImg },
  { id: 2, name: "starfish", img: starfishimg, matchImg: starfishMatchImg },
  { id: 3, name: "turtle", img: turtleimg, matchImg: turtleMatchImg },
];
function GameScreen({ completeGame }) {
  const [shapes, setShapes] = useState([]);
  const [outlines, setOutlines] = useState([]);
  const [matches, setMatches] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [matchedOutlines, setMatchedOutlines] = useState({});
  const [matchedShapes, setMatchedShapes] = useState([]);
  const [currentTouchShape, setCurrentTouchShape] = useState(null);

  useEffect(() => {
    const shuffledShapes = [...shapesData].sort(() => Math.random() - 0.5);
    const shuffledOutlines = [...shapesData].sort(() => Math.random() - 0.5);

    setShapes(shuffledShapes);
    setOutlines(shuffledOutlines);
  }, []);

  const handleDrop = (shapeName, outlineName) => {
    const effectiveShapeName = shapeName || currentTouchShape;

    if (!effectiveShapeName || matchedShapes.includes(effectiveShapeName)) {
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (effectiveShapeName === outlineName) {
      setMatches((prevMatches) => prevMatches + 1);
      new Audio(correctSound).play();

      setMatchedShapes((prev) => [...prev, effectiveShapeName]);
      const matchedShape = shapesData.find(
        (shape) => shape.name === effectiveShapeName
      );
      setMatchedOutlines((prev) => ({
        ...prev,
        [outlineName]: matchedShape.matchImg,
      }));

      if (matches + 1 === shapes.length) {
        setTimeout(completeGame, 1000);
      }
    } else {
      new Audio(incorrectSound).play();
    }
  };

  return (
    <div className="game-screen">
      <h2 className="instructions">Match the shapes to their outlines!</h2>
      <div className="scoreboard">
        <p>
          Matches: {matches}/{shapes.length}
        </p>
        <p>Attempts: {attempts}</p>
      </div>
      <h2>Shapes</h2>
      <div className="shapes-container">
        {shapes.map((shape) => (
          <ShapeCard
            key={shape.id}
            shape={shape}
            setCurrentTouchShape={setCurrentTouchShape}
          />
        ))}
      </div>
      <h2>Outlines</h2>

      <div className="outlines-container">
        {outlines.map((outline) => (
          <Outline
            key={outline.id}
            name={outline.name}
            onDrop={handleDrop}
            matchedImg={matchedOutlines[outline.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default GameScreen;
