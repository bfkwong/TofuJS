const fs = require("fs");
const readline = require("readline");

function scripter(input) {
  const antlr4 = require("antlr4");
  const TofuLexer = require("./AntlrFiles/tofuLexer").tofuLexer;
  const TofuParser = require("./AntlrFiles/tofuParser").tofuParser;
  const TofuVisitor = require("./TofuVisitor").TofuVisitor;
  const TofuEvaluator = require("./TofuEvaluator").TofuEvaluator;

  const chars = new antlr4.InputStream(input);
  const lexer = new TofuLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new TofuParser(tokens);
  const visitor = new TofuVisitor(parser);
  new TofuEvaluator(visitor.ast);
}

if (process.argv[2]) {
  let path = process.argv[2].split("/");
  let input;

  if (path.length > 1) {
    let directory = path.slice(0, -1).join("/");
    let file = path[path.length - 1];

    process.chdir(directory);
    input = fs.readFileSync(file, "utf8");
  } else {
    input = fs.readFileSync(process.argv[2], "utf8");
  }
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
