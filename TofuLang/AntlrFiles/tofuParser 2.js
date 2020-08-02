// Generated from tofu.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var tofuListener = require('./tofuListener').tofuListener;
var tofuVisitor = require('./tofuVisitor').tofuVisitor;

var grammarFileName = "tofu.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+\u00e4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u00024\n\u0002",
    "\f\u0002\u000e\u00027\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003?\n\u0003\f\u0003\u000e",
    "\u0003B\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005O\n\u0005\f\u0005\u000e\u0005R\u000b\u0005\u0005",
    "\u0005T\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006^\n\u0006\u0003",
    "\u0007\u0003\u0007\u0005\u0007b\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0007\ti\n\t\f\t\u000e\tl\u000b\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n{\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0080\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u0090\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u0095\n",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u009a\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u009f\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00a4\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00a9\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00ae\n\u0013\u0003\u0014\u0005\u0014",
    "\u00b1\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0007",
    "\u0015\u00b7\n\u0015\f\u0015\u000e\u0015\u00ba\u000b\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u00bf\n\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00c5\n\u0017\f\u0017\u000e",
    "\u0017\u00c8\u000b\u0017\u0005\u0017\u00ca\n\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00df\n\u0018\u0003\u0018\u0005\u0018\u00e2\n\u0018\u0003\u0018",
    "\u0002\u0002\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.\u0002\u0007\u0003\u0002\u0016\u0017",
    "\u0003\u0002\u0018\u001b\u0003\u0002\u001c\u001d\u0003\u0002\u001e\u001f",
    "\u0004\u0002\u001d\u001d  \u0002\u00f1\u00025\u0003\u0002\u0002\u0002",
    "\u00048\u0003\u0002\u0002\u0002\u0006E\u0003\u0002\u0002\u0002\bJ\u0003",
    "\u0002\u0002\u0002\n]\u0003\u0002\u0002\u0002\f_\u0003\u0002\u0002\u0002",
    "\u000ec\u0003\u0002\u0002\u0002\u0010f\u0003\u0002\u0002\u0002\u0012",
    "o\u0003\u0002\u0002\u0002\u0014|\u0003\u0002\u0002\u0002\u0016\u0084",
    "\u0003\u0002\u0002\u0002\u0018\u008c\u0003\u0002\u0002\u0002\u001a\u0091",
    "\u0003\u0002\u0002\u0002\u001c\u0096\u0003\u0002\u0002\u0002\u001e\u009b",
    "\u0003\u0002\u0002\u0002 \u00a0\u0003\u0002\u0002\u0002\"\u00a5\u0003",
    "\u0002\u0002\u0002$\u00aa\u0003\u0002\u0002\u0002&\u00b0\u0003\u0002",
    "\u0002\u0002(\u00b4\u0003\u0002\u0002\u0002*\u00be\u0003\u0002\u0002",
    "\u0002,\u00c0\u0003\u0002\u0002\u0002.\u00e1\u0003\u0002\u0002\u0002",
    "04\u0005\u0006\u0004\u000214\u0005\u0004\u0003\u000224\u0005\n\u0006",
    "\u000230\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000232\u0003\u0002",
    "\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u00026\u0003\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u000289\u0007\u0003\u0002\u00029:\u0007\u0004\u0002\u0002:;\u0007(",
    "\u0002\u0002;@\u0007\u0005\u0002\u0002<?\u0005\u0006\u0004\u0002=?\u0005",
    "\n\u0006\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?",
    "B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0007\u0006",
    "\u0002\u0002D\u0005\u0003\u0002\u0002\u0002EF\u0007(\u0002\u0002FG\u0005",
    "\b\u0005\u0002GH\u0007\u0007\u0002\u0002HI\u0005\n\u0006\u0002I\u0007",
    "\u0003\u0002\u0002\u0002JS\u0007\b\u0002\u0002KP\u0007(\u0002\u0002",
    "LM\u0007\t\u0002\u0002MO\u0007(\u0002\u0002NL\u0003\u0002\u0002\u0002",
    "OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002",
    "\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002SK\u0003\u0002",
    "\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UV\u0007",
    "\n\u0002\u0002V\t\u0003\u0002\u0002\u0002W^\u0005\u0016\f\u0002X^\u0005",
    "\u0010\t\u0002Y^\u0005\u000e\b\u0002Z^\u0005\u0012\n\u0002[^\u0005\u0014",
    "\u000b\u0002\\^\u0005\f\u0007\u0002]W\u0003\u0002\u0002\u0002]X\u0003",
    "\u0002\u0002\u0002]Y\u0003\u0002\u0002\u0002]Z\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]\\\u0003\u0002\u0002\u0002^\u000b\u0003\u0002",
    "\u0002\u0002_a\u0007\u000b\u0002\u0002`b\u0005\u0018\r\u0002a`\u0003",
    "\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b\r\u0003\u0002\u0002\u0002",
    "cd\u0005\u0018\r\u0002de\u0007\f\u0002\u0002e\u000f\u0003\u0002\u0002",
    "\u0002fj\u0007\u0005\u0002\u0002gi\u0005\n\u0006\u0002hg\u0003\u0002",
    "\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002km\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002",
    "mn\u0007\u0006\u0002\u0002n\u0011\u0003\u0002\u0002\u0002op\u0007\r",
    "\u0002\u0002pq\u0007\b\u0002\u0002qr\u0005\u0018\r\u0002rs\u0007\n\u0002",
    "\u0002st\u0007\u000e\u0002\u0002tu\u0007\u000f\u0002\u0002uv\u0007\u0010",
    "\u0002\u0002vz\u0005\u0010\t\u0002wx\u0007\u0011\u0002\u0002xy\u0007",
    "\u0012\u0002\u0002y{\u0005\u0010\t\u0002zw\u0003\u0002\u0002\u0002z",
    "{\u0003\u0002\u0002\u0002{\u0013\u0003\u0002\u0002\u0002|}\u0007\u0013",
    "\u0002\u0002}\u007f\u0007\b\u0002\u0002~\u0080\u0005\u0018\r\u0002\u007f",
    "~\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080",
    "\u0081\u0003\u0002\u0002\u0002\u0081\u0082\u0007\n\u0002\u0002\u0082",
    "\u0083\u0007\f\u0002\u0002\u0083\u0015\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0007\u0014\u0002\u0002\u0085\u0086\u0007\b\u0002\u0002\u0086",
    "\u0087\u0005\u0018\r\u0002\u0087\u0088\u0007\n\u0002\u0002\u0088\u0089",
    "\u0007\u000e\u0002\u0002\u0089\u008a\u0007\u000f\u0002\u0002\u008a\u008b",
    "\u0005\u0010\t\u0002\u008b\u0017\u0003\u0002\u0002\u0002\u008c\u008f",
    "\u0005\u001a\u000e\u0002\u008d\u008e\u0007\u0007\u0002\u0002\u008e\u0090",
    "\u0005\u0018\r\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0003\u0002\u0002\u0002\u0090\u0019\u0003\u0002\u0002\u0002\u0091\u0094",
    "\u0005\u001c\u000f\u0002\u0092\u0093\u0007\u0011\u0002\u0002\u0093\u0095",
    "\u0005\u001c\u000f\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095",
    "\u0003\u0002\u0002\u0002\u0095\u001b\u0003\u0002\u0002\u0002\u0096\u0099",
    "\u0005\u001e\u0010\u0002\u0097\u0098\u0007\u0015\u0002\u0002\u0098\u009a",
    "\u0005\u001e\u0010\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0003\u0002\u0002\u0002\u009a\u001d\u0003\u0002\u0002\u0002\u009b\u009e",
    "\u0005 \u0011\u0002\u009c\u009d\t\u0002\u0002\u0002\u009d\u009f\u0005",
    " \u0011\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003",
    "\u0002\u0002\u0002\u009f\u001f\u0003\u0002\u0002\u0002\u00a0\u00a3\u0005",
    "\"\u0012\u0002\u00a1\u00a2\t\u0003\u0002\u0002\u00a2\u00a4\u0005\"\u0012",
    "\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4!\u0003\u0002\u0002\u0002\u00a5\u00a8\u0005$\u0013\u0002",
    "\u00a6\u00a7\t\u0004\u0002\u0002\u00a7\u00a9\u0005$\u0013\u0002\u00a8",
    "\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
    "#\u0003\u0002\u0002\u0002\u00aa\u00ad\u0005&\u0014\u0002\u00ab\u00ac",
    "\t\u0005\u0002\u0002\u00ac\u00ae\u0005&\u0014\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae%\u0003",
    "\u0002\u0002\u0002\u00af\u00b1\t\u0006\u0002\u0002\u00b0\u00af\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u0005(\u0015\u0002\u00b3\'\u0003\u0002",
    "\u0002\u0002\u00b4\u00b8\u0005.\u0018\u0002\u00b5\u00b7\u0005*\u0016",
    "\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b9)\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\u0007!\u0002\u0002\u00bc\u00bf\u0007(\u0002\u0002",
    "\u00bd\u00bf\u0005,\u0017\u0002\u00be\u00bb\u0003\u0002\u0002\u0002",
    "\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf+\u0003\u0002\u0002\u0002",
    "\u00c0\u00c9\u0007\b\u0002\u0002\u00c1\u00c6\u0005\u0018\r\u0002\u00c2",
    "\u00c3\u0007\t\u0002\u0002\u00c3\u00c5\u0005\u0018\r\u0002\u00c4\u00c2",
    "\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00ca",
    "\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c1",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\n\u0002\u0002\u00cc-\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0007\b\u0002\u0002\u00ce\u00cf\u0005",
    "\u0018\r\u0002\u00cf\u00d0\u0007\n\u0002\u0002\u00d0\u00e2\u0003\u0002",
    "\u0002\u0002\u00d1\u00e2\u0007)\u0002\u0002\u00d2\u00e2\u0007\u000f",
    "\u0002\u0002\u00d3\u00e2\u0007\"\u0002\u0002\u00d4\u00e2\u0007\'\u0002",
    "\u0002\u00d5\u00e2\u0007#\u0002\u0002\u00d6\u00e2\u0007(\u0002\u0002",
    "\u00d7\u00d8\u0007$\u0002\u0002\u00d8\u00e2\u0007(\u0002\u0002\u00d9",
    "\u00de\u0007%\u0002\u0002\u00da\u00db\u0005\u0018\r\u0002\u00db\u00dc",
    "\u0007\t\u0002\u0002\u00dc\u00dd\u0005\u0018\r\u0002\u00dd\u00df\u0003",
    "\u0002\u0002\u0002\u00de\u00da\u0003\u0002\u0002\u0002\u00de\u00df\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e2\u0007",
    "&\u0002\u0002\u00e1\u00cd\u0003\u0002\u0002\u0002\u00e1\u00d1\u0003",
    "\u0002\u0002\u0002\u00e1\u00d2\u0003\u0002\u0002\u0002\u00e1\u00d3\u0003",
    "\u0002\u0002\u0002\u00e1\u00d4\u0003\u0002\u0002\u0002\u00e1\u00d5\u0003",
    "\u0002\u0002\u0002\u00e1\u00d6\u0003\u0002\u0002\u0002\u00e1\u00d7\u0003",
    "\u0002\u0002\u0002\u00e1\u00d9\u0003\u0002\u0002\u0002\u00e2/\u0003",
    "\u0002\u0002\u0002\u001b35>@PS]ajz\u007f\u008f\u0094\u0099\u009e\u00a3",
    "\u00a8\u00ad\u00b0\u00b8\u00be\u00c6\u00c9\u00de\u00e1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'blueprint'", "'for'", "'{'", "'}'", "'='", 
                     "'('", "','", "')'", "'return'", "';'", "'if'", "'is'", 
                     "'true'", "'then'", "'or'", "'else'", "'print'", "'while'", 
                     "'and'", "'=='", "'!='", "'>'", "'>='", "'<'", "'<='", 
                     "'+'", "'-'", "'*'", "'/'", "'!'", "'.'", "'false'", 
                     "'undefined'", "'make'", "'['", "']'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "STRING", "IDENTIFIER", "NUMBER", "Whitespace", 
                      "Newline" ];

