// Реализуйте функцию, которая принимает на вход матрицу и возвращает список элементов матрицы по порядку 
// следования от левого верхнего элемента по часовой стрелке к внутреннему. 
// Движение по матрице напоминает улитку.

const rotateLeft = (array) => {
  if (array.length === 0) return 0;
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

const buildSnailPath = (arr) => {
  const resultArray = [];
  let subArray = arr;

  while (subArray.length > 0) {
    resultArray.push(subArray.shift());
    subArray = rotateLeft(subArray);
  }

  return resultArray.flat();
};

console.log(buildSnailPath([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]));
