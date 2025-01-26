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
