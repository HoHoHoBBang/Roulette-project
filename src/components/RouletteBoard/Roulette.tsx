import React, { useState, useEffect } from "react";
import { blackNum, redNum } from "../Numbers";

const Roulette = ({
  currentNumber,
  setCurrentNumber,
  spinStart,
  setSpinStart,
}: any) => {
  const numbers = [
    { value: 0, color: "green" },
    { value: 32, color: "red" },
    { value: 15, color: "black" },
    { value: 19, color: "red" },
    { value: 4, color: "black" },
    { value: 21, color: "red" },
    { value: 2, color: "black" },
    { value: 25, color: "red" },
    { value: 17, color: "black" },
    { value: 34, color: "red" },
    { value: 6, color: "black" },
    { value: 27, color: "red" },
    { value: 13, color: "black" },
    { value: 36, color: "red" },
    { value: 11, color: "black" },
    { value: 30, color: "red" },
    { value: 8, color: "black" },
    { value: 23, color: "red" },
    { value: 10, color: "black" },
    { value: 5, color: "red" },
    { value: 24, color: "black" },
    { value: 16, color: "red" },
    { value: 33, color: "black" },
    { value: 1, color: "red" },
    { value: 20, color: "black" },
    { value: 14, color: "red" },
    { value: 31, color: "black" },
    { value: 9, color: "red" },
    { value: 22, color: "black" },
    { value: 18, color: "red" },
    { value: 29, color: "black" },
    { value: 7, color: "red" },
    { value: 28, color: "black" },
    { value: 12, color: "red" },
    { value: 35, color: "black" },
    { value: 3, color: "red" },
    { value: 26, color: "black" },
  ];

  const [pec, setPec] = useState();
  const [ballAngle, setBallAngle] = useState(0);
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const spinBall = () => {
    if (!spinStart) {
      setSpinStart(true);
      const finalAngle = Math.random() * 360 + 360 * 4; // Random angle + multiple full spins
      const duration = 6000; // 5 seconds
      const startTime = Date.now();
      const initialAngle = ballAngle;

      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutCubic(progress); // Applying the ease-out cubic function
        const angle = initialAngle + finalAngle * easedProgress;

        setBallAngle(angle % 360);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Calculate the resulting number
          const correctedAngle = (angle + 185) % 360; // Correct the angle by adding 185 degrees
          const index = Math.floor(correctedAngle / (360 / numbers.length));
          setCurrentNumber(numbers[index].value);
          setSpinStart(false);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  // useEffect(() => {
  //   spinBall();
  // }, []);

  const sin = (i: number) => {
    return (360 / 37) * i;
  };

  return (
    <div className="flex h-full w-full flex-1">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative flex h-full w-full items-center justify-center">
          {numbers.map((num, index) => (
            <div
              key={num.value}
              className={`${num.color === "red" ? "bg-red-500" : num.color === "black" ? "bg-black" : "bg-green-700"} absolute w-60 border-l-2 border-yellow-500`}
              style={{
                transform: `rotate(${sin(index)}deg)`,
                clipPath: "polygon(0 0, 30% 30%, 30% 70%, 0 100%)",
              }}
            >
              <p className="mb-2 ml-3 flex origin-left rotate-90 items-center justify-start text-xs text-white">
                {num.value}
              </p>
            </div>
          ))}
          <div className="absolute h-44 w-44 rounded-full border-2 border-yellow-500 bg-black/50"></div>
          <div className="absolute h-32 w-32 rounded-full border-2 border-yellow-500 bg-gray-700"></div>
          <div
            className={`flex h-full w-full items-center justify-center ${spinStart ? "scale-150" : "scale-110"} duration-500`}
          >
            <div
              className="absolute h-2 w-2 rounded-full border bg-white"
              style={{
                transform: `rotate(${ballAngle}deg) translate(70px)`,
              }}
            ></div>
          </div>
          {currentNumber !== null && (
            <div className="absolute flex h-14 w-14 items-center justify-center rounded-xl border-2 border-yellow-500 bg-black">
              <p
                className={`absolute ${redNum.includes(currentNumber) ? "text-red-500" : blackNum.includes(currentNumber) ? "text-yellow-500" : "text-green-500"} text-4xl font-bold`}
              >
                {currentNumber}
              </p>
            </div>
          )}
        </div>
      </div>
      <button
        className="h-10 w-20 cursor-pointer rounded-xl border-2 bg-black"
        onClick={() => spinBall()}
      >
        <p className="text-sm text-white">Spin Ball</p>
      </button>
    </div>
  );
};

export default Roulette;
