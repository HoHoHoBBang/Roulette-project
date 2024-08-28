import React from "react";
import $1 from "../../assets/images/$1.png";
import $5 from "../../assets/images/$5.png";
import $10 from "../../assets/images/$10.png";
import $100 from "../../assets/images/$100.png";
import $1000 from "../../assets/images/$1000.png";

const Chips = ({ setBetCost, money }: any) => {
  return (
    <div className="flex h-full items-end justify-center gap-5">
      <img
        src={$1}
        alt=""
        className={`${money > 0 ? "flex" : "hidden"} h-14 w-14 cursor-pointer`}
        onClick={() => setBetCost(1)}
      />
      <img
        src={$5}
        alt=""
        className={`${money >= 5 ? "flex" : "hidden"} h-14 w-14 cursor-pointer`}
        onClick={() => setBetCost(5)}
      />
      <img
        src={$10}
        alt=""
        className={`${money >= 10 ? "flex" : "hidden"} h-14 w-14 cursor-pointer`}
        onClick={() => setBetCost(10)}
      />
      <img
        src={$100}
        alt=""
        className={`${money >= 100 ? "flex" : "hidden"} h-14 w-14 cursor-pointer`}
        onClick={() => setBetCost(100)}
      />
      <img
        src={$1000}
        alt=""
        className={`${money >= 1000 ? "flex" : "hidden"} h-14 w-14 cursor-pointer`}
        onClick={() => setBetCost(1000)}
      />
    </div>
  );
};

export default Chips;
