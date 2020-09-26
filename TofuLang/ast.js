class BOP_PLUS {}
exports.BOP_PLUS = BOP_PLUS;

class BOP_MINUS {}
exports.BOP_MINUS = BOP_MINUS;

class BOP_TIMES {}
exports.BOP_TIMES = BOP_TIMES;

class BOP_DIVIDE {}
exports.BOP_DIVIDE = BOP_DIVIDE;

class BOP_EQ {}
exports.BOP_EQ = BOP_EQ;

class BOP_NE {}
exports.BOP_NE = BOP_NE;

class BOP_LT {}
exports.BOP_LT = BOP_LT;

class BOP_GT {}
exports.BOP_GT = BOP_GT;

class BOP_LE {}
exports.BOP_LE = BOP_LE;

class BOP_GE {}
exports.BOP_GE = BOP_GE;

class BOP_AND {}
exports.BOP_AND = BOP_AND;

class BOP_OR {}
exports.BOP_OR = BOP_OR;

class UOP_NOT {}
exports.UOP_NOT = UOP_NOT;

class UOP_MINUS {}
exports.UOP_MINUS = UOP_MINUS;

class EXP_ID {
  constructor(id, error) {
    this.id = id;
    this.error = error;
  }
}
exports.EXP_ID = EXP_ID;

class EXP_NUM {
  constructor(num, error) {
    this.num = num;
    this.error = error;
  }
}
exports.EXP_NUM = EXP_NUM;

class EXP_STR {
  constructor(str, error) {
    this.str = str;
    this.error = error;
  }
}
exports.EXP_STR = EXP_STR;

class EXP_TRUE {
  constructor(error) {
    this.error = error;
  }
}
exports.EXP_TRUE = EXP_TRUE;

class EXP_FALSE {
  constructor(error) {
    this.error = error;
  }
}
exports.EXP_FALSE = EXP_FALSE;

class EXP_UNDEFINED {
  constructor(error) {
    this.error = error;
  }
}
exports.EXP_UNDEFINED = EXP_UNDEFINED;

class EXP_BINARY {
  constructor(opr, lft, rht, error) {
    this.opr = opr;
    this.lft = lft;
    this.rht = rht;
    this.error = error;
  }
}
exports.EXP_BINARY = EXP_BINARY;

class EXP_UNARY {
  constructor(opr, opnd, error) {
    this.opr = opr;
    this.opnd = opnd;
    this.error = error;
  }
}
exports.EXP_UNARY = EXP_UNARY;

class EXP_ASSIGN {
  constructor(lhs, rhs, error) {
    this.lhs = lhs;
    this.rhs = rhs;
    this.error = error;
  }
}
exports.EXP_ASSIGN = EXP_ASSIGN;

class EXP_CALL {
  constructor(func, args, error) {
    this.func = func;
    this.args = args;
    this.error = error;
  }
}
exports.EXP_CALL = EXP_CALL;

class EXP_DOT {
  constructor(obj, field, error) {
    this.obj = obj;
    this.field = field;
    this.error = error;
  }
}
exports.EXP_DOT = EXP_DOT;

class EXP_THIS {
  constructor(error) {
    this.error = error;
  }
}
exports.EXP_THIS = EXP_THIS;

class EXP_MAKE {
  constructor(className, error) {
    this.className = className;
    this.error = error;
  }
}
exports.EXP_MAKE = EXP_MAKE;

class EXP_LIST {
  constructor(exprs, error) {
    this.exprs = exprs;
    this.error = error;
  }
}
exports.EXP_LIST = EXP_LIST;

class EXP_MAP {
  constructor(map, error) {
    this.map = map;
    this.error = error;
  }
}
exports.EXP_MAP = EXP_MAP;

class EXP_NEST {
  constructor(expr, error) {
    this.expr = expr;
    this.error = error;
  }
}
exports.EXP_NEST = EXP_NEST;

class ST_EXP {
  constructor(exp, error) {
    this.exp = exp;
    this.error = error;
  }
}
exports.ST_EXP = ST_EXP;

class ST_BLOCK {
  constructor(stmts, error) {
    this.stmts = stmts;
    this.error = error;
  }
}
exports.ST_BLOCK = ST_BLOCK;

class ST_IF {
  constructor(guard, th, el, error) {
    this.guard = guard;
    this.th = th;
    this.el = el;
    this.error = error;
  }
}
exports.ST_IF = ST_IF;

class ST_PRINT {
  constructor(exp, error) {
    this.exp = exp;
    this.error = error;
  }
}
exports.ST_PRINT = ST_PRINT;

class ST_WHILE {
  constructor(guard, body, error) {
    this.guard = guard;
    this.body = body;
    this.error = error;
  }
}
exports.ST_WHILE = ST_WHILE;

class ST_FOR {
  constructor(item, itemList, code, error) {
    this.item = item;
    this.itemList = itemList;
    this.code = code;
    this.error = error;
  }
}
exports.ST_FOR = ST_FOR;

class ST_RETURN {
  constructor(exp, error) {
    this.exp = exp;
    this.error = error;
  }
}
exports.ST_RETURN = ST_RETURN;

class FUNCTIONS {
  constructor(funcName, params, stmts) {
    this.funcName = funcName;
    this.params = params;
    this.stmts = stmts;
  }
}
exports.FUNCTIONS = FUNCTIONS;

class CLASS {
  constructor(className, funcs, decls) {
    this.className = className;
    this.funcs = funcs;
    this.decls = decls;
  }
}
exports.CLASS = CLASS;

class IMPORT {
  constructor(filename) {
    this.filename = filename;
  }
}
exports.IMPORT = IMPORT;

class PROGRAM {
  constructor(funcs, classes, stmts, imports) {
    this.imports = imports;
    this.funcs = funcs;
    this.classes = classes;
    this.stmts = stmts;
  }
}
exports.PROGRAM = PROGRAM;
