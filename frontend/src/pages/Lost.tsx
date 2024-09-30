import { useLocation, useNavigate } from "react-router-dom";

const Lost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 0, highScore = 0 } = location.state || {};

  const handleTryAgain = () => {
    navigate("/game", { state: { score: 0, highScore: highScore } });
  };
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkblue text-white text-center">
      <h1 className="text-4xl font-bold mb-6">
        Oops! You picked the wrong choice.
      </h1>
      <p className="text-xl mb-4">Better luck next time!</p>

      <div className="flex flex-col items-center space-y-8">
        <div className="bg-green text-white rounded-lg p-8 shadow-md w-full">
          <p className="text-2xl">Your Score: {score}</p>
          <p className="text-2xl mt-2">Your high Score: {highScore}</p>
        </div>

        <button
          onClick={handleTryAgain}
          className=" bg-darkred hover:bg-yellow text-white py-4 px-12 rounded-lg text-3xl transition w-full"
        >
          Try Again
        </button>

        <button
          onClick={handleGoHome}
          className=" bg-white hover:bg-green text-green hover:text-white py-2 px-6 rounded-lg text-xl transition w-full"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default Lost;
