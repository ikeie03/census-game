import React from "react";

interface BoardProps {
  question: string;
  picture_id: string;
  className?: string;
  onClick: () => void;
}

const Board: React.FC<BoardProps> = ({ question, picture_id, className, onClick }) => {
  return (
    <div
      className={`${className} flex flex-col h-full items-center justify-center bg-center bg-cover relative`}
      style={{ backgroundImage: `url(public/bg_images/${picture_id}.png)` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black opacity-20 hover:opacity-50"></div>
      <h2 className="w-fit text-2xl bg-white py-3 px-5 border border-black drop-shadow-xl">
        {question}
      </h2>
    </div>
  );
};

export default Board;