var ruleNames =  [ "program", "classDecls", "funDecl", "parameter", "stmt", 
                   "retStmt", "expStmt", "blockStmt", "ifStmt", "printStmt", 
                   "iterationStmt", "expression", "logORExpression", "logANDExpression", 
                   "eqExpression", "relExpression", "addExpression", "multExpression", 
                   "unaryExpression", "callMemExpression", "callMemHelperExpression", 
                   "arguments", "primaryExpression" ];

function tofuParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

tofuParser.prototype = Object.create(antlr4.Parser.prototype);
tofuParser.prototype.constructor = tofuParser;

Object.defineProperty(tofuParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

tofuParser.EOF = antlr4.Token.EOF;
tofuParser.T__0 = 1;
tofuParser.T__1 = 2;
tofuParser.T__2 = 3;
tofuParser.T__3 = 4;
tofuParser.T__4 = 5;
tofuParser.T__5 = 6;
tofuParser.T__6 = 7;
tofuParser.T__7 = 8;
tofuParser.T__8 = 9;
tofuParser.T__9 = 10;
tofuParser.T__10 = 11;
tofuParser.T__11 = 12;
tofuParser.T__12 = 13;
tofuParser.T__13 = 14;
tofuParser.T__14 = 15;
tofuParser.T__15 = 16;
tofuParser.T__16 = 17;
tofuParser.T__17 = 18;
tofuParser.T__18 = 19;
tofuParser.T__19 = 20;
tofuParser.T__20 = 21;
tofuParser.T__21 = 22;
tofuParser.T__22 = 23;
tofuParser.T__23 = 24;
tofuParser.T__24 = 25;
tofuParser.T__25 = 26;
tofuParser.T__26 = 27;
tofuParser.T__27 = 28;
tofuParser.T__28 = 29;
tofuParser.T__29 = 30;
tofuParser.T__30 = 31;
tofuParser.T__31 = 32;
tofuParser.T__32 = 33;
tofuParser.T__33 = 34;
tofuParser.T__34 = 35;
tofuParser.T__35 = 36;
tofuParser.STRING = 37;
tofuParser.IDENTIFIER = 38;
tofuParser.NUMBER = 39;
tofuParser.Whitespace = 40;
tofuParser.Newline = 41;

tofuParser.RULE_program = 0;
tofuParser.RULE_classDecls = 1;
tofuParser.RULE_funDecl = 2;
tofuParser.RULE_parameter = 3;
tofuParser.RULE_stmt = 4;
tofuParser.RULE_retStmt = 5;
tofuParser.RULE_expStmt = 6;
tofuParser.RULE_blockStmt = 7;
tofuParser.RULE_ifStmt = 8;
tofuParser.RULE_printStmt = 9;
tofuParser.RULE_iterationStmt = 10;
tofuParser.RULE_expression = 11;
tofuParser.RULE_logORExpression = 12;
tofuParser.RULE_logANDExpression = 13;
tofuParser.RULE_eqExpression = 14;
tofuParser.RULE_relExpression = 15;
tofuParser.RULE_addExpression = 16;
tofuParser.RULE_multExpression = 17;
tofuParser.RULE_unaryExpression = 18;
tofuParser.RULE_callMemExpression = 19;
tofuParser.RULE_callMemHelperExpression = 20;
tofuParser.RULE_arguments = 21;
tofuParser.RULE_primaryExpression = 22;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.funDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunDeclContext);
    } else {
        return this.getTypedRuleContext(FunDeclContext,i);
    }
};

