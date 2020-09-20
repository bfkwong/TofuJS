const ast = require("./ast");
const stdfunc = require("./TofuStdFunc").stdfunc;

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

class FieldValue {
  constructor(field, env) {
    this.field = field;
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

const areNum = (n1, n2) => n1 instanceof NumValue && n2 instanceof NumValue;
const areBool = (n1, n2) => n1 instanceof BoolValue && n2 instanceof BoolValue;
const areStr = (n1, n2) => n1 instanceof StringValue && n2 instanceof StringValue;
const areUndef = (n1, n2) => n1 instanceof UndefinedValue && n2 instanceof UndefinedValue;

function declare(states, identifier, rhsExp) {
  for (let state of states.reverse()) {
    if (state[identifier] !== undefined) {
      state[identifier] = rhsExp;
      return rhsExp;
    }
  }
  states[states.length - 1][identifier] = rhsExp;
  return rhsExp;
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
    this.evalStatements(program.stmts, this.evalFunctions(program.funcs, this.evalClasses(program.classes, states)));
  }

  evalClasses(clss, states) {
    clss.forEach((c) => {
      this.classes[c.className] = c;
    });
    return states;
  }

  evalFunctions(funcs, states) {
    funcs.forEach((f) => {
      const closure = new ClosureValue({ params: f.params, stmts: f.stmts }, states);
      declare(states, f.funcName, closure);
    });
    return states;
  }

  evalStatements(stmts, states) {
    stmts.forEach((s) => {
      if (s instanceof ast.ST_EXP) {
        states = this.evalExpressionStatement(s, states);
      } else if (s instanceof ast.ST_PRINT) {
        const res = this.evalExpression(s.exp, states);
        states = this.evalPrintStatement(res, states);
      } else if (s instanceof ast.ST_BLOCK) {
        states = this.evalBlockStatement(s, states);
      } else if (s instanceof ast.ST_IF) {
        states = this.evalIfStatement(s, states);
      } else if (s instanceof ast.ST_WHILE) {
        states = this.evalWhileStatement(s, states);
      } else if (s instanceof ast.ST_RETURN) {
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
        states.reverse()[0][stmt.exp.id] = new UndefinedValue();
        return states;
      }
    }
    this.evalExpression(stmt.exp, states);
    return states;
  }

  evalPrintStatement(res, states) {
    function extractText(value) {
      switch (value.constructor.name) {
        case "NumValue":
          return value.num;
        case "StringValue":
          return value.str;
        case "BoolValue":
          return value.bool;
        case "UndefinedValue":
          return undefined;
        case "FieldValue":
          return extractText(getFromStates(value.env, value.field));
        default:
          return value;
      }
    }

    if (res instanceof ListValue) {
      console.log(res.list.map((v) => extractText(v)));
    } else if (res instanceof HashMap) {
      const newmap = {};
      Object.keys(res.map).forEach((key) => {
        newmap[key] = extractText(res.map[key]);
      });
      console.log(newmap);
    } else {
      console.log(extractText(res));
    }
    return states;
  }

  evalBlockStatement(stmt, states) {
    return this.evalStatements(stmt.stmts, states);
  }

  evalIfStatement(stmt, states) {
    const guardRes = this.evalExpression(stmt.guard, states);

    if (guardRes.bool) {
      return this.evalBlockStatement(stmt.th, states);
    } else {
      return this.evalBlockStatement(stmt.el, states);
    }
  }

  evalWhileStatement(stmt, states) {
    let guardRes = this.evalExpression(stmt.guard, states);

    while (guardRes.bool) {
      this.evalBlockStatement(stmt.body, states);
      guardRes = this.evalExpression(stmt.guard, states);
    }
    return states;
  }

  evalExpression(exp, states) {
    if (exp instanceof ast.EXP_TRUE) {
      return new BoolValue(true);
    }
    if (exp instanceof ast.EXP_FALSE) {
      return new BoolValue(false);
    }
    if (exp instanceof ast.EXP_UNDEFINED) {
      return new UndefinedValue();
    }
    if (exp instanceof ast.EXP_NUM) {
      return new NumValue(exp.num);
    }
    if (exp instanceof ast.EXP_STR) {
      return new StringValue(exp.str.slice(1, -1));
    }
    if (exp instanceof ast.EXP_ID) {
      return getFromStates(states, exp.id);
    }
    if (exp instanceof ast.EXP_ASSIGN) {
      const lhsExp = exp.lhs;
      const rhsExp = this.evalExpression(exp.rhs, states);

      if (lhsExp instanceof ast.EXP_ID) {
        return declare(states, lhsExp.id, rhsExp);
      }

      const fieldval = this.evalExpression(lhsExp, states);
      return declare(fieldval.env, fieldval.field, rhsExp);
    }
    if (exp instanceof ast.EXP_BINARY) {
      let lft = this.evalExpression(exp.lft, states);
      const opr = exp.opr;

      if (opr instanceof ast.BOP_AND && lft.bool === false) {
        return new BoolValue(false);
      }
      if (opr instanceof ast.BOP_OR && lft.bool === true) {
        return new BoolValue(true);
      }

      let rht = this.evalExpression(exp.rht, states);

      if (lft instanceof FieldValue) {
        lft = getFromStates(lft.env, lft.field);
      }
      if (rht instanceof FieldValue) {
        rht = getFromStates(rht.env, rht.field);
      }

      if (opr instanceof ast.BOP_PLUS) {
        if (areNum(lft, rht)) return new NumValue(lft.num + rht.num);
        else if (areStr(lft, rht)) return new StringValue(lft.str + rht.str);
        else triggerError("Error: only subtract num");
      }
      if (opr instanceof ast.BOP_MINUS) {
        return areNum(lft, rht) ? new NumValue(lft.num - rht.num) : triggerError("Error: only subtract num");
      }
      if (opr instanceof ast.BOP_TIMES) {
        return areNum(lft, rht) ? new NumValue(lft.num * rht.num) : triggerError("Error: only subtract num");
      }
      if (opr instanceof ast.BOP_DIVIDE) {
        return areNum(lft, rht) ? new NumValue(lft.num / rht.num) : triggerError("Error: only subtract num");
      }
      if (opr instanceof ast.BOP_AND) {
        return areBool(lft, rht) ? lft.bool && rht.bool : triggerError("Error: only use logical `and` on booleans");
      }
      if (opr instanceof ast.BOP_OR) {
        return areBool(lft, rht) ? lft.bool || rht.bool : triggerError("Error: only use logical `or` on booleans");
      }
      if (opr instanceof ast.BOP_LT) {
        if (areNum(lft, rht)) return new BoolValue(lft.num < rht.num);
        else if (areStr(lft, rht)) return new BoolValue(lft.str < rht.str);
        else triggerError("Error: only use comparator on string or num");
      }
      if (opr instanceof ast.BOP_LE) {
        if (areNum(lft, rht)) return new BoolValue(lft.num <= rht.num);
        else if (areStr(lft, rht)) return new BoolValue(lft.str <= rht.str);
        else triggerError("Error: only use comparator on string or num");
      }
      if (opr instanceof ast.BOP_GT) {
        if (areNum(lft, rht)) return new BoolValue(lft.num > rht.num);
        else if (areStr(lft, rht)) return new BoolValue(lft.str > rht.str);
        else triggerError("Error: only use comparator on string or num");
      }
      if (opr instanceof ast.BOP_GE) {
        if (areNum(lft, rht)) return new BoolValue(lft.num >= rht.num);
        else if (areStr(lft, rht)) return new BoolValue(lft.str >= rht.str);
        else triggerError("Error: only use comparator on string or num");
      }
      if (opr instanceof ast.BOP_EQ) {
        if (areBool(lft, rht)) return new BoolValue(lft.bool === rht.bool);
        else if (areNum(lft, rht)) return new BoolValue(lft.num === rht.num);
        else if (areStr(lft, rht)) return new BoolValue(lft.str === rht.str);
        else if (areUndef(lft, rht)) return new BoolValue(true);
        else return new BoolValue(lft === rht);
      }
      if (opr instanceof ast.BOP_NE) {
        if (areBool(lft, rht)) return new BoolValue(lft.bool !== rht.bool);
        else if (areNum(lft, rht)) return new BoolValue(lft.num !== rht.num);
        else if (areStr(lft, rht)) return new BoolValue(lft.str !== rht.str);
        else if (areUndef(lft, rht)) return new BoolValue(false);
        else return new BoolValue(lft !== rht);
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
        return opndRes instanceof BoolValue
          ? new BoolValue(!opndRes.bool)
          : triggerError("Error: can only use `!` on booleans");
      }
      throw new Error("Error: unexpected unary operators");
    }
    if (exp instanceof ast.EXP_CALL) {
      if (exp.func instanceof ast.EXP_ID && Object.keys(stdfunc).includes(exp.func.id)) {
        let args = exp.args.map((e) => this.evalExpression(e, states));
        return stdfunc[exp.func.id](...args);
      }

      const funcExpr = this.evalExpression(exp.func, states);
      let closure;

      if (funcExpr instanceof ClosureValue) {
        closure = funcExpr;
      }
      if (funcExpr instanceof ListValue) {
        if (exp.args.length === 0) {
          triggerError("Give a value to access list");
        }
        if (exp.args.length === 1) {
          return funcExpr.list[this.evalExpression(exp.args[0]).num];
        }
        if (exp.args.length === 2) {
          const arg0val = this.evalExpression(exp.args[0]).num;
          const arg1val = this.evalExpression(exp.args[1]).num;
          return new ListValue(funcExpr.list.slice(arg0val, arg1val));
        }
        if (exp.args.length > 2) {
          triggerError("Incorrect number of arguments");
        }
      }
      if (funcExpr instanceof HashMap) {
        if (exp.args.length === 0) {
          triggerError("Give a value to access the map");
        }
        if (exp.args.length === 1) {
          return funcExpr.map[this.evalExpression(exp.args[0]).str];
        }
        if (exp.args.length > 1) {
          triggerError("HashMap access only takes 1 argument");
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

      try {
        this.evalStatements([funcStmt], envState);
      } catch (e) {
        if (e instanceof ReturnValue) {
          return e.value;
        } else {
          throw e;
        }
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

      return new FieldValue(exp.field, object.env);
    }
    if (exp instanceof ast.EXP_LIST) {
      return new ListValue(exp.exprs.map((exp) => this.evalExpression(exp, states)));
    }
    if (exp instanceof ast.EXP_NEST) {
      return this.evalExpression(exp.exp);
    }
    if (exp instanceof ast.EXP_MAP) {
      let newMap = {};
      Object.keys(exp.map).forEach((key) => {
        newMap[key.slice(1, -1)] = this.evalExpression(exp.map[key]);
      });
      return new HashMap(newMap);
    }
    return exp;
  }
}

exports.TofuEvaluator = TofuEvaluator;
