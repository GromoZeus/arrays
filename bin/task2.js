// Реализуйте функцию, которая возвращает длину последнего слова переданной на вход строки. 
// Словом считается любая последовательность, не содержащая пробелов.

const getLastWordLength = (str) => {
  const strNoSpace = ` ${str.trim()}`;
  let count = 0;
  while (strNoSpace[strNoSpace.length - 1 - count] !== ' ') {
    count += strNoSpace[strNoSpace.length - 1 - count] !== ' ' ? 1 : 0;
  }
  return count;
};

console.log(getLastWordLength(''));
