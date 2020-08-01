const ast = require("./ast");
const TofuParser = require('./AntlrFiles/tofuParser');


class TofuVisitor {

    constructor(ctxTree) {
        this.ast = this.visitProgram(ctxTree.program());
    }

    visitProgram(ctx) {
        let classDecl = this.visitClassDeclarations(ctx.classDecls());
        let funDecl = this.visitFunctionsDeclarations(ctx.funDecl());
        let stmts = this.visitStatementDeclarations(ctx.stmt());

        return new ast.PROGRAM(funDecl, classDecl, stmts);
    }

    visitClassDeclarations(ctx) {
        if (ctx) {
            let classes = [];
            for (let clss of ctx) {
                let className = clss.IDENTIFIER().getText();
                let funcDecls = this.visitFunctionsDeclarations(clss.funDecl());
                let stmtDecls = this.visitStatementDeclarations(clss.stmt());

                classes.push(new ast.CLASS(className, funcDecls, stmtDecls)); 
            }
            return classes;
        }
        return [];
    }

    visitFunctionsDeclarations(ctx) {
        if (ctx) {
            let funcs = [];
            for (let func of ctx) {
                let funcName = func.IDENTIFIER().getText();
                let parameters = this.visitParameter(func.parameter());
                let stmt = this.visitStatement(func.stmt());

                funcs.push(new ast.FUNCTIONS(funcName, parameters, stmt))
            }
            return funcs;
        }
        return [];
    }

    visitParameter(ctx) {
        return ctx.IDENTIFIER().map(id => this.visitPrimaryExpression(id));
    }

    visitStatementDeclarations(ctx) {
        if (ctx) {
            let stmts = [];
            for (let stmt of ctx) {
                stmts.push(this.visitStatement(stmt));
            }
            return stmts;
        }
        return [];
    }

    visitStatement(ctx) {
        if (ctx.iterationStmt()) {
            return this.visitIterationStatement(ctx.iterationStmt());
        } else if (ctx.blockStmt()) {
            return this.visitBlockStatement(ctx.blockStmt());
        } else if (ctx.expStmt()) {
            return this.visitExpressionStatement(ctx.expStmt());
        } else if (ctx.ifStmt()) {
            return this.visitIfStatement(ctx.ifStmt());
        } else if (ctx.printStmt()) {
            return this.visitPrintStatement(ctx.printStmt());
        } else {
            return this.visitReturnStatement(ctx.retStmt());
        }
    }

    visitIterationStatement(ctx) {
        let guard = this.visitExpression(ctx.expression());
        let body = this.visitBlockStatement(ctx.blockStmt());

        return new ast.ST_WHILE(guard, body);
    }

    visitIfStatement(ctx) {
        let guard = this.visitExpression(ctx.expression());
        let thenSt = this.visitBlockStatement(ctx.blockStmt(0));
        let elseSt = ctx.blockStmt(1) ? this.visitBlockStatement(ctx.blockStmt(1)) : undefined;

        return elseSt ? new ast.ST_IF(guard, thenSt, elseSt) : new ast.ST_IF(guard, thenSt);
    }

    visitBlockStatement(ctx) {
        let statements = ctx.stmt().map((st) => this.visitStatement(st));
        return new ast.ST_BLOCK(statements);
    }

    visitReturnStatement(ctx) {
        if (ctx.expression(0)) {
            let expr = this.visitExpression(ctx.expression());
            return new ast.ST_RETURN(expr);
        }
        return new ast.ST_RETURN();
    }

    visitPrintStatement(ctx) {
        let expr = this.visitExpression(ctx.expression());
        return new ast.ST_PRINT(expr);
    }

    visitExpressionStatement(ctx) {
        let expr = this.visitExpression(ctx.expression());
        return new ast.ST_EXP(expr);
    }

    visitExpression(ctx) {
        let lhs = this.visitLogORExpression(ctx.logORExpression());
        if (ctx.expression()) {
            let rhs = this.visitExpression(ctx.expression());
            return new ast.EXP_ASSIGN(lhs, rhs);
        }
        return lhs;
    }

    visitLogORExpression(ctx) {
        if (ctx.logANDExpression(1)) {
            let lft = this.visitLogANDExpression(ctx.logANDExpression(0));
            let rht = this.visitLogANDExpression(ctx.logANDExpression(1));

            return new ast.EXP_BINARY(new ast.BOP_OR, lft, rht);
        }
        return this.visitLogANDExpression(ctx.logANDExpression(0));
    }

