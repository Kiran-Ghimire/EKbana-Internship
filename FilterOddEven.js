const numbers = [1, -2, -34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
let evensArray = [];
let oddsArray = [];

const evenNumbers = function (numbers) {
  if (numbers.some((element) => Math.sign(element) == -1)) {
    console.log("Please enter proper value");
  } else {
    numbers.forEach((number) => {
      if (number % 2 != 1) {
        evensArray.push(number);
      } else {
        oddsArray.push(number);
      }
    });
  }
};
evenNumbers(numbers);
console.log(evensArray);
console.log(oddsArray);
