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
		T__38=39, T__39=40, STRING=41, IDENTIFIER=42, NUMBER=43, Whitespace=44, 
		Newline=45;
	public static final int
		RULE_program = 0, RULE_classDecls = 1, RULE_funDecl = 2, RULE_importDecl = 3, 
		RULE_parameter = 4, RULE_stmt = 5, RULE_retStmt = 6, RULE_expStmt = 7, 
		RULE_blockStmt = 8, RULE_ifStmt = 9, RULE_printStmt = 10, RULE_forStmt = 11, 
		RULE_iterationStmt = 12, RULE_expression = 13, RULE_logORExpression = 14, 
		RULE_logANDExpression = 15, RULE_eqExpression = 16, RULE_eqOp = 17, RULE_relExpression = 18, 
		RULE_relOp = 19, RULE_addExpression = 20, RULE_addOp = 21, RULE_multExpression = 22, 
		RULE_multOp = 23, RULE_unaryExpression = 24, RULE_callMemExpression = 25, 
		RULE_callMemHelperExpression = 26, RULE_arguments = 27, RULE_access = 28, 
		RULE_primaryExpression = 29;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "classDecls", "funDecl", "importDecl", "parameter", "stmt", 
			"retStmt", "expStmt", "blockStmt", "ifStmt", "printStmt", "forStmt", 
			"iterationStmt", "expression", "logORExpression", "logANDExpression", 
			"eqExpression", "eqOp", "relExpression", "relOp", "addExpression", "addOp", 
			"multExpression", "multOp", "unaryExpression", "callMemExpression", "callMemHelperExpression", 
			"arguments", "access", "primaryExpression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'blueprint'", "'for'", "'{'", "'}'", "'='", "'import'", "';'", 
			"'('", "','", "')'", "'return'", "'if'", "'is'", "'true'", "'then'", 
			"'or'", "'else'", "'print'", "'each'", "'in'", "'while'", "'and'", "'=='", 
			"'!='", "'>'", "'>='", "'<'", "'<='", "'+'", "'-'", "'*'", "'/'", "'!'", 
			"'.'", "'['", "']'", "'false'", "'undefined'", "'make'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "STRING", "IDENTIFIER", "NUMBER", "Whitespace", 
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
		public List<ImportDeclContext> importDecl() {
			return getRuleContexts(ImportDeclContext.class);
		}
		public ImportDeclContext importDecl(int i) {
			return getRuleContext(ImportDeclContext.class,i);
		}
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
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__5) | (1L << T__7) | (1L << T__10) | (1L << T__11) | (1L << T__13) | (1L << T__17) | (1L << T__20) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(64);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(60);
					importDecl();
					}
					break;
				case 2:
					{
					setState(61);
					funDecl();
					}
					break;
				case 3:
					{
					setState(62);
					classDecls();
					}
					break;
				case 4:
					{
					setState(63);
					stmt();
					}
					break;
				}
				}
				setState(68);
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
			setState(69);
			match(T__0);
			setState(70);
			match(T__1);
			setState(71);
			match(IDENTIFIER);
			setState(72);
			match(T__2);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__7) | (1L << T__10) | (1L << T__11) | (1L << T__13) | (1L << T__17) | (1L << T__20) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(75);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(73);
					funDecl();
					}
					break;
				case 2:
					{
					setState(74);
					stmt();
					}
					break;
				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(80);
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
			setState(82);
			match(IDENTIFIER);
			setState(83);
			parameter();
			setState(84);
			match(T__4);
			setState(85);
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

	public static class ImportDeclContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(tofuParser.STRING, 0); }
		public ImportDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDecl; }
	}

	public final ImportDeclContext importDecl() throws RecognitionException {
		ImportDeclContext _localctx = new ImportDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_importDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(T__5);
			setState(88);
			match(STRING);
			setState(89);
			match(T__6);
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
		enterRule(_localctx, 8, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(T__7);
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(92);
				match(IDENTIFIER);
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__8) {
					{
					{
					setState(93);
					match(T__8);
					setState(94);
					match(IDENTIFIER);
					}
					}
					setState(99);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(102);
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
		enterRule(_localctx, 10, RULE_stmt);
		try {
			setState(111);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(104);
				iterationStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(105);
				blockStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(106);
				expStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(107);
				ifStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(108);
				printStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(109);
				retStmt();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(110);
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
		enterRule(_localctx, 12, RULE_retStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(T__10);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__7) | (1L << T__13) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(114);
				expression();
				}
			}

			setState(117);
			match(T__6);
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
		enterRule(_localctx, 14, RULE_expStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			expression();
			setState(120);
			match(T__6);
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
		enterRule(_localctx, 16, RULE_blockStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__2);
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__7) | (1L << T__10) | (1L << T__11) | (1L << T__13) | (1L << T__17) | (1L << T__20) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(123);
				stmt();
				}
				}
				setState(128);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(129);
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
		enterRule(_localctx, 18, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(T__11);
			setState(132);
			match(T__7);
			setState(133);
			expression();
			setState(134);
			match(T__9);
			setState(135);
			match(T__12);
			setState(136);
			match(T__13);
			setState(137);
			match(T__14);
			setState(138);
			blockStmt();
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__15) {
				{
				setState(139);
				match(T__15);
				setState(140);
				match(T__16);
				setState(141);
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
		enterRule(_localctx, 20, RULE_printStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(T__17);
			setState(145);
			match(T__7);
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__7) | (1L << T__13) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(146);
				expression();
				}
			}

			setState(149);
			match(T__9);
			setState(150);
			match(T__6);
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
		enterRule(_localctx, 22, RULE_forStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			match(T__1);
			setState(153);
			match(T__18);
			setState(154);
			match(IDENTIFIER);
			setState(155);
			match(T__19);
			setState(156);
			expression();
			setState(157);
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
		enterRule(_localctx, 24, RULE_iterationStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(T__20);
			setState(160);
			match(T__7);
			setState(161);
			expression();
			setState(162);
			match(T__9);
			setState(163);
			match(T__12);
			setState(164);
			match(T__13);
			setState(165);
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
		enterRule(_localctx, 26, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			logORExpression();
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(168);
				match(T__4);
				setState(169);
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
		enterRule(_localctx, 28, RULE_logORExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			logANDExpression();
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__15) {
				{
				setState(173);
				match(T__15);
				setState(174);
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
		enterRule(_localctx, 30, RULE_logANDExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			eqExpression();
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__21) {
				{
				setState(178);
				match(T__21);
				setState(179);
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
		enterRule(_localctx, 32, RULE_eqExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			relExpression();
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__22 || _la==T__23) {
				{
				setState(183);
				eqOp();
				setState(184);
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
		enterRule(_localctx, 34, RULE_eqOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_la = _input.LA(1);
			if ( !(_la==T__22 || _la==T__23) ) {
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
		enterRule(_localctx, 36, RULE_relExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			addExpression();
			setState(194);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27))) != 0)) {
				{
				setState(191);
				relOp();
				setState(192);
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
		enterRule(_localctx, 38, RULE_relOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27))) != 0)) ) {
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
		enterRule(_localctx, 40, RULE_addExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			multExpression();
			setState(204);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__28 || _la==T__29) {
				{
				{
				setState(199);
				addOp();
				setState(200);
				multExpression();
				}
				}
				setState(206);
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
		enterRule(_localctx, 42, RULE_addOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			_la = _input.LA(1);
			if ( !(_la==T__28 || _la==T__29) ) {
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
		enterRule(_localctx, 44, RULE_multExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			unaryExpression();
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__30 || _la==T__31) {
				{
				{
				setState(210);
				multOp();
				setState(211);
				unaryExpression();
				}
				}
				setState(217);
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
		enterRule(_localctx, 46, RULE_multOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_la = _input.LA(1);
			if ( !(_la==T__30 || _la==T__31) ) {
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
		enterRule(_localctx, 48, RULE_unaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__29 || _la==T__32) {
				{
				setState(220);
				((UnaryExpressionContext)_localctx).unaryOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==T__29 || _la==T__32) ) {
					((UnaryExpressionContext)_localctx).unaryOp = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(223);
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
		enterRule(_localctx, 50, RULE_callMemExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(225);
			primaryExpression();
			setState(229);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__7) | (1L << T__33) | (1L << T__34))) != 0)) {
				{
				{
				setState(226);
				callMemHelperExpression();
				}
				}
				setState(231);
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
	public static class CallAccessContext extends CallMemHelperExpressionContext {
		public AccessContext access() {
			return getRuleContext(AccessContext.class,0);
		}
		public CallAccessContext(CallMemHelperExpressionContext ctx) { copyFrom(ctx); }
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
		enterRule(_localctx, 52, RULE_callMemHelperExpression);
		try {
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__33:
				_localctx = new CallMemDotContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				match(T__33);
				setState(233);
				match(IDENTIFIER);
				}
				break;
			case T__7:
				_localctx = new CallMemArgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(234);
				arguments();
				}
				break;
			case T__34:
				_localctx = new CallAccessContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(235);
				access();
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
		enterRule(_localctx, 54, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(T__7);
			setState(247);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__7) | (1L << T__13) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(239);
				expression();
				setState(244);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__8) {
					{
					{
					setState(240);
					match(T__8);
					setState(241);
					expression();
					}
					}
					setState(246);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(249);
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

	public static class AccessContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public AccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_access; }
	}

	public final AccessContext access() throws RecognitionException {
		AccessContext _localctx = new AccessContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_access);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			match(T__34);
			setState(260);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__2) | (1L << T__7) | (1L << T__13) | (1L << T__29) | (1L << T__32) | (1L << T__34) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(252);
				expression();
				setState(257);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__8) {
					{
					{
					setState(253);
					match(T__8);
					setState(254);
					expression();
					}
					}
					setState(259);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(262);
			match(T__35);
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
		enterRule(_localctx, 58, RULE_primaryExpression);
		int _la;
		try {
			int _alt;
			setState(304);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				_localctx = new NestedExpressionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(264);
				match(T__7);
				setState(265);
				expression();
				setState(266);
				match(T__9);
				}
				break;
			case NUMBER:
				_localctx = new NumberExpressionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(268);
				match(NUMBER);
				}
				break;
			case T__13:
				_localctx = new TrueExpressionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(269);
				match(T__13);
				}
				break;
			case T__36:
				_localctx = new FalseExpressionContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(270);
				match(T__36);
				}
				break;
			case STRING:
				_localctx = new StringExpressionContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(271);
				match(STRING);
				}
				break;
			case T__37:
				_localctx = new UndefinedExpressionContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(272);
				match(T__37);
				}
				break;
			case IDENTIFIER:
				_localctx = new IdentifierExpressionContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(273);
				match(IDENTIFIER);
				}
				break;
			case T__38:
				_localctx = new MakeExpressionContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(274);
				match(T__38);
				setState(275);
				match(IDENTIFIER);
				}
				break;
			case T__34:
				_localctx = new ListExpressionContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(276);
				match(T__34);
				{
				setState(277);
				expression();
				setState(282);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__8) {
					{
					{
					setState(278);
					match(T__8);
					setState(279);
					expression();
					}
					}
					setState(284);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				setState(285);
				match(T__35);
				}
				break;
			case T__2:
				_localctx = new MapExpressionContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(287);
				match(T__2);
				setState(295);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(288);
						match(STRING);
						setState(289);
						match(T__39);
						setState(290);
						expression();
						setState(291);
						match(T__8);
						}
						} 
					}
					setState(297);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
				}
				setState(301);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STRING) {
					{
					setState(298);
					match(STRING);
					setState(299);
					match(T__39);
					setState(300);
					expression();
					}
				}

				setState(303);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3/\u0135\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\3\2\3\2\3"+
		"\2\3\2\7\2C\n\2\f\2\16\2F\13\2\3\3\3\3\3\3\3\3\3\3\3\3\7\3N\n\3\f\3\16"+
		"\3Q\13\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\7"+
		"\6b\n\6\f\6\16\6e\13\6\5\6g\n\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5"+
		"\7r\n\7\3\b\3\b\5\bv\n\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\7\n\177\n\n\f\n\16"+
		"\n\u0082\13\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\5\13\u0091\n\13\3\f\3\f\3\f\5\f\u0096\n\f\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3"+
		"\17\5\17\u00ad\n\17\3\20\3\20\3\20\5\20\u00b2\n\20\3\21\3\21\3\21\5\21"+
		"\u00b7\n\21\3\22\3\22\3\22\3\22\5\22\u00bd\n\22\3\23\3\23\3\24\3\24\3"+
		"\24\3\24\5\24\u00c5\n\24\3\25\3\25\3\26\3\26\3\26\3\26\7\26\u00cd\n\26"+
		"\f\26\16\26\u00d0\13\26\3\27\3\27\3\30\3\30\3\30\3\30\7\30\u00d8\n\30"+
		"\f\30\16\30\u00db\13\30\3\31\3\31\3\32\5\32\u00e0\n\32\3\32\3\32\3\33"+
		"\3\33\7\33\u00e6\n\33\f\33\16\33\u00e9\13\33\3\34\3\34\3\34\3\34\5\34"+
		"\u00ef\n\34\3\35\3\35\3\35\3\35\7\35\u00f5\n\35\f\35\16\35\u00f8\13\35"+
		"\5\35\u00fa\n\35\3\35\3\35\3\36\3\36\3\36\3\36\7\36\u0102\n\36\f\36\16"+
		"\36\u0105\13\36\5\36\u0107\n\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\7\37\u011b\n\37\f\37"+
		"\16\37\u011e\13\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\7\37\u0128"+
		"\n\37\f\37\16\37\u012b\13\37\3\37\3\37\3\37\5\37\u0130\n\37\3\37\5\37"+
		"\u0133\n\37\3\37\2\2 \2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,."+
		"\60\62\64\668:<\2\7\3\2\31\32\3\2\33\36\3\2\37 \3\2!\"\4\2  ##\2\u0143"+
		"\2D\3\2\2\2\4G\3\2\2\2\6T\3\2\2\2\bY\3\2\2\2\n]\3\2\2\2\fq\3\2\2\2\16"+
		"s\3\2\2\2\20y\3\2\2\2\22|\3\2\2\2\24\u0085\3\2\2\2\26\u0092\3\2\2\2\30"+
		"\u009a\3\2\2\2\32\u00a1\3\2\2\2\34\u00a9\3\2\2\2\36\u00ae\3\2\2\2 \u00b3"+
		"\3\2\2\2\"\u00b8\3\2\2\2$\u00be\3\2\2\2&\u00c0\3\2\2\2(\u00c6\3\2\2\2"+
		"*\u00c8\3\2\2\2,\u00d1\3\2\2\2.\u00d3\3\2\2\2\60\u00dc\3\2\2\2\62\u00df"+
		"\3\2\2\2\64\u00e3\3\2\2\2\66\u00ee\3\2\2\28\u00f0\3\2\2\2:\u00fd\3\2\2"+
		"\2<\u0132\3\2\2\2>C\5\b\5\2?C\5\6\4\2@C\5\4\3\2AC\5\f\7\2B>\3\2\2\2B?"+
		"\3\2\2\2B@\3\2\2\2BA\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2E\3\3\2\2\2"+
		"FD\3\2\2\2GH\7\3\2\2HI\7\4\2\2IJ\7,\2\2JO\7\5\2\2KN\5\6\4\2LN\5\f\7\2"+
		"MK\3\2\2\2ML\3\2\2\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2"+
		"RS\7\6\2\2S\5\3\2\2\2TU\7,\2\2UV\5\n\6\2VW\7\7\2\2WX\5\f\7\2X\7\3\2\2"+
		"\2YZ\7\b\2\2Z[\7+\2\2[\\\7\t\2\2\\\t\3\2\2\2]f\7\n\2\2^c\7,\2\2_`\7\13"+
		"\2\2`b\7,\2\2a_\3\2\2\2be\3\2\2\2ca\3\2\2\2cd\3\2\2\2dg\3\2\2\2ec\3\2"+
		"\2\2f^\3\2\2\2fg\3\2\2\2gh\3\2\2\2hi\7\f\2\2i\13\3\2\2\2jr\5\32\16\2k"+
		"r\5\22\n\2lr\5\20\t\2mr\5\24\13\2nr\5\26\f\2or\5\16\b\2pr\5\30\r\2qj\3"+
		"\2\2\2qk\3\2\2\2ql\3\2\2\2qm\3\2\2\2qn\3\2\2\2qo\3\2\2\2qp\3\2\2\2r\r"+
		"\3\2\2\2su\7\r\2\2tv\5\34\17\2ut\3\2\2\2uv\3\2\2\2vw\3\2\2\2wx\7\t\2\2"+
		"x\17\3\2\2\2yz\5\34\17\2z{\7\t\2\2{\21\3\2\2\2|\u0080\7\5\2\2}\177\5\f"+
		"\7\2~}\3\2\2\2\177\u0082\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081"+
		"\u0083\3\2\2\2\u0082\u0080\3\2\2\2\u0083\u0084\7\6\2\2\u0084\23\3\2\2"+
		"\2\u0085\u0086\7\16\2\2\u0086\u0087\7\n\2\2\u0087\u0088\5\34\17\2\u0088"+
		"\u0089\7\f\2\2\u0089\u008a\7\17\2\2\u008a\u008b\7\20\2\2\u008b\u008c\7"+
		"\21\2\2\u008c\u0090\5\22\n\2\u008d\u008e\7\22\2\2\u008e\u008f\7\23\2\2"+
		"\u008f\u0091\5\22\n\2\u0090\u008d\3\2\2\2\u0090\u0091\3\2\2\2\u0091\25"+
		"\3\2\2\2\u0092\u0093\7\24\2\2\u0093\u0095\7\n\2\2\u0094\u0096\5\34\17"+
		"\2\u0095\u0094\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0098"+
		"\7\f\2\2\u0098\u0099\7\t\2\2\u0099\27\3\2\2\2\u009a\u009b\7\4\2\2\u009b"+
		"\u009c\7\25\2\2\u009c\u009d\7,\2\2\u009d\u009e\7\26\2\2\u009e\u009f\5"+
		"\34\17\2\u009f\u00a0\5\22\n\2\u00a0\31\3\2\2\2\u00a1\u00a2\7\27\2\2\u00a2"+
		"\u00a3\7\n\2\2\u00a3\u00a4\5\34\17\2\u00a4\u00a5\7\f\2\2\u00a5\u00a6\7"+
		"\17\2\2\u00a6\u00a7\7\20\2\2\u00a7\u00a8\5\22\n\2\u00a8\33\3\2\2\2\u00a9"+
		"\u00ac\5\36\20\2\u00aa\u00ab\7\7\2\2\u00ab\u00ad\5\34\17\2\u00ac\u00aa"+
		"\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\35\3\2\2\2\u00ae\u00b1\5 \21\2\u00af"+
		"\u00b0\7\22\2\2\u00b0\u00b2\5 \21\2\u00b1\u00af\3\2\2\2\u00b1\u00b2\3"+
		"\2\2\2\u00b2\37\3\2\2\2\u00b3\u00b6\5\"\22\2\u00b4\u00b5\7\30\2\2\u00b5"+
		"\u00b7\5\"\22\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7!\3\2\2\2"+
		"\u00b8\u00bc\5&\24\2\u00b9\u00ba\5$\23\2\u00ba\u00bb\5&\24\2\u00bb\u00bd"+
		"\3\2\2\2\u00bc\u00b9\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd#\3\2\2\2\u00be"+
		"\u00bf\t\2\2\2\u00bf%\3\2\2\2\u00c0\u00c4\5*\26\2\u00c1\u00c2\5(\25\2"+
		"\u00c2\u00c3\5*\26\2\u00c3\u00c5\3\2\2\2\u00c4\u00c1\3\2\2\2\u00c4\u00c5"+
		"\3\2\2\2\u00c5\'\3\2\2\2\u00c6\u00c7\t\3\2\2\u00c7)\3\2\2\2\u00c8\u00ce"+
		"\5.\30\2\u00c9\u00ca\5,\27\2\u00ca\u00cb\5.\30\2\u00cb\u00cd\3\2\2\2\u00cc"+
		"\u00c9\3\2\2\2\u00cd\u00d0\3\2\2\2\u00ce\u00cc\3\2\2\2\u00ce\u00cf\3\2"+
		"\2\2\u00cf+\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d1\u00d2\t\4\2\2\u00d2-\3\2"+
		"\2\2\u00d3\u00d9\5\62\32\2\u00d4\u00d5\5\60\31\2\u00d5\u00d6\5\62\32\2"+
		"\u00d6\u00d8\3\2\2\2\u00d7\u00d4\3\2\2\2\u00d8\u00db\3\2\2\2\u00d9\u00d7"+
		"\3\2\2\2\u00d9\u00da\3\2\2\2\u00da/\3\2\2\2\u00db\u00d9\3\2\2\2\u00dc"+
		"\u00dd\t\5\2\2\u00dd\61\3\2\2\2\u00de\u00e0\t\6\2\2\u00df\u00de\3\2\2"+
		"\2\u00df\u00e0\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\5\64\33\2\u00e2"+
		"\63\3\2\2\2\u00e3\u00e7\5<\37\2\u00e4\u00e6\5\66\34\2\u00e5\u00e4\3\2"+
		"\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8"+
		"\65\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00eb\7$\2\2\u00eb\u00ef\7,\2\2"+
		"\u00ec\u00ef\58\35\2\u00ed\u00ef\5:\36\2\u00ee\u00ea\3\2\2\2\u00ee\u00ec"+
		"\3\2\2\2\u00ee\u00ed\3\2\2\2\u00ef\67\3\2\2\2\u00f0\u00f9\7\n\2\2\u00f1"+
		"\u00f6\5\34\17\2\u00f2\u00f3\7\13\2\2\u00f3\u00f5\5\34\17\2\u00f4\u00f2"+
		"\3\2\2\2\u00f5\u00f8\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7"+
		"\u00fa\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f9\u00f1\3\2\2\2\u00f9\u00fa\3\2"+
		"\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\7\f\2\2\u00fc9\3\2\2\2\u00fd\u0106"+
		"\7%\2\2\u00fe\u0103\5\34\17\2\u00ff\u0100\7\13\2\2\u0100\u0102\5\34\17"+
		"\2\u0101\u00ff\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2\2\2\u0103\u0104"+
		"\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103\3\2\2\2\u0106\u00fe\3\2\2\2\u0106"+
		"\u0107\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0109\7&\2\2\u0109;\3\2\2\2\u010a"+
		"\u010b\7\n\2\2\u010b\u010c\5\34\17\2\u010c\u010d\7\f\2\2\u010d\u0133\3"+
		"\2\2\2\u010e\u0133\7-\2\2\u010f\u0133\7\20\2\2\u0110\u0133\7\'\2\2\u0111"+
		"\u0133\7+\2\2\u0112\u0133\7(\2\2\u0113\u0133\7,\2\2\u0114\u0115\7)\2\2"+
		"\u0115\u0133\7,\2\2\u0116\u0117\7%\2\2\u0117\u011c\5\34\17\2\u0118\u0119"+
		"\7\13\2\2\u0119\u011b\5\34\17\2\u011a\u0118\3\2\2\2\u011b\u011e\3\2\2"+
		"\2\u011c\u011a\3\2\2\2\u011c\u011d\3\2\2\2\u011d\u011f\3\2\2\2\u011e\u011c"+
		"\3\2\2\2\u011f\u0120\7&\2\2\u0120\u0133\3\2\2\2\u0121\u0129\7\5\2\2\u0122"+
		"\u0123\7+\2\2\u0123\u0124\7*\2\2\u0124\u0125\5\34\17\2\u0125\u0126\7\13"+
		"\2\2\u0126\u0128\3\2\2\2\u0127\u0122\3\2\2\2\u0128\u012b\3\2\2\2\u0129"+
		"\u0127\3\2\2\2\u0129\u012a\3\2\2\2\u012a\u012f\3\2\2\2\u012b\u0129\3\2"+
		"\2\2\u012c\u012d\7+\2\2\u012d\u012e\7*\2\2\u012e\u0130\5\34\17\2\u012f"+
		"\u012c\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u0131\3\2\2\2\u0131\u0133\7\6"+
		"\2\2\u0132\u010a\3\2\2\2\u0132\u010e\3\2\2\2\u0132\u010f\3\2\2\2\u0132"+
		"\u0110\3\2\2\2\u0132\u0111\3\2\2\2\u0132\u0112\3\2\2\2\u0132\u0113\3\2"+
		"\2\2\u0132\u0114\3\2\2\2\u0132\u0116\3\2\2\2\u0132\u0121\3\2\2\2\u0133"+
		"=\3\2\2\2\37BDMOcfqu\u0080\u0090\u0095\u00ac\u00b1\u00b6\u00bc\u00c4\u00ce"+
		"\u00d9\u00df\u00e7\u00ee\u00f6\u00f9\u0103\u0106\u011c\u0129\u012f\u0132";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}