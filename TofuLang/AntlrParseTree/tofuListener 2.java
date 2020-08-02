// Generated from tofu.g4 by ANTLR 4.0
import org.antlr.v4.runtime.tree.*;
import org.antlr.v4.runtime.Token;

public interface tofuListener extends ParseTreeListener {
	void enterIdPrimExpr(tofuParser.IdPrimExprContext ctx);
	void exitIdPrimExpr(tofuParser.IdPrimExprContext ctx);

	void enterProgram(tofuParser.ProgramContext ctx);
	void exitProgram(tofuParser.ProgramContext ctx);

	void enterCallMemExpression(tofuParser.CallMemExpressionContext ctx);
	void exitCallMemExpression(tofuParser.CallMemExpressionContext ctx);

	void enterLogORExpression(tofuParser.LogORExpressionContext ctx);
	void exitLogORExpression(tofuParser.LogORExpressionContext ctx);

	void enterNumberPrimExpr(tofuParser.NumberPrimExprContext ctx);
	void exitNumberPrimExpr(tofuParser.NumberPrimExprContext ctx);

	void enterFalsePrimExpr(tofuParser.FalsePrimExprContext ctx);
	void exitFalsePrimExpr(tofuParser.FalsePrimExprContext ctx);

	void enterMakePrimExpr(tofuParser.MakePrimExprContext ctx);
	void exitMakePrimExpr(tofuParser.MakePrimExprContext ctx);

	void enterParameter(tofuParser.ParameterContext ctx);
	void exitParameter(tofuParser.ParameterContext ctx);

	void enterFunDecl(tofuParser.FunDeclContext ctx);
	void exitFunDecl(tofuParser.FunDeclContext ctx);

	void enterMultExpression(tofuParser.MultExpressionContext ctx);
	void exitMultExpression(tofuParser.MultExpressionContext ctx);

	void enterUndefPrimExpr(tofuParser.UndefPrimExprContext ctx);
	void exitUndefPrimExpr(tofuParser.UndefPrimExprContext ctx);

	void enterUnaryExpression(tofuParser.UnaryExpressionContext ctx);
	void exitUnaryExpression(tofuParser.UnaryExpressionContext ctx);

	void enterClassDecls(tofuParser.ClassDeclsContext ctx);
	void exitClassDecls(tofuParser.ClassDeclsContext ctx);

	void enterRetStmt(tofuParser.RetStmtContext ctx);
	void exitRetStmt(tofuParser.RetStmtContext ctx);

	void enterExpression(tofuParser.ExpressionContext ctx);
	void exitExpression(tofuParser.ExpressionContext ctx);

	void enterListPrimExpr(tofuParser.ListPrimExprContext ctx);
	void exitListPrimExpr(tofuParser.ListPrimExprContext ctx);

	void enterRelExpression(tofuParser.RelExpressionContext ctx);
	void exitRelExpression(tofuParser.RelExpressionContext ctx);

	void enterNestedPrimExpr(tofuParser.NestedPrimExprContext ctx);
	void exitNestedPrimExpr(tofuParser.NestedPrimExprContext ctx);

	void enterExpStmt(tofuParser.ExpStmtContext ctx);
	void exitExpStmt(tofuParser.ExpStmtContext ctx);

	void enterIterationStmt(tofuParser.IterationStmtContext ctx);
	void exitIterationStmt(tofuParser.IterationStmtContext ctx);

	void enterAnonExpression(tofuParser.AnonExpressionContext ctx);
	void exitAnonExpression(tofuParser.AnonExpressionContext ctx);

	void enterTruePrimExpr(tofuParser.TruePrimExprContext ctx);
	void exitTruePrimExpr(tofuParser.TruePrimExprContext ctx);

	void enterPrintStmt(tofuParser.PrintStmtContext ctx);
	void exitPrintStmt(tofuParser.PrintStmtContext ctx);

	void enterLogANDExpression(tofuParser.LogANDExpressionContext ctx);
	void exitLogANDExpression(tofuParser.LogANDExpressionContext ctx);

	void enterEqExpression(tofuParser.EqExpressionContext ctx);
	void exitEqExpression(tofuParser.EqExpressionContext ctx);

	void enterCallMemArg(tofuParser.CallMemArgContext ctx);
	void exitCallMemArg(tofuParser.CallMemArgContext ctx);

	void enterIfStmt(tofuParser.IfStmtContext ctx);
	void exitIfStmt(tofuParser.IfStmtContext ctx);

	void enterAddExpression(tofuParser.AddExpressionContext ctx);
	void exitAddExpression(tofuParser.AddExpressionContext ctx);

	void enterBlockStmt(tofuParser.BlockStmtContext ctx);
	void exitBlockStmt(tofuParser.BlockStmtContext ctx);

	void enterStringPrimExpr(tofuParser.StringPrimExprContext ctx);
	void exitStringPrimExpr(tofuParser.StringPrimExprContext ctx);

	void enterArguments(tofuParser.ArgumentsContext ctx);
	void exitArguments(tofuParser.ArgumentsContext ctx);

	void enterStmt(tofuParser.StmtContext ctx);
	void exitStmt(tofuParser.StmtContext ctx);

	void enterCallMemDot(tofuParser.CallMemDotContext ctx);
	void exitCallMemDot(tofuParser.CallMemDotContext ctx);
}