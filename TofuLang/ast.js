class BOP_PLUS {}
exports.BOP_PLUS = BOP_PLUS;

class BOP_MINUS {}
exports.BOP_MINUS = BOP_MINUS;

class BOP_TIMES {}
exports.BOP_TIMES = BOP_TIMES;

class BOP_DIVIDE {}
exports.BOP_DIVIDE = BOP_DIVIDE;

class BOP_MOD {}
exports.BOP_MOD = BOP_MOD;

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
    constructor(id) {
        this.id = id;
    }
}
exports.EXP_ID = EXP_ID;

class EXP_NUM {
    constructor(num) {
        this.num = num;
    }
}
exports.EXP_NUM = EXP_NUM;

class EXP_STR {
    constructor(str) {
        this.str = str;
    }
}
exports.EXP_STR = EXP_STR;

class EXP_TRUE {}
exports.EXP_TRUE = EXP_TRUE;

class EXP_FALSE {}
exports.EXP_FALSE = EXP_FALSE;

class EXP_UNDEFINED {}
exports.EXP_UNDEFINED = EXP_UNDEFINED;

class EXP_BINARY {
    constructor(opr, lft, rht) {
        this.opr = opr;
        this.lft = lft;
        this.rht = rht;
    }
}
exports.EXP_BINARY = EXP_BINARY;

class EXP_UNARY {
    constructor(opr, opnd) {
        this.opr = opr;
        this.opnd = opn;
    }
}
exports.EXP_UNARY = EXP_UNARY;

class EXP_ASSIGN {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}
exports.EXP_ASSIGN = EXP_ASSIGN;

class EXP_CALL {
    constructor(func, args) {
        this.func = func;
        this.args = args;
    }
}
exports.EXP_CALL = EXP_CALL;

class EXP_DOT {
    constructor(obj, field) {
        this.obj = obj;
        this.field = field;
    }
}
exports.EXP_DOT = EXP_DOT;

class EXP_THIS {}
exports.EXP_THIS = EXP_THIS;

class EXP_MAKE {
    constructor(className) {
        this.className = className;
    }
}
exports.EXP_MAKE = EXP_MAKE;

class ST_EXP {
    constructor(exp) {
        this.exp = exp;
    }
}
exports.ST_EXP = ST_EXP;

class ST_BLOCK {
    constructor(stmts) {
        this.stmts = stmts;
    }
}
exports.ST_BLOCK = ST_BLOCK;

class ST_IF {
    constructor(guard, th, el) {
        this.guard = guard;
        this.th = th;
        this.el = el;
    }
}
exports.ST_IF = ST_IF;

class ST_PRINT {
    constructor(exp) {
        this.exp = exp;
    }
}
exports.ST_PRINT = ST_PRINT;

class ST_WHILE {
    constructor(guard, body) {
        this.guard = guard;
        this.body = body;
    }
}
exports.ST_WHILE = ST_WHILE;

class ST_RETURN {
    constructor(exp) {
        this.exp = exp;
    }
}
exports.ST_RETURN = ST_RETURN;

class FUNCTIONS {
    constructor(params, stmts) {
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

class PROGRAM {
    constructor(funcs, classes, stmts) {
        this.funcs = funcs;
        this.classes = classes;
        this.stmts = stmts;
    }
}
exports.PROGRAM = PROGRAM; 