    visitLogANDExpression(ctx) {
        if (ctx.eqExpression(1)) {
            let lft = this.visitEqExpression(ctx.eqExpression(0));
            let rht = this.visitEqExpression(ctx.eqExpression(1));

            return new ast.EXP_BINARY(new ast.BOP_AND, lft, rht);
        }
        return this.visitEqExpression(ctx.eqExpression(0))
    }

    visitEqExpression(ctx)  {
        if (ctx.relExpression(1)) {
            let lft = this.visitRelExpression(ctx.relExpression(0));
            let rht = this.visitRelExpression(ctx.relExpression(1));
            let opr = ctx.eqOp.text === "==" ? new ast.BOP_EQ : new ast.BOP_NE;

            return new ast.EXP_BINARY(opr, lft, rht);
        }
        return this.visitRelExpression(ctx.relExpression(0));
    }
    
    visitRelExpression(ctx) {
        if (ctx.addExpression(1)) {
            let lft = this.visitAddExpression(ctx.addExpression(0));
            let rht = this.visitAddExpression(ctx.addExpression(1)); 
            let opr; 
            
            switch (ctx.relOp.text) {
                case ">":
                    opr = new ast.BOP_GT;
                    break;
                case "<":
                    opr = new ast.BOP_LT;
                    break;
                case ">=":
                    opr = new ast.BOP_GE;
                    break;
                default:
                    opr = new ast.BOP_LE;
            }

            return new ast.EXP_BINARY(opr, lft, rht);
        }
        return this.visitAddExpression(ctx.addExpression(0));
    }

    visitAddExpression(ctx) {
        if (ctx.multExpression(1)) {
            let lft = this.visitMultExpression(ctx.multExpression(0));
            let rht = this.visitMultExpression(ctx.multExpression(1));
            let opr = ctx.addOp.text === "+" ? new ast.BOP_PLUS : new ast.BOP_MINUS;

            return new ast.EXP_BINARY(opr, lft, rht);
        }
        return this.visitMultExpression(ctx.multExpression(0));
    }

    visitMultExpression(ctx) {
        if (ctx.unaryExpression(1)) {
            let lft = this.visitUnaryExpression(ctx.unaryExpression(0));
            let rht = this.visitUnaryExpression(ctx.unaryExpression(1));
            let opr = ctx.multOp.text === "*" ? new ast.BOP_TIMES : new ast.BOP_DIVIDE;

            return new ast.EXP_BINARY(opr, lft, rht);
        }
        return this.visitUnaryExpression(ctx.unaryExpression(0));
    }

    visitUnaryExpression(ctx) {
        let opr = ctx.unaryOp ? (ctx.unaryOp.text === "!" ? new ast.UOP_NOT : new ast.UOP_MINUS) : undefined;
        let expr = this.visitCallMemExpression(ctx.callMemExpression());
        return opr ? new ast.EXP_UNARY(opr, expr) : expr;
    }

    visitCallMemExpression(ctx) {
        return this.visitPrimaryExpression(ctx.primaryExpression());
    }

    visitPrimaryExpression(ctx) {
        let expr;
        switch(ctx.constructor.name) {
            case "NumberExpressionContext":
                let number = ctx.NUMBER().getText();
                let numParsed = number.includes(".") ? parseFloat(number) : parseInt(number);
                expr = new ast.EXP_NUM(numParsed);
                break;
            case "TrueExpressionContext":
                expr = new ast.EXP_TRUE();
                break;
            case "FalseExpressionContext":
                expr = new ast.EXP_FALSE();
                break;
            case "StringExpressionContext":
                expr = new ast.EXP_STR(ctx.STRING().getText());
                break;
            case "UndefinedExpressionContext":
                expr = new ast.EXP_UNDEFINED();
                break;
            case "IdentifierExpressionContext":
                expr = new ast.EXP_ID(ctx.IDENTIFIER().getText());
                break;
            case "MakeExpressionContext":
                expr = new ast.EXP_MAKE(ctx.IDENTIFIER().getText());
                break;
            default:
                throw new Error("Error: Expression Type Unmatched");
        }
        return expr;
    }
}




exports.TofuVisitor = TofuVisitor;