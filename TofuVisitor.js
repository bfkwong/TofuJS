const ast = require("./ast");
const tofuParser = require("./AntlrFiles/tofuParser").tofuParser;


class ErrorObject {
  constructor(line, column) {
    this.line = line;
    this.column = column;
  }
}

class TofuVisitor {
  constructor(ctxTree) {
    this.ast = this.visitProgram(ctxTree.program());
  }

  visitProgram(ctx) {
    let importDecl = this.visitImportDeclarations(ctx.importDecl());
    let classDecl = this.visitClassDeclarations(ctx.classDecls());
    let funDecl = this.visitFunctionsDeclarations(ctx.funDecl());
    let stmts = this.visitStatementDeclarations(ctx.stmt());

    return new ast.PROGRAM(funDecl, classDecl, stmts, importDecl);
  }

  visitImportDeclarations(ctx) {
    if (ctx) {
      let imports = [];
      for (let importDecl of ctx) {
        let filename = importDecl.STRING().getText();
        imports.push(new ast.IMPORT(filename));
      }
      return imports;
    }
    return [];
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

        funcs.push(new ast.FUNCTIONS(funcName, parameters, stmt));
      }
      return funcs;
    }
    return [];
  }

  visitParameter(ctx) {
    return ctx.IDENTIFIER().map((id) => id.getText());
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
    } else if (ctx.retStmt()) {
      return this.visitReturnStatement(ctx.retStmt());
    } else {
      return this.visitForStatement(ctx.forStmt());
    }
  }

  visitForStatement(ctx) {
    let id = ctx.IDENTIFIER().getText();
    let itemList = this.visitExpression(ctx.expression());
    let block = this.visitBlockStatement(ctx.blockStmt());

    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return new ast.ST_FOR(id, itemList, block, error);
  }

  visitIterationStatement(ctx) {
    let guard = this.visitExpression(ctx.expression());
    let body = this.visitBlockStatement(ctx.blockStmt());

    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return new ast.ST_WHILE(guard, body, error);
  }

  visitIfStatement(ctx) {
    let guard = this.visitExpression(ctx.expression());
    let thenSt = this.visitBlockStatement(ctx.blockStmt(0));
    let elseSt = ctx.blockStmt(1) ? this.visitBlockStatement(ctx.blockStmt(1)) : undefined;

    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return new ast.ST_IF(guard, thenSt, elseSt, error);
  }

  visitBlockStatement(ctx) {
    let statements = ctx.stmt().map((st) => this.visitStatement(st));

    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return new ast.ST_BLOCK(statements, error);
  }

  visitReturnStatement(ctx) {
    if (ctx.expression(0)) {
      let expr = this.visitExpression(ctx.expression());
      return new ast.ST_RETURN(expr);
    }
    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return new ast.ST_RETURN(undefined, error);
  }

  visitPrintStatement(ctx) {
    let expr = this.visitExpression(ctx.expression());
    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return new ast.ST_PRINT(expr, error);
  }

  visitExpressionStatement(ctx) {
    let expr = this.visitExpression(ctx.expression());
    const error = new ErrorObject(ctx.start.line, ctx.start.column);

    return new ast.ST_EXP(expr, error);
  }

  visitExpression(ctx) {
    let lhs = this.visitLogORExpression(ctx.logORExpression());
    if (ctx.expression()) {
      let rhs = this.visitExpression(ctx.expression());

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      return new ast.EXP_ASSIGN(lhs, rhs, error);
    }
    return lhs;
  }

  visitLogORExpression(ctx) {
    let lft = this.visitLogANDExpression(ctx.logANDExpression(0));

    for (let i = 1; i < ctx.logANDExpression().length; i++) {
      let rht = this.visitLogANDExpression(ctx.logANDExpression(i));

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      lft = new ast.EXP_BINARY(new ast.BOP_OR(), lft, rht, error);
    }

    return lft;
  }

  visitLogANDExpression(ctx) {
    let lft = this.visitEqExpression(ctx.eqExpression(0));

    for (let i = 1; i < ctx.eqExpression().length; i++) {
      let rht = this.visitEqExpression(ctx.eqExpression(i));

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      lft = new ast.EXP_BINARY(new ast.BOP_AND(), lft, rht, error);
    }

    return lft;
  }

  visitEqExpression(ctx) {
    let lft = this.visitRelExpression(ctx.relExpression(0));

    for (let i = 1; i < ctx.relExpression().length; i++) {
      let rht = this.visitRelExpression(ctx.relExpression(i));
      let opr = ctx.eqOp(i - 1).getText();
      let oprObj = opr === "==" ? new ast.BOP_EQ() : new ast.BOP_NE();

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      lft = new ast.EXP_BINARY(oprObj, lft, rht, error);
    }

    return lft;
  }

  visitRelExpression(ctx) {
    let lft = this.visitAddExpression(ctx.addExpression(0));

    for (let i = 1; i < ctx.addExpression().length; i++) {
      let rht = this.visitAddExpression(ctx.addExpression(i));
      let opr;

      switch (ctx.relOp(i - 1).getText()) {
        case ">":
          opr = new ast.BOP_GT();
          break;
        case "<":
          opr = new ast.BOP_LT();
          break;
        case ">=":
          opr = new ast.BOP_GE();
          break;
        default:
          opr = new ast.BOP_LE();
      }

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      lft = new ast.EXP_BINARY(opr, lft, rht, error);
    }

    return lft;
  }

  visitAddExpression(ctx) {
    let lft = this.visitMultExpression(ctx.multExpression(0));

    for (let i = 1; i < ctx.multExpression().length; i++) {
      let rht = this.visitMultExpression(ctx.multExpression(i));
      let opr = ctx.addOp(i - 1).getText();
      let oprObj = opr === "+" ? new ast.BOP_PLUS() : new ast.BOP_MINUS();

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      lft = new ast.EXP_BINARY(oprObj, lft, rht, error);
    }

    return lft;
  }

  visitMultExpression(ctx) {
    let lft = this.visitUnaryExpression(ctx.unaryExpression(0));

    for (let i = 1; i < ctx.unaryExpression().length; i++) {
      let rht = this.visitUnaryExpression(ctx.unaryExpression(i));
      let opr = ctx.multOp(i - 1).getText();
      let oprObj = opr === "*" ? new ast.BOP_TIMES() : new ast.BOP_DIVIDE();

      const error = new ErrorObject(ctx.start.line, ctx.start.column);
      lft = new ast.EXP_BINARY(oprObj, lft, rht, error);
    }

    return lft;
  }

  visitUnaryExpression(ctx) {
    let opr = ctx.unaryOp ? (ctx.unaryOp.text === "!" ? new ast.UOP_NOT() : new ast.UOP_MINUS()) : undefined;
    let expr = this.visitCallMemExpression(ctx.callMemExpression());

    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    return opr ? new ast.EXP_UNARY(opr, expr, error) : expr;
  }

  visitCallMemExpression(ctx) {
    let expr = this.visitPrimaryExpression(ctx.primaryExpression());

    const error = new ErrorObject(ctx.start.line, ctx.start.column);
    for (let cmHelper of ctx.callMemHelperExpression()) {
      if (cmHelper instanceof tofuParser.CallMemDotContext) {
        expr = new ast.EXP_DOT(expr, cmHelper.IDENTIFIER().getText(), error);
      } else if (cmHelper instanceof tofuParser.CallMemArgContext) {
        let args = cmHelper
          .arguments()
          .expression()
          .map((ex) => this.visitExpression(ex));
        expr = new ast.EXP_CALL(expr, args, error);
      } else {
        let args = cmHelper.access().expression().map((ex) => this.visitExpression(ex));
        expr = new ast.EXP_ACCESS(expr, args, error);
      }
    }
    return expr;
  }

  visitPrimaryExpression(ctx) {
    let expr;
    const error = new ErrorObject(ctx.start.line, ctx.start.column);

    if (ctx instanceof tofuParser.NumberExpressionContext) {
      let number = ctx.NUMBER().getText();
      let numParsed = number.includes(".") ? parseFloat(number) : parseInt(number);
      expr = new ast.EXP_NUM(numParsed, error);
    } else if (ctx instanceof tofuParser.TrueExpressionContext) {
      expr = new ast.EXP_TRUE(error);
    } else if (ctx instanceof tofuParser.FalseExpressionContext) {
      expr = new ast.EXP_FALSE(error);
    } else if (ctx instanceof tofuParser.StringExpressionContext) {
      expr = new ast.EXP_STR(ctx.STRING().getText(), error);
    } else if (ctx instanceof tofuParser.UndefinedExpressionContext) {
      expr = new ast.EXP_UNDEFINED(error);
    } else if (ctx instanceof tofuParser.IdentifierExpressionContext) {
      expr = new ast.EXP_ID(ctx.IDENTIFIER().getText(), error);
    } else if (ctx instanceof tofuParser.MakeExpressionContext) {
      expr = new ast.EXP_MAKE(ctx.IDENTIFIER().getText(), error);
    } else if (ctx instanceof tofuParser.ListExpressionContext) {
      let exprs = ctx.expression().map((ex) => this.visitExpression(ex));
      expr = new ast.EXP_LIST(exprs, error);
    } else if (ctx instanceof tofuParser.NestedExpressionContext) {
      let nestedExpr = this.visitExpression(ctx.expression());
      expr = nestedExpr;
    } else if (ctx instanceof tofuParser.MapExpressionContext) {
      let keys = ctx.STRING();
      let values = ctx.expression();

      let outputMap = {};
      for (let i = 0; i < keys.length; i++) {
        outputMap[keys[i].getText()] = this.visitExpression(values[i]);
      }
      expr = new ast.EXP_MAP(outputMap, error);
    } else {
      throw new Error("Error: Expression Type Unmatched");
    }

    return expr;
  }
}

exports.TofuVisitor = TofuVisitor;
