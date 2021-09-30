const numbers = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
let evensArray = [];
let oddsArray = [];

const evenNumbers = function (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 1) {
      evensArray.push(numbers[i]);
    } else {
      oddsArray.push(numbers[i]);
    }
  }
};
evenNumbers(numbers);
console.log(evensArray);
console.log(oddsArray);
