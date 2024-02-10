import React from "react";

interface BoardProps {
  question: string;
  picture_id: string;
  className?: string;
}

const Board: React.FC<BoardProps> = ({ question, picture_id, className }) => {
  return (
    <div
      className={`${className} flex flex-col h-full items-center justify-center bg-center bg-cover`}
      style={{ backgroundImage: `url(src/bg_images/${picture_id}.png)` }}
    >
      {/* <div className="bg-sky-500/50 w-full h-full"> */}
      <h2 className="w-fit text-xl bg-white py-2 px-4 border border-black drop-shadow-lg">
        {question}
      </h2>
      {/* TODO: retrieve picture from db based on picture id */}
      {/* <p>{picture_id}</p> */}
      {/* </div> */}
    </div>
  );
};

export default Board;
