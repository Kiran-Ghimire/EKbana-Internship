const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a positive number: ", (number) => {
  number = parseInt(number);
  let number1 = 0,
    number2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  nextTerm = number1 + number2;

  for (let i = 1; i <= number; i++) {
    console.log(number1);
    nextTerm = number1 + number2;

    number1 = number2;

    number2 = nextTerm;
  }

  readline.close();
});
