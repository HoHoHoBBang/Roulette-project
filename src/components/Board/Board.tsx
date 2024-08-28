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

  useEffect(() => {
    if (currentNumber !== null && !spinStart) {
      bet.forEach((betItems) => {
        betItems.number.forEach((betNumber) => {
          if (betNumber === currentNumber && betItems.type === "straight") {
            setMoney((prev) => prev + betItems.bet * 35);
          } else if (betNumber === currentNumber && betItems.type === "split") {
            setMoney((prev) => prev + betItems.bet * 17);
          } else if (
            betNumber === currentNumber &&
            betItems.type === "street"
          ) {
            setMoney((prev) => prev + betItems.bet * 11);
          } else if (
            betNumber === currentNumber &&
            betItems.type === "corner"
          ) {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 8);
          } else if (betNumber === currentNumber && betItems.type === "line") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 5);
          } else if (betNumber === currentNumber && betItems.type === "dozen") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 2);
          } else if (
            betNumber === currentNumber &&
            betItems.type === "column"
          ) {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 2);
          } else if (betNumber === currentNumber && betItems.type === "red") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
          } else if (betNumber === currentNumber && betItems.type === "black") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
          } else if (betNumber === currentNumber && betItems.type === "even") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
          } else if (betNumber === currentNumber && betItems.type === "odd") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
          } else if (betNumber === currentNumber && betItems.type === "high") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
          } else if (betNumber === currentNumber && betItems.type === "low") {
            setMoney((prev) => prev + betItems.bet + betItems.bet * 1);
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
