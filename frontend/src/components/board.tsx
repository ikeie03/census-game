import React from "react";

interface BoardProps {
  question: string;
  picture_id: string;
  className?: string;
}

const Board: React.FC<BoardProps> = ({ question, picture_id, className }) => {
  return (
    <div className={`${className} flex flex-col h-full items-center justify-center`}>
      <h2 className="w-fit text-xl">{question}</h2>
      {/* TODO: retrieve picture from db based on picture id */}
      {/* <p>{picture_id}</p> */}
    </div>
  );
};

export default Board;
