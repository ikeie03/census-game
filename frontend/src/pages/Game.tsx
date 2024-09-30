import { useEffect, useState } from "react";
import Board from "../components/board";
import ScoreDisplay from "../components/score_display";
import { useLocation, useNavigate } from "react-router-dom";
import { SymbolState } from "../enums/SymbolState";
import stateNameToPNGID from "../assets/stateNameToPNGID"

interface Question {
  _id: string;
  text: string;
  state: string;
  answer: number;
  question_id: number;
  __v: number;
}

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [score, setScore] = useState(
    location.state || { score: 0, highScore: 0 }
  );
  const [centerSymbol, setCenterSymbol] = useState<SymbolState>(
    SymbolState.Default
  );
  const [gameState, setGameState] = useState({
    question_1_id: 39, // Default number
    question_1_picture_id: "us-il", // Default string
    question_1_full_text: "Percent of groovy people in Illinois",
    question_2_id: 42, // Default number
    question_2_picture_id: "us-ca", // Default string
    question_2_full_text: "Percent of funky people in California",
    winning_question: 1, // Default winning question
  });

  useEffect(() => {
    updateQuestion();
  }, [])

  const generateNewGameState = (question1: Question, question2: Question) => {
    const createQuestionText = (question: Question) => 
      generateFullQuestionText(question.text, question.state);
  
    return {
      question_1_id: question1.question_id,
      question_1_picture_id: stateNameToPNGID[question1.state],
      question_1_full_text: createQuestionText(question1),
      
      question_2_id: question2.question_id,
      question_2_picture_id: stateNameToPNGID[question2.state],
      question_2_full_text: createQuestionText(question2),
      
      winning_question: question1.answer >= question2.answer ? 1 : 2
    };
  };
  
  const generateFullQuestionText = (text: string, state: string) => `${text} ${state}`;

  
  const updateQuestion = async () => {
    try {
      const response = await fetch('http://localhost:3000/base-game/two-questions');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      const newState = generateNewGameState(data[0], data[1])
      setGameState(newState);
    } catch (error) {
      console.error(error);
    }
  }

  const updateScore = (): void => {
    const newScore = score.score + 10;
    if (newScore > score.highScore) {
      setScore({ score: newScore, highScore: newScore });
    } else {
      setScore({ score: newScore, highScore: score.highScore });
    }
  };

  const handleBoardClick = (boardNumber: number) => {
    if (boardNumber === gameState.winning_question) {
      console.log(`Winning Board ${boardNumber} clicked`);
      updateScore();
      setCenterSymbol(SymbolState.Check);
      setTimeout(() => {
        setCenterSymbol(SymbolState.Default);
      }, 2000);

      updateQuestion(); // Change to a new question
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
          question={gameState.question_1_full_text}
          picture_id={gameState.question_1_picture_id}
          onClick={() => handleBoardClick(1)}
        />
        <Board
          className="w-1/2 bg-teal-500"
          question={gameState.question_2_full_text}
          picture_id={gameState.question_2_picture_id}
          onClick={() => handleBoardClick(2)}
        />
      </div>
    </div>
  );
};

export default Game;