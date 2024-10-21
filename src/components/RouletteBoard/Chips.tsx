import { useContext } from "react";
import { BettingContext } from "../../context/BettingContext";
import { chips } from "../../assets/images/chips";

const Chips = () => {
  const { money, betCost, setBetCost } = useContext(BettingContext);

  return (
    <div className="flex w-full items-center justify-center py-5">
      <div className="flex w-[70%] flex-col items-center justify-center gap-2">
        <div className="flex h-14 w-full items-center justify-end border-2 bg-black px-5">
          <p className="text-2xl font-bold text-yellow-500">${money}</p>
        </div>

        <div className="flex h-14 w-full items-center justify-center border-2 bg-green-900">
          {chips.map((data) => (
            <img
              key={data.value}
              src={data.image}
              alt=""
              className={`${money >= data.value ? "flex" : "hidden"} h-14 w-14 cursor-pointer rounded-full duration-300 ${betCost === data.value ? "scale-125" : ""}`}
              onClick={() => setBetCost(data.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chips;
