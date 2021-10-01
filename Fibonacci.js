const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a positive number: ", (number) => {
  number = parseInt(number);
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  nextTerm = n1 + n2;
  // console.log("FirstNextTerm", nextTerm);
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  readline.close();
});

// function fib(n) {
//   var a = 0,
//     b = 1,
//     c;
//   if (n < 3) {
//     if (n < 0) return fib(-n);
//     if (n === 0) return 0;
//     return 1;
//   }
//   while (--n) (c = a + b), (a = b), (b = c);
//   return c;
// }

// console.log(fib(15));

// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;
// let count= 0;

// console.log('Fibonacci Series:');

// nextTerm = n1 + n2;

// while (count < number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
//     count +=1;
// }
