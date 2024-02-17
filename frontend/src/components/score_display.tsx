import React from "react";

interface ScoreDisplayProps {
  score: number;
  highScore: number;
  className?: string;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  highScore,
  className,
}) => {
  return (
    <div
      className={`${className} w-fit flex flex-col items-center justify-center`}
      style={{ top: "calc(50% + 30px)" }}
    >
      <div className="bg-white w-fit px-6 py-8 rounded-full text-black mb-2">
        <p className="text-5xl">OR</p>
      </div>
      <div className=" text-white text-lg drop-shadow-[-1.6px_2px_0.9px_rgba(0,0,0,1)] text-center">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;
