import { useContext } from "react";
import BettingBoard from "../BettingBoard/BettingBoard";
import RouletteBoard from "../RouletteBoard/RouletteBoard";
import { RouletteContext } from "../../context/RouletteContext";

export interface BetItemsType {
  number: number[];
  type: string;
  bet: number;
}

const Board = () => {
  const { per } = useContext(RouletteContext);

  return (
    <div className="bg-green-900">
      <p className="bg-black py-5 text-center text-4xl font-bold text-white">
        ROULETTE<span className="text-yellow-500">.</span>
      </p>
      <RouletteBoard />
      <div className="flex w-full items-center justify-center pb-5">
        <div className="h-3 w-[95%] overflow-hidden rounded-full border border-black bg-white">
          <div
            className={`h-2.5 bg-green-400`}
            style={{ width: `${per}%` }}
          ></div>
        </div>
      </div>
      <BettingBoard />
    </div>
  );
};

export default Board;
