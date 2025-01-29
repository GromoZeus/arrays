// Реализуйте функцию, которая принимает две матрицы и возвращает новую матрицу — результат их произведения.

const multiply = (matrixA, matrixB) => {
  const multiMatrix = [];
  for (let i = 0; i < matrixA.length; i += 1) {
    multiMatrix[i] = [];
    for (let j = 0; j < matrixB[0].length; j += 1) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k += 1) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      multiMatrix[i][j] = sum;
    }
  }
  return multiMatrix;
};

const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 1],
  [0, 1, 0],
];
console.log(multiply(matrixC, matrixD));
