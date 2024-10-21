import {
  dozenNumbers,
  firstLineNumbers,
  lowHignNumbers,
  secondLineNumbers,
  splitNumbers,
  thirdLineNumbers,
} from "../../assets/numbers";

interface Props {
  hovering: boolean;
  numList: number[];
}

const BettingNumber = ({ hovering, numList }: Props) => {
  return (
    <table className="mt-2 h-[200px] w-full">
      <thead className="hidden sm:table-header-group">
        <tr>
          <td
            rowSpan={3}
            className={`${hovering && numList.includes(0) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150`}
          >
            0
          </td>
          {thirdLineNumbers.map((num) => (
            <td
              key={num.value}
              className={`${hovering && numList.includes(num.value) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-${num.color} text-center font-bold text-white duration-150`}
            >
              {num.value}
            </td>
          ))}
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150">
            3rd
          </td>
        </tr>
        <tr>
          {secondLineNumbers.map((num) => (
            <td
              key={num.value}
              className={`${hovering && numList.includes(num.value) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-${num.color} text-center font-bold text-white duration-150`}
            >
              {num.value}
            </td>
          ))}
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150">
            2nd
          </td>
        </tr>
        <tr>
          {firstLineNumbers.map((num) => (
            <td
              key={num.value}
              className={`${hovering && numList.includes(num.value) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-${num.color} text-center font-bold text-white duration-150`}
            >
              {num.value}
            </td>
          ))}
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150">
            1st
          </td>
        </tr>
        <tr>
          <td></td>
          {dozenNumbers.map((num) => (
            <td
              key={num.value}
              colSpan={4}
              className={`border-separate cursor-default border-2 bg-${num.color} text-center font-bold text-white`}
            >
              {num.value}
            </td>
          ))}
        </tr>
        <tr>
          <td></td>
          {lowHignNumbers.map((num) => (
            <td
              key={num.value}
              colSpan={2}
              className={`border-separate cursor-default border-2 bg-${num.color} text-center font-bold text-white`}
            >
              {num.value}
            </td>
          ))}
        </tr>
      </thead>

      <thead className="sm:hidden">
        <tr>
          <td></td>
          <td
            colSpan={3}
            className={`${hovering && numList.includes(0) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150`}
          >
            0
          </td>
          <td></td>
        </tr>

        {splitNumbers.map((nums, index) => (
          <tr key={index}>
            {index % 2 === 0 && index / 2 < lowHignNumbers.length ? (
              <td
                rowSpan={2}
                className={`w-10 border-separate cursor-default border-2 bg-${lowHignNumbers[index / 2].color} text-center text-xs font-bold text-white`}
              >
                {lowHignNumbers[index / 2].value}
              </td>
            ) : null}
            {nums.map((num) => (
              <td
                key={num.value}
                className={`${hovering && numList.includes(num.value) ? "bg-yellow-500" : ""} w-10 border-separate cursor-default border-2 bg-${num.color} text-center font-bold text-white duration-150`}
              >
                {num.value}
              </td>
            ))}
            {index % 4 === 0 && index / 4 < dozenNumbers.length ? (
              <td
                rowSpan={4}
                className={`w-10 border-separate cursor-default border-2 bg-${dozenNumbers[index / 4].color} text-center font-bold text-white`}
              >
                {dozenNumbers[index / 4].value}
              </td>
            ) : null}
          </tr>
        ))}
        <tr>
          <td></td>
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150">
            1st
          </td>
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150">
            2nd
          </td>
          <td className="w-10 border-separate cursor-default border-2 bg-green-700 text-center font-bold text-white duration-150">
            3rd
          </td>
          <td></td>
        </tr>
      </thead>
    </table>
  );
};

export default BettingNumber;
