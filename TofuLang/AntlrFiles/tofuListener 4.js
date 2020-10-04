// Generated from tofu.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by tofuParser.
function tofuListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

tofuListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
tofuListener.prototype.constructor = tofuListener;

// Enter a parse tree produced by tofuParser#program.
tofuListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by tofuParser#program.
tofuListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by tofuParser#class.
tofuListener.prototype.enterClass = function(ctx) {
};

// Exit a parse tree produced by tofuParser#class.
tofuListener.prototype.exitClass = function(ctx) {
};


// Enter a parse tree produced by tofuParser#funDecl.
tofuListener.prototype.enterFunDecl = function(ctx) {
};

// Exit a parse tree produced by tofuParser#funDecl.
tofuListener.prototype.exitFunDecl = function(ctx) {
};


// Enter a parse tree produced by tofuParser#parameter.
tofuListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by tofuParser#parameter.
tofuListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by tofuParser#stmt.
tofuListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#stmt.
tofuListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#retStmt.
tofuListener.prototype.enterRetStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#retStmt.
tofuListener.prototype.exitRetStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#expStmt.
tofuListener.prototype.enterExpStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#expStmt.
tofuListener.prototype.exitExpStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#blockStmt.
tofuListener.prototype.enterBlockStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#blockStmt.
tofuListener.prototype.exitBlockStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#ifStmt.
tofuListener.prototype.enterIfStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#ifStmt.
tofuListener.prototype.exitIfStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#printStmt.
tofuListener.prototype.enterPrintStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#printStmt.
tofuListener.prototype.exitPrintStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#forStmt.
tofuListener.prototype.enterForStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#forStmt.
tofuListener.prototype.exitForStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#iterationStmt.
tofuListener.prototype.enterIterationStmt = function(ctx) {
};

// Exit a parse tree produced by tofuParser#iterationStmt.
tofuListener.prototype.exitIterationStmt = function(ctx) {
};


// Enter a parse tree produced by tofuParser#expression.
tofuListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#expression.
tofuListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#logORExpression.
tofuListener.prototype.enterLogORExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#logORExpression.
tofuListener.prototype.exitLogORExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#logANDExpression.
tofuListener.prototype.enterLogANDExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#logANDExpression.
tofuListener.prototype.exitLogANDExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#eqExpression.
tofuListener.prototype.enterEqExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#eqExpression.
tofuListener.prototype.exitEqExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#relExpression.
tofuListener.prototype.enterRelExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#relExpression.
tofuListener.prototype.exitRelExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#addExpression.
tofuListener.prototype.enterAddExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#addExpression.
tofuListener.prototype.exitAddExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#multExpression.
tofuListener.prototype.enterMultExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#multExpression.
tofuListener.prototype.exitMultExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#unaryExpression.
tofuListener.prototype.enterUnaryExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#unaryExpression.
tofuListener.prototype.exitUnaryExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#callMemExpression.
tofuListener.prototype.enterCallMemExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#callMemExpression.
tofuListener.prototype.exitCallMemExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#CallMemDot.
tofuListener.prototype.enterCallMemDot = function(ctx) {
};

// Exit a parse tree produced by tofuParser#CallMemDot.
tofuListener.prototype.exitCallMemDot = function(ctx) {
};


// Enter a parse tree produced by tofuParser#CallMemArg.
tofuListener.prototype.enterCallMemArg = function(ctx) {
};

// Exit a parse tree produced by tofuParser#CallMemArg.
tofuListener.prototype.exitCallMemArg = function(ctx) {
};


// Enter a parse tree produced by tofuParser#arguments.
tofuListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by tofuParser#arguments.
tofuListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by tofuParser#NestedExpression.
tofuListener.prototype.enterNestedExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#NestedExpression.
tofuListener.prototype.exitNestedExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#NumberExpression.
tofuListener.prototype.enterNumberExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#NumberExpression.
tofuListener.prototype.exitNumberExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#TrueExpression.
tofuListener.prototype.enterTrueExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#TrueExpression.
tofuListener.prototype.exitTrueExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#FalseExpression.
tofuListener.prototype.enterFalseExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#FalseExpression.
tofuListener.prototype.exitFalseExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#StringExpression.
tofuListener.prototype.enterStringExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#StringExpression.
tofuListener.prototype.exitStringExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#UndefinedExpression.
tofuListener.prototype.enterUndefinedExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#UndefinedExpression.
tofuListener.prototype.exitUndefinedExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#IdentifierExpression.
tofuListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#IdentifierExpression.
tofuListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#MakeExpression.
tofuListener.prototype.enterMakeExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#MakeExpression.
tofuListener.prototype.exitMakeExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#ListExpression.
tofuListener.prototype.enterListExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#ListExpression.
tofuListener.prototype.exitListExpression = function(ctx) {
};


// Enter a parse tree produced by tofuParser#MapExpression.
tofuListener.prototype.enterMapExpression = function(ctx) {
};

// Exit a parse tree produced by tofuParser#MapExpression.
tofuListener.prototype.exitMapExpression = function(ctx) {
};



exports.tofuListener = tofuListener;