ProgramContext.prototype.classDecls = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDeclsContext);
    } else {
        return this.getTypedRuleContext(ClassDeclsContext,i);
    }
};

ProgramContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.ProgramContext = ProgramContext;

tofuParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, tofuParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__0) | (1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__8) | (1 << tofuParser.T__10) | (1 << tofuParser.T__12) | (1 << tofuParser.T__16) | (1 << tofuParser.T__17) | (1 << tofuParser.T__26) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__32 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 49;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 46;
                this.funDecl();
                break;

            case 2:
                this.state = 47;
                this.classDecls();
                break;

            case 3:
                this.state = 48;
                this.stmt();
                break;

            }
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassDeclsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_classDecls;
    return this;
}

ClassDeclsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclsContext.prototype.constructor = ClassDeclsContext;


 
ClassDeclsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClassContext(parser, ctx) {
	ClassDeclsContext.call(this, parser);
    ClassDeclsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClassContext.prototype = Object.create(ClassDeclsContext.prototype);
ClassContext.prototype.constructor = ClassContext;

tofuParser.ClassContext = ClassContext;

ClassContext.prototype.IDENTIFIER = function() {
    return this.getToken(tofuParser.IDENTIFIER, 0);
};

ClassContext.prototype.funDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunDeclContext);
    } else {
        return this.getTypedRuleContext(FunDeclContext,i);
    }
};

ClassContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};
ClassContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterClass(this);
	}
};

ClassContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitClass(this);
	}
};

ClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};



tofuParser.ClassDeclsContext = ClassDeclsContext;

tofuParser.prototype.classDecls = function() {

    var localctx = new ClassDeclsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, tofuParser.RULE_classDecls);
    var _la = 0; // Token type
    try {
        localctx = new ClassContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(tofuParser.T__0);
        this.state = 55;
        this.match(tofuParser.T__1);
        this.state = 56;
        this.match(tofuParser.IDENTIFIER);
        this.state = 57;
        this.match(tofuParser.T__2);
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__8) | (1 << tofuParser.T__10) | (1 << tofuParser.T__12) | (1 << tofuParser.T__16) | (1 << tofuParser.T__17) | (1 << tofuParser.T__26) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__32 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 60;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 58;
                this.funDecl();
                break;

            case 2:
                this.state = 59;
                this.stmt();
                break;

            }
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 65;
        this.match(tofuParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_funDecl;
    return this;
}

FunDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunDeclContext.prototype.constructor = FunDeclContext;

FunDeclContext.prototype.IDENTIFIER = function() {
    return this.getToken(tofuParser.IDENTIFIER, 0);
};

FunDeclContext.prototype.parameter = function() {
    return this.getTypedRuleContext(ParameterContext,0);
};

FunDeclContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

FunDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterFunDecl(this);
	}
};

FunDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitFunDecl(this);
	}
};

FunDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitFunDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.FunDeclContext = FunDeclContext;

tofuParser.prototype.funDecl = function() {

    var localctx = new FunDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, tofuParser.RULE_funDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(tofuParser.IDENTIFIER);
        this.state = 68;
        this.parameter();
        this.state = 69;
        this.match(tofuParser.T__4);
        this.state = 70;
        this.stmt();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(tofuParser.IDENTIFIER);
    } else {
        return this.getToken(tofuParser.IDENTIFIER, i);
    }
};


ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitParameter(this);
	}
};

ParameterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.ParameterContext = ParameterContext;

tofuParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, tofuParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.match(tofuParser.T__5);
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.IDENTIFIER) {
            this.state = 73;
            this.match(tofuParser.IDENTIFIER);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__6) {
                this.state = 74;
                this.match(tofuParser.T__6);
                this.state = 75;
                this.match(tofuParser.IDENTIFIER);
                this.state = 80;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 83;
        this.match(tofuParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.iterationStmt = function() {
    return this.getTypedRuleContext(IterationStmtContext,0);
};

StmtContext.prototype.blockStmt = function() {
    return this.getTypedRuleContext(BlockStmtContext,0);
};

StmtContext.prototype.expStmt = function() {
    return this.getTypedRuleContext(ExpStmtContext,0);
};

StmtContext.prototype.ifStmt = function() {
    return this.getTypedRuleContext(IfStmtContext,0);
};

StmtContext.prototype.printStmt = function() {
    return this.getTypedRuleContext(PrintStmtContext,0);
};

StmtContext.prototype.retStmt = function() {
    return this.getTypedRuleContext(RetStmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.StmtContext = StmtContext;

tofuParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, tofuParser.RULE_stmt);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__17:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.iterationStmt();
            break;
        case tofuParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.blockStmt();
            break;
        case tofuParser.T__5:
        case tofuParser.T__12:
        case tofuParser.T__26:
        case tofuParser.T__29:
        case tofuParser.T__31:
        case tofuParser.T__32:
        case tofuParser.T__33:
        case tofuParser.T__34:
        case tofuParser.STRING:
        case tofuParser.IDENTIFIER:
        case tofuParser.NUMBER:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
            this.expStmt();
            break;
        case tofuParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 88;
            this.ifStmt();
            break;
        case tofuParser.T__16:
            this.enterOuterAlt(localctx, 5);
            this.state = 89;
            this.printStmt();
            break;
        case tofuParser.T__8:
            this.enterOuterAlt(localctx, 6);
            this.state = 90;
            this.retStmt();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RetStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_retStmt;
    return this;
}

RetStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetStmtContext.prototype.constructor = RetStmtContext;

RetStmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RetStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterRetStmt(this);
	}
};

RetStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitRetStmt(this);
	}
};

RetStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitRetStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.RetStmtContext = RetStmtContext;

tofuParser.prototype.retStmt = function() {

    var localctx = new RetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, tofuParser.RULE_retStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(tofuParser.T__8);
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 94;
            this.expression();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_expStmt;
    return this;
}

ExpStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpStmtContext.prototype.constructor = ExpStmtContext;

ExpStmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterExpStmt(this);
	}
};

ExpStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitExpStmt(this);
	}
};

ExpStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitExpStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.ExpStmtContext = ExpStmtContext;

tofuParser.prototype.expStmt = function() {

    var localctx = new ExpStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, tofuParser.RULE_expStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.expression();
        this.state = 98;
        this.match(tofuParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_blockStmt;
    return this;
}

BlockStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStmtContext.prototype.constructor = BlockStmtContext;

BlockStmtContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterBlockStmt(this);
	}
};

BlockStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitBlockStmt(this);
	}
};

BlockStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitBlockStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.BlockStmtContext = BlockStmtContext;

tofuParser.prototype.blockStmt = function() {

    var localctx = new BlockStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, tofuParser.RULE_blockStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(tofuParser.T__2);
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__8) | (1 << tofuParser.T__10) | (1 << tofuParser.T__12) | (1 << tofuParser.T__16) | (1 << tofuParser.T__17) | (1 << tofuParser.T__26) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__32 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 101;
            this.stmt();
            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 107;
        this.match(tofuParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_ifStmt;
    return this;
}

IfStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStmtContext.prototype.constructor = IfStmtContext;

IfStmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfStmtContext.prototype.blockStmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStmtContext);
    } else {
        return this.getTypedRuleContext(BlockStmtContext,i);
    }
};

IfStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterIfStmt(this);
	}
};

IfStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitIfStmt(this);
	}
};

IfStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitIfStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.IfStmtContext = IfStmtContext;

tofuParser.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, tofuParser.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(tofuParser.T__10);
        this.state = 110;
        this.match(tofuParser.T__5);
        this.state = 111;
        this.expression();
        this.state = 112;
        this.match(tofuParser.T__7);
        this.state = 113;
        this.match(tofuParser.T__11);
        this.state = 114;
        this.match(tofuParser.T__12);
        this.state = 115;
        this.match(tofuParser.T__13);
        this.state = 116;
        this.blockStmt();
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__14) {
            this.state = 117;
            this.match(tofuParser.T__14);
            this.state = 118;
            this.match(tofuParser.T__15);
            this.state = 119;
            this.blockStmt();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrintStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_printStmt;
    return this;
}

PrintStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStmtContext.prototype.constructor = PrintStmtContext;

PrintStmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterPrintStmt(this);
	}
};

PrintStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitPrintStmt(this);
	}
};

PrintStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitPrintStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.PrintStmtContext = PrintStmtContext;

