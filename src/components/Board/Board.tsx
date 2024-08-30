import React, { useEffect, useState } from "react";
import BettingBoard from "../BettingBoard/BettingBoard";
import RouletteBoard from "../RouletteBoard/RouletteBoard";

const Board = () => {
  const [betCost, setBetCost] = useState(1);
  const [money, setMoney] = useState(100);
  const [bet, setBet] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [spinStart, setSpinStart] = useState(false);
  const [per, setPer] = useState(100);

  useEffect(() => {
    if (money <= 5) {
      setBetCost(1);
    }
  }, [money]);

  useEffect(() => {
    if (currentNumber !== null && !spinStart) {
      bet.forEach((betItems) => {
        betItems.number.forEach((betNumber) => {
          if (betNumber === currentNumber) {
            switch (betItems.type) {
              case "straight":
                setMoney((prev) => prev + betItems.bet * 35);
                break;
              case "split":
                setMoney((prev) => prev + betItems.bet * 17);
                break;
              case "street":
                setMoney((prev) => prev + betItems.bet * 11);
                break;
              case "corner":
                setMoney((prev) => prev + betItems.bet + betItems.bet * 8);
                break;
              case "line":
                setMoney((prev) => prev + betItems.bet + betItems.bet * 5);
                break;
              case "dozen":
              case "column":
                setMoney((prev) => prev + betItems.bet + betItems.bet * 2);
                break;
              case "red":
              case "black":
              case "even":
              case "odd":
              case "high":
              case "low":
                setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
                break;
              default:
                break;
            }
          }
        });
      });

      setBet([]);
    }
  }, [currentNumber, spinStart]);

  console.log("Total :", money);
  console.log("BetCost :", betCost);
  console.log("Betting :", bet);
  console.log("Number is :", currentNumber);

  return (
    <div className="flex h-full w-full bg-red-900">
      <div className="flex w-full flex-col items-center justify-center">
        <RouletteBoard
          betCost={betCost}
          setBetCost={setBetCost}
          money={money}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          spinStart={spinStart}
          setSpinStart={setSpinStart}
        />
        <BettingBoard
          betCost={betCost}
          bet={bet}
          setBet={setBet}
          money={money}
          setMoney={setMoney}
          spinStart={spinStart}
          per={per}
        />
      </div>
    </div>
  );
};

export default Board;
