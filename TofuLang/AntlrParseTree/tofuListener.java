// Generated from tofu.g4 by ANTLR 4.8
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link tofuParser}.
 */
public interface tofuListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link tofuParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(tofuParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(tofuParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by the {@code class}
	 * labeled alternative in {@link tofuParser#classDecls}.
	 * @param ctx the parse tree
	 */
	void enterClass(tofuParser.ClassContext ctx);
	/**
	 * Exit a parse tree produced by the {@code class}
	 * labeled alternative in {@link tofuParser#classDecls}.
	 * @param ctx the parse tree
	 */
	void exitClass(tofuParser.ClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#funDecl}.
	 * @param ctx the parse tree
	 */
	void enterFunDecl(tofuParser.FunDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#funDecl}.
	 * @param ctx the parse tree
	 */
	void exitFunDecl(tofuParser.FunDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(tofuParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(tofuParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterStmt(tofuParser.StmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitStmt(tofuParser.StmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#retStmt}.
	 * @param ctx the parse tree
	 */
	void enterRetStmt(tofuParser.RetStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#retStmt}.
	 * @param ctx the parse tree
	 */
	void exitRetStmt(tofuParser.RetStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#expStmt}.
	 * @param ctx the parse tree
	 */
	void enterExpStmt(tofuParser.ExpStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#expStmt}.
	 * @param ctx the parse tree
	 */
	void exitExpStmt(tofuParser.ExpStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#blockStmt}.
	 * @param ctx the parse tree
	 */
	void enterBlockStmt(tofuParser.BlockStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#blockStmt}.
	 * @param ctx the parse tree
	 */
	void exitBlockStmt(tofuParser.BlockStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(tofuParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(tofuParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#printStmt}.
	 * @param ctx the parse tree
	 */
	void enterPrintStmt(tofuParser.PrintStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#printStmt}.
	 * @param ctx the parse tree
	 */
	void exitPrintStmt(tofuParser.PrintStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void enterForStmt(tofuParser.ForStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void exitForStmt(tofuParser.ForStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#iterationStmt}.
	 * @param ctx the parse tree
	 */
	void enterIterationStmt(tofuParser.IterationStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#iterationStmt}.
	 * @param ctx the parse tree
	 */
	void exitIterationStmt(tofuParser.IterationStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(tofuParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(tofuParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#logORExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogORExpression(tofuParser.LogORExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#logORExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogORExpression(tofuParser.LogORExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#logANDExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogANDExpression(tofuParser.LogANDExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#logANDExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogANDExpression(tofuParser.LogANDExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#eqExpression}.
	 * @param ctx the parse tree
	 */
	void enterEqExpression(tofuParser.EqExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#eqExpression}.
	 * @param ctx the parse tree
	 */
	void exitEqExpression(tofuParser.EqExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#relExpression}.
	 * @param ctx the parse tree
	 */
	void enterRelExpression(tofuParser.RelExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#relExpression}.
	 * @param ctx the parse tree
	 */
	void exitRelExpression(tofuParser.RelExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#addExpression}.
	 * @param ctx the parse tree
	 */
	void enterAddExpression(tofuParser.AddExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#addExpression}.
	 * @param ctx the parse tree
	 */
	void exitAddExpression(tofuParser.AddExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#multExpression}.
	 * @param ctx the parse tree
	 */
	void enterMultExpression(tofuParser.MultExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#multExpression}.
	 * @param ctx the parse tree
	 */
	void exitMultExpression(tofuParser.MultExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#unaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryExpression(tofuParser.UnaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#unaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryExpression(tofuParser.UnaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#callMemExpression}.
	 * @param ctx the parse tree
	 */
	void enterCallMemExpression(tofuParser.CallMemExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#callMemExpression}.
	 * @param ctx the parse tree
	 */
	void exitCallMemExpression(tofuParser.CallMemExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code CallMemDot}
	 * labeled alternative in {@link tofuParser#callMemHelperExpression}.
	 * @param ctx the parse tree
	 */
	void enterCallMemDot(tofuParser.CallMemDotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code CallMemDot}
	 * labeled alternative in {@link tofuParser#callMemHelperExpression}.
	 * @param ctx the parse tree
	 */
	void exitCallMemDot(tofuParser.CallMemDotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code CallMemArg}
	 * labeled alternative in {@link tofuParser#callMemHelperExpression}.
	 * @param ctx the parse tree
	 */
	void enterCallMemArg(tofuParser.CallMemArgContext ctx);
	/**
	 * Exit a parse tree produced by the {@code CallMemArg}
	 * labeled alternative in {@link tofuParser#callMemHelperExpression}.
	 * @param ctx the parse tree
	 */
	void exitCallMemArg(tofuParser.CallMemArgContext ctx);
	/**
	 * Enter a parse tree produced by {@link tofuParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(tofuParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link tofuParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(tofuParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NestedExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterNestedExpression(tofuParser.NestedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NestedExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitNestedExpression(tofuParser.NestedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NumberExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterNumberExpression(tofuParser.NumberExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NumberExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitNumberExpression(tofuParser.NumberExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TrueExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterTrueExpression(tofuParser.TrueExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TrueExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitTrueExpression(tofuParser.TrueExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code FalseExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterFalseExpression(tofuParser.FalseExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code FalseExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitFalseExpression(tofuParser.FalseExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code StringExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterStringExpression(tofuParser.StringExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code StringExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitStringExpression(tofuParser.StringExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code UndefinedExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterUndefinedExpression(tofuParser.UndefinedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code UndefinedExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitUndefinedExpression(tofuParser.UndefinedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IdentifierExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierExpression(tofuParser.IdentifierExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IdentifierExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierExpression(tofuParser.IdentifierExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MakeExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterMakeExpression(tofuParser.MakeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MakeExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitMakeExpression(tofuParser.MakeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ListExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterListExpression(tofuParser.ListExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ListExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitListExpression(tofuParser.ListExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MapExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterMapExpression(tofuParser.MapExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MapExpression}
	 * labeled alternative in {@link tofuParser#primaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitMapExpression(tofuParser.MapExpressionContext ctx);
}