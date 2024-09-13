import { useEffect, useState } from "react";
import BettingBoard from "../BettingBoard/BettingBoard";
import RouletteBoard from "../RouletteBoard/RouletteBoard";

interface Props {
  mobile: boolean;
}

export interface BetItemsProps {
  number: number[];
  type: string;
  bet: number;
}

const Board = ({ mobile }: Props) => {
  const [betCost, setBetCost] = useState<number>(1);
  const [money, setMoney] = useState<number>(100);
  const [bet, setBet] = useState<BetItemsProps[]>([]);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [spinStart, setSpinStart] = useState<boolean>(false);

  useEffect(() => {
    if (money <= 5) {
      setBetCost(1);
    }
  }, [money]);

  useEffect(() => {
    if (currentNumber !== null && !spinStart) {
      bet.forEach((betItems: BetItemsProps) => {
        betItems.number.forEach((betNumber: number) => {
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
          mobile={mobile}
        />
        <BettingBoard
          betCost={betCost}
          bet={bet}
          setBet={setBet}
          money={money}
          setMoney={setMoney}
          spinStart={spinStart}
          mobile={mobile}
        />
      </div>
    </div>
  );
};

export default Board;
