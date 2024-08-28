import React, { useEffect, useState } from "react";
import BettingBoard from "../BettingBoard/BettingBoard";
import RouletteBoard from "../RouletteBoard/RouletteBoard";

const Board = () => {
  const [betCost, setBetCost] = useState(1);
  const [money, setMoney] = useState(100);
  const [bet, setBet] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [spinStart, setSpinStart] = useState(false);

  useEffect(() => {
    if (money <= 5) {
      setBetCost(1);
    }
  }, [money]);

  console.log("Total :", money);
  console.log("BetCost :", betCost);
  console.log("Betting :", bet);
  console.log("Number is :", currentNumber);

  return (
    <div className="flex h-full w-full">
      <div className="flex w-full flex-col items-center justify-center">
        <RouletteBoard
          setBetCost={setBetCost}
          money={money}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          spinStart={spinStart}
          setSpinStart={setSpinStart}
        />
        <BettingBoard
          betCost={betCost}
          setBet={setBet}
          money={money}
          setMoney={setMoney}
          spinStart={spinStart}
        />
      </div>
    </div>
  );
};

export default Board;
