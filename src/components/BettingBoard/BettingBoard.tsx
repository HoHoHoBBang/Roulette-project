import { useState } from "react";
import BettingNumber from "./BettingNumber";
import Betting from "./Betting";
import { BetItemsProps } from "../Board/Board";

interface Props {
  betCost: number;
  bet: BetItemsProps[];
  setBet: React.Dispatch<React.SetStateAction<BetItemsProps[]>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  spinStart: boolean;
  mobile: boolean;
}

const BettingBoard = ({
  betCost,
  bet,
  setBet,
  money,
  setMoney,
  spinStart,
  mobile,
}: Props) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [numList, setNumList] = useState<number[]>([]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <Betting
        setHovering={setHovering}
        setNumList={setNumList}
        betCost={betCost}
        bet={bet}
        setBet={setBet}
        money={money}
        setMoney={setMoney}
        spinStart={spinStart}
        mobile={mobile}
      />
      <BettingNumber hovering={hovering} numList={numList} />
    </div>
  );
};

export default BettingBoard;
