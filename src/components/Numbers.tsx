export const redNum = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];
export const blackNum = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];

export const firstNum = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
export const secondNum = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
export const thirdNum = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

export const evenNum: number[] = [];
export const oddNum: number[] = [];

export const first12: number[] = [];
export const second12: number[] = [];
export const third12: number[] = [];
export const oneTo18: number[] = [];
export const nineteenTo36: number[] = [];

for (let i = 1; i <= 18; i++) {
  evenNum.push(i * 2);
}

for (let i = 0; i <= 18; i++) {
  oddNum.push(i * 2 + 1);
}

for (let i = 1; i <= 12; i++) {
  first12.push(i);
}

for (let i = 13; i <= 24; i++) {
  second12.push(i);
}

for (let i = 25; i <= 36; i++) {
  third12.push(i);
}
for (let i = 1; i <= 18; i++) {
  oneTo18.push(i);
}
for (let i = 19; i <= 36; i++) {
  nineteenTo36.push(i);
}

export const firstLine = [
  { number: [0, 3], type: "split" },
  { number: [3], type: "straight" },
  { number: [3, 6], type: "split" },
  { number: [6], type: "straight" },
  { number: [6, 9], type: "split" },
  { number: [9], type: "straight" },
  { number: [9, 12], type: "split" },
  { number: [12], type: "straight" },
  { number: [12, 15], type: "split" },
  { number: [15], type: "straight" },
  { number: [15, 18], type: "split" },
  { number: [18], type: "straight" },
  { number: [18, 21], type: "split" },
  { number: [21], type: "straight" },
  { number: [21, 24], type: "split" },
  { number: [24], type: "straight" },
  { number: [24, 27], type: "split" },
  { number: [27], type: "straight" },
  { number: [27, 30], type: "split" },
  { number: [30], type: "straight" },
  { number: [30, 33], type: "split" },
  { number: [33], type: "straight" },
  { number: [33, 36], type: "split" },
  { number: [36], type: "straight" },
];
export const secondLine = [
  { number: [0, 2, 3], type: "street" },
  { number: [2, 3], type: "split" },
  { number: [2, 3, 5, 6], type: "corner" },
  { number: [5, 6], type: "split" },
  { number: [5, 6, 8, 9], type: "corner" },
  { number: [8, 9], type: "split" },
  { number: [8, 9, 11, 12], type: "corner" },
  { number: [11, 12], type: "split" },
  { number: [11, 12, 14, 15], type: "corner" },
  { number: [14, 15], type: "split" },
  { number: [14, 15, 17, 18], type: "corner" },
  { number: [17, 18], type: "split" },
  { number: [17, 18, 20, 21], type: "corner" },
  { number: [20, 21], type: "split" },
  { number: [20, 21, 23, 24], type: "corner" },
  { number: [23, 24], type: "split" },
  { number: [23, 24, 26, 27], type: "corner" },
  { number: [26, 27], type: "split" },
  { number: [26, 27, 29, 30], type: "corner" },
  { number: [29, 30], type: "split" },
  { number: [29, 30, 32, 33], type: "corner" },
  { number: [32, 33], type: "split" },
  { number: [32, 33, 35, 36], type: "corner" },
  { number: [35, 36], type: "split" },
];
export const thirdLine = [
  { number: [0, 2], type: "split" },
  { number: [2], type: "straight" },
  { number: [2, 5], type: "split" },
  { number: [5], type: "straight" },
  { number: [5, 8], type: "split" },
  { number: [8], type: "straight" },
  { number: [8, 11], type: "split" },
  { number: [11], type: "straight" },
  { number: [11, 14], type: "split" },
  { number: [14], type: "straight" },
  { number: [14, 17], type: "split" },
  { number: [17], type: "straight" },
  { number: [17, 20], type: "split" },
  { number: [20], type: "straight" },
  { number: [20, 23], type: "split" },
  { number: [23], type: "straight" },
  { number: [23, 26], type: "split" },
  { number: [26], type: "straight" },
  { number: [26, 29], type: "split" },
  { number: [29], type: "straight" },
  { number: [29, 32], type: "split" },
  { number: [32], type: "straight" },
  { number: [32, 35], type: "split" },
  { number: [35], type: "straight" },
];
export const forthLine = [
  { number: [0, 1, 2], type: "street" },
  { number: [1, 2], type: "split" },
  { number: [1, 2, 4, 5], type: "corner" },
  { number: [4, 5], type: "split" },
  { number: [4, 5, 7, 8], type: "corner" },
  { number: [7, 8], type: "split" },
  { number: [7, 8, 10, 11], type: "corner" },
  { number: [10, 11], type: "split" },
  { number: [10, 11, 13, 14], type: "corner" },
  { number: [13, 14], type: "split" },
  { number: [13, 14, 16, 17], type: "corner" },
  { number: [16, 17], type: "split" },
  { number: [16, 17, 19, 20], type: "corner" },
  { number: [19, 20], type: "split" },
  { number: [19, 20, 22, 23], type: "corner" },
  { number: [22, 23], type: "split" },
  { number: [22, 23, 25, 26], type: "corner" },
  { number: [25, 26], type: "split" },
  { number: [25, 26, 28, 29], type: "corner" },
  { number: [28, 29], type: "split" },
  { number: [28, 29, 31, 32], type: "corner" },
  { number: [31, 32], type: "split" },
  { number: [31, 32, 34, 35], type: "corner" },
  { number: [34, 35], type: "split" },
];
export const fifthLine = [
  { number: [0, 1], type: "split" },
  { number: [1], type: "straight" },
  { number: [1, 4], type: "split" },
  { number: [4], type: "straight" },
  { number: [4, 7], type: "split" },
  { number: [7], type: "straight" },
  { number: [7, 10], type: "split" },
  { number: [10], type: "straight" },
  { number: [10, 13], type: "split" },
  { number: [13], type: "straight" },
  { number: [13, 16], type: "split" },
  { number: [16], type: "straight" },
  { number: [16, 19], type: "split" },
  { number: [19], type: "straight" },
  { number: [19, 22], type: "split" },
  { number: [22], type: "straight" },
  { number: [22, 25], type: "split" },
  { number: [25], type: "straight" },
  { number: [25, 28], type: "split" },
  { number: [28], type: "straight" },
  { number: [28, 31], type: "split" },
  { number: [31], type: "straight" },
  { number: [31, 34], type: "split" },
  { number: [34], type: "straight" },
];
export const sixthLine = [
  { number: [0, 1, 2, 3], type: "corner" },
  { number: [1, 2, 3], type: "street" },
  { number: [1, 2, 3, 4, 5, 6], type: "line" },
  { number: [4, 5, 6], type: "street" },
  { number: [4, 5, 6, 7, 8, 9], type: "line" },
  { number: [7, 8, 9], type: "street" },
  { number: [7, 8, 9, 10, 11, 12], type: "line" },
  { number: [10, 11, 12], type: "street" },
  { number: [10, 11, 12, 13, 14, 15], type: "line" },
  { number: [13, 14, 15], type: "street" },
  { number: [13, 14, 15, 16, 17, 18], type: "line" },
  { number: [16, 17, 18], type: "street" },
  { number: [16, 17, 18, 19, 20, 21], type: "line" },
  { number: [19, 20, 21], type: "street" },
  { number: [19, 20, 21, 22, 23, 24], type: "line" },
  { number: [22, 23, 24], type: "street" },
  { number: [22, 23, 24, 25, 26, 27], type: "line" },
  { number: [25, 26, 27], type: "street" },
  { number: [25, 26, 27, 28, 29, 30], type: "line" },
  { number: [28, 29, 30], type: "street" },
  { number: [28, 29, 30, 31, 32, 33], type: "line" },
  { number: [31, 32, 33], type: "street" },
  { number: [31, 32, 33, 34, 35, 36], type: "line" },
  { number: [34, 35, 36], type: "street" },
];
