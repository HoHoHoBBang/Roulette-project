import React from "react";
import Roulette from "./Roulette";
import Chips from "./Chips";

const RouletteBoard = ({
  betCost,
  setBetCost,
  money,
  wonMoney,
  currentNumber,
  setCurrentNumber,
  spinStart,
  setSpinStart,
}: any) => {
  return (
    <div className="flex h-full w-full p-5">
      <Roulette
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
        spinStart={spinStart}
        setSpinStart={setSpinStart}
      />
      <div className="flex flex-1 flex-col">
        <Chips betCost={betCost} setBetCost={setBetCost} money={money} />
      </div>
    </div>
  );
};

export default RouletteBoard;
