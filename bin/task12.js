// Реализуйте функцию, которая принимает на вход массив интервалов и возвращает сумму всех длин интервалов. В данной задаче используются только интервалы целых чисел от -100 до 100 , которые представлены в виде массива. Первое значение интервала всегда будет меньше, чем второе значение. Например, длина интервала [-100, 0] равна 100, а длина интервала [5, 5] равна 0. Пересекающиеся интервалы должны учитываться только один раз.

const sumIntervals = (arr) => {
    const sortArray = arr.sort((a, b) => a[0] - b[0]);
    let result = 0;
    let [start, end] = sortArray[0];
    for (let i = 1; i < sortArray.length; i++) {
        if (end > sortArray[i][0]) {
            end = end > sortArray[i][1] ? end : sortArray[i][1];
        } else {
            result += Math.abs(start - end);
            [start, end] = sortArray[i];
        }
    }
    result += Math.abs(start - end);

    return result;
};

console.log(sumIntervals([
    [7, 10],
    [-1, 4],
    [2, 5],
    [9, 12]
  ]));