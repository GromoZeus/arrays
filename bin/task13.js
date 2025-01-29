// Напишите функцию generate, которая возвращает указанную строку треугольника паскаля в виде массива.

const generate = (count) => {
  const rowTriangle = [1];
  let item = 1;

  for (let i = 1; i <= count; i++) {
    item = (item * (count + 1 - i)) / i;
    rowTriangle.push(item);
  }

  return rowTriangle;
};

console.log(generate(10));
