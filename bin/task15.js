// Реализуйте функцию calcShipsCount(), которая принимает на вход поле боя в виде
// квадратного двумерного массива из нулей и единиц. Ноль — пустая ячейка,
// единица — часть корабля. Функция должна вернуть количество кораблей на поле боя.
// Так как корабли не должны соприкасаться друг с другом, реализуйте функцию
// isValidField(), которая проверяет расстановку кораблей на корректность.

const isValidField = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        if (
          arr[i - 1][j - 1] === 1 ||
          arr[i - 1][j + 1] === 1 ||
          arr[i + 1][j - 1] === 1 ||
          arr[i + 1][j + 1] === 1
        ) {
          return false;
        }
      }
    }
  }

  return true;
};

const calcShipsCount = (arr) => {
  const newArray =
    arr.length > 0 ? [...arr, new Array(arr[0].length).fill(0)] : [];
  let countShip = 0;
  let rightScan = 1;
  let downScan = 1;

  if (isValidField(arr) === false) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (newArray[i][j] === 1) {
        countShip += 1;
        do {
          if (newArray[i][j + rightScan] === 1) {
            newArray[i][j + rightScan] = 0;
            rightScan++;
          } else if (newArray[i + downScan][j] === 1) {
            newArray[i + downScan][j] = 0;
            downScan++;
          } else {
            rightScan = 1;
            downScan = 1;
          }
        } while (rightScan !== 1 || downScan !== 1);
      }
    }
  }

  return countShip;
};

console.log(
  calcShipsCount([
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 0],
  ]),
);
