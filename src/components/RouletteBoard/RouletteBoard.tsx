import Roulette from "./Roulette";
import Chips from "./Chips";

const RouletteBoard = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <Roulette />
      <Chips />
    </div>
  );
};

export default RouletteBoard;
