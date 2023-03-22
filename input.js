const {moves, messages} = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));

  return stdin;
};

const handleUserInput = function(key) {
  console.log("key:", key);
  if (key === '\u0003') process.exit();
  if (moves[key]) connection.write(`Move: ${moves[key]}`);
  if (messages[key]) connection.write(`Say: ${messages[key]}`);
};


module.exports = setupInput;