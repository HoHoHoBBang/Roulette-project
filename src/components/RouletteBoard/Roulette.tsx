import { useEffect, useState } from "react";
import { blackNum, redNum } from "../Numbers";

interface Props {
  currentNumber: number | null;
  setCurrentNumber: React.Dispatch<React.SetStateAction<number | null>>;
  spinStart: boolean;
  setSpinStart: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
}

const Roulette = ({
  currentNumber,
  setCurrentNumber,
  spinStart,
  setSpinStart,
  mobile,
}: Props) => {
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

  const [pec, setPec] = useState(1000);
  const [boardAngle, setBoardAngle] = useState(180);
  const [ballAngle, setBallAngle] = useState(180);

  useEffect(() => {
    if (pec > 0 && !spinStart) {
      const timer = setTimeout(() => {
        setPec((prev) => prev - 1);
      }, 8);

      return () => clearTimeout(timer);
    } else if (pec === 0) {
      spinBall();
    }
  }, [pec, spinStart]);

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const spinBall = () => {
    if (!spinStart) {
      setSpinStart(true);
      const finalAngle = Math.random() * 360 + 360 * 4;
      const finalBoardAngle = Math.random() * -360 + -360 * 1;
      const duration = 6000;
      const startTime = Date.now();
      const initialAngle = ballAngle;
      const initialBoardAngle = boardAngle;

      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const angle = initialAngle + finalAngle * easedProgress;
        const boardAngle = initialBoardAngle + finalBoardAngle * easedProgress;

        setBallAngle(angle % 360);
        setBoardAngle(boardAngle % 360);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          const correctedAngle = (angle + 185) % 360;
          const index = Math.floor(correctedAngle / (360 / numbers.length));
          setCurrentNumber(numbers[index].value);
          setSpinStart(false);
          setPec(1000);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  const sin = (i: number) => {
    return (360 / 37) * i;
  };

  const per = (pec / 1000) * 100;

  return (
    <div className="flex h-full w-full flex-1">
      <div className="flex h-full w-full flex-col">
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              transform: `rotate(${boardAngle}deg)`,
            }}
          >
            {numbers.map((num, index) => (
              <div
                key={num.value}
                className={`${num.color === "red" ? "bg-red-500" : num.color === "black" ? "bg-black" : "bg-green-700"} absolute w-80 border-l-2 border-yellow-500 ${mobile ? "border-l max-xl:w-44" : "max-lg:w-64"}`}
                style={{
                  transform: `rotate(${sin(index)}deg)`,
                  clipPath: `${mobile ? "polygon(0 25%, 50% 50%, 50% 50%, 0 75%)" : "polygon(0 10%, 50% 50%, 50% 50%, 0 90%)"}`,
                }}
              >
                <p
                  className={`my-0.5 mb-2.5 ml-3 ${mobile ? "max-xl:mb-2 max-xl:ml-2 max-xl:text-[8px]" : "max-lg:mb-1.5 max-lg:ml-2 max-lg:text-[10px]"} flex origin-left rotate-90 items-center justify-start text-sm text-white`}
                >
                  {num.value}
                </p>
              </div>
            ))}
            <div
              className={`${mobile ? "max-xl:h-36 max-xl:w-36" : "max-lg:h-52 max-lg:w-52"} absolute h-60 w-60 rounded-full border-2 border-yellow-500 bg-black/50`}
            ></div>
            <div
              className={`${mobile ? "max-xl:h-28 max-xl:w-28" : "max-lg:h-40 max-lg:w-40"} absolute h-40 w-40 rounded-full border-2 border-yellow-500 bg-gray-700`}
            ></div>
            <div
              className={`flex items-center justify-center ${spinStart ? `scale-150 ${mobile ? "max-xl:scale-110" : "max-lg:scale-150"}` : `scale-125 ${mobile ? "max-xl:scale-90" : "max-lg:scale-120"} `} duration-500`}
            >
              <div
                className={`absolute h-2.5 w-2.5 rounded-full border bg-white ${mobile ? "max-xl:h-2 max-xl:w-2" : "max-lg:h-2 max-lg:w-2"}`}
                style={{
                  transform: `rotate(${ballAngle}deg) translate(70px)`,
                }}
              ></div>
            </div>
          </div>
          {currentNumber !== null && (
            <div className="absolute flex h-20 w-20 items-center justify-center rounded-xl border-2 border-yellow-500 bg-black max-lg:h-16 max-lg:w-16">
              <p
                className={`absolute ${redNum.includes(currentNumber) ? "text-red-500" : blackNum.includes(currentNumber) ? "text-yellow-500" : "text-green-500"} text-4xl font-bold max-lg:text-3xl`}
              >
                {currentNumber}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="flex h-full w-3 rotate-180 overflow-hidden rounded-lg bg-white">
          <div
            className={`flex w-3 bg-lime-500`}
            style={{ height: `${per}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
