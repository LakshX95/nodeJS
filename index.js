// const greetings = "Good Morning!";
// console.log("Hello, ", greetings);

// function printMassege() {
//   console.log("Have a nice day!  ");
// }

// printMassege();

const mathOperation = require("./mathOperation");

const { add, subtract, name } = mathOperation;
console.log(mathOperation.add(20, 30), name);
