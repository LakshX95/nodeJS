// // // const greetings = "Good Morning!";
// // // console.log("Hello, ", greetings);

// // // function printMassege() {
// // //   console.log("Have a nice day!  ");
// // // }

// // // printMassege();

// // // const { add, subtract, name } = require("./mathOperation");
// // // console.log(add(20, 30), name);

// // const { currentDate, currentYear } = require("./logger");
// // console.log(currentDate(), currentYear());

// const os = require("os");
// if (os.platform() === "win32") {
//   console.log("Hello, windows user!");
// } else if (os.platform === "darwin") {
//   console.log("Hello, apple user!");
// } else {
//   console.log("Hello, user!");
// }
// console.log(os.totalmem());
// console.log(os.freemem());
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello World!");
  } else if (request.url === "/about") {
    response.write("This is about route");
  } else if (request.url === "/contact") {
    response.write("This is contact route");
  } else {
    response.write("no route found!");
  }
  response.end();
});
server.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
