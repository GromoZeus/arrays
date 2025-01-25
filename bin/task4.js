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
