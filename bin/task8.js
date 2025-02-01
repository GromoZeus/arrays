// В данном упражнении необходимо реализовать стековую машину, то есть алгоритм, проводящий 
// вычисления по обратной польской записи. Реализуйте функцию, которая принимает массив, 
// каждый элемент которого содержит число или знак операции (+, -, *, /). 
// Функция должна вернуть результат вычисления по обратной польской записи. 
// Если в какой-то момент происходит деление на ноль, функция должна вернуть значение null.

const calcInPolishNotation = (array) => {
  const stackArray = [];
  for (const element of array) {
    if (typeof element === 'number') {
      stackArray.push(element);
    } else {
      const elementArray1 = stackArray.pop();
      const elementArray2 = stackArray.pop();
      switch (element) {
        case '+':
          stackArray.push(elementArray2 + elementArray1);
          break;
        case '-':
          stackArray.push(elementArray2 - elementArray1);
          break;
        case '*':
          stackArray.push(elementArray2 * elementArray1);
          break;
        case '/':
          elementArray1 !== 0
            ? stackArray.push(elementArray2 / elementArray1)
            : stackArray.push(null);
          break;
      }
      if (stackArray.at(-1) === null) return null;
    }
  }
  return stackArray.pop();
};

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 0, '/']));
