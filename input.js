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

  const positive = function(key) {
    if (key === "p") {
      conn.write("Say: Great! Keep going!");
    }
  };

  const negative = function(key) {
    if (key === "n") {
      conn.write("Say: Aww.. Do better..");
    }
  };


  stdin.on("data", handleUserInput);
  stdin.on("data", up);
  stdin.on("data", down);
  stdin.on("data", left);
  stdin.on("data", right);
  stdin.on("data", negative);
  stdin.on("data", positive);

  return stdin;
};

module.exports = setupInput;