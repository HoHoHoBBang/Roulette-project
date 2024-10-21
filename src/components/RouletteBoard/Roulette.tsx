import { useContext } from "react";
import { blackNum, redNum } from "../../assets/betNumbers";
import { RouletteContext } from "../../context/RouletteContext";
import { numbers } from "../../assets/numbers";

const Roulette = () => {
  const { boardAngle, ballAngle, currentNumber, spinStart } =
    useContext(RouletteContext);

  const sin = (i: number) => {
    return (360 / 37) * i;
  };

  return (
    <div className="flex h-[350px] w-full items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div
          className="flex items-center justify-center"
          style={{ transform: `rotate(${boardAngle}deg)` }}
        >
          {numbers.map((num, index) => (
            <div
              key={num.value}
              className={`absolute h-[300px] border-2 border-yellow-500 ${num.color === "red" ? "bg-red-500" : num.color === "black" ? "bg-black" : "bg-green-700"}`}
              style={{
                transform: `rotate(${sin(index)}deg)`,
                clipPath: `polygon(0 0, 100% 0, 50% 50%, 50% 50%)`,
              }}
            >
              <p className="w-6 text-center text-sm text-white">{num.value}</p>
            </div>
          ))}

          <div className="absolute h-64 w-64 rounded-full bg-black/25"></div>
          <div className="absolute h-52 w-52 rounded-full border border-yellow-500 bg-gray-700"></div>
          <div
            className={`flex ${spinStart ? "scale-110" : ""} items-center justify-center duration-300`}
          >
            <div
              className={`absolute h-3 w-3 rounded-full border bg-white`}
              style={{
                transform: `rotate(${ballAngle}deg) translate(115px)`,
              }}
            ></div>
          </div>
        </div>
        {currentNumber !== null ? (
          <div className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-yellow-500 bg-black">
            <p
              className={`absolute ${redNum.includes(currentNumber) ? "text-red-500" : blackNum.includes(currentNumber) ? "text-yellow-500" : "text-green-500"} text-4xl font-bold`}
            >
              {currentNumber}
            </p>
          </div>
        ) : (
          <div className="absolute flex h-28 w-28 items-center justify-center rounded-full border border-yellow-500 bg-black"></div>
        )}
      </div>
    </div>
  );
};

export default Roulette;
