import Roulette from "./Roulette";
import Chips from "./Chips";

interface Props {
  betCost: number;
  setBetCost: React.Dispatch<React.SetStateAction<number>>;
  money: number;
  currentNumber: number | null;
  setCurrentNumber: React.Dispatch<React.SetStateAction<number | null>>;
  spinStart: boolean;
  setSpinStart: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
}

const RouletteBoard = ({
  betCost,
  setBetCost,
  money,
  currentNumber,
  setCurrentNumber,
  spinStart,
  setSpinStart,
  mobile,
}: Props) => {
  return (
    <div className="flex h-full w-full p-5">
      <Roulette
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
        spinStart={spinStart}
        setSpinStart={setSpinStart}
        mobile={mobile}
      />
      <div className="flex flex-1 flex-col">
        <Chips betCost={betCost} setBetCost={setBetCost} money={money} />
      </div>
    </div>
  );
};

export default RouletteBoard;
