// Generated from tofu.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var tofuListener = require('./tofuListener').tofuListener;
var grammarFileName = "tofu.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003/\u0135\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002C\n\u0002\f\u0002\u000e\u0002F\u000b\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003N\n\u0003",
    "\f\u0003\u000e\u0003Q\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006b\n\u0006\f\u0006\u000e\u0006e\u000b\u0006\u0005\u0006g",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007r\n\u0007",
    "\u0003\b\u0003\b\u0005\bv\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0007\n\u007f\n\n\f\n\u000e\n\u0082\u000b\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u0091\n\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u0096\n\f",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0005\u000f\u00ad\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00b2\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00b7\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00bd\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0005\u0014\u00c5\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00cd",
    "\n\u0016\f\u0016\u000e\u0016\u00d0\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u00d8\n",
    "\u0018\f\u0018\u000e\u0018\u00db\u000b\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0005\u001a\u00e0\n\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0007\u001b\u00e6\n\u001b\f\u001b\u000e\u001b\u00e9",
    "\u000b\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c",
    "\u00ef\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0007",
    "\u001d\u00f5\n\u001d\f\u001d\u000e\u001d\u00f8\u000b\u001d\u0005\u001d",
    "\u00fa\n\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0007\u001e\u0102\n\u001e\f\u001e\u000e\u001e\u0105",
    "\u000b\u001e\u0005\u001e\u0107\n\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007\u001f\u011b\n\u001f",
    "\f\u001f\u000e\u001f\u011e\u000b\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u0128\n\u001f\f\u001f\u000e\u001f\u012b\u000b\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0130\n\u001f\u0003\u001f\u0005",
    "\u001f\u0133\n\u001f\u0003\u001f\u0002\u0002 \u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02",
    "468:<\u0002\u0007\u0003\u0002\u0019\u001a\u0003\u0002\u001b\u001e\u0003",
    "\u0002\u001f \u0003\u0002!\"\u0004\u0002  ##\u0002\u0143\u0002D\u0003",
    "\u0002\u0002\u0002\u0004G\u0003\u0002\u0002\u0002\u0006T\u0003\u0002",
    "\u0002\u0002\bY\u0003\u0002\u0002\u0002\n]\u0003\u0002\u0002\u0002\f",
    "q\u0003\u0002\u0002\u0002\u000es\u0003\u0002\u0002\u0002\u0010y\u0003",
    "\u0002\u0002\u0002\u0012|\u0003\u0002\u0002\u0002\u0014\u0085\u0003",
    "\u0002\u0002\u0002\u0016\u0092\u0003\u0002\u0002\u0002\u0018\u009a\u0003",
    "\u0002\u0002\u0002\u001a\u00a1\u0003\u0002\u0002\u0002\u001c\u00a9\u0003",
    "\u0002\u0002\u0002\u001e\u00ae\u0003\u0002\u0002\u0002 \u00b3\u0003",
    "\u0002\u0002\u0002\"\u00b8\u0003\u0002\u0002\u0002$\u00be\u0003\u0002",
    "\u0002\u0002&\u00c0\u0003\u0002\u0002\u0002(\u00c6\u0003\u0002\u0002",
    "\u0002*\u00c8\u0003\u0002\u0002\u0002,\u00d1\u0003\u0002\u0002\u0002",
    ".\u00d3\u0003\u0002\u0002\u00020\u00dc\u0003\u0002\u0002\u00022\u00df",
    "\u0003\u0002\u0002\u00024\u00e3\u0003\u0002\u0002\u00026\u00ee\u0003",
    "\u0002\u0002\u00028\u00f0\u0003\u0002\u0002\u0002:\u00fd\u0003\u0002",
    "\u0002\u0002<\u0132\u0003\u0002\u0002\u0002>C\u0005\b\u0005\u0002?C",
    "\u0005\u0006\u0004\u0002@C\u0005\u0004\u0003\u0002AC\u0005\f\u0007\u0002",
    "B>\u0003\u0002\u0002\u0002B?\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002BA\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002DE\u0003\u0002\u0002\u0002E\u0003\u0003\u0002\u0002\u0002",
    "FD\u0003\u0002\u0002\u0002GH\u0007\u0003\u0002\u0002HI\u0007\u0004\u0002",
    "\u0002IJ\u0007,\u0002\u0002JO\u0007\u0005\u0002\u0002KN\u0005\u0006",
    "\u0004\u0002LN\u0005\f\u0007\u0002MK\u0003\u0002\u0002\u0002ML\u0003",
    "\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002",
    "OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002",
    "\u0002RS\u0007\u0006\u0002\u0002S\u0005\u0003\u0002\u0002\u0002TU\u0007",
    ",\u0002\u0002UV\u0005\n\u0006\u0002VW\u0007\u0007\u0002\u0002WX\u0005",
    "\f\u0007\u0002X\u0007\u0003\u0002\u0002\u0002YZ\u0007\b\u0002\u0002",
    "Z[\u0007+\u0002\u0002[\\\u0007\t\u0002\u0002\\\t\u0003\u0002\u0002\u0002",
    "]f\u0007\n\u0002\u0002^c\u0007,\u0002\u0002_`\u0007\u000b\u0002\u0002",
    "`b\u0007,\u0002\u0002a_\u0003\u0002\u0002\u0002be\u0003\u0002\u0002",
    "\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002dg\u0003\u0002",
    "\u0002\u0002ec\u0003\u0002\u0002\u0002f^\u0003\u0002\u0002\u0002fg\u0003",
    "\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0007\f\u0002\u0002i",
    "\u000b\u0003\u0002\u0002\u0002jr\u0005\u001a\u000e\u0002kr\u0005\u0012",
    "\n\u0002lr\u0005\u0010\t\u0002mr\u0005\u0014\u000b\u0002nr\u0005\u0016",
    "\f\u0002or\u0005\u000e\b\u0002pr\u0005\u0018\r\u0002qj\u0003\u0002\u0002",
    "\u0002qk\u0003\u0002\u0002\u0002ql\u0003\u0002\u0002\u0002qm\u0003\u0002",
    "\u0002\u0002qn\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qp\u0003",
    "\u0002\u0002\u0002r\r\u0003\u0002\u0002\u0002su\u0007\r\u0002\u0002",
    "tv\u0005\u001c\u000f\u0002ut\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002",
    "\u0002vw\u0003\u0002\u0002\u0002wx\u0007\t\u0002\u0002x\u000f\u0003",
    "\u0002\u0002\u0002yz\u0005\u001c\u000f\u0002z{\u0007\t\u0002\u0002{",
    "\u0011\u0003\u0002\u0002\u0002|\u0080\u0007\u0005\u0002\u0002}\u007f",
    "\u0005\f\u0007\u0002~}\u0003\u0002\u0002\u0002\u007f\u0082\u0003\u0002",
    "\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\u0006\u0002\u0002\u0084\u0013\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0007\u000e\u0002\u0002\u0086\u0087\u0007\n",
    "\u0002\u0002\u0087\u0088\u0005\u001c\u000f\u0002\u0088\u0089\u0007\f",
    "\u0002\u0002\u0089\u008a\u0007\u000f\u0002\u0002\u008a\u008b\u0007\u0010",
    "\u0002\u0002\u008b\u008c\u0007\u0011\u0002\u0002\u008c\u0090\u0005\u0012",
    "\n\u0002\u008d\u008e\u0007\u0012\u0002\u0002\u008e\u008f\u0007\u0013",
    "\u0002\u0002\u008f\u0091\u0005\u0012\n\u0002\u0090\u008d\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0015\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0007\u0014\u0002\u0002\u0093\u0095\u0007\n",
    "\u0002\u0002\u0094\u0096\u0005\u001c\u000f\u0002\u0095\u0094\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0007\f\u0002\u0002\u0098\u0099\u0007\t\u0002",
    "\u0002\u0099\u0017\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0004\u0002",
    "\u0002\u009b\u009c\u0007\u0015\u0002\u0002\u009c\u009d\u0007,\u0002",
    "\u0002\u009d\u009e\u0007\u0016\u0002\u0002\u009e\u009f\u0005\u001c\u000f",
    "\u0002\u009f\u00a0\u0005\u0012\n\u0002\u00a0\u0019\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\u0007\u0017\u0002\u0002\u00a2\u00a3\u0007\n\u0002",
    "\u0002\u00a3\u00a4\u0005\u001c\u000f\u0002\u00a4\u00a5\u0007\f\u0002",
    "\u0002\u00a5\u00a6\u0007\u000f\u0002\u0002\u00a6\u00a7\u0007\u0010\u0002",
    "\u0002\u00a7\u00a8\u0005\u0012\n\u0002\u00a8\u001b\u0003\u0002\u0002",
    "\u0002\u00a9\u00ac\u0005\u001e\u0010\u0002\u00aa\u00ab\u0007\u0007\u0002",
    "\u0002\u00ab\u00ad\u0005\u001c\u000f\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u001d\u0003\u0002\u0002",
    "\u0002\u00ae\u00b1\u0005 \u0011\u0002\u00af\u00b0\u0007\u0012\u0002",
    "\u0002\u00b0\u00b2\u0005 \u0011\u0002\u00b1\u00af\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u001f\u0003\u0002\u0002",
    "\u0002\u00b3\u00b6\u0005\"\u0012\u0002\u00b4\u00b5\u0007\u0018\u0002",
    "\u0002\u00b5\u00b7\u0005\"\u0012\u0002\u00b6\u00b4\u0003\u0002\u0002",
    "\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7!\u0003\u0002\u0002",
    "\u0002\u00b8\u00bc\u0005&\u0014\u0002\u00b9\u00ba\u0005$\u0013\u0002",
    "\u00ba\u00bb\u0005&\u0014\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002",
    "\u00bc\u00b9\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002",
    "\u00bd#\u0003\u0002\u0002\u0002\u00be\u00bf\t\u0002\u0002\u0002\u00bf",
    "%\u0003\u0002\u0002\u0002\u00c0\u00c4\u0005*\u0016\u0002\u00c1\u00c2",
    "\u0005(\u0015\u0002\u00c2\u00c3\u0005*\u0016\u0002\u00c3\u00c5\u0003",
    "\u0002\u0002\u0002\u00c4\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003",
    "\u0002\u0002\u0002\u00c5\'\u0003\u0002\u0002\u0002\u00c6\u00c7\t\u0003",
    "\u0002\u0002\u00c7)\u0003\u0002\u0002\u0002\u00c8\u00ce\u0005.\u0018",
    "\u0002\u00c9\u00ca\u0005,\u0017\u0002\u00ca\u00cb\u0005.\u0018\u0002",
    "\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00c9\u0003\u0002\u0002\u0002",
    "\u00cd\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf+\u0003\u0002\u0002\u0002",
    "\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d2\t\u0004\u0002\u0002",
    "\u00d2-\u0003\u0002\u0002\u0002\u00d3\u00d9\u00052\u001a\u0002\u00d4",
    "\u00d5\u00050\u0019\u0002\u00d5\u00d6\u00052\u001a\u0002\u00d6\u00d8",
    "\u0003\u0002\u0002\u0002\u00d7\u00d4\u0003\u0002\u0002\u0002\u00d8\u00db",
    "\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\u0003\u0002\u0002\u0002\u00da/\u0003\u0002\u0002\u0002\u00db\u00d9",
    "\u0003\u0002\u0002\u0002\u00dc\u00dd\t\u0005\u0002\u0002\u00dd1\u0003",
    "\u0002\u0002\u0002\u00de\u00e0\t\u0006\u0002\u0002\u00df\u00de\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\u00054\u001b\u0002\u00e23\u0003\u0002",
    "\u0002\u0002\u00e3\u00e7\u0005<\u001f\u0002\u00e4\u00e6\u00056\u001c",
    "\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e9\u0003\u0002\u0002",
    "\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002",
    "\u0002\u00e85\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0007$\u0002\u0002\u00eb\u00ef\u0007,\u0002\u0002",
    "\u00ec\u00ef\u00058\u001d\u0002\u00ed\u00ef\u0005:\u001e\u0002\u00ee",
    "\u00ea\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ee",
    "\u00ed\u0003\u0002\u0002\u0002\u00ef7\u0003\u0002\u0002\u0002\u00f0",
    "\u00f9\u0007\n\u0002\u0002\u00f1\u00f6\u0005\u001c\u000f\u0002\u00f2",
    "\u00f3\u0007\u000b\u0002\u0002\u00f3\u00f5\u0005\u001c\u000f\u0002\u00f4",
    "\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f8\u0003\u0002\u0002\u0002\u00f6",
    "\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7",
    "\u00fa\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9",
    "\u00f1\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007\f\u0002\u0002\u00fc",
    "9\u0003\u0002\u0002\u0002\u00fd\u0106\u0007%\u0002\u0002\u00fe\u0103",
    "\u0005\u001c\u000f\u0002\u00ff\u0100\u0007\u000b\u0002\u0002\u0100\u0102",
    "\u0005\u001c\u000f\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0102\u0105",
    "\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104",
    "\u0003\u0002\u0002\u0002\u0104\u0107\u0003\u0002\u0002\u0002\u0105\u0103",
    "\u0003\u0002\u0002\u0002\u0106\u00fe\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109",
    "\u0007&\u0002\u0002\u0109;\u0003\u0002\u0002\u0002\u010a\u010b\u0007",
    "\n\u0002\u0002\u010b\u010c\u0005\u001c\u000f\u0002\u010c\u010d\u0007",
    "\f\u0002\u0002\u010d\u0133\u0003\u0002\u0002\u0002\u010e\u0133\u0007",
    "-\u0002\u0002\u010f\u0133\u0007\u0010\u0002\u0002\u0110\u0133\u0007",
    "\'\u0002\u0002\u0111\u0133\u0007+\u0002\u0002\u0112\u0133\u0007(\u0002",
    "\u0002\u0113\u0133\u0007,\u0002\u0002\u0114\u0115\u0007)\u0002\u0002",
    "\u0115\u0133\u0007,\u0002\u0002\u0116\u0117\u0007%\u0002\u0002\u0117",
    "\u011c\u0005\u001c\u000f\u0002\u0118\u0119\u0007\u000b\u0002\u0002\u0119",
    "\u011b\u0005\u001c\u000f\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011b",
    "\u011e\u0003\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0003\u0002\u0002\u0002\u011d\u011f\u0003\u0002\u0002\u0002\u011e",
    "\u011c\u0003\u0002\u0002\u0002\u011f\u0120\u0007&\u0002\u0002\u0120",
    "\u0133\u0003\u0002\u0002\u0002\u0121\u0129\u0007\u0005\u0002\u0002\u0122",
    "\u0123\u0007+\u0002\u0002\u0123\u0124\u0007*\u0002\u0002\u0124\u0125",
    "\u0005\u001c\u000f\u0002\u0125\u0126\u0007\u000b\u0002\u0002\u0126\u0128",
    "\u0003\u0002\u0002\u0002\u0127\u0122\u0003\u0002\u0002\u0002\u0128\u012b",
    "\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129\u012a",
    "\u0003\u0002\u0002\u0002\u012a\u012f\u0003\u0002\u0002\u0002\u012b\u0129",
    "\u0003\u0002\u0002\u0002\u012c\u012d\u0007+\u0002\u0002\u012d\u012e",
    "\u0007*\u0002\u0002\u012e\u0130\u0005\u001c\u000f\u0002\u012f\u012c",
    "\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0131",
    "\u0003\u0002\u0002\u0002\u0131\u0133\u0007\u0006\u0002\u0002\u0132\u010a",
    "\u0003\u0002\u0002\u0002\u0132\u010e\u0003\u0002\u0002\u0002\u0132\u010f",
    "\u0003\u0002\u0002\u0002\u0132\u0110\u0003\u0002\u0002\u0002\u0132\u0111",
    "\u0003\u0002\u0002\u0002\u0132\u0112\u0003\u0002\u0002\u0002\u0132\u0113",
    "\u0003\u0002\u0002\u0002\u0132\u0114\u0003\u0002\u0002\u0002\u0132\u0116",
    "\u0003\u0002\u0002\u0002\u0132\u0121\u0003\u0002\u0002\u0002\u0133=",
    "\u0003\u0002\u0002\u0002\u001fBDMOcfqu\u0080\u0090\u0095\u00ac\u00b1",
    "\u00b6\u00bc\u00c4\u00ce\u00d9\u00df\u00e7\u00ee\u00f6\u00f9\u0103\u0106",
    "\u011c\u0129\u012f\u0132"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'blueprint'", "'for'", "'{'", "'}'", "'='", 
                     "'import'", "';'", "'('", "','", "')'", "'return'", 
                     "'if'", "'is'", "'true'", "'then'", "'or'", "'else'", 
                     "'print'", "'each'", "'in'", "'while'", "'and'", "'=='", 
                     "'!='", "'>'", "'>='", "'<'", "'<='", "'+'", "'-'", 
                     "'*'", "'/'", "'!'", "'.'", "'['", "']'", "'false'", 
                     "'undefined'", "'make'", "':'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "STRING", "IDENTIFIER", 
                      "NUMBER", "Whitespace", "Newline" ];

