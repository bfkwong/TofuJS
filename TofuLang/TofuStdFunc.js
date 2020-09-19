const stdfunc = {
  input: (input) => {
    const readlineSync = require("readline-sync");

    let userName = readlineSync.question(input);
    return userName;
  },
  toNumber: (input) => {
    return parseFloat(input);
  },
  toString: (input) => {
    return `${input}`;
  }
};

exports.stdfunc = stdfunc;