tofuParser.prototype.printStmt = function() {

    var localctx = new PrintStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, tofuParser.RULE_printStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(tofuParser.T__16);
        this.state = 123;
        this.match(tofuParser.T__5);
        this.state = 125;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__5) | (1 << tofuParser.T__12) | (1 << tofuParser.T__26) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__32 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 124;
            this.expression();
        }

        this.state = 127;
        this.match(tofuParser.T__7);
        this.state = 128;
        this.match(tofuParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IterationStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_iterationStmt;
    return this;
}

IterationStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterationStmtContext.prototype.constructor = IterationStmtContext;

IterationStmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IterationStmtContext.prototype.blockStmt = function() {
    return this.getTypedRuleContext(BlockStmtContext,0);
};

IterationStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterIterationStmt(this);
	}
};

IterationStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitIterationStmt(this);
	}
};

IterationStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitIterationStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.IterationStmtContext = IterationStmtContext;

tofuParser.prototype.iterationStmt = function() {

    var localctx = new IterationStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, tofuParser.RULE_iterationStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(tofuParser.T__17);
        this.state = 131;
        this.match(tofuParser.T__5);
        this.state = 132;
        this.expression();
        this.state = 133;
        this.match(tofuParser.T__7);
        this.state = 134;
        this.match(tofuParser.T__11);
        this.state = 135;
        this.match(tofuParser.T__12);
        this.state = 136;
        this.blockStmt();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.logORExpression = function() {
    return this.getTypedRuleContext(LogORExpressionContext,0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.ExpressionContext = ExpressionContext;

tofuParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, tofuParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.logORExpression();
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__4) {
            this.state = 139;
            this.match(tofuParser.T__4);
            this.state = 140;
            this.expression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogORExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_logORExpression;
    return this;
}

LogORExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogORExpressionContext.prototype.constructor = LogORExpressionContext;

LogORExpressionContext.prototype.logANDExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogANDExpressionContext);
    } else {
        return this.getTypedRuleContext(LogANDExpressionContext,i);
    }
};

LogORExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterLogORExpression(this);
	}
};

LogORExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitLogORExpression(this);
	}
};

LogORExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitLogORExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.LogORExpressionContext = LogORExpressionContext;

tofuParser.prototype.logORExpression = function() {

    var localctx = new LogORExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, tofuParser.RULE_logORExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.logANDExpression();
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__14) {
            this.state = 144;
            this.match(tofuParser.T__14);
            this.state = 145;
            this.logANDExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogANDExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_logANDExpression;
    return this;
}

LogANDExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogANDExpressionContext.prototype.constructor = LogANDExpressionContext;

LogANDExpressionContext.prototype.eqExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EqExpressionContext);
    } else {
        return this.getTypedRuleContext(EqExpressionContext,i);
    }
};

LogANDExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterLogANDExpression(this);
	}
};

LogANDExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitLogANDExpression(this);
	}
};

LogANDExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitLogANDExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.LogANDExpressionContext = LogANDExpressionContext;

tofuParser.prototype.logANDExpression = function() {

    var localctx = new LogANDExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, tofuParser.RULE_logANDExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.eqExpression();
        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__18) {
            this.state = 149;
            this.match(tofuParser.T__18);
            this.state = 150;
            this.eqExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EqExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_eqExpression;
    this.eqOp = null; // Token
    return this;
}

EqExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqExpressionContext.prototype.constructor = EqExpressionContext;

EqExpressionContext.prototype.relExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RelExpressionContext);
    } else {
        return this.getTypedRuleContext(RelExpressionContext,i);
    }
};

EqExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterEqExpression(this);
	}
};

EqExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitEqExpression(this);
	}
};

EqExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitEqExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.EqExpressionContext = EqExpressionContext;

tofuParser.prototype.eqExpression = function() {

    var localctx = new EqExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, tofuParser.RULE_eqExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.relExpression();
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__19 || _la===tofuParser.T__20) {
            this.state = 154;
            localctx.eqOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===tofuParser.T__19 || _la===tofuParser.T__20)) {
                localctx.eqOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 155;
            this.relExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_relExpression;
    this.relOp = null; // Token
    return this;
}

RelExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelExpressionContext.prototype.constructor = RelExpressionContext;

RelExpressionContext.prototype.addExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddExpressionContext);
    } else {
        return this.getTypedRuleContext(AddExpressionContext,i);
    }
};

RelExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterRelExpression(this);
	}
};

RelExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitRelExpression(this);
	}
};

RelExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitRelExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.RelExpressionContext = RelExpressionContext;

tofuParser.prototype.relExpression = function() {

    var localctx = new RelExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, tofuParser.RULE_relExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.addExpression();
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__21) | (1 << tofuParser.T__22) | (1 << tofuParser.T__23) | (1 << tofuParser.T__24))) !== 0)) {
            this.state = 159;
            localctx.relOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__21) | (1 << tofuParser.T__22) | (1 << tofuParser.T__23) | (1 << tofuParser.T__24))) !== 0))) {
                localctx.relOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 160;
            this.addExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AddExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_addExpression;
    this.addOp = null; // Token
    return this;
}

AddExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

AddExpressionContext.prototype.multExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultExpressionContext);
    } else {
        return this.getTypedRuleContext(MultExpressionContext,i);
    }
};

AddExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterAddExpression(this);
	}
};

AddExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitAddExpression(this);
	}
};

AddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.AddExpressionContext = AddExpressionContext;

tofuParser.prototype.addExpression = function() {

    var localctx = new AddExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, tofuParser.RULE_addExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.multExpression();
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 164;
            localctx.addOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===tofuParser.T__25 || _la===tofuParser.T__26)) {
                localctx.addOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 165;
            this.multExpression();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_multExpression;
    this.multOp = null; // Token
    return this;
}

MultExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultExpressionContext.prototype.constructor = MultExpressionContext;

MultExpressionContext.prototype.unaryExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UnaryExpressionContext);
    } else {
        return this.getTypedRuleContext(UnaryExpressionContext,i);
    }
};

MultExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterMultExpression(this);
	}
};

MultExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitMultExpression(this);
	}
};

MultExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitMultExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.MultExpressionContext = MultExpressionContext;

tofuParser.prototype.multExpression = function() {

    var localctx = new MultExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, tofuParser.RULE_multExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.unaryExpression();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__27 || _la===tofuParser.T__28) {
            this.state = 169;
            localctx.multOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===tofuParser.T__27 || _la===tofuParser.T__28)) {
                localctx.multOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 170;
            this.unaryExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_unaryExpression;
    this.unaryOp = null; // Token
    return this;
}

UnaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;

UnaryExpressionContext.prototype.callMemExpression = function() {
    return this.getTypedRuleContext(CallMemExpressionContext,0);
};

UnaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitUnaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.UnaryExpressionContext = UnaryExpressionContext;

tofuParser.prototype.unaryExpression = function() {

    var localctx = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, tofuParser.RULE_unaryExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__26 || _la===tofuParser.T__29) {
            this.state = 173;
            localctx.unaryOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===tofuParser.T__26 || _la===tofuParser.T__29)) {
                localctx.unaryOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 176;
        this.callMemExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CallMemExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_callMemExpression;
    return this;
}

CallMemExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallMemExpressionContext.prototype.constructor = CallMemExpressionContext;

CallMemExpressionContext.prototype.primaryExpression = function() {
    return this.getTypedRuleContext(PrimaryExpressionContext,0);
};

CallMemExpressionContext.prototype.callMemHelperExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CallMemHelperExpressionContext);
    } else {
        return this.getTypedRuleContext(CallMemHelperExpressionContext,i);
    }
};

CallMemExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterCallMemExpression(this);
	}
};

CallMemExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitCallMemExpression(this);
	}
};

CallMemExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitCallMemExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.CallMemExpressionContext = CallMemExpressionContext;

tofuParser.prototype.callMemExpression = function() {

    var localctx = new CallMemExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, tofuParser.RULE_callMemExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.primaryExpression();
        this.state = 182;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 179;
                this.callMemHelperExpression(); 
            }
            this.state = 184;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CallMemHelperExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_callMemHelperExpression;
    return this;
}

CallMemHelperExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallMemHelperExpressionContext.prototype.constructor = CallMemHelperExpressionContext;


 
CallMemHelperExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CallMemArgContext(parser, ctx) {
	CallMemHelperExpressionContext.call(this, parser);
    CallMemHelperExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallMemArgContext.prototype = Object.create(CallMemHelperExpressionContext.prototype);
CallMemArgContext.prototype.constructor = CallMemArgContext;

tofuParser.CallMemArgContext = CallMemArgContext;

CallMemArgContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};
CallMemArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterCallMemArg(this);
	}
};

CallMemArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitCallMemArg(this);
	}
};

CallMemArgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitCallMemArg(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CallMemDotContext(parser, ctx) {
	CallMemHelperExpressionContext.call(this, parser);
    CallMemHelperExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallMemDotContext.prototype = Object.create(CallMemHelperExpressionContext.prototype);
CallMemDotContext.prototype.constructor = CallMemDotContext;

tofuParser.CallMemDotContext = CallMemDotContext;

CallMemDotContext.prototype.IDENTIFIER = function() {
    return this.getToken(tofuParser.IDENTIFIER, 0);
};
CallMemDotContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterCallMemDot(this);
	}
};

CallMemDotContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitCallMemDot(this);
	}
};

CallMemDotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitCallMemDot(this);
    } else {
        return visitor.visitChildren(this);
    }
};



tofuParser.CallMemHelperExpressionContext = CallMemHelperExpressionContext;

