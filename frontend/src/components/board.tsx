import React from "react";

interface BoardProps {
  question: string;
  picture_id: string;
}

const Board: React.FC<BoardProps> = ({ question, picture_id }) => {
  return (
    <div>
      <h2>{question}</h2>
      {/* TODO: retrieve picture from db based on picture id */}
      <p>{picture_id}</p>
    </div>
  );
};

export default Board;
