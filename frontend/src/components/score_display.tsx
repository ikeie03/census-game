import React from "react";
import { motion } from "framer-motion";
import { SymbolState } from "../enums/SymbolState";

interface ScoreDisplayProps {
  score: number;
  highScore: number;
  className?: string;
  centerSymbol: SymbolState;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  highScore,
  className,
  centerSymbol,
}) => {
  const ORtext = (
    <motion.div
      className="bg-white w-fit px-6 py-8 rounded-full text-black shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-5xl">OR</p>
    </motion.div>
  );

  const checkMark = (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className=" text-white bg-green-500 rounded-full w-28 h-28 p-4 flex items-center justify-center"
    >
      <motion.path
        fill="currentColor"
        fill-rule="evenodd"
        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
        clip-rule="evenodd"
      />
    </motion.svg>
  );

  const crossMark = (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
      className=" text-white bg-red-500 rounded-full w-28 h-28 p-4 flex items-center justify-center"
    >
      <motion.path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
        clip-rule="evenodd"
      />
    </motion.svg>
  );

  return (
    <div
      className={`${className} w-fit flex flex-col items-center justify-center`}
      style={{ top: "calc(50% + 30px)" }}
    >
      {centerSymbol == SymbolState.Default
        ? ORtext
        : centerSymbol == SymbolState.Check
        ? checkMark
        : crossMark}
      <div className=" text-white text-lg drop-shadow-[-1.6px_2px_0.9px_rgba(0,0,0,1)] text-center mt-2">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;
