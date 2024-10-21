import { useState } from "react";
import BettingNumber from "./BettingNumber";
import Betting from "./Betting";

const BettingBoard = () => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [numList, setNumList] = useState<number[]>([]);

  return (
    <div className="relative flex items-center justify-center bg-green-900 p-5">
      <Betting setHovering={setHovering} setNumList={setNumList} />
      <BettingNumber hovering={hovering} numList={numList} />
    </div>
  );
};

export default BettingBoard;
