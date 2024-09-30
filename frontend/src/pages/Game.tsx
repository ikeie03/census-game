import { useEffect, useState } from "react";
import Board from "../components/board";
import ScoreDisplay from "../components/score_display";
import { useLocation, useNavigate } from "react-router-dom";
import { SymbolState } from "../enums/SymbolState";

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [score, setScore] = useState(
    location.state || { score: 0, highScore: 0 }
  );
  const [centerSymbol, setCenterSymbol] = useState<SymbolState>(
    SymbolState.Default
  );

  useEffect(() => {
    updateQuestion();
  }, []);

  const updateQuestion = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/base-game/two-questions"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateScore = (): void => {
    const newScore = score.score + 10;
    if (newScore > score.highScore) {
      setScore({ score: newScore, highScore: newScore });
    } else {
      setScore({ score: newScore, highScore: score.highScore });
    }
  };
  const [gameState] = useState({
    question_1_id: 39, // Default number
    question_1_picture_id: "us-il", // Default string
    question_2_id: 42, // Default number
    question_2_picture_id: "us-ca", // Default string
    winning_question: 1, // Default winning question
  });

  const handleBoardClick = (boardNumber: number) => {
    if (boardNumber === gameState.winning_question) {
      console.log(`Winning Board ${boardNumber} clicked`);
      updateScore();
      setCenterSymbol(SymbolState.Check);
      setTimeout(() => {
        setCenterSymbol(SymbolState.Default);
      }, 2000);
    } else {
      console.log(`Loosing Board ${boardNumber} clicked`);
      setCenterSymbol(SymbolState.Cross);
      setTimeout(() => {
        navigate("/lost", { state: score });
      }, 2000);
    }
  };

  return (
    <div className="relative h-screen">
      <ScoreDisplay
        score={score.score}
        highScore={score.highScore}
        className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2"
        centerSymbol={centerSymbol}
      />
      <div className="flex flex-row h-full">
        <Board
          className="w-1/2"
          question="Percent of groovy people in CT"
          picture_id={gameState.question_1_picture_id}
          onClick={() => handleBoardClick(1)}
        />
        <Board
          className="w-1/2 bg-green-500"
          question="Percent of funky people in AK"
          picture_id={gameState.question_2_picture_id}
          onClick={() => handleBoardClick(2)}
        />
      </div>
    </div>
  );
};

export default Game;
