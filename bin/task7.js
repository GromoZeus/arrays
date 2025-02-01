// Реализуйте функции rotateLeft() и rotateRight(), которые поворачивают матрицу влево (против часовой стрелки) 
// и соответственно вправо (по часовой стрелке).
// Матрица реализована на массивах.
// Функции должны возвращать новую матрицу не изменяя исходную.


const rotateLeft = (array) => {
  const newArray = [];
  for (let i = array[0].length - 1; i >= 0; i -= 1) {
    const rowsArray = [];
    for (let j = 0; j < array.length; j += 1) {
      rowsArray.push(array[j][i]);
    }
    newArray.push(rowsArray);
  }
  return newArray;
};

const rotateRight = (array) => {
    const newArray = [];
    for (let i = 0; i < array[0].length; i += 1) {
      const rowsArray = [];
      for (let j = array.length - 1; j >= 0; j -= 1) {
        rowsArray.push(array[j][i]);
      }
      newArray.push(rowsArray);
    }
    return newArray;
  };

console.log(
  rotateLeft([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
  ]),
);

console.log(
    rotateRight([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 0, 1, 2],
    ]),
  );
