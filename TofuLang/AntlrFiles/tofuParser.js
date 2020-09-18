// Generated from tofu.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var tofuListener = require('./tofuListener').tofuListener;
var grammarFileName = "tofu.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u011e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002>\n\u0002\f\u0002\u000e\u0002A\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007",
    "\u0003I\n\u0003\f\u0003\u000e\u0003L\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005Y\n\u0005\f\u0005\u000e",
    "\u0005\\\u000b\u0005\u0005\u0005^\n\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006i\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007m\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007",
    "\tv\n\t\f\t\u000e\ty\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u0088\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008d\n",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00a4",
    "\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00a9\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ae\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00b4\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00bc\n\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00c4\n\u0015\f\u0015\u000e",
    "\u0015\u00c7\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0007\u0017\u00cf\n\u0017\f\u0017\u000e\u0017",
    "\u00d2\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0005\u0019\u00d7",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0007\u001a",
    "\u00dd\n\u001a\f\u001a\u000e\u001a\u00e0\u000b\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u00e5\n\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0007\u001c\u00eb\n\u001c\f\u001c\u000e\u001c",
    "\u00ee\u000b\u001c\u0005\u001c\u00f0\n\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u0104\n",
    "\u001d\f\u001d\u000e\u001d\u0107\u000b\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0007\u001d\u0111\n\u001d\f\u001d\u000e\u001d\u0114\u000b\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0119\n\u001d\u0003\u001d",
    "\u0005\u001d\u011c\n\u001d\u0003\u001d\u0002\u0002\u001e\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468\u0002\u0007\u0003\u0002\u0018\u0019\u0003\u0002\u001a",
    "\u001d\u0003\u0002\u001e\u001f\u0003\u0002 !\u0004\u0002\u001f\u001f",
    "\"\"\u0002\u012a\u0002?\u0003\u0002\u0002\u0002\u0004B\u0003\u0002\u0002",
    "\u0002\u0006O\u0003\u0002\u0002\u0002\bT\u0003\u0002\u0002\u0002\nh",
    "\u0003\u0002\u0002\u0002\fj\u0003\u0002\u0002\u0002\u000ep\u0003\u0002",
    "\u0002\u0002\u0010s\u0003\u0002\u0002\u0002\u0012|\u0003\u0002\u0002",
    "\u0002\u0014\u0089\u0003\u0002\u0002\u0002\u0016\u0091\u0003\u0002\u0002",
    "\u0002\u0018\u0098\u0003\u0002\u0002\u0002\u001a\u00a0\u0003\u0002\u0002",
    "\u0002\u001c\u00a5\u0003\u0002\u0002\u0002\u001e\u00aa\u0003\u0002\u0002",
    "\u0002 \u00af\u0003\u0002\u0002\u0002\"\u00b5\u0003\u0002\u0002\u0002",
    "$\u00b7\u0003\u0002\u0002\u0002&\u00bd\u0003\u0002\u0002\u0002(\u00bf",
    "\u0003\u0002\u0002\u0002*\u00c8\u0003\u0002\u0002\u0002,\u00ca\u0003",
    "\u0002\u0002\u0002.\u00d3\u0003\u0002\u0002\u00020\u00d6\u0003\u0002",
    "\u0002\u00022\u00da\u0003\u0002\u0002\u00024\u00e4\u0003\u0002\u0002",
    "\u00026\u00e6\u0003\u0002\u0002\u00028\u011b\u0003\u0002\u0002\u0002",
    ":>\u0005\u0006\u0004\u0002;>\u0005\u0004\u0003\u0002<>\u0005\n\u0006",
    "\u0002=:\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=<\u0003\u0002",
    "\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003",
    "\u0002\u0002\u0002@\u0003\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002",
    "\u0002BC\u0007\u0003\u0002\u0002CD\u0007\u0004\u0002\u0002DE\u0007+",
    "\u0002\u0002EJ\u0007\u0005\u0002\u0002FI\u0005\u0006\u0004\u0002GI\u0005",
    "\n\u0006\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002I",
    "L\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002KM\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\u0007\u0006",
    "\u0002\u0002N\u0005\u0003\u0002\u0002\u0002OP\u0007+\u0002\u0002PQ\u0005",
    "\b\u0005\u0002QR\u0007\u0007\u0002\u0002RS\u0005\n\u0006\u0002S\u0007",
    "\u0003\u0002\u0002\u0002T]\u0007\b\u0002\u0002UZ\u0007+\u0002\u0002",
    "VW\u0007\t\u0002\u0002WY\u0007+\u0002\u0002XV\u0003\u0002\u0002\u0002",
    "Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003\u0002",
    "\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002]U",
    "\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002",
    "\u0002_`\u0007\n\u0002\u0002`\t\u0003\u0002\u0002\u0002ai\u0005\u0018",
    "\r\u0002bi\u0005\u0010\t\u0002ci\u0005\u000e\b\u0002di\u0005\u0012\n",
    "\u0002ei\u0005\u0014\u000b\u0002fi\u0005\f\u0007\u0002gi\u0005\u0016",
    "\f\u0002ha\u0003\u0002\u0002\u0002hb\u0003\u0002\u0002\u0002hc\u0003",
    "\u0002\u0002\u0002hd\u0003\u0002\u0002\u0002he\u0003\u0002\u0002\u0002",
    "hf\u0003\u0002\u0002\u0002hg\u0003\u0002\u0002\u0002i\u000b\u0003\u0002",
    "\u0002\u0002jl\u0007\u000b\u0002\u0002km\u0005\u001a\u000e\u0002lk\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "no\u0007\f\u0002\u0002o\r\u0003\u0002\u0002\u0002pq\u0005\u001a\u000e",
    "\u0002qr\u0007\f\u0002\u0002r\u000f\u0003\u0002\u0002\u0002sw\u0007",
    "\u0005\u0002\u0002tv\u0005\n\u0006\u0002ut\u0003\u0002\u0002\u0002v",
    "y\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xz\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002z{\u0007\u0006",
    "\u0002\u0002{\u0011\u0003\u0002\u0002\u0002|}\u0007\r\u0002\u0002}~",
    "\u0007\b\u0002\u0002~\u007f\u0005\u001a\u000e\u0002\u007f\u0080\u0007",
    "\n\u0002\u0002\u0080\u0081\u0007\u000e\u0002\u0002\u0081\u0082\u0007",
    "\u000f\u0002\u0002\u0082\u0083\u0007\u0010\u0002\u0002\u0083\u0087\u0005",
    "\u0010\t\u0002\u0084\u0085\u0007\u0011\u0002\u0002\u0085\u0086\u0007",
    "\u0012\u0002\u0002\u0086\u0088\u0005\u0010\t\u0002\u0087\u0084\u0003",
    "\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0013\u0003",
    "\u0002\u0002\u0002\u0089\u008a\u0007\u0013\u0002\u0002\u008a\u008c\u0007",
    "\b\u0002\u0002\u008b\u008d\u0005\u001a\u000e\u0002\u008c\u008b\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008e\u0003",
    "\u0002\u0002\u0002\u008e\u008f\u0007\n\u0002\u0002\u008f\u0090\u0007",
    "\f\u0002\u0002\u0090\u0015\u0003\u0002\u0002\u0002\u0091\u0092\u0007",
    "\u0004\u0002\u0002\u0092\u0093\u0007\u0014\u0002\u0002\u0093\u0094\u0007",
    "+\u0002\u0002\u0094\u0095\u0007\u0015\u0002\u0002\u0095\u0096\u0005",
    "\u001a\u000e\u0002\u0096\u0097\u0005\u0010\t\u0002\u0097\u0017\u0003",
    "\u0002\u0002\u0002\u0098\u0099\u0007\u0016\u0002\u0002\u0099\u009a\u0007",
    "\b\u0002\u0002\u009a\u009b\u0005\u001a\u000e\u0002\u009b\u009c\u0007",
    "\n\u0002\u0002\u009c\u009d\u0007\u000e\u0002\u0002\u009d\u009e\u0007",
    "\u000f\u0002\u0002\u009e\u009f\u0005\u0010\t\u0002\u009f\u0019\u0003",
    "\u0002\u0002\u0002\u00a0\u00a3\u0005\u001c\u000f\u0002\u00a1\u00a2\u0007",
    "\u0007\u0002\u0002\u00a2\u00a4\u0005\u001a\u000e\u0002\u00a3\u00a1\u0003",
    "\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u001b\u0003",
    "\u0002\u0002\u0002\u00a5\u00a8\u0005\u001e\u0010\u0002\u00a6\u00a7\u0007",
    "\u0011\u0002\u0002\u00a7\u00a9\u0005\u001e\u0010\u0002\u00a8\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u001d\u0003",
    "\u0002\u0002\u0002\u00aa\u00ad\u0005 \u0011\u0002\u00ab\u00ac\u0007",
    "\u0017\u0002\u0002\u00ac\u00ae\u0005 \u0011\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u001f\u0003",
    "\u0002\u0002\u0002\u00af\u00b3\u0005$\u0013\u0002\u00b0\u00b1\u0005",
    "\"\u0012\u0002\u00b1\u00b2\u0005$\u0013\u0002\u00b2\u00b4\u0003\u0002",
    "\u0002\u0002\u00b3\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002",
    "\u0002\u0002\u00b4!\u0003\u0002\u0002\u0002\u00b5\u00b6\t\u0002\u0002",
    "\u0002\u00b6#\u0003\u0002\u0002\u0002\u00b7\u00bb\u0005(\u0015\u0002",
    "\u00b8\u00b9\u0005&\u0014\u0002\u00b9\u00ba\u0005(\u0015\u0002\u00ba",
    "\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b8\u0003\u0002\u0002\u0002\u00bb",
    "\u00bc\u0003\u0002\u0002\u0002\u00bc%\u0003\u0002\u0002\u0002\u00bd",
    "\u00be\t\u0003\u0002\u0002\u00be\'\u0003\u0002\u0002\u0002\u00bf\u00c5",
    "\u0005,\u0017\u0002\u00c0\u00c1\u0005*\u0016\u0002\u00c1\u00c2\u0005",
    ",\u0017\u0002\u00c2\u00c4\u0003\u0002\u0002\u0002\u00c3\u00c0\u0003",
    "\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003",
    "\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6)\u0003",
    "\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00c9\t",
    "\u0004\u0002\u0002\u00c9+\u0003\u0002\u0002\u0002\u00ca\u00d0\u0005",
    "0\u0019\u0002\u00cb\u00cc\u0005.\u0018\u0002\u00cc\u00cd\u00050\u0019",
    "\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00cb\u0003\u0002\u0002",
    "\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1-\u0003\u0002\u0002",
    "\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d4\t\u0005\u0002",
    "\u0002\u00d4/\u0003\u0002\u0002\u0002\u00d5\u00d7\t\u0006\u0002\u0002",
    "\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00d9\u00052\u001a\u0002",
    "\u00d91\u0003\u0002\u0002\u0002\u00da\u00de\u00058\u001d\u0002\u00db",
    "\u00dd\u00054\u001b\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd",
    "\u00e0\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0003\u0002\u0002\u0002\u00df3\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007#\u0002\u0002\u00e2",
    "\u00e5\u0007+\u0002\u0002\u00e3\u00e5\u00056\u001c\u0002\u00e4\u00e1",
    "\u0003\u0002\u0002\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e55",
    "\u0003\u0002\u0002\u0002\u00e6\u00ef\u0007\b\u0002\u0002\u00e7\u00ec",
    "\u0005\u001a\u000e\u0002\u00e8\u00e9\u0007\t\u0002\u0002\u00e9\u00eb",
    "\u0005\u001a\u000e\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00eb\u00ee",
    "\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed",
    "\u0003\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec",
    "\u0003\u0002\u0002\u0002\u00ef\u00e7\u0003\u0002\u0002\u0002\u00ef\u00f0",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2",
    "\u0007\n\u0002\u0002\u00f27\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007",
    "\b\u0002\u0002\u00f4\u00f5\u0005\u001a\u000e\u0002\u00f5\u00f6\u0007",
    "\n\u0002\u0002\u00f6\u011c\u0003\u0002\u0002\u0002\u00f7\u011c\u0007",
    ",\u0002\u0002\u00f8\u011c\u0007\u000f\u0002\u0002\u00f9\u011c\u0007",
    "$\u0002\u0002\u00fa\u011c\u0007*\u0002\u0002\u00fb\u011c\u0007%\u0002",
    "\u0002\u00fc\u011c\u0007+\u0002\u0002\u00fd\u00fe\u0007&\u0002\u0002",
    "\u00fe\u011c\u0007+\u0002\u0002\u00ff\u0100\u0007\'\u0002\u0002\u0100",
    "\u0105\u0005\u001a\u000e\u0002\u0101\u0102\u0007\t\u0002\u0002\u0102",
    "\u0104\u0005\u001a\u000e\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0104",
    "\u0107\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105",
    "\u0106\u0003\u0002\u0002\u0002\u0106\u0108\u0003\u0002\u0002\u0002\u0107",
    "\u0105\u0003\u0002\u0002\u0002\u0108\u0109\u0007(\u0002\u0002\u0109",
    "\u011c\u0003\u0002\u0002\u0002\u010a\u0112\u0007\u0005\u0002\u0002\u010b",
    "\u010c\u0007*\u0002\u0002\u010c\u010d\u0007)\u0002\u0002\u010d\u010e",
    "\u0005\u001a\u000e\u0002\u010e\u010f\u0007\t\u0002\u0002\u010f\u0111",
    "\u0003\u0002\u0002\u0002\u0110\u010b\u0003\u0002\u0002\u0002\u0111\u0114",
    "\u0003\u0002\u0002\u0002\u0112\u0110\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0003\u0002\u0002\u0002\u0113\u0118\u0003\u0002\u0002\u0002\u0114\u0112",
    "\u0003\u0002\u0002\u0002\u0115\u0116\u0007*\u0002\u0002\u0116\u0117",
    "\u0007)\u0002\u0002\u0117\u0119\u0005\u001a\u000e\u0002\u0118\u0115",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0003\u0002\u0002\u0002\u011a\u011c\u0007\u0006\u0002\u0002\u011b\u00f3",
    "\u0003\u0002\u0002\u0002\u011b\u00f7\u0003\u0002\u0002\u0002\u011b\u00f8",
    "\u0003\u0002\u0002\u0002\u011b\u00f9\u0003\u0002\u0002\u0002\u011b\u00fa",
    "\u0003\u0002\u0002\u0002\u011b\u00fb\u0003\u0002\u0002\u0002\u011b\u00fc",
    "\u0003\u0002\u0002\u0002\u011b\u00fd\u0003\u0002\u0002\u0002\u011b\u00ff",
    "\u0003\u0002\u0002\u0002\u011b\u010a\u0003\u0002\u0002\u0002\u011c9",
    "\u0003\u0002\u0002\u0002\u001d=?HJZ]hlw\u0087\u008c\u00a3\u00a8\u00ad",
    "\u00b3\u00bb\u00c5\u00d0\u00d6\u00de\u00e4\u00ec\u00ef\u0105\u0112\u0118",
    "\u011b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'blueprint'", "'for'", "'{'", "'}'", "'='", 
                     "'('", "','", "')'", "'return'", "';'", "'if'", "'is'", 
                     "'true'", "'then'", "'or'", "'else'", "'print'", "'each'", 
                     "'in'", "'while'", "'and'", "'=='", "'!='", "'>'", 
                     "'>='", "'<'", "'<='", "'+'", "'-'", "'*'", "'/'", 
                     "'!'", "'.'", "'false'", "'undefined'", "'make'", "'['", 
                     "']'", "':'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "STRING", "IDENTIFIER", "NUMBER", 
                      "Whitespace", "Newline" ];

