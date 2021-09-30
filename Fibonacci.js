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

  while (nextTerm <= number) {
    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  readline.close();
});
