const IP = 'localhost';
const PORT = 50541;
const moves = {
  w: "up",
  a: "left",
  s: "down",
  d: "right",
};
const messages = {
  p: "Great! Keep going!",
  n: "Aww.. Do better..",
};

module.exports = {
  IP,
  PORT,
  messages,
  moves,
};