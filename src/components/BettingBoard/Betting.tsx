import {
  blackNum,
  dozenLine,
  evenNum,
  fifthLine,
  first12,
  firstLine,
  firstNum,
  forthLine,
  lowHighLine,
  nineteenTo36,
  oddNum,
  oneTo18,
  redNum,
  second12,
  secondLine,
  secondNum,
  sixthLine,
  splitLine,
  third12,
  thirdLine,
  thirdNum,
} from "../../assets/betNumbers";
import $1 from "../../assets/images/$1.png";
import $5 from "../../assets/images/$5.png";
import $10 from "../../assets/images/$10.png";
import $100 from "../../assets/images/$100.png";
import $1000 from "../../assets/images/$1000.png";
import { BetItemsType } from "../Board/Board";
import { useContext } from "react";
import { BettingContext } from "../../context/BettingContext";
import { RouletteContext } from "../../context/RouletteContext";

interface Props {
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
  setNumList: React.Dispatch<React.SetStateAction<number[]>>;
}

interface coinImagesType {
  [number: number]: string;
}

const Betting = ({ setHovering, setNumList }: Props) => {
  const { spinStart } = useContext(RouletteContext);
  const { betCost, bet, setBet, money, setMoney } = useContext(BettingContext);

  const coinImages: coinImagesType = {
    1: $1,
    5: $5,
    10: $10,
    100: $100,
    1000: $1000,
  };

  const betCoin = (number: number[]) => {
    const matchCoins = bet.filter(
      (betItem: BetItemsType) =>
        JSON.stringify(betItem.number) === JSON.stringify(number),
    );

    if (matchCoins.length > 0) {
      const latestCoin = matchCoins[matchCoins.length - 1];
      const coinImage = coinImages[latestCoin.bet];
      return <img className={`absolute w-6`} src={coinImage} alt="" />;
    }

    return null;
  };

  return (
    <div className="absolute mt-2 flex h-full w-full items-center justify-center sm:px-2 md:px-0">
      <table className="flex w-full flex-col items-center justify-center sm:hidden">
        <thead>
          <tr>
            <td colSpan={11} className={`h-[13.8px] w-[57px]`}></td>
          </tr>

          <tr>
            <td rowSpan={28} className={`h-[13.8px] w-[57px]`}></td>
            <td colSpan={2} className={`h-[13.8px] w-[57px]`}></td>
            <td
              className={`h-[13.8px] w-[57px] cursor-pointer`}
              colSpan={5}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
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
            <td rowSpan={25} className={`h-[13.8px] w-[57px]`}></td>
            <td className={`h-[13.8px] w-[57px]`}></td>

            <td rowSpan={28} className={`h-[13.8px] w-[57px]`}></td>
          </tr>

          {splitLine.map((datas, indexes) => (
            <tr key={indexes}>
              {indexes % 4 === 0 && indexes / 4 < lowHighLine.length ? (
                <td
                  className={`h-[13.8px] w-[57px] cursor-pointer`}
                  rowSpan={4}
                  onClick={() => {
                    if (money > 0 && !spinStart) {
                      setMoney((prev: number) => prev - betCost);
                      setBet((prev: BetItemsType[]) => [
                        ...prev,
                        {
                          number: lowHighLine[indexes / 4],
                          type: "lowHigh",
                          bet: betCost,
                        },
                      ]);
                    }
                  }}
                  onMouseOver={() => {
                    setHovering(true);
                    setNumList(lowHighLine[indexes / 4]);
                  }}
                  onMouseOut={() => setHovering(false)}
                >
                  <div className="relative flex items-center justify-center">
                    {betCoin(lowHighLine[indexes / 4])}
                  </div>
                </td>
              ) : null}

              {datas.map((data, index) => (
                <td
                  key={index}
                  className={`h-[13.8px] w-[57px] cursor-pointer`}
                  onClick={() => {
                    if (money > 0 && !spinStart) {
                      setMoney((prev: number) => prev - betCost);
                      setBet((prev: BetItemsType[]) => [
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

              {indexes % 8 === 0 && indexes / 8 < lowHighLine.length ? (
                <td
                  className={`h-[13.8px] w-[57px] cursor-pointer`}
                  rowSpan={8}
                  onClick={() => {
                    if (money > 0 && !spinStart) {
                      setMoney((prev: number) => prev - betCost);
                      setBet((prev: BetItemsType[]) => [
                        ...prev,
                        {
                          number: dozenLine[indexes / 8],
                          type: "dozenColumn",
                          bet: betCost,
                        },
                      ]);
                    }
                  }}
                  onMouseOver={() => {
                    setHovering(true);
                    setNumList(dozenLine[indexes / 8]);
                  }}
                  onMouseOut={() => setHovering(false)}
                >
                  <div className="relative flex items-center justify-center">
                    {betCoin(dozenLine[indexes / 8])}
                  </div>
                </td>
              ) : null}
            </tr>
          ))}

          <tr>
            <td colSpan={9} className={`h-[13.8px] w-[57px]`}></td>
          </tr>

          <tr>
            <td colSpan={2} className={`h-[13.8px] w-[57px]`}></td>
            <td
              className={`h-[13.8px] w-[57px] cursor-pointer`}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: firstNum, type: "dozenColumn", bet: betCost },
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
            <td className={`h-[13.8px] w-[57px]`}></td>
            <td
              className={`h-[13.8px] w-[57px] cursor-pointer`}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: secondNum, type: "dozenColumn", bet: betCost },
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
            <td className={`h-[13.8px] w-[57px]`}></td>
            <td
              className={`h-[13.8px] w-[57px] cursor-pointer`}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: thirdNum, type: "dozenColumn", bet: betCost },
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
            <td colSpan={2} className={`h-[13.8px] w-[57px]`}></td>
          </tr>
          <tr>
            <td colSpan={11} className={`h-[13.8px] w-[57px]`}></td>
          </tr>
        </thead>
      </table>
      <table className="hidden w-full flex-col sm:flex">
        <thead>
          <tr>
            <td colSpan={29} className={`h-[20px] w-[53px]`}></td>
          </tr>

          <tr>
            <td rowSpan={5} className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              rowSpan={5}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
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
                className={`h-[20px] w-[53px] cursor-pointer`}
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev: number) => prev - betCost);
                    setBet((prev: BetItemsType[]) => [
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
            <td rowSpan={5} className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: thirdNum, type: "dozenColumn", bet: betCost },
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
            <td rowSpan={5} className={`h-[20px] w-[53px]`}></td>
          </tr>

          <tr>
            {secondLine.map((data, index) => (
              <td
                key={index}
                className={`h-[20px] w-[53px] cursor-pointer`}
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev: number) => prev - betCost);
                    setBet((prev: BetItemsType[]) => [
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

            <td className={`h-[20px] w-[53px]`}></td>
          </tr>

          <tr>
            {thirdLine.map((data, index) => (
              <td
                key={index}
                className={`h-[20px] w-[53px] cursor-pointer`}
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev: number) => prev - betCost);
                    setBet((prev: BetItemsType[]) => [
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

            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: secondNum, type: "dozenColumn", bet: betCost },
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
                className={`h-[20px] w-[53px] cursor-pointer`}
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev: number) => prev - betCost);
                    setBet((prev: BetItemsType[]) => [
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

            <td className={`h-[20px] w-[53px]`}></td>
          </tr>

          <tr>
            {fifthLine.map((data, index) => (
              <td
                key={index}
                className={`h-[20px] w-[53px] cursor-pointer`}
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev: number) => prev - betCost);
                    setBet((prev: BetItemsType[]) => [
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

            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: firstNum, type: "dozenColumn", bet: betCost },
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
            <td colSpan={2} className={`h-[20px] w-[53px]`}></td>

            {sixthLine.map((data, index) => (
              <td
                key={index}
                className={`h-[20px] w-[53px] cursor-pointer`}
                onClick={() => {
                  if (money > 0 && !spinStart) {
                    setMoney((prev: number) => prev - betCost);
                    setBet((prev: BetItemsType[]) => [
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
            <td colSpan={3} className={`h-[20px] w-[53px]`}></td>
          </tr>

          <tr>
            <td colSpan={3} className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={7}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: first12, type: "dozenColumn", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={7}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: second12, type: "dozenColumn", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={7}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: third12, type: "dozenColumn", bet: betCost },
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
            <td colSpan={3} className={`h-[20px] w-[53px]`}></td>
          </tr>

          <tr>
            <td colSpan={29} className={`h-[20px] w-[53px]`}></td>
          </tr>
          <tr>
            <td colSpan={3} className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: oneTo18, type: "lowHigh", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: evenNum, type: "lowHigh", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: redNum, type: "lowHigh", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: blackNum, type: "lowHigh", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: oddNum, type: "lowHigh", bet: betCost },
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
            <td className={`h-[20px] w-[53px]`}></td>
            <td
              className={`h-[20px] w-[53px] cursor-pointer`}
              colSpan={3}
              onClick={() => {
                if (money > 0 && !spinStart) {
                  setMoney((prev: number) => prev - betCost);
                  setBet((prev: BetItemsType[]) => [
                    ...prev,
                    { number: nineteenTo36, type: "lowHigh", bet: betCost },
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
            <td colSpan={3} className={`h-[20px] w-[53px]`}></td>
          </tr>
          <tr>
            <td colSpan={29} className={`h-[20px] w-[53px]`}></td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Betting;
