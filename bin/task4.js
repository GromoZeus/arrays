// Реализуйте функцию, которая сравнивает переданные версии version1 и version2. Если version1 > version2, то функция должна вернуть 1, если version1 < version2, то - -1, если же version1 === version2, то - 0.

const compareVersion = (versa, versb) => {
  const stra = versa.split('.');
  const strb = versb.split('.');
  for (let i = 0; i <= 1; i += 1) {
    if (Number(stra[i]) > Number(strb[i])) {
      return 1;
    } else {
      if (Number(stra[i]) < Number(strb[i])) {
        return -1;
      }
    }
  }
  return 0;
};

console.log(compareVersion('0.2', '0.12'));
