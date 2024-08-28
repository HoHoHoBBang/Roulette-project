import React from "react";

interface Props {
  hovering: boolean;
  numList: number[];
}

const BettingNumber = ({ hovering, numList }: Props) => {
  return (
    <table className="h-1/2 w-[90%] max-md:w-[95%]">
      <thead>
        <tr>
          <td
            rowSpan={3}
            className={`${hovering && numList.includes(0) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            0
          </td>
          <td
            className={`${hovering && numList.includes(3) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            3
          </td>
          <td
            className={`${hovering && numList.includes(6) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            6
          </td>
          <td
            className={`${hovering && numList.includes(9) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            9
          </td>
          <td
            className={`${hovering && numList.includes(12) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            12
          </td>
          <td
            className={`${hovering && numList.includes(15) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            15
          </td>
          <td
            className={`${hovering && numList.includes(18) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            18
          </td>
          <td
            className={`${hovering && numList.includes(21) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            21
          </td>
          <td
            className={`${hovering && numList.includes(24) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            24
          </td>
          <td
            className={`${hovering && numList.includes(27) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            27
          </td>
          <td
            className={`${hovering && numList.includes(30) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            30
          </td>
          <td
            className={`${hovering && numList.includes(33) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            33
          </td>
          <td
            className={`${hovering && numList.includes(36) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            36
          </td>
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs">
            3rd
          </td>
        </tr>
        <tr>
          <td
            className={`${hovering && numList.includes(2) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            2
          </td>
          <td
            className={`${hovering && numList.includes(5) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            5
          </td>
          <td
            className={`${hovering && numList.includes(8) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            8
          </td>
          <td
            className={`${hovering && numList.includes(11) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            11
          </td>
          <td
            className={`${hovering && numList.includes(14) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            14
          </td>
          <td
            className={`${hovering && numList.includes(17) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            17
          </td>
          <td
            className={`${hovering && numList.includes(20) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            20
          </td>
          <td
            className={`${hovering && numList.includes(23) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            23
          </td>
          <td
            className={`${hovering && numList.includes(26) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            26
          </td>
          <td
            className={`${hovering && numList.includes(29) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            29
          </td>
          <td
            className={`${hovering && numList.includes(32) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            32
          </td>
          <td
            className={`${hovering && numList.includes(35) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            35
          </td>
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs">
            2nd
          </td>
        </tr>
        <tr>
          <td
            className={`${hovering && numList.includes(1) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            1
          </td>
          <td
            className={`${hovering && numList.includes(4) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            4
          </td>
          <td
            className={`${hovering && numList.includes(7) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            7
          </td>
          <td
            className={`${hovering && numList.includes(10) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            10
          </td>
          <td
            className={`${hovering && numList.includes(13) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            13
          </td>
          <td
            className={`${hovering && numList.includes(16) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            16
          </td>
          <td
            className={`${hovering && numList.includes(19) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            19
          </td>
          <td
            className={`${hovering && numList.includes(22) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            22
          </td>
          <td
            className={`${hovering && numList.includes(25) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            25
          </td>
          <td
            className={`${hovering && numList.includes(28) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            28
          </td>
          <td
            className={`${hovering && numList.includes(31) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            31
          </td>
          <td
            className={`${hovering && numList.includes(34) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white duration-150 max-md:text-xs`}
          >
            34
          </td>
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs">
            1st
          </td>
        </tr>
        <tr>
          <td></td>
          <td
            colSpan={4}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            1st 12
          </td>
          <td
            colSpan={4}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            2nd 12
          </td>
          <td
            colSpan={4}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            3rd 12
          </td>
        </tr>
        <tr>
          <td></td>
          <td
            colSpan={2}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            1 to 18
          </td>
          <td
            colSpan={2}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            EVEN
          </td>
          <td
            colSpan={2}
            className="border-separate cursor-default border-2 bg-red-500 text-center text-lg font-bold text-white max-md:text-xs"
          >
            RED
          </td>
          <td
            colSpan={2}
            className="border-separate cursor-default border-2 bg-black text-center text-lg font-bold text-white max-md:text-xs"
          >
            BLACK
          </td>
          <td
            colSpan={2}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            ODD
          </td>
          <td
            colSpan={2}
            className="border-separate cursor-default border-2 bg-green-700 text-center text-lg font-bold text-white max-md:text-xs"
          >
            19 to 36
          </td>
        </tr>
      </thead>
    </table>
  );
};

export default BettingNumber;
