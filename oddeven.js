const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a  number: ", (number) => {
  const result = number % 2 == 0 ? "even" : "odd";
  console.log(`The number is ${result}.`);

  readline.close();
});
