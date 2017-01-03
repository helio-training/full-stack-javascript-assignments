export const Matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

export const matrixTraversal = () => Matrix.forEach(row => row.forEach(col => console.log(col)));


export const Jagged = [
  [1, 2],
  [3, 5, 6, 7, 8],
  [9]
];


export const jaggedTraversal = () => Matrix.forEach(row => row.forEach(col => console.log(col)));
