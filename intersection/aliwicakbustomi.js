const array1 = [1, 2, 3, 5];
const array2 = [1, 2, 4, 7];
const combinedArray = array1.concat(array2);
const sortedArray = combinedArray.sort((a, b) => a - b);
console.log(sortedArray);
