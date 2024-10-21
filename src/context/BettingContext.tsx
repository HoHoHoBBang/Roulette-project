import { createContext, useContext, useEffect, useState } from "react";
import { RouletteContext } from "./RouletteContext";
import { BetItemsType } from "../components/Board/Board";

interface Props {
  children: React.ReactNode;
}

interface BettingContextType {
  betCost: number;
  setBetCost: React.Dispatch<React.SetStateAction<number>>;
  bet: BetItemsType[];
  setBet: React.Dispatch<React.SetStateAction<BetItemsType[]>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
}

const initialState: BettingContextType = {
  betCost: 1,
  setBetCost: () => {},
  money: 100,
  setMoney: () => {},
  bet: [],
  setBet: () => {},
};
export const BettingContext = createContext(initialState);

const BettingContextProvider = ({ children }: Props) => {
  const { currentNumber, spinStart } = useContext(RouletteContext);

  const [betCost, setBetCost] = useState<number>(1);
  const [money, setMoney] = useState<number>(100);
  const [bet, setBet] = useState<BetItemsType[]>([]);

  useEffect(() => {
    if (betCost > money) {
      if (money >= 100) {
        setBetCost(100);
      } else if (money >= 10) {
        setBetCost(10);
      } else if (money >= 5) {
        setBetCost(5);
      } else {
        setBetCost(1);
      }
    }
  }, [betCost, money]);

  useEffect(() => {
    if (currentNumber !== null && !spinStart) {
      bet.forEach((betItems: BetItemsType) => {
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
              case "dozenColumn":
                setMoney((prev) => prev + betItems.bet + betItems.bet * 2);
                break;
              case "lowHigh":
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

  const value = { betCost, setBetCost, money, setMoney, bet, setBet };

  return (
    <BettingContext.Provider value={value}>{children}</BettingContext.Provider>
  );
};

export default BettingContextProvider;
