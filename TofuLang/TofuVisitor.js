const ast = require("./ast");

class TofuVisitor {

    constructor(ctxTree) {
        this.visitProgram(ctxTree.program());
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
            if (Array.isArray(ctx)) {

            } else {

            }
            return classes;
        }
        return [];
    }

    visitFunctionsDeclarations(ctx) {
        if (ctx) {
            let funcs = [];
            if (Array.isArray(ctx)) {

            } else {

            }
            return funcs;
        }
        return [];
    }

    visitStatementDeclarations(ctx) {
        const chooseStatementVisitor = (ctx) => {
            if (ctx.iterationStmt()) {
                return this.visitIterationStatement(ctx);
            } else if (ctx.blockStmt()) {
                return this.visitBlockStatement(ctx);
            } else if (ctx.expStmt()) {
                return this.visitExpressionStatement(ctx);
            } else if (ctx.ifStmt()) {
                return this.visitIfStatement(ctx);
            } else if (ctx.printStmt()) {
                return this.visitPrintStatement(ctx);
            } else {
                return this.visitReturnStatement(ctx);
            }
        };

        if (ctx) {
            let stmts = [];
            if (Array.isArray(ctx)) {
                for (let stmt of ctx) {
                    let output = chooseStatementVisitor(stmt);
                    stmts.push(output);
                }
            } else {
                stmts.push(chooseStatementVisitor(ctx));
            }
            return stmts;
        }
        return [];
    }

}

exports.TofuVisitor = TofuVisitor;