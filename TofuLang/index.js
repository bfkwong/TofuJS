const fs = require("fs");
const readline = require("readline");
const antlr4 = require("antlr4");
const TofuLexer = require("./AntlrFiles/tofuLexer").tofuLexer;
const TofuParser = require("./AntlrFiles/tofuParser").tofuParser;
const TofuVisitor = require("./TofuVisitor").TofuVisitor;
const TofuEvaluator = require("./TofuEvaluator").TofuEvaluator;

function scripter(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new TofuLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new TofuParser(tokens);
  const visitor = new TofuVisitor(parser);
  new TofuEvaluator(visitor.ast);
}

if (process.argv[2]) {
  const input = fs.readFileSync(`./SampleCode/code/${process.argv[2]}`, "utf8");
  scripter(input);
} else {
  const input = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.prompt();
  rl.on("line", function (cmd) {
    input.push(cmd);
  });
  rl.on("close", function (cmd) {
    const code = input.join("\n");
    scripter(code);
    process.exit(0);
  });
}
