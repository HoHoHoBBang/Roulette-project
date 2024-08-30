import React, { useEffect, useState } from "react";
import BettingNumber from "./BettingNumber";
import Betting from "./Betting";

const BettingBoard = ({
  betCost,
  bet,
  setBet,
  money,
  setMoney,
  spinStart,
  per,
}: any) => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [numList, setNumList] = useState<number[]>([]);

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="absolute top-5 flex w-full items-center justify-center">
        <div className="mx-5 h-2 w-full overflow-hidden rounded-lg bg-white">
          <div className={`h-full w-[${per}%] bg-lime-500`}></div>
        </div>
      </div>
      <Betting
        setHovering={setHovering}
        setNumList={setNumList}
        betCost={betCost}
        bet={bet}
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
