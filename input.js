// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  };

  const up = function(key) {
    if (key === "w") {
      conn.write("Move: up");
    }
  };

  const left = function(key) {
    if (key === "a") {
      conn.write("Move: left");
    }
  };

  const down = function(key) {
    if (key === "s") {
      conn.write("Move: down");
    }
  };

  const right = function(key) {
    if (key === "d") {
      conn.write("Move: right");
    }
  };

  stdin.on("data", handleUserInput);
  stdin.on("data", up);
  stdin.on("data", down);
  stdin.on("data", left);
  stdin.on("data", right);

  return stdin;
};

module.exports = setupInput;