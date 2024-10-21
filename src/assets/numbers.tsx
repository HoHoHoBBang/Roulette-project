export const numbers = [
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

interface lineNumberTypes {
  value: number;
  color: string;
}

export const combinedNumbers: lineNumberTypes[] = [
  { value: 1, color: "red-500" },
  { value: 2, color: "black" },
  { value: 3, color: "red-500" },
  { value: 4, color: "black" },
  { value: 5, color: "red-500" },
  { value: 6, color: "black" },
  { value: 7, color: "red-500" },
  { value: 8, color: "black" },
  { value: 9, color: "red-500" },
  { value: 10, color: "black" },
  { value: 11, color: "black" },
  { value: 12, color: "red-500" },
  { value: 13, color: "black" },
  { value: 14, color: "red-500" },
  { value: 15, color: "black" },
  { value: 16, color: "red-500" },
  { value: 17, color: "black" },
  { value: 18, color: "red-500" },
  { value: 19, color: "red-500" },
  { value: 20, color: "black" },
  { value: 21, color: "red-500" },
  { value: 22, color: "black" },
  { value: 23, color: "red-500" },
  { value: 24, color: "black" },
  { value: 25, color: "red-500" },
  { value: 26, color: "black" },
  { value: 27, color: "red-500" },
  { value: 28, color: "black" },
  { value: 29, color: "black" },
  { value: 30, color: "red-500" },
  { value: 31, color: "black" },
  { value: 32, color: "red-500" },
  { value: 33, color: "black" },
  { value: 34, color: "red-500" },
  { value: 35, color: "black" },
  { value: 36, color: "red-500" },
];

export const thirdLineNumbers: lineNumberTypes[] = [];
export const secondLineNumbers: lineNumberTypes[] = [];
export const firstLineNumbers: lineNumberTypes[] = [];
export const splitNumbers: lineNumberTypes[][] = [];

for (let i = 0; i < 35; i += 3) {
  splitNumbers.push(combinedNumbers.slice(i, i + 3));
}

for (let i = 2; i < 36; i += 3) {
  thirdLineNumbers.push(combinedNumbers[i]);
}

for (let i = 1; i < 36; i += 3) {
  secondLineNumbers.push(combinedNumbers[i]);
}

for (let i = 0; i < 36; i += 3) {
  firstLineNumbers.push(combinedNumbers[i]);
}

export const dozenNumbers = [
  {
    value: "1st 12",
    color: "green-700",
  },
  {
    value: "2nd 12",
    color: "green-700",
  },
  {
    value: "3rd 12",
    color: "green-700",
  },
];

export const lowHignNumbers = [
  {
    value: "1 to 18",
    color: "green-700",
  },
  {
    value: "EVEN",
    color: "green-700",
  },
  {
    value: "RED",
    color: "red-500",
  },
  {
    value: "BLACK",
    color: "black",
  },
  {
    value: "ODD",
    color: "green-700",
  },
  {
    value: "19 to 36",
    color: "green-700",
  },
];
