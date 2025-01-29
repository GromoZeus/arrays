// Реализуйте функцию, которая считает вес Хэмминга.

const hammingWeight = (number) => {
  const binaryStr = number.toString(2);
  let result = 0;
  for (let i = 0; i < binaryStr.length; i += 1) {
    result += binaryStr[i] === '1' ? 1 : 0;
  }
  return result;
};

export default hammingWeight;

console.log(hammingWeight(101));
