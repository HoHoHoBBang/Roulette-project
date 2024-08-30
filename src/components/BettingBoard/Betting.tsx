import React from "react";
import {
  blackNum,
  evenNum,
  fifthLine,
  first12,
  firstLine,
  firstNum,
  forthLine,
  nineteenTo36,
  oddNum,
  oneTo18,
  redNum,
  second12,
  secondLine,
  secondNum,
  sixthLine,
  third12,
  thirdLine,
  thirdNum,
} from "../Numbers";
import $1 from "../../assets/images/$1.png";
import $5 from "../../assets/images/$5.png";
import $10 from "../../assets/images/$10.png";
import $100 from "../../assets/images/$100.png";
import $1000 from "../../assets/images/$1000.png";

interface Props {
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
  setNumList: React.Dispatch<React.SetStateAction<number[]>>;
}

const Betting = ({
  setHovering,
  setNumList,
  betCost,
  bet,
  setBet,
  money,
  setMoney,
  spinStart,
}: any) => {
  const coinImages = {
    1: $1,
    5: $5,
    10: $10,
    100: $100,
    1000: $1000,
  };

  const betCoin = (number: number[]) => {
    const matchCoins = bet.filter(
      (betItem: any) =>
        JSON.stringify(betItem.number) === JSON.stringify(number),
    );

    if (matchCoins.length > 0) {
      const latestCoin = matchCoins[matchCoins.length - 1];
      const coinImage = coinImages[latestCoin.bet];
      return <img className="absolute h-5 w-5" src={coinImage} alt="" />;
    }

    return null;
  };

  const tdArr = [];

  for (let i = 0; i < 27; i++) {
    tdArr.push(
      <td
        key={i}
        className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"
      ></td>,
    );
  }

  return (
    <div className="absolute flex h-full w-full justify-center">
      <table className="flex w-full flex-col items-center justify-center">
        <thead>
          <tr>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              rowSpan={5}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: [0], type: "straight", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList([0]);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin([0])}
              </div>
            </td>
            {firstLine.map((data, index) => (
              <td
                key={index}
                className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev) => prev - betCost);
                    setBet((prev) => [
                      ...prev,
                      { number: data.number, type: data.type, bet: betCost },
                    ]);
                  }
                }}
                onMouseOver={() => {
                  setHovering(true);
                  setNumList(data.number);
                }}
                onMouseOut={() => setHovering(false)}
              >
                <div className="relative flex items-center justify-center">
                  {betCoin(data.number)}
                </div>
              </td>
            ))}
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: thirdNum, type: "column", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(thirdNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(thirdNum)}
              </div>
            </td>
          </tr>
          <tr>
            {secondLine.map((data, index) => (
              <td
                key={index}
                className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev) => prev - betCost);
                    setBet((prev) => [
                      ...prev,
                      { number: data.number, type: data.type, bet: betCost },
                    ]);
                  }
                }}
                onMouseOver={() => {
                  setHovering(true);
                  setNumList(data.number);
                }}
                onMouseOut={() => setHovering(false)}
              >
                <div className="relative flex items-center justify-center">
                  {betCoin(data.number)}
                </div>
              </td>
            ))}

            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
          </tr>
          <tr>
            {thirdLine.map((data, index) => (
              <td
                key={index}
                className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev) => prev - betCost);
                    setBet((prev) => [
                      ...prev,
                      { number: data.number, type: data.type, bet: betCost },
                    ]);
                  }
                }}
                onMouseOver={() => {
                  setHovering(true);
                  setNumList(data.number);
                }}
                onMouseOut={() => setHovering(false)}
              >
                <div className="relative flex items-center justify-center">
                  {betCoin(data.number)}
                </div>
              </td>
            ))}
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: secondNum, type: "column", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(secondNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(secondNum)}
              </div>
            </td>
          </tr>
          <tr>
            {forthLine.map((data, index) => (
              <td
                key={index}
                className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev) => prev - betCost);
                    setBet((prev) => [
                      ...prev,
                      { number: data.number, type: data.type, bet: betCost },
                    ]);
                  }
                }}
                onMouseOver={() => {
                  setHovering(true);
                  setNumList(data.number);
                }}
                onMouseOut={() => setHovering(false)}
              >
                <div className="relative flex items-center justify-center">
                  {betCoin(data.number)}
                </div>
              </td>
            ))}
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
          </tr>
          <tr>
            {fifthLine.map((data, index) => (
              <td
                key={index}
                className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev) => prev - betCost);
                    setBet((prev) => [
                      ...prev,
                      { number: data.number, type: data.type, bet: betCost },
                    ]);
                  }
                }}
                onMouseOver={() => {
                  setHovering(true);
                  setNumList(data.number);
                }}
                onMouseOut={() => setHovering(false)}
              >
                <div className="relative flex items-center justify-center">
                  {betCoin(data.number)}
                </div>
              </td>
            ))}
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: firstNum, type: "column", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(firstNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(firstNum)}
              </div>
            </td>
          </tr>
          <tr>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            {sixthLine.map((data, index) => (
              <td
                key={index}
                className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev) => prev - betCost);
                    setBet((prev) => [
                      ...prev,
                      { number: data.number, type: data.type, bet: betCost },
                    ]);
                  }
                }}
                onMouseOver={() => {
                  setHovering(true);
                  setNumList(data.number);
                }}
                onMouseOut={() => setHovering(false)}
              >
                <div className="relative flex items-center justify-center">
                  {betCoin(data.number)}
                </div>
              </td>
            ))}
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={7}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: first12, type: "dozen", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(first12);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(first12)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={7}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: second12, type: "dozen", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(second12);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(second12)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={7}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: third12, type: "dozen", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(third12);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(third12)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
          </tr>
          <tr>{tdArr}</tr>
          <tr>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: oneTo18, type: "low", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(oneTo18);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(oneTo18)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: evenNum, type: "even", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(evenNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(evenNum)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: redNum, type: "red", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(redNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(redNum)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: blackNum, type: "black", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(blackNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(blackNum)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: oddNum, type: "odd", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(oddNum);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(oddNum)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td
              className="h-4 w-[33px] cursor-pointer max-md:h-[11.5px] max-md:w-[23px]"
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev) => prev - betCost);
                  setBet((prev) => [
                    ...prev,
                    { number: nineteenTo36, type: "high", bet: betCost },
                  ]);
                }
              }}
              onMouseOver={() => {
                setHovering(true);
                setNumList(nineteenTo36);
              }}
              onMouseOut={() => setHovering(false)}
            >
              <div className="relative flex items-center justify-center">
                {betCoin(nineteenTo36)}
              </div>
            </td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
            <td className="h-4 w-[33px] max-md:h-[11.5px] max-md:w-[23px]"></td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Betting;
