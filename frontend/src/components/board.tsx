import React from "react";

interface BoardProps {
  question: string;
  picture_id: string;
  className?: string;
}

const Board: React.FC<BoardProps> = ({ question, picture_id, className }) => {
  return (
    <div
      className={`${className} flex flex-col h-full items-center justify-center bg-center bg-cover relative`}
      style={{ backgroundImage: `url(src/bg_images/${picture_id}.png)` }}
    >
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50"></div>
      <h2 className="w-fit text-xl bg-white py-2 px-4 border border-black drop-shadow-xl">
        {question}
      </h2>
    </div>
  );
};

export default Board;
