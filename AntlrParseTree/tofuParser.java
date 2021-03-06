// Generated from tofu.g4 by ANTLR 4.8
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
		RULE_eqExpression = 15, RULE_relExpression = 16, RULE_addExpression = 17, 
		RULE_multExpression = 18, RULE_unaryExpression = 19, RULE_callMemExpression = 20, 
		RULE_callMemHelperExpression = 21, RULE_arguments = 22, RULE_primaryExpression = 23;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "classDecls", "funDecl", "parameter", "stmt", "retStmt", "expStmt", 
			"blockStmt", "ifStmt", "printStmt", "forStmt", "iterationStmt", "expression", 
			"logORExpression", "logANDExpression", "eqExpression", "relExpression", 
			"addExpression", "multExpression", "unaryExpression", "callMemExpression", 
			"callMemHelperExpression", "arguments", "primaryExpression"
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__8) | (1L << T__10) | (1L << T__12) | (1L << T__16) | (1L << T__19) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(51);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(48);
					funDecl();
					}
					break;
				case 2:
					{
					setState(49);
					classDecls();
					}
					break;
				case 3:
					{
					setState(50);
					stmt();
					}
					break;
				}
				}
				setState(55);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterClass(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitClass(this);
		}
	}

	public final ClassDeclsContext classDecls() throws RecognitionException {
		ClassDeclsContext _localctx = new ClassDeclsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_classDecls);
		int _la;
		try {
			_localctx = new ClassContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(T__0);
			setState(57);
			match(T__1);
			setState(58);
			match(IDENTIFIER);
			setState(59);
			match(T__2);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__8) | (1L << T__10) | (1L << T__12) | (1L << T__16) | (1L << T__19) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(62);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(60);
					funDecl();
					}
					break;
				case 2:
					{
					setState(61);
					stmt();
					}
					break;
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(67);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterFunDecl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitFunDecl(this);
		}
	}

	public final FunDeclContext funDecl() throws RecognitionException {
		FunDeclContext _localctx = new FunDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_funDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(IDENTIFIER);
			setState(70);
			parameter();
			setState(71);
			match(T__4);
			setState(72);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitParameter(this);
		}
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(T__5);
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(75);
				match(IDENTIFIER);
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(76);
					match(T__6);
					setState(77);
					match(IDENTIFIER);
					}
					}
					setState(82);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(85);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitStmt(this);
		}
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_stmt);
		try {
			setState(94);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				iterationStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(88);
				blockStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(89);
				expStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(90);
				ifStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(91);
				printStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(92);
				retStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(93);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterRetStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitRetStmt(this);
		}
	}

	public final RetStmtContext retStmt() throws RecognitionException {
		RetStmtContext _localctx = new RetStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_retStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(T__8);
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(97);
				expression();
				}
				break;
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

	public static class ExpStmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterExpStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitExpStmt(this);
		}
	}

	public final ExpStmtContext expStmt() throws RecognitionException {
		ExpStmtContext _localctx = new ExpStmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			expression();
			setState(101);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterBlockStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitBlockStmt(this);
		}
	}

	public final BlockStmtContext blockStmt() throws RecognitionException {
		BlockStmtContext _localctx = new BlockStmtContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_blockStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(T__2);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__8) | (1L << T__10) | (1L << T__12) | (1L << T__16) | (1L << T__19) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(104);
				stmt();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterIfStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitIfStmt(this);
		}
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(T__10);
			setState(113);
			match(T__5);
			setState(114);
			expression();
			setState(115);
			match(T__7);
			setState(116);
			match(T__11);
			setState(117);
			match(T__12);
			setState(118);
			match(T__13);
			setState(119);
			blockStmt();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(120);
				match(T__14);
				setState(121);
				match(T__15);
				setState(122);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterPrintStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitPrintStmt(this);
		}
	}

	public final PrintStmtContext printStmt() throws RecognitionException {
		PrintStmtContext _localctx = new PrintStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_printStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(T__16);
			setState(126);
			match(T__5);
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(127);
				expression();
				}
			}

			setState(130);
			match(T__7);
			setState(131);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterForStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitForStmt(this);
		}
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_forStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(T__1);
			setState(134);
			match(T__17);
			setState(135);
			match(IDENTIFIER);
			setState(136);
			match(T__18);
			setState(137);
			expression();
			setState(138);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterIterationStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitIterationStmt(this);
		}
	}

	public final IterationStmtContext iterationStmt() throws RecognitionException {
		IterationStmtContext _localctx = new IterationStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_iterationStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(T__19);
			setState(141);
			match(T__5);
			setState(142);
			expression();
			setState(143);
			match(T__7);
			setState(144);
			match(T__11);
			setState(145);
			match(T__12);
			setState(146);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			logORExpression();
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(149);
				match(T__4);
				setState(150);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterLogORExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitLogORExpression(this);
		}
	}

	public final LogORExpressionContext logORExpression() throws RecognitionException {
		LogORExpressionContext _localctx = new LogORExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_logORExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			logANDExpression();
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__14) {
				{
				setState(154);
				match(T__14);
				setState(155);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterLogANDExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitLogANDExpression(this);
		}
	}

	public final LogANDExpressionContext logANDExpression() throws RecognitionException {
		LogANDExpressionContext _localctx = new LogANDExpressionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_logANDExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			eqExpression();
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__20) {
				{
				setState(159);
				match(T__20);
				setState(160);
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
		public Token eqOp;
		public List<RelExpressionContext> relExpression() {
			return getRuleContexts(RelExpressionContext.class);
		}
		public RelExpressionContext relExpression(int i) {
			return getRuleContext(RelExpressionContext.class,i);
		}
		public EqExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eqExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterEqExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitEqExpression(this);
		}
	}

	public final EqExpressionContext eqExpression() throws RecognitionException {
		EqExpressionContext _localctx = new EqExpressionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_eqExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			relExpression();
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21 || _la==T__22) {
				{
				setState(164);
				((EqExpressionContext)_localctx).eqOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__21 || _la==T__22) ) {
					((EqExpressionContext)_localctx).eqOp = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(165);
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

	public static class RelExpressionContext extends ParserRuleContext {
		public Token relOp;
		public List<AddExpressionContext> addExpression() {
			return getRuleContexts(AddExpressionContext.class);
		}
		public AddExpressionContext addExpression(int i) {
			return getRuleContext(AddExpressionContext.class,i);
		}
		public RelExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterRelExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitRelExpression(this);
		}
	}

	public final RelExpressionContext relExpression() throws RecognitionException {
		RelExpressionContext _localctx = new RelExpressionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_relExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			addExpression();
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26))) != 0)) {
				{
				setState(169);
				((RelExpressionContext)_localctx).relOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26))) != 0)) ) {
					((RelExpressionContext)_localctx).relOp = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(170);
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

	public static class AddExpressionContext extends ParserRuleContext {
		public Token addOp;
		public List<MultExpressionContext> multExpression() {
			return getRuleContexts(MultExpressionContext.class);
		}
		public MultExpressionContext multExpression(int i) {
			return getRuleContext(MultExpressionContext.class,i);
		}
		public AddExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterAddExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitAddExpression(this);
		}
	}

	public final AddExpressionContext addExpression() throws RecognitionException {
		AddExpressionContext _localctx = new AddExpressionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_addExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			multExpression();
			setState(176);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(174);
				((AddExpressionContext)_localctx).addOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__27 || _la==T__28) ) {
					((AddExpressionContext)_localctx).addOp = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(175);
				multExpression();
				}
				break;
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
		public Token multOp;
		public List<UnaryExpressionContext> unaryExpression() {
			return getRuleContexts(UnaryExpressionContext.class);
		}
		public UnaryExpressionContext unaryExpression(int i) {
			return getRuleContext(UnaryExpressionContext.class,i);
		}
		public MultExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterMultExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitMultExpression(this);
		}
	}

	public final MultExpressionContext multExpression() throws RecognitionException {
		MultExpressionContext _localctx = new MultExpressionContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_multExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			unaryExpression();
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__29 || _la==T__30) {
				{
				setState(179);
				((MultExpressionContext)_localctx).multOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__29 || _la==T__30) ) {
					((MultExpressionContext)_localctx).multOp = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(180);
				unaryExpression();
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

	public static class UnaryExpressionContext extends ParserRuleContext {
		public Token unaryOp;
		public CallMemExpressionContext callMemExpression() {
			return getRuleContext(CallMemExpressionContext.class,0);
		}
		public UnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterUnaryExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitUnaryExpression(this);
		}
	}

	public final UnaryExpressionContext unaryExpression() throws RecognitionException {
		UnaryExpressionContext _localctx = new UnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_unaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__28 || _la==T__31) {
				{
				setState(183);
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

			setState(186);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterCallMemExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitCallMemExpression(this);
		}
	}

	public final CallMemExpressionContext callMemExpression() throws RecognitionException {
		CallMemExpressionContext _localctx = new CallMemExpressionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_callMemExpression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			primaryExpression();
			setState(192);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(189);
					callMemHelperExpression();
					}
					} 
				}
				setState(194);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterCallMemArg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitCallMemArg(this);
		}
	}
	public static class CallMemDotContext extends CallMemHelperExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public CallMemDotContext(CallMemHelperExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterCallMemDot(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitCallMemDot(this);
		}
	}

	public final CallMemHelperExpressionContext callMemHelperExpression() throws RecognitionException {
		CallMemHelperExpressionContext _localctx = new CallMemHelperExpressionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_callMemHelperExpression);
		try {
			setState(198);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__32:
				_localctx = new CallMemDotContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(195);
				match(T__32);
				setState(196);
				match(IDENTIFIER);
				}
				break;
			case T__5:
				_localctx = new CallMemArgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(197);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterArguments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitArguments(this);
		}
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			match(T__5);
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(201);
				expression();
				setState(206);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__6) {
					{
					{
					setState(202);
					match(T__6);
					setState(203);
					expression();
					}
					}
					setState(208);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(211);
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
		public List<PrimaryExpressionContext> primaryExpression() {
			return getRuleContexts(PrimaryExpressionContext.class);
		}
		public PrimaryExpressionContext primaryExpression(int i) {
			return getRuleContext(PrimaryExpressionContext.class,i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MapExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterMapExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitMapExpression(this);
		}
	}
	public static class TrueExpressionContext extends PrimaryExpressionContext {
		public TrueExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterTrueExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitTrueExpression(this);
		}
	}
	public static class NestedExpressionContext extends PrimaryExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NestedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterNestedExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitNestedExpression(this);
		}
	}
	public static class MakeExpressionContext extends PrimaryExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public MakeExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterMakeExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitMakeExpression(this);
		}
	}
	public static class StringExpressionContext extends PrimaryExpressionContext {
		public TerminalNode STRING() { return getToken(tofuParser.STRING, 0); }
		public StringExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterStringExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitStringExpression(this);
		}
	}
	public static class ListExpressionContext extends PrimaryExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ListExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterListExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitListExpression(this);
		}
	}
	public static class NumberExpressionContext extends PrimaryExpressionContext {
		public TerminalNode NUMBER() { return getToken(tofuParser.NUMBER, 0); }
		public NumberExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterNumberExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitNumberExpression(this);
		}
	}
	public static class UndefinedExpressionContext extends PrimaryExpressionContext {
		public UndefinedExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterUndefinedExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitUndefinedExpression(this);
		}
	}
	public static class FalseExpressionContext extends PrimaryExpressionContext {
		public FalseExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterFalseExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitFalseExpression(this);
		}
	}
	public static class IdentifierExpressionContext extends PrimaryExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public IdentifierExpressionContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterIdentifierExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitIdentifierExpression(this);
		}
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_primaryExpression);
		int _la;
		try {
			int _alt;
			setState(251);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				_localctx = new NestedExpressionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(213);
				match(T__5);
				setState(214);
				expression();
				setState(215);
				match(T__7);
				}
				break;
			case NUMBER:
				_localctx = new NumberExpressionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(217);
				match(NUMBER);
				}
				break;
			case T__12:
				_localctx = new TrueExpressionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(218);
				match(T__12);
				}
				break;
			case T__33:
				_localctx = new FalseExpressionContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(219);
				match(T__33);
				}
				break;
			case STRING:
				_localctx = new StringExpressionContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(220);
				match(STRING);
				}
				break;
			case T__34:
				_localctx = new UndefinedExpressionContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(221);
				match(T__34);
				}
				break;
			case IDENTIFIER:
				_localctx = new IdentifierExpressionContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(222);
				match(IDENTIFIER);
				}
				break;
			case T__35:
				_localctx = new MakeExpressionContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(223);
				match(T__35);
				setState(224);
				match(IDENTIFIER);
				}
				break;
			case T__36:
				_localctx = new ListExpressionContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(225);
				match(T__36);
				setState(230);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__28) | (1L << T__31) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
					{
					setState(226);
					expression();
					{
					setState(227);
					match(T__6);
					setState(228);
					expression();
					}
					}
				}

				setState(232);
				match(T__37);
				}
				break;
			case T__2:
				_localctx = new MapExpressionContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(233);
				match(T__2);
				setState(241);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(234);
						primaryExpression();
						setState(235);
						match(T__38);
						setState(236);
						expression();
						setState(237);
						match(T__6);
						}
						} 
					}
					setState(243);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
				}
				setState(248);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__5) | (1L << T__12) | (1L << T__33) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
					{
					setState(244);
					primaryExpression();
					setState(245);
					match(T__38);
					setState(246);
					expression();
					}
				}

				setState(250);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3.\u0100\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\3\2\3\2\3\2\7\2\66\n\2\f\2\16\29\13\2\3\3\3\3\3\3\3\3\3\3\3\3\7\3A\n"+
		"\3\f\3\16\3D\13\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5Q\n\5"+
		"\f\5\16\5T\13\5\5\5V\n\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6a\n\6"+
		"\3\7\3\7\5\7e\n\7\3\b\3\b\3\b\3\t\3\t\7\tl\n\t\f\t\16\to\13\t\3\t\3\t"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n~\n\n\3\13\3\13\3\13\5"+
		"\13\u0083\n\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\5\16\u009a\n\16\3\17\3\17\3\17\5\17"+
		"\u009f\n\17\3\20\3\20\3\20\5\20\u00a4\n\20\3\21\3\21\3\21\5\21\u00a9\n"+
		"\21\3\22\3\22\3\22\5\22\u00ae\n\22\3\23\3\23\3\23\5\23\u00b3\n\23\3\24"+
		"\3\24\3\24\5\24\u00b8\n\24\3\25\5\25\u00bb\n\25\3\25\3\25\3\26\3\26\7"+
		"\26\u00c1\n\26\f\26\16\26\u00c4\13\26\3\27\3\27\3\27\5\27\u00c9\n\27\3"+
		"\30\3\30\3\30\3\30\7\30\u00cf\n\30\f\30\16\30\u00d2\13\30\5\30\u00d4\n"+
		"\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3"+
		"\31\3\31\3\31\3\31\3\31\3\31\5\31\u00e9\n\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\7\31\u00f2\n\31\f\31\16\31\u00f5\13\31\3\31\3\31\3\31\3\31"+
		"\5\31\u00fb\n\31\3\31\5\31\u00fe\n\31\3\31\2\2\32\2\4\6\b\n\f\16\20\22"+
		"\24\26\30\32\34\36 \"$&(*,.\60\2\7\3\2\30\31\3\2\32\35\3\2\36\37\3\2 "+
		"!\4\2\37\37\"\"\2\u0110\2\67\3\2\2\2\4:\3\2\2\2\6G\3\2\2\2\bL\3\2\2\2"+
		"\n`\3\2\2\2\fb\3\2\2\2\16f\3\2\2\2\20i\3\2\2\2\22r\3\2\2\2\24\177\3\2"+
		"\2\2\26\u0087\3\2\2\2\30\u008e\3\2\2\2\32\u0096\3\2\2\2\34\u009b\3\2\2"+
		"\2\36\u00a0\3\2\2\2 \u00a5\3\2\2\2\"\u00aa\3\2\2\2$\u00af\3\2\2\2&\u00b4"+
		"\3\2\2\2(\u00ba\3\2\2\2*\u00be\3\2\2\2,\u00c8\3\2\2\2.\u00ca\3\2\2\2\60"+
		"\u00fd\3\2\2\2\62\66\5\6\4\2\63\66\5\4\3\2\64\66\5\n\6\2\65\62\3\2\2\2"+
		"\65\63\3\2\2\2\65\64\3\2\2\2\669\3\2\2\2\67\65\3\2\2\2\678\3\2\2\28\3"+
		"\3\2\2\29\67\3\2\2\2:;\7\3\2\2;<\7\4\2\2<=\7+\2\2=B\7\5\2\2>A\5\6\4\2"+
		"?A\5\n\6\2@>\3\2\2\2@?\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2CE\3\2\2\2"+
		"DB\3\2\2\2EF\7\6\2\2F\5\3\2\2\2GH\7+\2\2HI\5\b\5\2IJ\7\7\2\2JK\5\n\6\2"+
		"K\7\3\2\2\2LU\7\b\2\2MR\7+\2\2NO\7\t\2\2OQ\7+\2\2PN\3\2\2\2QT\3\2\2\2"+
		"RP\3\2\2\2RS\3\2\2\2SV\3\2\2\2TR\3\2\2\2UM\3\2\2\2UV\3\2\2\2VW\3\2\2\2"+
		"WX\7\n\2\2X\t\3\2\2\2Ya\5\30\r\2Za\5\20\t\2[a\5\16\b\2\\a\5\22\n\2]a\5"+
		"\24\13\2^a\5\f\7\2_a\5\26\f\2`Y\3\2\2\2`Z\3\2\2\2`[\3\2\2\2`\\\3\2\2\2"+
		"`]\3\2\2\2`^\3\2\2\2`_\3\2\2\2a\13\3\2\2\2bd\7\13\2\2ce\5\32\16\2dc\3"+
		"\2\2\2de\3\2\2\2e\r\3\2\2\2fg\5\32\16\2gh\7\f\2\2h\17\3\2\2\2im\7\5\2"+
		"\2jl\5\n\6\2kj\3\2\2\2lo\3\2\2\2mk\3\2\2\2mn\3\2\2\2np\3\2\2\2om\3\2\2"+
		"\2pq\7\6\2\2q\21\3\2\2\2rs\7\r\2\2st\7\b\2\2tu\5\32\16\2uv\7\n\2\2vw\7"+
		"\16\2\2wx\7\17\2\2xy\7\20\2\2y}\5\20\t\2z{\7\21\2\2{|\7\22\2\2|~\5\20"+
		"\t\2}z\3\2\2\2}~\3\2\2\2~\23\3\2\2\2\177\u0080\7\23\2\2\u0080\u0082\7"+
		"\b\2\2\u0081\u0083\5\32\16\2\u0082\u0081\3\2\2\2\u0082\u0083\3\2\2\2\u0083"+
		"\u0084\3\2\2\2\u0084\u0085\7\n\2\2\u0085\u0086\7\f\2\2\u0086\25\3\2\2"+
		"\2\u0087\u0088\7\4\2\2\u0088\u0089\7\24\2\2\u0089\u008a\7+\2\2\u008a\u008b"+
		"\7\25\2\2\u008b\u008c\5\32\16\2\u008c\u008d\5\20\t\2\u008d\27\3\2\2\2"+
		"\u008e\u008f\7\26\2\2\u008f\u0090\7\b\2\2\u0090\u0091\5\32\16\2\u0091"+
		"\u0092\7\n\2\2\u0092\u0093\7\16\2\2\u0093\u0094\7\17\2\2\u0094\u0095\5"+
		"\20\t\2\u0095\31\3\2\2\2\u0096\u0099\5\34\17\2\u0097\u0098\7\7\2\2\u0098"+
		"\u009a\5\32\16\2\u0099\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\33\3\2"+
		"\2\2\u009b\u009e\5\36\20\2\u009c\u009d\7\21\2\2\u009d\u009f\5\36\20\2"+
		"\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f\35\3\2\2\2\u00a0\u00a3"+
		"\5 \21\2\u00a1\u00a2\7\27\2\2\u00a2\u00a4\5 \21\2\u00a3\u00a1\3\2\2\2"+
		"\u00a3\u00a4\3\2\2\2\u00a4\37\3\2\2\2\u00a5\u00a8\5\"\22\2\u00a6\u00a7"+
		"\t\2\2\2\u00a7\u00a9\5\"\22\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2"+
		"\u00a9!\3\2\2\2\u00aa\u00ad\5$\23\2\u00ab\u00ac\t\3\2\2\u00ac\u00ae\5"+
		"$\23\2\u00ad\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae#\3\2\2\2\u00af\u00b2"+
		"\5&\24\2\u00b0\u00b1\t\4\2\2\u00b1\u00b3\5&\24\2\u00b2\u00b0\3\2\2\2\u00b2"+
		"\u00b3\3\2\2\2\u00b3%\3\2\2\2\u00b4\u00b7\5(\25\2\u00b5\u00b6\t\5\2\2"+
		"\u00b6\u00b8\5(\25\2\u00b7\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\'\3"+
		"\2\2\2\u00b9\u00bb\t\6\2\2\u00ba\u00b9\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb"+
		"\u00bc\3\2\2\2\u00bc\u00bd\5*\26\2\u00bd)\3\2\2\2\u00be\u00c2\5\60\31"+
		"\2\u00bf\u00c1\5,\27\2\u00c0\u00bf\3\2\2\2\u00c1\u00c4\3\2\2\2\u00c2\u00c0"+
		"\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3+\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c5"+
		"\u00c6\7#\2\2\u00c6\u00c9\7+\2\2\u00c7\u00c9\5.\30\2\u00c8\u00c5\3\2\2"+
		"\2\u00c8\u00c7\3\2\2\2\u00c9-\3\2\2\2\u00ca\u00d3\7\b\2\2\u00cb\u00d0"+
		"\5\32\16\2\u00cc\u00cd\7\t\2\2\u00cd\u00cf\5\32\16\2\u00ce\u00cc\3\2\2"+
		"\2\u00cf\u00d2\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d4"+
		"\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d3\u00cb\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4"+
		"\u00d5\3\2\2\2\u00d5\u00d6\7\n\2\2\u00d6/\3\2\2\2\u00d7\u00d8\7\b\2\2"+
		"\u00d8\u00d9\5\32\16\2\u00d9\u00da\7\n\2\2\u00da\u00fe\3\2\2\2\u00db\u00fe"+
		"\7,\2\2\u00dc\u00fe\7\17\2\2\u00dd\u00fe\7$\2\2\u00de\u00fe\7*\2\2\u00df"+
		"\u00fe\7%\2\2\u00e0\u00fe\7+\2\2\u00e1\u00e2\7&\2\2\u00e2\u00fe\7+\2\2"+
		"\u00e3\u00e8\7\'\2\2\u00e4\u00e5\5\32\16\2\u00e5\u00e6\7\t\2\2\u00e6\u00e7"+
		"\5\32\16\2\u00e7\u00e9\3\2\2\2\u00e8\u00e4\3\2\2\2\u00e8\u00e9\3\2\2\2"+
		"\u00e9\u00ea\3\2\2\2\u00ea\u00fe\7(\2\2\u00eb\u00f3\7\5\2\2\u00ec\u00ed"+
		"\5\60\31\2\u00ed\u00ee\7)\2\2\u00ee\u00ef\5\32\16\2\u00ef\u00f0\7\t\2"+
		"\2\u00f0\u00f2\3\2\2\2\u00f1\u00ec\3\2\2\2\u00f2\u00f5\3\2\2\2\u00f3\u00f1"+
		"\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00fa\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f6"+
		"\u00f7\5\60\31\2\u00f7\u00f8\7)\2\2\u00f8\u00f9\5\32\16\2\u00f9\u00fb"+
		"\3\2\2\2\u00fa\u00f6\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc"+
		"\u00fe\7\6\2\2\u00fd\u00d7\3\2\2\2\u00fd\u00db\3\2\2\2\u00fd\u00dc\3\2"+
		"\2\2\u00fd\u00dd\3\2\2\2\u00fd\u00de\3\2\2\2\u00fd\u00df\3\2\2\2\u00fd"+
		"\u00e0\3\2\2\2\u00fd\u00e1\3\2\2\2\u00fd\u00e3\3\2\2\2\u00fd\u00eb\3\2"+
		"\2\2\u00fe\61\3\2\2\2\35\65\67@BRU`dm}\u0082\u0099\u009e\u00a3\u00a8\u00ad"+
		"\u00b2\u00b7\u00ba\u00c2\u00c8\u00d0\u00d3\u00e8\u00f3\u00fa\u00fd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}