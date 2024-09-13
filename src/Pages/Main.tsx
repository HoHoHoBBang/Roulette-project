import { useEffect, useState } from "react";
import Board from "../components/Board/Board";

const Main = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  console.log(mobile);

  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div className="fixed inset-0 z-[10] flex h-dvh w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg landscape:hidden">
        <p className="mx-10 flex text-2xl font-bold text-white">
          The portrait mode is not supported. Please proceed in landscape mode.
        </p>
      </div>
      <Board mobile={mobile} />
    </div>
  );
};

export default Main;
