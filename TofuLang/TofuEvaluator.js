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

class ListValue {
    constructor(list) {
        this.list = list;
    }
}

class HashMap {
    constructor(map) {
        this.map = map;
    }
}

function declare(states, id, value) {
    states[states.length - 1][id] = value;
}

function triggerError(msg) {
    throw new Error(msg);
}

function getFromStates(states, id) {
    for (let state of states.reverse()) {
        if (state[id] !== undefined) {
            return state[id];
        }
    }
    throw new Error(`Error: ${id} not declared`);
}

class ReturnValue extends Error {
    constructor(value, ...params) {
        super(...params);
        this.value = value;
    }
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
            const closure = new ClosureValue({params: f.params, stmts: f.stmts}, states);
            declare(states, f.funcName, closure);
        });
        return states;
    }

    evalStatements(stmts, states) {
        stmts.forEach((s) => {
            if (s instanceof ast.ST_EXP) {
                states = this.evalExpressionStatement(s, states);
            } else if (s instanceof ast.ST_PRINT) {
                states = this.evalPrintStatement(s, states);
            } else if (s instanceof ast.ST_BLOCK) {
                states = this.evalBlockStatement(s, states);
            } else if (s instanceof ast.ST_IF) {
                states = this.evalIfStatement(s, states);
            } else if (s instanceof ast.ST_WHILE) {
                states = this.evalWhileStatement(s, states);
            } else {
                this.evalReturnStatement(s, states);
            }
        });
        return states;
    }

    evalReturnStatement(stmt, states) {
        const exprRes = this.evalExpression(stmt.exp, states);
        throw new ReturnValue(exprRes, "Not an Error");
    }

    evalExpressionStatement(stmt, states) {
        if (stmt.exp instanceof ast.EXP_ID) {
            try {
                getFromStates(states, stmt.exp.id);
            } catch (err) {
                states.reverse()[0][stmt.exp.id] = null;
                return states;
            }
        }
        this.evalExpression(stmt.exp, states);
        return states
    }

    evalPrintStatement(stmt, states) {
        const res = this.evalExpression(stmt.exp, states);
        if (res instanceof ListValue) {
            console.log(res.list);
            return states;
        }
        console.log(res);
        return states
    }

    evalBlockStatement(stmt, states)  {
        return this.evalStatements(stmt.stmts, states);
    }

    evalIfStatement(stmt, states) {
        const guardRes = this.evalExpression(stmt.guard, states);

        if (guardRes) {
            return this.evalBlockStatement(stmt.th, states);
        } else {
            return this.evalBlockStatement(stmt.el, states);
        }
    }

    evalWhileStatement(stmt, states)  {
        let guardRes = this.evalExpression(stmt.guard, states);

        while(guardRes) {
            this.evalBlockStatement(stmt.body, states);
            guardRes = this.evalExpression(stmt.guard, states);
        }
        return states;
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
            return exp.str.slice(1,-1);
        }
        if (exp instanceof ast.EXP_ID) {
            for (let state of states.reverse()) {
                if (state[exp.id] !== undefined) {
                    return this.evalExpression(state[exp.id], states);
                }
            }
            throw new Error(`Error: ${exp.id} is undefined`);
        }
        if (exp instanceof ast.EXP_ASSIGN) {
            const lhsExp = exp.lhs;
            const rhsExp = this.evalExpression(exp.rhs, states);

            if (lhsExp instanceof ast.EXP_ID) {
                const identifier = lhsExp.id;

                for (let state of states.reverse()) {
                    if (state[identifier] !== undefined) {
                        state[identifier] = rhsExp;
                        return rhsExp;
                    }
                }

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
            const opr = exp.opr;

            if (opr instanceof ast.BOP_AND && lft === false) {
                return false;
            }
            if (opr instanceof ast.BOP_OR && lft === true) {
                return true;
            }

            const rht = this.evalExpression(exp.rht, states);

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
        if (exp instanceof ast.EXP_CALL) {
            if (exp.func instanceof ast.EXP_ID) {
                let funcName = exp.func.id;
                if (funcName === "input") {
                    const readlineSync = require('readline-sync');

                    let userName = readlineSync.question(this.evalExpression(exp.args[0], states));
                    return userName;
                }
                if (funcName === "toNumber") {
                    return parseFloat(this.evalExpression(exp.args[0], states))
                }
                if (funcName === "toString") {
                    return `${this.evalExpression(exp.args[0], states)}`
                }
            }

            const funcExpr = this.evalExpression(exp.func, states);
            let closure;

            if (funcExpr instanceof ClosureValue) {
                closure = funcExpr;
            }
            if (funcExpr instanceof ListValue) {
                if (exp.args.length === 0) {
                    triggerError("Give a value to access list");
                    return undefined;
                }
                if (exp.args.length === 1) {
                    return funcExpr.list[this.evalExpression(exp.args[0])];
                }
                if (exp.args.length === 2) {
                    const arg0val = this.evalExpression(exp.args[0]);
                    const arg1val = this.evalExpression(exp.args[1]);
                    return funcExpr.list.slice(arg0val, arg1val);
                }
                if (exp.args.length > 2) {
                    triggerError("Incorrect number of arguments");
                    return undefined;
                }
            }
            if (funcExpr instanceof HashMap) {
                if (exp.args.length === 0) {
                    triggerError("Give a value to access the map");
                    return;
                }
                if (exp.args.length === 1) {
                    return funcExpr.map[this.evalExpression(exp.args[0])];
                }
                if (exp.args.length > 1) {
                    triggerError("HashMap access only takes 1 argument");
                    return;
                }
            }

            let newState = {};
            for (let i = 0; i < closure.code.params.length; i++) {
                newState[closure.code.params[i]] = this.evalExpression(exp.args[i], states);
            }

            let envState = [...closure.env];
            envState.push(newState);

            const funcStmt = closure.code.stmts;
            if (funcStmt instanceof ast.ST_EXP) {
                return this.evalExpression(funcStmt.exp, envState);
            }
            if (funcStmt instanceof ast.ST_IF) {
                const guardRes = this.evalExpression(funcStmt.guard, envState);
                if (guardRes) {
                    try {
                        this.evalBlockStatement(funcStmt.th, envState);
                    } catch (e) {
                        if (e instanceof ReturnValue) {
                            return e.value;
                        } else {
                            throw e;
                        }
                    }
                } else {
                    try {
                        this.evalBlockStatement(funcStmt.el, envState);
                    } catch (e) {
                        if (e instanceof ReturnValue) {
                            return e.value;
                        } else {
                            throw e;
                        }
                    }
                }
            }
            if (funcStmt instanceof ast.ST_PRINT) {
                console.log(this.evalExpression(funcStmt.exp, envState));
                return undefined;
            }
            if (funcStmt instanceof ast.ST_WHILE) {
                let guardRes = this.evalExpression(funcStmt.guard, envState);

                while(guardRes) {
                    try {
                        this.evalBlockStatement(funcStmt.body, envState);
                    } catch (e) {
                        if (e instanceof ReturnValue) {
                            return e.value;
                        } else {
                            throw e;
                        }
                    }

                    guardRes = this.evalExpression(funcStmt.guard, envState);
                }
                return undefined;
            }
            if (funcStmt instanceof ast.ST_BLOCK) {
                try {
                    this.evalBlockStatement(funcStmt, envState);
                } catch (e) {
                    if (e instanceof ReturnValue) {
                        return e.value;
                    } else {
                        throw e;
                    }
                }
                return undefined;
            }
            if (funcStmt instanceof ast.ST_RETURN) {
                if (funcStmt.exp) {
                    return this.evalExpression(funcStmt.exp, envState);
                }
                return undefined;
            }
        }
        if (exp instanceof ast.EXP_MAKE) {
            const classDecl = this.classes[exp.className];

            let newEnv = states.concat([{}]);

            const env0 = this.evalStatements(classDecl.decls, newEnv);
            const env1 = this.evalFunctions(classDecl.funcs, env0);

            return new ObjectValue(env1);
        }
        if (exp instanceof ast.EXP_DOT) {
            const object = this.evalExpression(exp.obj, states);

            if (!(object instanceof ObjectValue)) {
                triggerError("Error: trying to access an attribute of something not an object");
            }

            const fieldState = getFromStates(object.env, exp.field);

            if (fieldState instanceof ClosureValue) {
                return new ClosureValue(fieldState.code, object.env);
            }
            return fieldState;
        }
        if (exp instanceof ast.EXP_LIST) {
            return new ListValue(exp.exprs.map(exp => this.evalExpression(exp, states)));
        }
        if (exp instanceof ast.EXP_NEST) {
            return this.evalExpression(exp.exp);
        }
        if (exp instanceof ast.EXP_MAP) {
            let newMap = {};
            Object.keys(exp.map).forEach(key => {
                newMap[key.slice(1,-1)] = this.evalExpression(exp.map[key]);
            });
            return new HashMap(newMap);
        }
        return exp;
    }


}



exports.TofuEvaluator = TofuEvaluator;