const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log it
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NHL");
    // conn.write("Move: up");
  });
  // Move Commands
  // conn.on("connect", () => {
  //   setTimeout(function() {
  //     conn.write('Move: up');
  //   }, 500);
  // });

  return conn;
};

module.exports = connect;