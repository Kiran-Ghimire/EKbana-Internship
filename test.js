const firstArray = [1, 2, 3, 4, 5];

const product = (array) => {
  const array1 = array.reduce((acc, curr) => {
    return acc * curr;
  }, 1);

  const finalArray = firstArray.map((element) => {
    return array1 / element;
  });

  //   console.log(finalArray);

  return finalArray;
};

console.log(product(firstArray));
