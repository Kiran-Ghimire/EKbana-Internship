const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (number) => {
  // const result = number % 2 === 0 ? "even" : "odd";
  number = parseInt(number);
  // console.log(`The number is ${result}.`);
  // console.log(isNaN(number));
  if (isNaN(number)) {
    console.log("Please enter proper value");
  } else {
    // if (number % 2 === 0) {
    //   console.log("The number is even");
    // } else {
    //   console.log("The number is odd");
    // }
    const result = number % 2 === 0 ? "even" : "odd";
    console.log(`The number is ${result}.`);
  }

  readline.close();
});

// function isOddOrEven(string) {
//   if (typeof string !== "string") {
//     return undefined;
//   }
//   if (string.length % 2 === 0) {
//     return "even";
//   }
//   return "odd";
// }

// //console.log(isOddOrEven("opar"));
// console.log(isOddOrEven("opa"));
