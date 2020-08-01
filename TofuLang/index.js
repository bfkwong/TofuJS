const antlr4 = require('antlr4');
const TofuLexer = require('./AntlrFiles/tofuLexer').tofuLexer;
const TofuParser = require('./AntlrFiles/tofuParser').tofuParser;

const TofuVisitor = require('./TofuVisitor').TofuVisitor;

const input = "3;";

const chars = new antlr4.InputStream(input);
const lexer = new TofuLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = (new TofuParser(tokens));

const visitor = new TofuVisitor(parser);
console.log(visitor.ast.stmts);

const