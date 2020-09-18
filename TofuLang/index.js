const fs = require('fs');
const antlr4 = require('antlr4');
const util = require('util');
const TofuLexer = require('./AntlrFiles/tofuLexer').tofuLexer;
const TofuParser = require('./AntlrFiles/tofuParser').tofuParser;

const TofuVisitor = require('./TofuVisitor').TofuVisitor;
const TofuEvaluator = require('./TofuEvaluator').TofuEvaluator;

let input;
if (process.argv[3]) {
    input = fs.readFileSync(`./SampleCode/${process.argv[2]}.tofu`, 'utf8');
} else {
    input = fs.readFileSync(`./SampleCode/${4}.tofu`, 'utf8');
}

const chars = new antlr4.InputStream(input);
const lexer = new TofuLexer(chars);

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = (new TofuParser(tokens));

const visitor = new TofuVisitor(parser);

const eval = new TofuEvaluator(visitor.ast);