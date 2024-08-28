import React, { useState } from "react";
import BettingNumber from "./BettingNumber";
import Betting from "./Betting";

const BettingBoard = ({ betCost, setBet, money, setMoney, spinStart }: any) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [numList, setNumList] = useState<number[]>([]);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Betting
        setHovering={setHovering}
        setNumList={setNumList}
        betCost={betCost}
        setBet={setBet}
        money={money}
        setMoney={setMoney}
        spinStart={spinStart}
      />
      <BettingNumber hovering={hovering} numList={numList} />
    </div>
  );
};

export default BettingBoard;
