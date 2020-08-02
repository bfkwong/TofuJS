const util = require('util');
const ast = require("./ast");

class NumValue {
    constructor(num) {
        this.num = num;
    }
}

class StringValue {
    constructor(str) {
        this.str = str;
    }
}

class BoolValue {
    constructor(bool) {
        this.bool = bool;
    }
}

class UndefinedValue {}

class ClosureValue {
    constructor(code, env) {
        this.code = code;
        this.env = env;
    }
}

class ObjectValue {
    constructor(env) {
        this.env = env;
    }
}

class BoundedMethodValue {
    constructor(object, closure) {
        this.object = object;
        this.closure = closure;
    }
}

function declare(states, id, value) {
    if (states[states.length - 1][id]) {
        throw new Error(`Error: ${id} is already declared in local scope`)
    } else {
        states[states.length - 1][id] = value;
    }
}

function triggerError(msg) {
    throw new Error(msg);
}

class TofuEvaluator {

    constructor(ast) {
        this.ast = ast;
        this.classes = {};
        this.evalProgram(ast, [{}]);
    }

    evalProgram(program, states) {
        this.evalStatements(program.stmts,
            this.evalFunctions(program.funcs,
                this.evalClasses(program.classes,
                    states
                )
            )
        );
    }

    evalClasses(clss, states) {
        clss.forEach((c) => {
            this.classes[c.className] = c;
        });
        return states;
    }


    evalFunctions(funcs, states) {
        funcs.forEach((f) => {
            declare(states, f.funcName, f);
        });
        return states;
    }

    evalStatements(stmts, states) {
        // console.log(util.inspect(states, false, null, true));
        stmts.forEach((s) => {
            if (s instanceof ast.ST_EXP) {
                this.evalExpressionStatement(s, states);
            } else if (s instanceof ast.ST_PRINT) {
                this.evalPrintStatement(s, states);
            }
        });
        return states;
    }

    evalExpressionStatement(stmt, states) {
        this.evalExpression(stmt.exp, states);
        return states
    }

    evalPrintStatement(stmt, states) {
        const res = this.evalExpression(stmt.exp, states);
        console.log(res);
        return states
    }

    evalExpression(exp, states) {
        if (exp instanceof ast.EXP_TRUE) {
            return true;
        }
        if (exp instanceof ast.EXP_FALSE) {
            return false;
        }
        if (exp instanceof ast.EXP_UNDEFINED) {
            return undefined;
        }
        if (exp instanceof ast.EXP_NUM) {
            return exp.num;
        }
        if (exp instanceof ast.EXP_STR) {
            return exp.str;
        }
        if (exp instanceof ast.EXP_ID) {
            for (let state of states.reverse()) {
                if (state[exp.id] !== undefined) {
                    return state[exp.id];
                }
            }
            throw new Error(`Error: ${exp.id} is undefined`);
        }
        if (exp instanceof ast.EXP_ASSIGN) {
            const lhsExp = exp.lhs;
            const rhsExp = this.evalExpression(exp.rhs,states);

            if (lhsExp instanceof ast.EXP_ID) {
                const identifier = lhsExp.id;
                declare(states, identifier, rhsExp);
            }
            return rhsExp;
        }
        if (exp instanceof ast.EXP_BINARY) {
            const areNum = (n1, n2) => typeof n1 === "number" && typeof n2 === "number";
            const areBool = (n1, n2) => typeof n1 === "boolean" && typeof n2 === "boolean";
            const areNumOrStr = (n1, n2) =>
                ["number", "string"].includes(typeof n1) && ["number", "string"].includes(typeof n2);

            const lft = this.evalExpression(exp.lft, states);
            const rht = this.evalExpression(exp.rht, states);
            const opr = exp.opr;

            if (opr instanceof ast.BOP_PLUS) {
                return areNumOrStr(lft, rht) ? lft + rht : triggerError("Error: only subtract num");
            }
            if (opr instanceof ast.BOP_MINUS) {
                return areNum(lft, rht) ? lft - rht : triggerError("Error: only subtract num");
            }
            if (opr instanceof ast.BOP_TIMES) {
                return areNum(lft, rht) ? lft * rht : triggerError("Error: only subtract num");
            }
            if (opr instanceof ast.BOP_DIVIDE) {
                return areNum(lft, rht) ? lft - rht : triggerError("Error: only subtract num");
            }
            if (opr instanceof ast.BOP_AND) {
                return areBool(lft, rht) ? lft && rht : triggerError("Error: only use logical `and` on booleans");
            }
            if (opr instanceof ast.BOP_OR) {
                return areBool(lft, rht) ? lft || rht : triggerError("Error: only use logical `or` on booleans");
            }
            if (opr instanceof ast.BOP_LT) {
                return areNumOrStr(lft, rht) ? lft < rht : triggerError("Error: only use comparator on string or num");
            }
            if (opr instanceof ast.BOP_LE) {
                return areNumOrStr(lft, rht) ? lft <= rht : triggerError("Error: only use comparator on string or num");
            }
            if (opr instanceof ast.BOP_GT) {
                return areNumOrStr(lft, rht) ? lft > rht : triggerError("Error: only use comparator on string or num");
            }
            if (opr instanceof ast.BOP_GE) {
                return areNumOrStr(lft, rht) ? lft >= rht : triggerError("Error: only use comparator on string or num");
            }
            if (opr instanceof ast.BOP_EQ) {
                return lft === rht;
            }
            if (opr instanceof ast.BOP_NE) {
                return lft !== rht;
            }
            throw new Error("Error: unexpected binary operator");
        }
        if (exp instanceof ast.EXP_UNARY) {
            let opndRes = this.evalExpression(exp.opnd, states);
            let opr = exp.opr;

            if (opr instanceof ast.UOP_MINUS) {
                return typeof opndRes === "number" ? -1 * opndRes : triggerError("Error: can only use `-` on number");
            }
            if (opr instanceof ast.UOP_NOT) {
                return typeof opndRes === "boolean" ? !opndRes : triggerError("Error: can only use `!` on booleans");
            }
            throw new Error("Error: unexpected unary operators");
        }
    }

}



exports.TofuEvaluator = TofuEvaluator;