var ruleNames =  [ "program", "classDecls", "funDecl", "parameter", "stmt", 
                   "retStmt", "expStmt", "blockStmt", "ifStmt", "printStmt", 
                   "forStmt", "iterationStmt", "expression", "logORExpression", 
                   "logANDExpression", "eqExpression", "eqOp", "relExpression", 
                   "relOp", "addExpression", "addOp", "multExpression", 
                   "multOp", "unaryExpression", "callMemExpression", "callMemHelperExpression", 
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
tofuParser.T__36 = 37;
tofuParser.T__37 = 38;
tofuParser.T__38 = 39;
tofuParser.STRING = 40;
tofuParser.IDENTIFIER = 41;
tofuParser.NUMBER = 42;
tofuParser.Whitespace = 43;
tofuParser.Newline = 44;

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
tofuParser.RULE_forStmt = 10;
tofuParser.RULE_iterationStmt = 11;
tofuParser.RULE_expression = 12;
tofuParser.RULE_logORExpression = 13;
tofuParser.RULE_logANDExpression = 14;
tofuParser.RULE_eqExpression = 15;
tofuParser.RULE_eqOp = 16;
tofuParser.RULE_relExpression = 17;
tofuParser.RULE_relOp = 18;
tofuParser.RULE_addExpression = 19;
tofuParser.RULE_addOp = 20;
tofuParser.RULE_multExpression = 21;
tofuParser.RULE_multOp = 22;
tofuParser.RULE_unaryExpression = 23;
tofuParser.RULE_callMemExpression = 24;
tofuParser.RULE_callMemHelperExpression = 25;
tofuParser.RULE_arguments = 26;
tofuParser.RULE_primaryExpression = 27;


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




tofuParser.ProgramContext = ProgramContext;

tofuParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, tofuParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__0) | (1 << tofuParser.T__1) | (1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__8) | (1 << tofuParser.T__10) | (1 << tofuParser.T__12) | (1 << tofuParser.T__16) | (1 << tofuParser.T__19) | (1 << tofuParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.T__35 - 32)) | (1 << (tofuParser.T__36 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 59;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 56;
                this.funDecl();
                break;

            case 2:
                this.state = 57;
                this.classDecls();
                break;

            case 3:
                this.state = 58;
                this.stmt();
                break;

            }
            this.state = 63;
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



tofuParser.ClassDeclsContext = ClassDeclsContext;

tofuParser.prototype.classDecls = function() {

    var localctx = new ClassDeclsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, tofuParser.RULE_classDecls);
    var _la = 0; // Token type
    try {
        localctx = new ClassContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(tofuParser.T__0);
        this.state = 65;
        this.match(tofuParser.T__1);
        this.state = 66;
        this.match(tofuParser.IDENTIFIER);
        this.state = 67;
        this.match(tofuParser.T__2);
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__1) | (1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__8) | (1 << tofuParser.T__10) | (1 << tofuParser.T__12) | (1 << tofuParser.T__16) | (1 << tofuParser.T__19) | (1 << tofuParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.T__35 - 32)) | (1 << (tofuParser.T__36 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 70;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 68;
                this.funDecl();
                break;

            case 2:
                this.state = 69;
                this.stmt();
                break;

            }
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 75;
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




tofuParser.FunDeclContext = FunDeclContext;

tofuParser.prototype.funDecl = function() {

    var localctx = new FunDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, tofuParser.RULE_funDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(tofuParser.IDENTIFIER);
        this.state = 78;
        this.parameter();
        this.state = 79;
        this.match(tofuParser.T__4);
        this.state = 80;
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




tofuParser.ParameterContext = ParameterContext;

tofuParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, tofuParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(tofuParser.T__5);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.IDENTIFIER) {
            this.state = 83;
            this.match(tofuParser.IDENTIFIER);
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__6) {
                this.state = 84;
                this.match(tofuParser.T__6);
                this.state = 85;
                this.match(tofuParser.IDENTIFIER);
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 93;
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

StmtContext.prototype.forStmt = function() {
    return this.getTypedRuleContext(ForStmtContext,0);
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




tofuParser.StmtContext = StmtContext;

tofuParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, tofuParser.RULE_stmt);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.iterationStmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.blockStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 97;
            this.expStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 98;
            this.ifStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 99;
            this.printStmt();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 100;
            this.retStmt();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 101;
            this.forStmt();
            break;

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




tofuParser.RetStmtContext = RetStmtContext;

tofuParser.prototype.retStmt = function() {

    var localctx = new RetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, tofuParser.RULE_retStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(tofuParser.T__8);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__12) | (1 << tofuParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.T__35 - 32)) | (1 << (tofuParser.T__36 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 105;
            this.expression();
        }

        this.state = 108;
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




tofuParser.ExpStmtContext = ExpStmtContext;

tofuParser.prototype.expStmt = function() {

    var localctx = new ExpStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, tofuParser.RULE_expStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.expression();
        this.state = 111;
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




tofuParser.BlockStmtContext = BlockStmtContext;

tofuParser.prototype.blockStmt = function() {

    var localctx = new BlockStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, tofuParser.RULE_blockStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(tofuParser.T__2);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__1) | (1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__8) | (1 << tofuParser.T__10) | (1 << tofuParser.T__12) | (1 << tofuParser.T__16) | (1 << tofuParser.T__19) | (1 << tofuParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.T__35 - 32)) | (1 << (tofuParser.T__36 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 114;
            this.stmt();
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 120;
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




tofuParser.IfStmtContext = IfStmtContext;

tofuParser.prototype.ifStmt = function() {

    var localctx = new IfStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, tofuParser.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(tofuParser.T__10);
        this.state = 123;
        this.match(tofuParser.T__5);
        this.state = 124;
        this.expression();
        this.state = 125;
        this.match(tofuParser.T__7);
        this.state = 126;
        this.match(tofuParser.T__11);
        this.state = 127;
        this.match(tofuParser.T__12);
        this.state = 128;
        this.match(tofuParser.T__13);
        this.state = 129;
        this.blockStmt();
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__14) {
            this.state = 130;
            this.match(tofuParser.T__14);
            this.state = 131;
            this.match(tofuParser.T__15);
            this.state = 132;
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




tofuParser.PrintStmtContext = PrintStmtContext;

tofuParser.prototype.printStmt = function() {

    var localctx = new PrintStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, tofuParser.RULE_printStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(tofuParser.T__16);
        this.state = 136;
        this.match(tofuParser.T__5);
        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__12) | (1 << tofuParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.T__35 - 32)) | (1 << (tofuParser.T__36 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 137;
            this.expression();
        }

        this.state = 140;
        this.match(tofuParser.T__7);
        this.state = 141;
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


function ForStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_forStmt;
    return this;
}

ForStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStmtContext.prototype.constructor = ForStmtContext;

ForStmtContext.prototype.IDENTIFIER = function() {
    return this.getToken(tofuParser.IDENTIFIER, 0);
};

ForStmtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForStmtContext.prototype.blockStmt = function() {
    return this.getTypedRuleContext(BlockStmtContext,0);
};

ForStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterForStmt(this);
	}
};

ForStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitForStmt(this);
	}
};




