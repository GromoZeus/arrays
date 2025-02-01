// Реализуйте функцию, которая находит в массиве непрерывные возрастающие на единицу 
// последовательности чисел и возвращает массив с их перечислением.

const summaryRanges = (arr) => {
  if (arr.length === 0) return [];
  const result = [];
  let start = arr[0];
  let end = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      end = arr[i];
    } else {
      if (start !== end) {
        result.push(`${start}->${end}`);
      }
      start = arr[i];
      end = arr[i];
    }
  }
  if (start !== end) {
    result.push(`${start}->${end}`);
  }
  return result;
};

console.log(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14]));
