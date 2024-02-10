import Board from "./components/board";

const Game = () => {
  return (
    <div className="flex flex-row h-screen">
      <Board
        className="w-1/2 bg-slate-500"
        question="Percent of groovy people in CT"
        picture_id="CT"
      />
      <Board
        className="w-1/2 bg-teal-500"
        question="Percent of funky people in AL"
        picture_id="AL"
      />
    </div>
  );
};

export default Game;
