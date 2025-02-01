// Реализуйте функцию, которая принимает на вход массив и число, которое задает размер чанка (куска). 
// Функция должна вернуть массив, состоящий из чанков указанной размерности.

const chunkArray = (array, size) => {
    const result = [];
    while (array.length > 0) {
      result.push(array.splice(0, size));
    }
    return result;
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7];
  const chunked = chunkArray(array, 3);
  console.log(chunked); // [[1, 2, 3], [4, 5, 6], [7]]