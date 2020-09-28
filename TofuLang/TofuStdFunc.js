const { NumValue, StringValue } = require("./TofuEvaluator");

const stdfunc = {
  input: (input) => {
    const readlineSync = require("readline-sync");

    let userName = readlineSync.question(input);
    return new StringValue(userName);
  },
  toNumber: (input) => {
    return new NumValue(parseFloat(input));
  },
  toString: (input) => {
    return new StringValue(`${input}`);
  },
  random: () => {
    return new NumValue(Math.random());
  }
};

exports.stdfunc = stdfunc;
