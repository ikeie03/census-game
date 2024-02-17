import React from 'react';

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
      className={`${className} w-fit flex flex-col items-center justify-center text-white`}
      style={{ top: "calc(50% + 30px)" }}
    >
      <div className="bg-white w-fit px-6 py-8 rounded-full text-black ">
        <p className="text-5xl">OR</p>
      </div>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
};

export default ScoreDisplay;
