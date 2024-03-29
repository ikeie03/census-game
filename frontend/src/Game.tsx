import Board from "./components/board";

const Game = () => {
  return (
    <div className="flex flex-row h-screen">
      <Board
        className="w-1/2"
        question="Percent of groovy people in CT"
        picture_id="us-ct"
      />
      <Board
        className="w-1/2 bg-teal-500"
        question="Percent of funky people in AK"
        picture_id="us-ak"
      />
    </div>
  );
};

export default Game;
