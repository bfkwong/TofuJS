const fs = require("fs");
const antlr4 = require("antlr4");
const TofuLexer = require("./AntlrFiles/tofuLexer").tofuLexer;
const TofuParser = require("./AntlrFiles/tofuParser").tofuParser;

const TofuVisitor = require("./TofuVisitor").TofuVisitor;
const TofuEvaluator = require("./TofuEvaluator").TofuEvaluator;

if (process.argv[2]) {
  const input = fs.readFileSync(process.argv[2], "utf8");
  const chars = new antlr4.InputStream(input);
  const lexer = new TofuLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new TofuParser(tokens);
  const visitor = new TofuVisitor(parser);
  new TofuEvaluator(visitor.ast);
}
