// Реализуйте функцию, которая принимает двумерный массив (матрицу) и возвращает новый массив, основанный на переданном и измененный таким образом, что правая половина матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.

const getMirrorMatrix = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const newArray1 = [];
    const newArray2 = [];
    for (let j = 0; j < array[i].length / 2; j += 1) {
      newArray1.push(array[i][j]);
      newArray2.push(array[i][array[i].length / 2 - 1 - j]);
    }
    newArray1.push(...newArray2);
    newArray.push(newArray1);
  }
  return newArray;
};

console.log(
  getMirrorMatrix([
    [11, 12, 13, 14],
    [21, 22, 23, 24],
    [31, 32, 33, 34],
    [41, 42, 43, 44],
  ]),
);