var ruleNames =  [ "program", "classDecls", "funDecl", "importDecl", "parameter", 
                   "stmt", "retStmt", "expStmt", "blockStmt", "ifStmt", 
                   "printStmt", "forStmt", "iterationStmt", "expression", 
                   "logORExpression", "logANDExpression", "eqExpression", 
                   "eqOp", "relExpression", "relOp", "addExpression", "addOp", 
                   "multExpression", "multOp", "unaryExpression", "callMemExpression", 
                   "callMemHelperExpression", "arguments", "access", "primaryExpression" ];

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
tofuParser.T__39 = 40;
tofuParser.STRING = 41;
tofuParser.IDENTIFIER = 42;
tofuParser.NUMBER = 43;
tofuParser.Whitespace = 44;
tofuParser.Newline = 45;

tofuParser.RULE_program = 0;
tofuParser.RULE_classDecls = 1;
tofuParser.RULE_funDecl = 2;
tofuParser.RULE_importDecl = 3;
tofuParser.RULE_parameter = 4;
tofuParser.RULE_stmt = 5;
tofuParser.RULE_retStmt = 6;
tofuParser.RULE_expStmt = 7;
tofuParser.RULE_blockStmt = 8;
tofuParser.RULE_ifStmt = 9;
tofuParser.RULE_printStmt = 10;
tofuParser.RULE_forStmt = 11;
tofuParser.RULE_iterationStmt = 12;
tofuParser.RULE_expression = 13;
tofuParser.RULE_logORExpression = 14;
tofuParser.RULE_logANDExpression = 15;
tofuParser.RULE_eqExpression = 16;
tofuParser.RULE_eqOp = 17;
tofuParser.RULE_relExpression = 18;
tofuParser.RULE_relOp = 19;
tofuParser.RULE_addExpression = 20;
tofuParser.RULE_addOp = 21;
tofuParser.RULE_multExpression = 22;
tofuParser.RULE_multOp = 23;
tofuParser.RULE_unaryExpression = 24;
tofuParser.RULE_callMemExpression = 25;
tofuParser.RULE_callMemHelperExpression = 26;
tofuParser.RULE_arguments = 27;
tofuParser.RULE_access = 28;
tofuParser.RULE_primaryExpression = 29;


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

