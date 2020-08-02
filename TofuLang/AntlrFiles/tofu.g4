grammar tofu;

program: (funDecl | classDecls | stmt)*;

classDecls:
	'blueprint' 'for' IDENTIFIER '{' (funDecl | stmt)* '}';

funDecl:
	IDENTIFIER parameter '=' stmt
	;

parameter: '(' (IDENTIFIER (',' IDENTIFIER)*)? ')';

stmt:
	iterationStmt
	| blockStmt
	| expStmt
	| ifStmt
	| printStmt
	| retStmt;

retStmt: 'return' (expression)?;

expStmt: expression ';';

blockStmt: '{' stmt* '}';

ifStmt:
	'if' '(' expression ')' 'is' 'true' 'then' blockStmt (
		'or' 'else' blockStmt
	)?;

printStmt: 'print' '(' expression? ')' ';';

iterationStmt: 'while' '(' expression ')' 'is' 'true' blockStmt;

expression: logORExpression ('=' expression)?;

logORExpression: logANDExpression ('or' logANDExpression)*;

logANDExpression: eqExpression ('and' eqExpression)*;

eqExpression: relExpression (eqOp relExpression)*;
eqOp: '==' | '!=';

relExpression: addExpression (relOp addExpression)*;
relOp: '>' | '>=' | '<' | '<=';

addExpression: multExpression (addOp multExpression)*;
addOp: '+' | '-';

multExpression: unaryExpression (multOp unaryExpression)*;
multOp: '*' | '/';

unaryExpression: (unaryOp=('!' | '-'))? callMemExpression;

callMemExpression: primaryExpression (callMemHelperExpression)*;

callMemHelperExpression:
	'.' IDENTIFIER				    # CallMemDot
	| arguments	                    # CallMemArg;

arguments: '(' (expression (',' expression)*)? ')';

primaryExpression:
	'(' expression ')'							# NestedExpression
	| NUMBER									# NumberExpression
	| 'true'									# TrueExpression
	| 'false'									# FalseExpression
	| STRING									# StringExpression
	| 'undefined'								# UndefinedExpression
	| IDENTIFIER								# IdentifierExpression
	| 'make' IDENTIFIER							# MakeExpression
	| '[' (expression (',' expression))? ']'	# ListExpression
	;

STRING:
	'"' (ESC | SAFECODEPOINT)* '"'
	| '\'' (ESC | SAFECODEPOINT)* '\'';

IDENTIFIER: [a-zA-Z] [0-9a-zA-Z]*;

fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

fragment ESC: '\\' (["\\/bfnrt] | UNICODE);

fragment UNICODE: 'u' HEX HEX HEX HEX;

fragment HEX: [0-9a-fA-F];

NUMBER: INT ('.' [0-9]+)? EXP?;

fragment INT: '0' | [1-9] [0-9]*;

fragment EXP: [Ee] [+\-]? INT;

Whitespace: [ \t]+ -> skip;

Newline: ('\r' '\n'? | '\n') -> skip;