tofuParser.ForStmtContext = ForStmtContext;

tofuParser.prototype.forStmt = function() {

    var localctx = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, tofuParser.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(tofuParser.T__1);
        this.state = 144;
        this.match(tofuParser.T__17);
        this.state = 145;
        this.match(tofuParser.IDENTIFIER);
        this.state = 146;
        this.match(tofuParser.T__18);
        this.state = 147;
        this.expression();
        this.state = 148;
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




tofuParser.IterationStmtContext = IterationStmtContext;

tofuParser.prototype.iterationStmt = function() {

    var localctx = new IterationStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, tofuParser.RULE_iterationStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(tofuParser.T__19);
        this.state = 151;
        this.match(tofuParser.T__5);
        this.state = 152;
        this.expression();
        this.state = 153;
        this.match(tofuParser.T__7);
        this.state = 154;
        this.match(tofuParser.T__11);
        this.state = 155;
        this.match(tofuParser.T__12);
        this.state = 156;
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




tofuParser.ExpressionContext = ExpressionContext;

tofuParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, tofuParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.logORExpression();
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__4) {
            this.state = 159;
            this.match(tofuParser.T__4);
            this.state = 160;
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




tofuParser.LogORExpressionContext = LogORExpressionContext;

tofuParser.prototype.logORExpression = function() {

    var localctx = new LogORExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, tofuParser.RULE_logORExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.logANDExpression();
        this.state = 166;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__14) {
            this.state = 164;
            this.match(tofuParser.T__14);
            this.state = 165;
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




tofuParser.LogANDExpressionContext = LogANDExpressionContext;

tofuParser.prototype.logANDExpression = function() {

    var localctx = new LogANDExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, tofuParser.RULE_logANDExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.eqExpression();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__20) {
            this.state = 169;
            this.match(tofuParser.T__20);
            this.state = 170;
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

EqExpressionContext.prototype.eqOp = function() {
    return this.getTypedRuleContext(EqOpContext,0);
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




tofuParser.EqExpressionContext = EqExpressionContext;

tofuParser.prototype.eqExpression = function() {

    var localctx = new EqExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, tofuParser.RULE_eqExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.relExpression();
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__21 || _la===tofuParser.T__22) {
            this.state = 174;
            this.eqOp();
            this.state = 175;
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


function EqOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_eqOp;
    return this;
}

EqOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EqOpContext.prototype.constructor = EqOpContext;


EqOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterEqOp(this);
	}
};

EqOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitEqOp(this);
	}
};




tofuParser.EqOpContext = EqOpContext;

tofuParser.prototype.eqOp = function() {

    var localctx = new EqOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, tofuParser.RULE_eqOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        _la = this._input.LA(1);
        if(!(_la===tofuParser.T__21 || _la===tofuParser.T__22)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

RelExpressionContext.prototype.relOp = function() {
    return this.getTypedRuleContext(RelOpContext,0);
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




tofuParser.RelExpressionContext = RelExpressionContext;

tofuParser.prototype.relExpression = function() {

    var localctx = new RelExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, tofuParser.RULE_relExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.addExpression();
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__23) | (1 << tofuParser.T__24) | (1 << tofuParser.T__25) | (1 << tofuParser.T__26))) !== 0)) {
            this.state = 182;
            this.relOp();
            this.state = 183;
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


function RelOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_relOp;
    return this;
}

RelOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelOpContext.prototype.constructor = RelOpContext;


RelOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterRelOp(this);
	}
};

RelOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitRelOp(this);
	}
};




tofuParser.RelOpContext = RelOpContext;

tofuParser.prototype.relOp = function() {

    var localctx = new RelOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, tofuParser.RULE_relOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__23) | (1 << tofuParser.T__24) | (1 << tofuParser.T__25) | (1 << tofuParser.T__26))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

AddExpressionContext.prototype.addOp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddOpContext);
    } else {
        return this.getTypedRuleContext(AddOpContext,i);
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




tofuParser.AddExpressionContext = AddExpressionContext;

tofuParser.prototype.addExpression = function() {

    var localctx = new AddExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, tofuParser.RULE_addExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.multExpression();
        this.state = 195;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===tofuParser.T__27 || _la===tofuParser.T__28) {
            this.state = 190;
            this.addOp();
            this.state = 191;
            this.multExpression();
            this.state = 197;
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


function AddOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_addOp;
    return this;
}

AddOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOpContext.prototype.constructor = AddOpContext;


AddOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterAddOp(this);
	}
};

AddOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitAddOp(this);
	}
};




tofuParser.AddOpContext = AddOpContext;

tofuParser.prototype.addOp = function() {

    var localctx = new AddOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, tofuParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        _la = this._input.LA(1);
        if(!(_la===tofuParser.T__27 || _la===tofuParser.T__28)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

MultExpressionContext.prototype.multOp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultOpContext);
    } else {
        return this.getTypedRuleContext(MultOpContext,i);
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




tofuParser.MultExpressionContext = MultExpressionContext;

tofuParser.prototype.multExpression = function() {

    var localctx = new MultExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, tofuParser.RULE_multExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.unaryExpression();
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===tofuParser.T__29 || _la===tofuParser.T__30) {
            this.state = 201;
            this.multOp();
            this.state = 202;
            this.unaryExpression();
            this.state = 208;
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


function MultOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_multOp;
    return this;
}

MultOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultOpContext.prototype.constructor = MultOpContext;


MultOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterMultOp(this);
	}
};

MultOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitMultOp(this);
	}
};




tofuParser.MultOpContext = MultOpContext;

tofuParser.prototype.multOp = function() {

    var localctx = new MultOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, tofuParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        _la = this._input.LA(1);
        if(!(_la===tofuParser.T__29 || _la===tofuParser.T__30)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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




tofuParser.UnaryExpressionContext = UnaryExpressionContext;

tofuParser.prototype.unaryExpression = function() {

    var localctx = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, tofuParser.RULE_unaryExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__28 || _la===tofuParser.T__31) {
            this.state = 211;
            localctx.unaryOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===tofuParser.T__28 || _la===tofuParser.T__31)) {
                localctx.unaryOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 214;
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




tofuParser.CallMemExpressionContext = CallMemExpressionContext;

tofuParser.prototype.callMemExpression = function() {

    var localctx = new CallMemExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, tofuParser.RULE_callMemExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.primaryExpression();
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===tofuParser.T__5 || _la===tofuParser.T__32) {
            this.state = 217;
            this.callMemHelperExpression();
            this.state = 222;
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



tofuParser.CallMemHelperExpressionContext = CallMemHelperExpressionContext;

tofuParser.prototype.callMemHelperExpression = function() {

    var localctx = new CallMemHelperExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, tofuParser.RULE_callMemHelperExpression);
    try {
        this.state = 226;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__32:
            localctx = new CallMemDotContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.match(tofuParser.T__32);
            this.state = 224;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__5:
            localctx = new CallMemArgContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
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




tofuParser.ArgumentsContext = ArgumentsContext;

tofuParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, tofuParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.match(tofuParser.T__5);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__12) | (1 << tofuParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tofuParser.T__31 - 32)) | (1 << (tofuParser.T__33 - 32)) | (1 << (tofuParser.T__34 - 32)) | (1 << (tofuParser.T__35 - 32)) | (1 << (tofuParser.T__36 - 32)) | (1 << (tofuParser.STRING - 32)) | (1 << (tofuParser.IDENTIFIER - 32)) | (1 << (tofuParser.NUMBER - 32)))) !== 0)) {
            this.state = 229;
            this.expression();
            this.state = 234;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__6) {
                this.state = 230;
                this.match(tofuParser.T__6);
                this.state = 231;
                this.expression();
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 239;
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


function MapExpressionContext(parser, ctx) {
	PrimaryExpressionContext.call(this, parser);
    PrimaryExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MapExpressionContext.prototype = Object.create(PrimaryExpressionContext.prototype);
MapExpressionContext.prototype.constructor = MapExpressionContext;

tofuParser.MapExpressionContext = MapExpressionContext;

MapExpressionContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(tofuParser.STRING);
    } else {
        return this.getToken(tofuParser.STRING, i);
    }
};


MapExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MapExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterMapExpression(this);
	}
};

MapExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitMapExpression(this);
	}
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



tofuParser.PrimaryExpressionContext = PrimaryExpressionContext;

tofuParser.prototype.primaryExpression = function() {

    var localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, tofuParser.RULE_primaryExpression);
    var _la = 0; // Token type
    try {
        this.state = 281;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__5:
            localctx = new NestedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 241;
            this.match(tofuParser.T__5);
            this.state = 242;
            this.expression();
            this.state = 243;
            this.match(tofuParser.T__7);
            break;
        case tofuParser.NUMBER:
            localctx = new NumberExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(tofuParser.NUMBER);
            break;
        case tofuParser.T__12:
            localctx = new TrueExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.match(tofuParser.T__12);
            break;
        case tofuParser.T__33:
            localctx = new FalseExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 247;
            this.match(tofuParser.T__33);
            break;
        case tofuParser.STRING:
            localctx = new StringExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 248;
            this.match(tofuParser.STRING);
            break;
        case tofuParser.T__34:
            localctx = new UndefinedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 249;
            this.match(tofuParser.T__34);
            break;
        case tofuParser.IDENTIFIER:
            localctx = new IdentifierExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 250;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__35:
            localctx = new MakeExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 251;
            this.match(tofuParser.T__35);
            this.state = 252;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__36:
            localctx = new ListExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 253;
            this.match(tofuParser.T__36);

            this.state = 254;
            this.expression();
            this.state = 259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__6) {
                this.state = 255;
                this.match(tofuParser.T__6);
                this.state = 256;
                this.expression();
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 262;
            this.match(tofuParser.T__37);
            break;
        case tofuParser.T__2:
            localctx = new MapExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 264;
            this.match(tofuParser.T__2);
            this.state = 272;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 265;
                    this.match(tofuParser.STRING);
                    this.state = 266;
                    this.match(tofuParser.T__38);
                    this.state = 267;
                    this.expression();
                    this.state = 268;
                    this.match(tofuParser.T__6); 
                }
                this.state = 274;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            this.state = 278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===tofuParser.STRING) {
                this.state = 275;
                this.match(tofuParser.STRING);
                this.state = 276;
                this.match(tofuParser.T__38);
                this.state = 277;
                this.expression();
            }

            this.state = 280;
            this.match(tofuParser.T__3);
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