ProgramContext.prototype.importDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportDeclContext);
    } else {
        return this.getTypedRuleContext(ImportDeclContext,i);
    }
};

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
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__0) | (1 << tofuParser.T__1) | (1 << tofuParser.T__2) | (1 << tofuParser.T__5) | (1 << tofuParser.T__7) | (1 << tofuParser.T__10) | (1 << tofuParser.T__11) | (1 << tofuParser.T__13) | (1 << tofuParser.T__17) | (1 << tofuParser.T__20) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 64;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 60;
                this.importDecl();
                break;

            case 2:
                this.state = 61;
                this.funDecl();
                break;

            case 3:
                this.state = 62;
                this.classDecls();
                break;

            case 4:
                this.state = 63;
                this.stmt();
                break;

            }
            this.state = 68;
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
        this.state = 69;
        this.match(tofuParser.T__0);
        this.state = 70;
        this.match(tofuParser.T__1);
        this.state = 71;
        this.match(tofuParser.IDENTIFIER);
        this.state = 72;
        this.match(tofuParser.T__2);
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__1) | (1 << tofuParser.T__2) | (1 << tofuParser.T__7) | (1 << tofuParser.T__10) | (1 << tofuParser.T__11) | (1 << tofuParser.T__13) | (1 << tofuParser.T__17) | (1 << tofuParser.T__20) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 75;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 73;
                this.funDecl();
                break;

            case 2:
                this.state = 74;
                this.stmt();
                break;

            }
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 80;
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
        this.state = 82;
        this.match(tofuParser.IDENTIFIER);
        this.state = 83;
        this.parameter();
        this.state = 84;
        this.match(tofuParser.T__4);
        this.state = 85;
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


function ImportDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_importDecl;
    return this;
}

ImportDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclContext.prototype.constructor = ImportDeclContext;

ImportDeclContext.prototype.STRING = function() {
    return this.getToken(tofuParser.STRING, 0);
};

ImportDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterImportDecl(this);
	}
};

ImportDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitImportDecl(this);
	}
};




tofuParser.ImportDeclContext = ImportDeclContext;

tofuParser.prototype.importDecl = function() {

    var localctx = new ImportDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, tofuParser.RULE_importDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(tofuParser.T__5);
        this.state = 88;
        this.match(tofuParser.STRING);
        this.state = 89;
        this.match(tofuParser.T__6);
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
    this.enterRule(localctx, 8, tofuParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.match(tofuParser.T__7);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.IDENTIFIER) {
            this.state = 92;
            this.match(tofuParser.IDENTIFIER);
            this.state = 97;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__8) {
                this.state = 93;
                this.match(tofuParser.T__8);
                this.state = 94;
                this.match(tofuParser.IDENTIFIER);
                this.state = 99;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 102;
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
    this.enterRule(localctx, 10, tofuParser.RULE_stmt);
    try {
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.iterationStmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.blockStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 106;
            this.expStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 107;
            this.ifStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 108;
            this.printStmt();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 109;
            this.retStmt();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 110;
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
    this.enterRule(localctx, 12, tofuParser.RULE_retStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(tofuParser.T__10);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__7) | (1 << tofuParser.T__13) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 114;
            this.expression();
        }

        this.state = 117;
        this.match(tofuParser.T__6);
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
    this.enterRule(localctx, 14, tofuParser.RULE_expStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.expression();
        this.state = 120;
        this.match(tofuParser.T__6);
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
    this.enterRule(localctx, 16, tofuParser.RULE_blockStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(tofuParser.T__2);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__1) | (1 << tofuParser.T__2) | (1 << tofuParser.T__7) | (1 << tofuParser.T__10) | (1 << tofuParser.T__11) | (1 << tofuParser.T__13) | (1 << tofuParser.T__17) | (1 << tofuParser.T__20) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 123;
            this.stmt();
            this.state = 128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 129;
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
    this.enterRule(localctx, 18, tofuParser.RULE_ifStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(tofuParser.T__11);
        this.state = 132;
        this.match(tofuParser.T__7);
        this.state = 133;
        this.expression();
        this.state = 134;
        this.match(tofuParser.T__9);
        this.state = 135;
        this.match(tofuParser.T__12);
        this.state = 136;
        this.match(tofuParser.T__13);
        this.state = 137;
        this.match(tofuParser.T__14);
        this.state = 138;
        this.blockStmt();
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__15) {
            this.state = 139;
            this.match(tofuParser.T__15);
            this.state = 140;
            this.match(tofuParser.T__16);
            this.state = 141;
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
    this.enterRule(localctx, 20, tofuParser.RULE_printStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.match(tofuParser.T__17);
        this.state = 145;
        this.match(tofuParser.T__7);
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__7) | (1 << tofuParser.T__13) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 146;
            this.expression();
        }

        this.state = 149;
        this.match(tofuParser.T__9);
        this.state = 150;
        this.match(tofuParser.T__6);
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
    this.enterRule(localctx, 22, tofuParser.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
        this.match(tofuParser.T__1);
        this.state = 153;
        this.match(tofuParser.T__18);
        this.state = 154;
        this.match(tofuParser.IDENTIFIER);
        this.state = 155;
        this.match(tofuParser.T__19);
        this.state = 156;
        this.expression();
        this.state = 157;
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
    this.enterRule(localctx, 24, tofuParser.RULE_iterationStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(tofuParser.T__20);
        this.state = 160;
        this.match(tofuParser.T__7);
        this.state = 161;
        this.expression();
        this.state = 162;
        this.match(tofuParser.T__9);
        this.state = 163;
        this.match(tofuParser.T__12);
        this.state = 164;
        this.match(tofuParser.T__13);
        this.state = 165;
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
    this.enterRule(localctx, 26, tofuParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.logORExpression();
        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__4) {
            this.state = 168;
            this.match(tofuParser.T__4);
            this.state = 169;
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
    this.enterRule(localctx, 28, tofuParser.RULE_logORExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.logANDExpression();
        this.state = 175;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__15) {
            this.state = 173;
            this.match(tofuParser.T__15);
            this.state = 174;
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
    this.enterRule(localctx, 30, tofuParser.RULE_logANDExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.eqExpression();
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__21) {
            this.state = 178;
            this.match(tofuParser.T__21);
            this.state = 179;
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
    this.enterRule(localctx, 32, tofuParser.RULE_eqExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.relExpression();
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__22 || _la===tofuParser.T__23) {
            this.state = 183;
            this.eqOp();
            this.state = 184;
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
    this.enterRule(localctx, 34, tofuParser.RULE_eqOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        _la = this._input.LA(1);
        if(!(_la===tofuParser.T__22 || _la===tofuParser.T__23)) {
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
    this.enterRule(localctx, 36, tofuParser.RULE_relExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.addExpression();
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__24) | (1 << tofuParser.T__25) | (1 << tofuParser.T__26) | (1 << tofuParser.T__27))) !== 0)) {
            this.state = 191;
            this.relOp();
            this.state = 192;
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
    this.enterRule(localctx, 38, tofuParser.RULE_relOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__24) | (1 << tofuParser.T__25) | (1 << tofuParser.T__26) | (1 << tofuParser.T__27))) !== 0))) {
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
    this.enterRule(localctx, 40, tofuParser.RULE_addExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.multExpression();
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===tofuParser.T__28 || _la===tofuParser.T__29) {
            this.state = 199;
            this.addOp();
            this.state = 200;
            this.multExpression();
            this.state = 206;
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
    this.enterRule(localctx, 42, tofuParser.RULE_addOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        _la = this._input.LA(1);
        if(!(_la===tofuParser.T__28 || _la===tofuParser.T__29)) {
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
    this.enterRule(localctx, 44, tofuParser.RULE_multExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.unaryExpression();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===tofuParser.T__30 || _la===tofuParser.T__31) {
            this.state = 210;
            this.multOp();
            this.state = 211;
            this.unaryExpression();
            this.state = 217;
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
    this.enterRule(localctx, 46, tofuParser.RULE_multOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        _la = this._input.LA(1);
        if(!(_la===tofuParser.T__30 || _la===tofuParser.T__31)) {
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
    this.enterRule(localctx, 48, tofuParser.RULE_unaryExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===tofuParser.T__29 || _la===tofuParser.T__32) {
            this.state = 220;
            localctx.unaryOp = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===tofuParser.T__29 || _la===tofuParser.T__32)) {
                localctx.unaryOp = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 223;
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
    this.enterRule(localctx, 50, tofuParser.RULE_callMemExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.primaryExpression();
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (tofuParser.T__7 - 8)) | (1 << (tofuParser.T__33 - 8)) | (1 << (tofuParser.T__34 - 8)))) !== 0)) {
            this.state = 226;
            this.callMemHelperExpression();
            this.state = 231;
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


function CallAccessContext(parser, ctx) {
	CallMemHelperExpressionContext.call(this, parser);
    CallMemHelperExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallAccessContext.prototype = Object.create(CallMemHelperExpressionContext.prototype);
CallAccessContext.prototype.constructor = CallAccessContext;

tofuParser.CallAccessContext = CallAccessContext;

CallAccessContext.prototype.access = function() {
    return this.getTypedRuleContext(AccessContext,0);
};
CallAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterCallAccess(this);
	}
};

CallAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitCallAccess(this);
	}
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
    this.enterRule(localctx, 52, tofuParser.RULE_callMemHelperExpression);
    try {
        this.state = 236;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__33:
            localctx = new CallMemDotContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.match(tofuParser.T__33);
            this.state = 233;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__7:
            localctx = new CallMemArgContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.arguments();
            break;
        case tofuParser.T__34:
            localctx = new CallAccessContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 235;
            this.access();
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
    this.enterRule(localctx, 54, tofuParser.RULE_arguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(tofuParser.T__7);
        this.state = 247;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__7) | (1 << tofuParser.T__13) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 239;
            this.expression();
            this.state = 244;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__8) {
                this.state = 240;
                this.match(tofuParser.T__8);
                this.state = 241;
                this.expression();
                this.state = 246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 249;
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


function AccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = tofuParser.RULE_access;
    return this;
}

AccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AccessContext.prototype.constructor = AccessContext;

AccessContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.enterAccess(this);
	}
};

AccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof tofuListener ) {
        listener.exitAccess(this);
	}
};




tofuParser.AccessContext = AccessContext;

tofuParser.prototype.access = function() {

    var localctx = new AccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, tofuParser.RULE_access);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this.match(tofuParser.T__34);
        this.state = 260;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tofuParser.T__2) | (1 << tofuParser.T__7) | (1 << tofuParser.T__13) | (1 << tofuParser.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (tofuParser.T__32 - 33)) | (1 << (tofuParser.T__34 - 33)) | (1 << (tofuParser.T__36 - 33)) | (1 << (tofuParser.T__37 - 33)) | (1 << (tofuParser.T__38 - 33)) | (1 << (tofuParser.STRING - 33)) | (1 << (tofuParser.IDENTIFIER - 33)) | (1 << (tofuParser.NUMBER - 33)))) !== 0)) {
            this.state = 252;
            this.expression();
            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__8) {
                this.state = 253;
                this.match(tofuParser.T__8);
                this.state = 254;
                this.expression();
                this.state = 259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 262;
        this.match(tofuParser.T__35);
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
    this.enterRule(localctx, 58, tofuParser.RULE_primaryExpression);
    var _la = 0; // Token type
    try {
        this.state = 304;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case tofuParser.T__7:
            localctx = new NestedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 264;
            this.match(tofuParser.T__7);
            this.state = 265;
            this.expression();
            this.state = 266;
            this.match(tofuParser.T__9);
            break;
        case tofuParser.NUMBER:
            localctx = new NumberExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 268;
            this.match(tofuParser.NUMBER);
            break;
        case tofuParser.T__13:
            localctx = new TrueExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 269;
            this.match(tofuParser.T__13);
            break;
        case tofuParser.T__36:
            localctx = new FalseExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 270;
            this.match(tofuParser.T__36);
            break;
        case tofuParser.STRING:
            localctx = new StringExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 271;
            this.match(tofuParser.STRING);
            break;
        case tofuParser.T__37:
            localctx = new UndefinedExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 272;
            this.match(tofuParser.T__37);
            break;
        case tofuParser.IDENTIFIER:
            localctx = new IdentifierExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 273;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__38:
            localctx = new MakeExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 274;
            this.match(tofuParser.T__38);
            this.state = 275;
            this.match(tofuParser.IDENTIFIER);
            break;
        case tofuParser.T__34:
            localctx = new ListExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 276;
            this.match(tofuParser.T__34);

            this.state = 277;
            this.expression();
            this.state = 282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===tofuParser.T__8) {
                this.state = 278;
                this.match(tofuParser.T__8);
                this.state = 279;
                this.expression();
                this.state = 284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 285;
            this.match(tofuParser.T__35);
            break;
        case tofuParser.T__2:
            localctx = new MapExpressionContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 287;
            this.match(tofuParser.T__2);
            this.state = 295;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 288;
                    this.match(tofuParser.STRING);
                    this.state = 289;
                    this.match(tofuParser.T__39);
                    this.state = 290;
                    this.expression();
                    this.state = 291;
                    this.match(tofuParser.T__8); 
                }
                this.state = 297;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
            }

            this.state = 301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===tofuParser.STRING) {
                this.state = 298;
                this.match(tofuParser.STRING);
                this.state = 299;
                this.match(tofuParser.T__39);
                this.state = 300;
                this.expression();
            }

            this.state = 303;
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