tofuParser.prototype.callMemHelperExpression = function() {

    var localctx = new CallMemHelperExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, tofuParser.RULE_callMemHelperExpression);
    try {
        this.state = 188;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__30:
            localctx = new CallMemDotContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.match(tofuParser.T__30);
            this.state = 186;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__5:
            localctx = new CallMemArgContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.arguments();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;

ArgumentsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitArguments(this);
	}
};

ArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




tofuParser.ArgumentsContext = ArgumentsContext;

tofuParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, tofuParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(tofuParser.T__5);
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__5) | (1 << tofuParser.T__12) | (1 << tofuParser.T__26) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__32 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 191;
            this.expression();
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__6) {
                this.state = 192;
                this.match(tofuParser.T__6);
                this.state = 193;
                this.expression();
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 201;
        this.match(tofuParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_primaryExpression;
    return this;
}

PrimaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryExpressionContext.prototype.constructor = PrimaryExpressionContext;


 
PrimaryExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TrueExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
TrueExpressionContext.prototype.constructor = TrueExpressionContext;

tofuParser.TrueExpressionContext = TrueExpressionContext;

TrueExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterTrueExpression(this);
	}
};

TrueExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitTrueExpression(this);
	}
};

TrueExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitTrueExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NestedExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
NestedExpressionContext.prototype.constructor = NestedExpressionContext;

tofuParser.NestedExpressionContext = NestedExpressionContext;

NestedExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NestedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterNestedExpression(this);
	}
};

NestedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitNestedExpression(this);
	}
};

NestedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitNestedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MakeExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MakeExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
MakeExpressionContext.prototype.constructor = MakeExpressionContext;

tofuParser.MakeExpressionContext = MakeExpressionContext;

MakeExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(tofuParser.IDENTIFIER, 0);
};
MakeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterMakeExpression(this);
	}
};

MakeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitMakeExpression(this);
	}
};

MakeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitMakeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

tofuParser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.STRING = function() {
    return this.getToken(tofuParser.STRING, 0);
};
StringExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterStringExpression(this);
	}
};

StringExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitStringExpression(this);
	}
};

StringExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitStringExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
ListExpressionContext.prototype.constructor = ListExpressionContext;

tofuParser.ListExpressionContext = ListExpressionContext;

ListExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ListExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterListExpression(this);
	}
};

ListExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitListExpression(this);
	}
};

ListExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitListExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

tofuParser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.NUMBER = function() {
    return this.getToken(tofuParser.NUMBER, 0);
};
NumberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterNumberExpression(this);
	}
};

NumberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitNumberExpression(this);
	}
};

NumberExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitNumberExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UndefinedExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UndefinedExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
UndefinedExpressionContext.prototype.constructor = UndefinedExpressionContext;

tofuParser.UndefinedExpressionContext = UndefinedExpressionContext;

UndefinedExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterUndefinedExpression(this);
	}
};

UndefinedExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitUndefinedExpression(this);
	}
};

UndefinedExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitUndefinedExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FalseExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
FalseExpressionContext.prototype.constructor = FalseExpressionContext;

tofuParser.FalseExpressionContext = FalseExpressionContext;

FalseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterFalseExpression(this);
	}
};

FalseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitFalseExpression(this);
	}
};

FalseExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitFalseExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

tofuParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(tofuParser.IDENTIFIER, 0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof tofuVisitor ) {
        return visitor.visitIdentifierExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



tofuParser.PrimaryExpressionContext = PrimaryExpressionContext;

tofuParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, tofuParser.RULE_primaryExpression);
    var _la = 0; // Token type
    try {
        this.state = 223;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__5:
            localctx = new NestedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.match(tofuParser.T__5);
            this.state = 204;
            this.expression();
            this.state = 205;
            this.match(tofuParser.T__7);
            break;
        case tofuParser.NUMBER:
            localctx = new NumberExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 207;
            this.match(tofuParser.NUMBER);
            break;
        case tofuParser.T__12:
            localctx = new TrueExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 208;
            this.match(tofuParser.T__12);
            break;
        case tofuParser.T__31:
            localctx = new FalseExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 209;
            this.match(tofuParser.T__31);
            break;
        case tofuParser.STRING:
            localctx = new StringExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 210;
            this.match(tofuParser.STRING);
            break;
        case tofuParser.T__32:
            localctx = new UndefinedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 211;
            this.match(tofuParser.T__32);
            break;
        case tofuParser.IDENTIFIER:
            localctx = new IdentifierExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 212;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__33:
            localctx = new MakeExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 213;
            this.match(tofuParser.T__33);
            this.state = 214;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__34:
            localctx = new ListExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 215;
            this.match(tofuParser.T__34);
            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__5) | (1 << tofuParser.T__12) | (1 << tofuParser.T__26) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__32 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
                this.state = 216;
                this.expression();

                this.state = 217;
                this.match(tofuParser.T__6);
                this.state = 218;
                this.expression();
            }

            this.state = 222;
            this.match(tofuParser.T__35);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.tofuParser = tofuParser;
