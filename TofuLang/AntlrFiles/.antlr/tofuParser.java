// Generated from /Users/bryankwong/Desktop/TofuJS/TofuJS/TofuLang/AntlrFiles/tofu.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class tofuParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, STRING=40, IDENTIFIER=41, NUMBER=42, Whitespace=43, Newline=44;
	public static final int
		RULE_program = 0, RULE_classDecls = 1, RULE_funDecl = 2, RULE_parameter = 3, 
		RULE_stmt = 4, RULE_retStmt = 5, RULE_expStmt = 6, RULE_blockStmt = 7, 
		RULE_ifStmt = 8, RULE_printStmt = 9, RULE_forStmt = 10, RULE_iterationStmt = 11, 
		RULE_expression = 12, RULE_logORExpression = 13, RULE_logANDExpression = 14, 
		RULE_eqExpression = 15, RULE_eqOp = 16, RULE_relExpression = 17, RULE_relOp = 18, 
		RULE_addExpression = 19, RULE_addOp = 20, RULE_multExpression = 21, RULE_multOp = 22, 
		RULE_unaryExpression = 23, RULE_callMemExpression = 24, RULE_callMemHelperExpression = 25, 
		RULE_arguments = 26, RULE_primaryExpression = 27;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "classDecls", "funDecl", "parameter", "stmt", "retStmt", "expStmt", 
			"blockStmt", "ifStmt", "printStmt", "forStmt", "iterationStmt", "expression", 
			"logORExpression", "logANDExpression", "eqExpression", "eqOp", "relExpression", 
			"relOp", "addExpression", "addOp", "multExpression", "multOp", "unaryExpression", 
			"callMemExpression", "callMemHelperExpression", "arguments", "primaryExpression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'blueprint'", "'for'", "'{'", "'}'", "'='", "'('", "','", "')'", 
			"'return'", "';'", "'if'", "'is'", "'true'", "'then'", "'or'", "'else'", 
			"'print'", "'each'", "'in'", "'while'", "'and'", "'=='", "'!='", "'>'", 
			"'>='", "'<'", "'<='", "'+'", "'-'", "'*'", "'/'", "'!'", "'.'", "'false'", 
			"'undefined'", "'make'", "'['", "']'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "STRING", "IDENTIFIER", "NUMBER", "Whitespace", 
			"Newline"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "tofu.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public tofuParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public List<FunDeclContext> funDecl() {
			return getRuleContexts(FunDeclContext.class);
		}
		public FunDeclContext funDecl(int i) {
			return getRuleContext(FunDeclContext.class,i);
		}
		public List<ClassDeclsContext> classDecls() {
			return getRuleContexts(ClassDeclsContext.class);
		}
		public ClassDeclsContext classDecls(int i) {
			return getRuleContext(ClassDeclsContext.class,i);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__8) | (1L << T__10) | (1L << T__12) | (1L << T__16) | (1L << T__19) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(59);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(56);
					funDecl();
					}
					break;
				case 2:
					{
					setState(57);
					classDecls();
					}
					break;
				case 3:
					{
					setState(58);
					stmt();
					}
					break;
				}
				}
				setState(63);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclsContext extends ParserRuleContext {
		public ClassDeclsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDecls; }
	 
		public ClassDeclsContext() { }
		public void copyFrom(ClassDeclsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ClassContext extends ClassDeclsContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public List<FunDeclContext> funDecl() {
			return getRuleContexts(FunDeclContext.class);
		}
		public FunDeclContext funDecl(int i) {
			return getRuleContext(FunDeclContext.class,i);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ClassContext(ClassDeclsContext ctx) { copyFrom(ctx); }
	}

	public final ClassDeclsContext classDecls() throws RecognitionException {
		ClassDeclsContext _localctx = new ClassDeclsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_classDecls);
		int _la;
		try {
			_localctx = new ClassContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			match(T__0);
			setState(65);
			match(T__1);
			setState(66);
			match(IDENTIFIER);
			setState(67);
			match(T__2);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__8) | (1L << T__10) | (1L << T__12) | (1L << T__16) | (1L << T__19) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(70);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(68);
					funDecl();
					}
					break;
				case 2:
					{
					setState(69);
					stmt();
					}
					break;
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(75);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunDeclContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public ParameterContext parameter() {
			return getRuleContext(ParameterContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public FunDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funDecl; }
	}

	public final FunDeclContext funDecl() throws RecognitionException {
		FunDeclContext _localctx = new FunDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_funDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(IDENTIFIER);
			setState(78);
			parameter();
			setState(79);
			match(T__4);
			setState(80);
			stmt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(tofuParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(tofuParser.IDENTIFIER, i);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(T__5);
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(83);
				match(IDENTIFIER);
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(84);
					match(T__6);
					setState(85);
					match(IDENTIFIER);
					}
					}
					setState(90);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(93);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtContext extends ParserRuleContext {
		public IterationStmtContext iterationStmt() {
			return getRuleContext(IterationStmtContext.class,0);
		}
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public ExpStmtContext expStmt() {
			return getRuleContext(ExpStmtContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public PrintStmtContext printStmt() {
			return getRuleContext(PrintStmtContext.class,0);
		}
		public RetStmtContext retStmt() {
			return getRuleContext(RetStmtContext.class,0);
		}
		public ForStmtContext forStmt() {
			return getRuleContext(ForStmtContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_stmt);
		try {
			setState(102);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(95);
				iterationStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(96);
				blockStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(97);
				expStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(98);
				ifStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(99);
				printStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(100);
				retStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(101);
				forStmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RetStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retStmt; }
	}

	public final RetStmtContext retStmt() throws RecognitionException {
		RetStmtContext _localctx = new RetStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_retStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
			match(T__8);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(105);
				expression();
				}
			}

			setState(108);
			match(T__9);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expStmt; }
	}

	public final ExpStmtContext expStmt() throws RecognitionException {
		ExpStmtContext _localctx = new ExpStmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			expression();
			setState(111);
			match(T__9);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockStmtContext extends ParserRuleContext {
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStmt; }
	}

	public final BlockStmtContext blockStmt() throws RecognitionException {
		BlockStmtContext _localctx = new BlockStmtContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_blockStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(T__2);
			setState(117);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__8) | (1L << T__10) | (1L << T__12) | (1L << T__16) | (1L << T__19) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(114);
				stmt();
				}
				}
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(120);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<BlockStmtContext> blockStmt() {
			return getRuleContexts(BlockStmtContext.class);
		}
		public BlockStmtContext blockStmt(int i) {
			return getRuleContext(BlockStmtContext.class,i);
		}
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__10);
			setState(123);
			match(T__5);
			setState(124);
			expression();
			setState(125);
			match(T__7);
			setState(126);
			match(T__11);
			setState(127);
			match(T__12);
			setState(128);
			match(T__13);
			setState(129);
			blockStmt();
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(130);
				match(T__14);
				setState(131);
				match(T__15);
				setState(132);
				blockStmt();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PrintStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStmt; }
	}

	public final PrintStmtContext printStmt() throws RecognitionException {
		PrintStmtContext _localctx = new PrintStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_printStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			match(T__16);
			setState(136);
			match(T__5);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(137);
				expression();
				}
			}

			setState(140);
			match(T__7);
			setState(141);
			match(T__9);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStmtContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_forStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			match(T__1);
			setState(144);
			match(T__17);
			setState(145);
			match(IDENTIFIER);
			setState(146);
			match(T__18);
			setState(147);
			expression();
			setState(148);
			blockStmt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public IterationStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStmt; }
	}

	public final IterationStmtContext iterationStmt() throws RecognitionException {
		IterationStmtContext _localctx = new IterationStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_iterationStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			match(T__19);
			setState(151);
			match(T__5);
			setState(152);
			expression();
			setState(153);
			match(T__7);
			setState(154);
			match(T__11);
			setState(155);
			match(T__12);
			setState(156);
			blockStmt();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public LogORExpressionContext logORExpression() {
			return getRuleContext(LogORExpressionContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			logORExpression();
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(159);
				match(T__4);
				setState(160);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogORExpressionContext extends ParserRuleContext {
		public List<LogANDExpressionContext> logANDExpression() {
			return getRuleContexts(LogANDExpressionContext.class);
		}
		public LogANDExpressionContext logANDExpression(int i) {
			return getRuleContext(LogANDExpressionContext.class,i);
		}
		public LogORExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logORExpression; }
	}

	public final LogORExpressionContext logORExpression() throws RecognitionException {
		LogORExpressionContext _localctx = new LogORExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_logORExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			logANDExpression();
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(164);
				match(T__14);
				setState(165);
				logANDExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogANDExpressionContext extends ParserRuleContext {
		public List<EqExpressionContext> eqExpression() {
			return getRuleContexts(EqExpressionContext.class);
		}
		public EqExpressionContext eqExpression(int i) {
			return getRuleContext(EqExpressionContext.class,i);
		}
		public LogANDExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logANDExpression; }
	}

	public final LogANDExpressionContext logANDExpression() throws RecognitionException {
		LogANDExpressionContext _localctx = new LogANDExpressionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_logANDExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			eqExpression();
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__20) {
				{
				setState(169);
				match(T__20);
				setState(170);
				eqExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EqExpressionContext extends ParserRuleContext {
		public List<RelExpressionContext> relExpression() {
			return getRuleContexts(RelExpressionContext.class);
		}
		public RelExpressionContext relExpression(int i) {
			return getRuleContext(RelExpressionContext.class,i);
		}
		public EqOpContext eqOp() {
			return getRuleContext(EqOpContext.class,0);
		}
		public EqExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eqExpression; }
	}

	public final EqExpressionContext eqExpression() throws RecognitionException {
		EqExpressionContext _localctx = new EqExpressionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_eqExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			relExpression();
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21 || _la==T__22) {
				{
				setState(174);
				eqOp();
				setState(175);
				relExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EqOpContext extends ParserRuleContext {
		public EqOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eqOp; }
	}

	public final EqOpContext eqOp() throws RecognitionException {
		EqOpContext _localctx = new EqOpContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_eqOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			_la = _input.LA(1);
			if ( !(_la==T__21 || _la==T__22) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelExpressionContext extends ParserRuleContext {
		public List<AddExpressionContext> addExpression() {
			return getRuleContexts(AddExpressionContext.class);
		}
		public AddExpressionContext addExpression(int i) {
			return getRuleContext(AddExpressionContext.class,i);
		}
		public RelOpContext relOp() {
			return getRuleContext(RelOpContext.class,0);
		}
		public RelExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relExpression; }
	}

	public final RelExpressionContext relExpression() throws RecognitionException {
		RelExpressionContext _localctx = new RelExpressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_relExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			addExpression();
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26))) != 0)) {
				{
				setState(182);
				relOp();
				setState(183);
				addExpression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelOpContext extends ParserRuleContext {
		public RelOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relOp; }
	}

	public final RelOpContext relOp() throws RecognitionException {
		RelOpContext _localctx = new RelOpContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_relOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddExpressionContext extends ParserRuleContext {
		public List<MultExpressionContext> multExpression() {
			return getRuleContexts(MultExpressionContext.class);
		}
		public MultExpressionContext multExpression(int i) {
			return getRuleContext(MultExpressionContext.class,i);
		}
		public List<AddOpContext> addOp() {
			return getRuleContexts(AddOpContext.class);
		}
		public AddOpContext addOp(int i) {
			return getRuleContext(AddOpContext.class,i);
		}
		public AddExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addExpression; }
	}

	public final AddExpressionContext addExpression() throws RecognitionException {
		AddExpressionContext _localctx = new AddExpressionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_addExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			multExpression();
			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__27 || _la==T__28) {
				{
				{
				setState(190);
				addOp();
				setState(191);
				multExpression();
				}
				}
				setState(197);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddOpContext extends ParserRuleContext {
		public AddOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addOp; }
	}

	public final AddOpContext addOp() throws RecognitionException {
		AddOpContext _localctx = new AddOpContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_addOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			_la = _input.LA(1);
			if ( !(_la==T__27 || _la==T__28) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultExpressionContext extends ParserRuleContext {
		public List<UnaryExpressionContext> unaryExpression() {
			return getRuleContexts(UnaryExpressionContext.class);
		}
		public UnaryExpressionContext unaryExpression(int i) {
			return getRuleContext(UnaryExpressionContext.class,i);
		}
		public List<MultOpContext> multOp() {
			return getRuleContexts(MultOpContext.class);
		}
		public MultOpContext multOp(int i) {
			return getRuleContext(MultOpContext.class,i);
		}
		public MultExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multExpression; }
	}

	public final MultExpressionContext multExpression() throws RecognitionException {
		MultExpressionContext _localctx = new MultExpressionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_multExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			unaryExpression();
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__29 || _la==T__30) {
				{
				{
				setState(201);
				multOp();
				setState(202);
				unaryExpression();
				}
				}
				setState(208);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultOpContext extends ParserRuleContext {
		public MultOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multOp; }
	}

	public final MultOpContext multOp() throws RecognitionException {
		MultOpContext _localctx = new MultOpContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_multOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			_la = _input.LA(1);
			if ( !(_la==T__29 || _la==T__30) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryExpressionContext extends ParserRuleContext {
		public Token unaryOp;
		public CallMemExpressionContext callMemExpression() {
			return getRuleContext(CallMemExpressionContext.class,0);
		}
		public UnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpression; }
	}

	public final UnaryExpressionContext unaryExpression() throws RecognitionException {
		UnaryExpressionContext _localctx = new UnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_unaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__28 || _la==T__31) {
				{
				setState(211);
				((UnaryExpressionContext)_localctx).unaryOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__28 || _la==T__31) ) {
					((UnaryExpressionContext)_localctx).unaryOp = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(214);
			callMemExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallMemExpressionContext extends ParserRuleContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public List<CallMemHelperExpressionContext> callMemHelperExpression() {
			return getRuleContexts(CallMemHelperExpressionContext.class);
		}
		public CallMemHelperExpressionContext callMemHelperExpression(int i) {
			return getRuleContext(CallMemHelperExpressionContext.class,i);
		}
		public CallMemExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callMemExpression; }
	}

	public final CallMemExpressionContext callMemExpression() throws RecognitionException {
		CallMemExpressionContext _localctx = new CallMemExpressionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_callMemExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			primaryExpression();
			setState(220);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5 || _la==T__32) {
				{
				{
				setState(217);
				callMemHelperExpression();
				}
				}
				setState(222);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallMemHelperExpressionContext extends ParserRuleContext {
		public CallMemHelperExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callMemHelperExpression; }
	 
		public CallMemHelperExpressionContext() { }
		public void copyFrom(CallMemHelperExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CallMemArgContext extends CallMemHelperExpressionContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public CallMemArgContext(CallMemHelperExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CallMemDotContext extends CallMemHelperExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public CallMemDotContext(CallMemHelperExpressionContext ctx) { copyFrom(ctx); }
	}

	public final CallMemHelperExpressionContext callMemHelperExpression() throws RecognitionException {
		CallMemHelperExpressionContext _localctx = new CallMemHelperExpressionContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_callMemHelperExpression);
		try {
			setState(226);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__32:
				_localctx = new CallMemDotContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				match(T__32);
				setState(224);
				match(IDENTIFIER);
				}
				break;
			case T__5:
				_localctx = new CallMemArgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(225);
				arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			match(T__5);
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(229);
				expression();
				setState(234);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(230);
					match(T__6);
					setState(231);
					expression();
					}
					}
					setState(236);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(239);
			match(T__7);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	 
		public PrimaryExpressionContext() { }
		public void copyFrom(PrimaryExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MapExpressionContext extends PrimaryExpressionContext {
		public List<TerminalNode> STRING() { return getTokens(tofuParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(tofuParser.STRING, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MapExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class TrueExpressionContext extends PrimaryExpressionContext {
		public TrueExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NestedExpressionContext extends PrimaryExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NestedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MakeExpressionContext extends PrimaryExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public MakeExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StringExpressionContext extends PrimaryExpressionContext {
		public TerminalNode STRING() { return getToken(tofuParser.STRING, 0); }
		public StringExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ListExpressionContext extends PrimaryExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ListExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NumberExpressionContext extends PrimaryExpressionContext {
		public TerminalNode NUMBER() { return getToken(tofuParser.NUMBER, 0); }
		public NumberExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UndefinedExpressionContext extends PrimaryExpressionContext {
		public UndefinedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FalseExpressionContext extends PrimaryExpressionContext {
		public FalseExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends PrimaryExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public IdentifierExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_primaryExpression);
		int _la;
		try {
			int _alt;
			setState(281);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				_localctx = new NestedExpressionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(241);
				match(T__5);
				setState(242);
				expression();
				setState(243);
				match(T__7);
				}
				break;
			case NUMBER:
				_localctx = new NumberExpressionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(245);
				match(NUMBER);
				}
				break;
			case T__12:
				_localctx = new TrueExpressionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(246);
				match(T__12);
				}
				break;
			case T__33:
				_localctx = new FalseExpressionContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(247);
				match(T__33);
				}
				break;
			case STRING:
				_localctx = new StringExpressionContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(248);
				match(STRING);
				}
				break;
			case T__34:
				_localctx = new UndefinedExpressionContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(249);
				match(T__34);
				}
				break;
			case IDENTIFIER:
				_localctx = new IdentifierExpressionContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(250);
				match(IDENTIFIER);
				}
				break;
			case T__35:
				_localctx = new MakeExpressionContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(251);
				match(T__35);
				setState(252);
				match(IDENTIFIER);
				}
				break;
			case T__36:
				_localctx = new ListExpressionContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(253);
				match(T__36);
				{
				setState(254);
				expression();
				setState(259);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(255);
					match(T__6);
					setState(256);
					expression();
					}
					}
					setState(261);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				setState(262);
				match(T__37);
				}
				break;
			case T__2:
				_localctx = new MapExpressionContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(264);
				match(T__2);
				setState(272);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(265);
						match(STRING);
						setState(266);
						match(T__38);
						setState(267);
						expression();
						setState(268);
						match(T__6);
						}
						} 
					}
					setState(274);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
				}
				setState(278);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STRING) {
					{
					setState(275);
					match(STRING);
					setState(276);
					match(T__38);
					setState(277);
					expression();
					}
				}

				setState(280);
				match(T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3.\u011e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\3\2\3\2\3\2\7\2>\n\2\f\2\16\2"+
		"A\13\2\3\3\3\3\3\3\3\3\3\3\3\3\7\3I\n\3\f\3\16\3L\13\3\3\3\3\3\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5Y\n\5\f\5\16\5\\\13\5\5\5^\n\5\3\5\3\5"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6i\n\6\3\7\3\7\5\7m\n\7\3\7\3\7\3\b\3\b"+
		"\3\b\3\t\3\t\7\tv\n\t\f\t\16\ty\13\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\5\n\u0088\n\n\3\13\3\13\3\13\5\13\u008d\n\13\3\13\3"+
		"\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\16\3\16\3\16\5\16\u00a4\n\16\3\17\3\17\3\17\5\17\u00a9\n\17\3\20\3\20"+
		"\3\20\5\20\u00ae\n\20\3\21\3\21\3\21\3\21\5\21\u00b4\n\21\3\22\3\22\3"+
		"\23\3\23\3\23\3\23\5\23\u00bc\n\23\3\24\3\24\3\25\3\25\3\25\3\25\7\25"+
		"\u00c4\n\25\f\25\16\25\u00c7\13\25\3\26\3\26\3\27\3\27\3\27\3\27\7\27"+
		"\u00cf\n\27\f\27\16\27\u00d2\13\27\3\30\3\30\3\31\5\31\u00d7\n\31\3\31"+
		"\3\31\3\32\3\32\7\32\u00dd\n\32\f\32\16\32\u00e0\13\32\3\33\3\33\3\33"+
		"\5\33\u00e5\n\33\3\34\3\34\3\34\3\34\7\34\u00eb\n\34\f\34\16\34\u00ee"+
		"\13\34\5\34\u00f0\n\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3"+
		"\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\7\35\u0104\n\35\f\35\16\35"+
		"\u0107\13\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\7\35\u0111\n\35\f"+
		"\35\16\35\u0114\13\35\3\35\3\35\3\35\5\35\u0119\n\35\3\35\5\35\u011c\n"+
		"\35\3\35\2\2\36\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62"+
		"\64\668\2\7\3\2\30\31\3\2\32\35\3\2\36\37\3\2 !\4\2\37\37\"\"\2\u012a"+
		"\2?\3\2\2\2\4B\3\2\2\2\6O\3\2\2\2\bT\3\2\2\2\nh\3\2\2\2\fj\3\2\2\2\16"+
		"p\3\2\2\2\20s\3\2\2\2\22|\3\2\2\2\24\u0089\3\2\2\2\26\u0091\3\2\2\2\30"+
		"\u0098\3\2\2\2\32\u00a0\3\2\2\2\34\u00a5\3\2\2\2\36\u00aa\3\2\2\2 \u00af"+
		"\3\2\2\2\"\u00b5\3\2\2\2$\u00b7\3\2\2\2&\u00bd\3\2\2\2(\u00bf\3\2\2\2"+
		"*\u00c8\3\2\2\2,\u00ca\3\2\2\2.\u00d3\3\2\2\2\60\u00d6\3\2\2\2\62\u00da"+
		"\3\2\2\2\64\u00e4\3\2\2\2\66\u00e6\3\2\2\28\u011b\3\2\2\2:>\5\6\4\2;>"+
		"\5\4\3\2<>\5\n\6\2=:\3\2\2\2=;\3\2\2\2=<\3\2\2\2>A\3\2\2\2?=\3\2\2\2?"+
		"@\3\2\2\2@\3\3\2\2\2A?\3\2\2\2BC\7\3\2\2CD\7\4\2\2DE\7+\2\2EJ\7\5\2\2"+
		"FI\5\6\4\2GI\5\n\6\2HF\3\2\2\2HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2"+
		"KM\3\2\2\2LJ\3\2\2\2MN\7\6\2\2N\5\3\2\2\2OP\7+\2\2PQ\5\b\5\2QR\7\7\2\2"+
		"RS\5\n\6\2S\7\3\2\2\2T]\7\b\2\2UZ\7+\2\2VW\7\t\2\2WY\7+\2\2XV\3\2\2\2"+
		"Y\\\3\2\2\2ZX\3\2\2\2Z[\3\2\2\2[^\3\2\2\2\\Z\3\2\2\2]U\3\2\2\2]^\3\2\2"+
		"\2^_\3\2\2\2_`\7\n\2\2`\t\3\2\2\2ai\5\30\r\2bi\5\20\t\2ci\5\16\b\2di\5"+
		"\22\n\2ei\5\24\13\2fi\5\f\7\2gi\5\26\f\2ha\3\2\2\2hb\3\2\2\2hc\3\2\2\2"+
		"hd\3\2\2\2he\3\2\2\2hf\3\2\2\2hg\3\2\2\2i\13\3\2\2\2jl\7\13\2\2km\5\32"+
		"\16\2lk\3\2\2\2lm\3\2\2\2mn\3\2\2\2no\7\f\2\2o\r\3\2\2\2pq\5\32\16\2q"+
		"r\7\f\2\2r\17\3\2\2\2sw\7\5\2\2tv\5\n\6\2ut\3\2\2\2vy\3\2\2\2wu\3\2\2"+
		"\2wx\3\2\2\2xz\3\2\2\2yw\3\2\2\2z{\7\6\2\2{\21\3\2\2\2|}\7\r\2\2}~\7\b"+
		"\2\2~\177\5\32\16\2\177\u0080\7\n\2\2\u0080\u0081\7\16\2\2\u0081\u0082"+
		"\7\17\2\2\u0082\u0083\7\20\2\2\u0083\u0087\5\20\t\2\u0084\u0085\7\21\2"+
		"\2\u0085\u0086\7\22\2\2\u0086\u0088\5\20\t\2\u0087\u0084\3\2\2\2\u0087"+
		"\u0088\3\2\2\2\u0088\23\3\2\2\2\u0089\u008a\7\23\2\2\u008a\u008c\7\b\2"+
		"\2\u008b\u008d\5\32\16\2\u008c\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d"+
		"\u008e\3\2\2\2\u008e\u008f\7\n\2\2\u008f\u0090\7\f\2\2\u0090\25\3\2\2"+
		"\2\u0091\u0092\7\4\2\2\u0092\u0093\7\24\2\2\u0093\u0094\7+\2\2\u0094\u0095"+
		"\7\25\2\2\u0095\u0096\5\32\16\2\u0096\u0097\5\20\t\2\u0097\27\3\2\2\2"+
		"\u0098\u0099\7\26\2\2\u0099\u009a\7\b\2\2\u009a\u009b\5\32\16\2\u009b"+
		"\u009c\7\n\2\2\u009c\u009d\7\16\2\2\u009d\u009e\7\17\2\2\u009e\u009f\5"+
		"\20\t\2\u009f\31\3\2\2\2\u00a0\u00a3\5\34\17\2\u00a1\u00a2\7\7\2\2\u00a2"+
		"\u00a4\5\32\16\2\u00a3\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\33\3\2"+
		"\2\2\u00a5\u00a8\5\36\20\2\u00a6\u00a7\7\21\2\2\u00a7\u00a9\5\36\20\2"+
		"\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\35\3\2\2\2\u00aa\u00ad"+
		"\5 \21\2\u00ab\u00ac\7\27\2\2\u00ac\u00ae\5 \21\2\u00ad\u00ab\3\2\2\2"+
		"\u00ad\u00ae\3\2\2\2\u00ae\37\3\2\2\2\u00af\u00b3\5$\23\2\u00b0\u00b1"+
		"\5\"\22\2\u00b1\u00b2\5$\23\2\u00b2\u00b4\3\2\2\2\u00b3\u00b0\3\2\2\2"+
		"\u00b3\u00b4\3\2\2\2\u00b4!\3\2\2\2\u00b5\u00b6\t\2\2\2\u00b6#\3\2\2\2"+
		"\u00b7\u00bb\5(\25\2\u00b8\u00b9\5&\24\2\u00b9\u00ba\5(\25\2\u00ba\u00bc"+
		"\3\2\2\2\u00bb\u00b8\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc%\3\2\2\2\u00bd"+
		"\u00be\t\3\2\2\u00be\'\3\2\2\2\u00bf\u00c5\5,\27\2\u00c0\u00c1\5*\26\2"+
		"\u00c1\u00c2\5,\27\2\u00c2\u00c4\3\2\2\2\u00c3\u00c0\3\2\2\2\u00c4\u00c7"+
		"\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6)\3\2\2\2\u00c7"+
		"\u00c5\3\2\2\2\u00c8\u00c9\t\4\2\2\u00c9+\3\2\2\2\u00ca\u00d0\5\60\31"+
		"\2\u00cb\u00cc\5.\30\2\u00cc\u00cd\5\60\31\2\u00cd\u00cf\3\2\2\2\u00ce"+
		"\u00cb\3\2\2\2\u00cf\u00d2\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2"+
		"\2\2\u00d1-\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d3\u00d4\t\5\2\2\u00d4/\3\2"+
		"\2\2\u00d5\u00d7\t\6\2\2\u00d6\u00d5\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7"+
		"\u00d8\3\2\2\2\u00d8\u00d9\5\62\32\2\u00d9\61\3\2\2\2\u00da\u00de\58\35"+
		"\2\u00db\u00dd\5\64\33\2\u00dc\u00db\3\2\2\2\u00dd\u00e0\3\2\2\2\u00de"+
		"\u00dc\3\2\2\2\u00de\u00df\3\2\2\2\u00df\63\3\2\2\2\u00e0\u00de\3\2\2"+
		"\2\u00e1\u00e2\7#\2\2\u00e2\u00e5\7+\2\2\u00e3\u00e5\5\66\34\2\u00e4\u00e1"+
		"\3\2\2\2\u00e4\u00e3\3\2\2\2\u00e5\65\3\2\2\2\u00e6\u00ef\7\b\2\2\u00e7"+
		"\u00ec\5\32\16\2\u00e8\u00e9\7\t\2\2\u00e9\u00eb\5\32\16\2\u00ea\u00e8"+
		"\3\2\2\2\u00eb\u00ee\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed"+
		"\u00f0\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef\u00e7\3\2\2\2\u00ef\u00f0\3\2"+
		"\2\2\u00f0\u00f1\3\2\2\2\u00f1\u00f2\7\n\2\2\u00f2\67\3\2\2\2\u00f3\u00f4"+
		"\7\b\2\2\u00f4\u00f5\5\32\16\2\u00f5\u00f6\7\n\2\2\u00f6\u011c\3\2\2\2"+
		"\u00f7\u011c\7,\2\2\u00f8\u011c\7\17\2\2\u00f9\u011c\7$\2\2\u00fa\u011c"+
		"\7*\2\2\u00fb\u011c\7%\2\2\u00fc\u011c\7+\2\2\u00fd\u00fe\7&\2\2\u00fe"+
		"\u011c\7+\2\2\u00ff\u0100\7\'\2\2\u0100\u0105\5\32\16\2\u0101\u0102\7"+
		"\t\2\2\u0102\u0104\5\32\16\2\u0103\u0101\3\2\2\2\u0104\u0107\3\2\2\2\u0105"+
		"\u0103\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0108\3\2\2\2\u0107\u0105\3\2"+
		"\2\2\u0108\u0109\7(\2\2\u0109\u011c\3\2\2\2\u010a\u0112\7\5\2\2\u010b"+
		"\u010c\7*\2\2\u010c\u010d\7)\2\2\u010d\u010e\5\32\16\2\u010e\u010f\7\t"+
		"\2\2\u010f\u0111\3\2\2\2\u0110\u010b\3\2\2\2\u0111\u0114\3\2\2\2\u0112"+
		"\u0110\3\2\2\2\u0112\u0113\3\2\2\2\u0113\u0118\3\2\2\2\u0114\u0112\3\2"+
		"\2\2\u0115\u0116\7*\2\2\u0116\u0117\7)\2\2\u0117\u0119\5\32\16\2\u0118"+
		"\u0115\3\2\2\2\u0118\u0119\3\2\2\2\u0119\u011a\3\2\2\2\u011a\u011c\7\6"+
		"\2\2\u011b\u00f3\3\2\2\2\u011b\u00f7\3\2\2\2\u011b\u00f8\3\2\2\2\u011b"+
		"\u00f9\3\2\2\2\u011b\u00fa\3\2\2\2\u011b\u00fb\3\2\2\2\u011b\u00fc\3\2"+
		"\2\2\u011b\u00fd\3\2\2\2\u011b\u00ff\3\2\2\2\u011b\u010a\3\2\2\2\u011c"+
		"9\3\2\2\2\35=?HJZ]hlw\u0087\u008c\u00a3\u00a8\u00ad\u00b3\u00bb\u00c5"+
		"\u00d0\u00d6\u00de\u00e4\u00ec\u00ef\u0105\u0112\u0118\u011b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}