import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlePlayGame = () => {
    navigate("/game", { state: { score: 0, highScore: 0 } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkblue text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Welcome to the</h2>
      <h1 className="text-6xl font-bold mb-10">Census Higher Lower game!</h1>

      <p className="text-lg mb-6 max-w-lg">
        A simple game of guessing which of two randomly generated queries in US
        census data has the higher value.
      </p>
      <p className="text-lg mb-6 max-w-lg">
        Inspired by the{" "}
        <a href="https://www.higherlowergame.com/" className="underline">
          classic higher or lower game
        </a>
        .
      </p>
      <button
        onClick={handlePlayGame}
        className="mt-8 bg-palegreen hover:bg-yellow text-white py-4 px-12 rounded-lg text-3xl transition"
      >
        Play the game!
      </button>
    </div>
  );
};

export default Home;
