const connect = require("./client")
// const setupInput = require("./input")

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", (key) => {
  //   handleUserInput(key);
  // });

  //handleUserInput);
  return stdin;
};

// setInterval(function() {
//   setTimeout(function() {
//     connection.write('Move: up');
//   }, 2000);
// }, 2000);

setTimeout(function() {
  setInterval(function() {
    connection.write('Move: up');
  }, 2000);
}, 2000);

// const handleUserInput = function (key) {
//   if (key === '\u0003') {
//     process.exit();
//   }

//   if (key === 'w') {
//     connection.write('Move: up');
//   }

//   if (key === "a") {
//     connection.write("Move: left");
//   }

//   if (key === "s") {
//     connection.write("Move: down");
//   }

//   if (key === "d") {
//     connection.write("Move: right");
//   }

//   if (key === 'r') {
//     connection.write('Say: Lets Go!')
//   }
// }

//setupInput();

module.exports = setupInput; 
console.log("Connecting ...");
connection = connect();
setupInput(connection);