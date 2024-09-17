import Board from "./components/board";
import ScoreDisplay from "./components/score_display";

const Game = () => {
  const handleBoardClick = (boardNumber: number) => {
    console.log(`Board ${boardNumber} clicked`);
  };

  return (
    <div className="relative h-screen">
      <ScoreDisplay
        score={10}
        highScore={100}
        className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex flex-row h-full">
        <Board
          className="w-1/2"
          question="Percent of groovy people in CT"
          picture_id="us-ct"
          onClick={() => handleBoardClick(1)}
        />
        <Board
          className="w-1/2 bg-teal-500"
          question="Percent of funky people in AK"
          picture_id="us-ak"
          onClick={() => handleBoardClick(2)}
        />
      </div>
    </div>
  );
};

export default Game;
// TODO: move pages to separate dir