// Реализуйте функцию getLongestLength(), принимающую на вход строку и возвращающую длину максимальной последовательности из неповторяющихся символов. Подстрока может состоять из одного символа. Например в строке qweqrty, можно выделить следующие подстроки: qwe, weqrty. Самой длинной будет weqrty.

const getLongestLength = (str) => {
  const strArr = str.split('');
  let maxlengt = 0;
  let subArray = [];
  for (let i = 0; i < strArr.length; i++) {
    if (subArray.indexOf(strArr[i]) >= 0) {
      subArray = subArray.toSpliced(0, subArray.indexOf(strArr[i]) + 1);
    }
    subArray.push(strArr[i]);
    maxlengt = Math.max(maxlengt, subArray.length);
  }

  return maxlengt;
};

console.log(getLongestLength(''));