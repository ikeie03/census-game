import Board from "./components/board";

const Game = () => {
  return (
    <div className="flex flex-row ">
      <Board question="Percent of groovy people in CT" picture_id="CT" />
      <Board question="Percent of funky people in AL" picture_id="AL" />
    </div>
  );
};

export default Game;
