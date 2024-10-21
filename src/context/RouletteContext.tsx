import { createContext, useEffect, useState } from "react";
import { numbers } from "../assets/numbers";

interface Props {
  children: React.ReactNode;
}

interface RouletteContextType {
  pec: number;
  setPec: React.Dispatch<React.SetStateAction<number>>;
  boardAngle: number;
  setBoardAngle: React.Dispatch<React.SetStateAction<number>>;
  ballAngle: number;
  setBallAngle: React.Dispatch<React.SetStateAction<number>>;
  currentNumber: number | null;
  setCurrentNumber: React.Dispatch<React.SetStateAction<number | null>>;
  spinStart: boolean;
  setSpinStart: React.Dispatch<React.SetStateAction<boolean>>;
  spinBall: () => void;
  per: number;
}

const initialState: RouletteContextType = {
  pec: 1000,
  setPec: () => {},
  boardAngle: 0,
  setBoardAngle: () => {},
  ballAngle: -90,
  setBallAngle: () => {},
  spinStart: false,
  setSpinStart: () => {},
  currentNumber: null,
  setCurrentNumber: () => {},
  spinBall: () => {},
  per: 0,
};

export const RouletteContext = createContext(initialState);

const RouletteContextProvider = ({ children }: Props) => {
  const [pec, setPec] = useState(1000);
  const [boardAngle, setBoardAngle] = useState(0);
  const [ballAngle, setBallAngle] = useState(-90);
  const [spinStart, setSpinStart] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);

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
          const correctedAngle = (angle + 95) % 360;
          const index = Math.floor(correctedAngle / (360 / numbers.length));
          setCurrentNumber(numbers[index].value);
          setSpinStart(false);
          setPec(1000);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  const per = (pec / 1000) * 100;

  const value = {
    pec,
    setPec,
    boardAngle,
    setBoardAngle,
    ballAngle,
    setBallAngle,
    spinStart,
    setSpinStart,
    currentNumber,
    setCurrentNumber,
    spinBall,
    per,
  };

  return (
    <RouletteContext.Provider value={value}>
      {children}
    </RouletteContext.Provider>
  );
};

export default RouletteContextProvider;
