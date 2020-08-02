// Generated from tofu.g4 by ANTLR 4.0
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
	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__36=1, T__35=2, T__34=3, T__33=4, T__32=5, T__31=6, T__30=7, T__29=8, 
		T__28=9, T__27=10, T__26=11, T__25=12, T__24=13, T__23=14, T__22=15, T__21=16, 
		T__20=17, T__19=18, T__18=19, T__17=20, T__16=21, T__15=22, T__14=23, 
		T__13=24, T__12=25, T__11=26, T__10=27, T__9=28, T__8=29, T__7=30, T__6=31, 
		T__5=32, T__4=33, T__3=34, T__2=35, T__1=36, T__0=37, STRING=38, IDENTIFIER=39, 
		NUMBER=40, Whitespace=41, Newline=42;
	public static final String[] tokenNames = {
		"<INVALID>", "'/'", "''s '", "'true'", "'return'", "'!='", "'while'", 
		"';'", "'{'", "'blueprint'", "'='", "'}'", "'if'", "'for'", "'<='", "'print'", 
		"'('", "'is'", "'*'", "','", "'false'", "'undefined'", "'['", "'>='", 
		"'<'", "'=='", "']'", "'>'", "'or'", "'=>'", "'!'", "'make'", "'else'", 
		"')'", "'and'", "'+'", "'then'", "'-'", "STRING", "IDENTIFIER", "NUMBER", 
		"Whitespace", "Newline"
	};
	public static final int
		RULE_program = 0, RULE_classDecls = 1, RULE_funDecl = 2, RULE_parameter = 3, 
		RULE_stmt = 4, RULE_retStmt = 5, RULE_expStmt = 6, RULE_blockStmt = 7, 
		RULE_ifStmt = 8, RULE_printStmt = 9, RULE_iterationStmt = 10, RULE_expression = 11, 
		RULE_logORExpression = 12, RULE_logANDExpression = 13, RULE_eqExpression = 14, 
		RULE_relExpression = 15, RULE_addExpression = 16, RULE_multExpression = 17, 
		RULE_unaryExpression = 18, RULE_callMemExpression = 19, RULE_callMemAccExpression = 20, 
		RULE_arguments = 21, RULE_primaryExpression = 22, RULE_anonExpression = 23;
	public static final String[] ruleNames = {
		"program", "classDecls", "funDecl", "parameter", "stmt", "retStmt", "expStmt", 
		"blockStmt", "ifStmt", "printStmt", "iterationStmt", "expression", "logORExpression", 
		"logANDExpression", "eqExpression", "relExpression", "addExpression", 
		"multExpression", "unaryExpression", "callMemExpression", "callMemAccExpression", 
		"arguments", "primaryExpression", "anonExpression"
	};

	@Override
	public String getGrammarFileName() { return "tofu.g4"; }

	@Override
	public String[] getTokenNames() { return tokenNames; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public tofuParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public ClassDeclsContext classDecls(int i) {
			return getRuleContext(ClassDeclsContext.class,i);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
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
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 3) | (1L << 4) | (1L << 6) | (1L << 8) | (1L << 9) | (1L << 12) | (1L << 15) | (1L << 16) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 30) | (1L << 31) | (1L << 37) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(51);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(48); funDecl();
					}
					break;

				case 2:
					{
					setState(49); classDecls();
					}
					break;

				case 3:
					{
					setState(50); stmt();
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
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public List<FunDeclContext> funDecl() {
			return getRuleContexts(FunDeclContext.class);
		}
		public FunDeclContext funDecl(int i) {
			return getRuleContext(FunDeclContext.class,i);
		}
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public ClassDeclsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDecls; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterClassDecls(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitClassDecls(this);
		}
	}

	public final ClassDeclsContext classDecls() throws RecognitionException {
		ClassDeclsContext _localctx = new ClassDeclsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_classDecls);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56); match(9);
			setState(57); match(13);
			setState(58); match(IDENTIFIER);
			setState(59); match(8);
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 3) | (1L << 4) | (1L << 6) | (1L << 8) | (1L << 12) | (1L << 15) | (1L << 16) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 30) | (1L << 31) | (1L << 37) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(62);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(60); funDecl();
					}
					break;

				case 2:
					{
					setState(61); stmt();
					}
					break;
				}
				}
				setState(66);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(67); match(11);
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
		public ParameterContext parameter() {
			return getRuleContext(ParameterContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
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
			setState(69); match(IDENTIFIER);
			setState(70); parameter();
			setState(71); match(10);
			setState(72); stmt();
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
			setState(74); match(16);
			setState(83);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(75); match(IDENTIFIER);
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==19) {
					{
					{
					setState(76); match(19);
					setState(77); match(IDENTIFIER);
					}
					}
					setState(82);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(85); match(33);
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
		public RetStmtContext retStmt() {
			return getRuleContext(RetStmtContext.class,0);
		}
		public PrintStmtContext printStmt() {
			return getRuleContext(PrintStmtContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public BlockStmtContext blockStmt() {
			return getRuleContext(BlockStmtContext.class,0);
		}
		public ExpStmtContext expStmt() {
			return getRuleContext(ExpStmtContext.class,0);
		}
		public IterationStmtContext iterationStmt() {
			return getRuleContext(IterationStmtContext.class,0);
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
			setState(93);
			switch (_input.LA(1)) {
			case 6:
				enterOuterAlt(_localctx, 1);
				{
				setState(87); iterationStmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 2);
				{
				setState(88); blockStmt();
				}
				break;
			case 3:
			case 16:
			case 20:
			case 21:
			case 22:
			case 30:
			case 31:
			case 37:
			case STRING:
			case IDENTIFIER:
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(89); expStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 4);
				{
				setState(90); ifStmt();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 5);
				{
				setState(91); printStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 6);
				{
				setState(92); retStmt();
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
			setState(95); match(4);
			setState(97);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(96); expression();
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
			setState(99); expression();
			setState(100); match(7);
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
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
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
			setState(102); match(8);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 3) | (1L << 4) | (1L << 6) | (1L << 8) | (1L << 12) | (1L << 15) | (1L << 16) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 30) | (1L << 31) | (1L << 37) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				{
				setState(103); stmt();
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(109); match(11);
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
			setState(111); match(12);
			setState(112); match(16);
			setState(113); expression();
			setState(114); match(33);
			setState(115); match(17);
			setState(116); match(3);
			setState(117); match(36);
			setState(118); blockStmt();
			setState(122);
			_la = _input.LA(1);
			if (_la==28) {
				{
				setState(119); match(28);
				setState(120); match(32);
				setState(121); blockStmt();
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
			setState(124); match(15);
			setState(125); match(16);
			setState(127);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 3) | (1L << 16) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 30) | (1L << 31) | (1L << 37) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(126); expression();
				}
			}

			setState(129); match(33);
			setState(130); match(7);
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
		enterRule(_localctx, 20, RULE_iterationStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132); match(6);
			setState(133); match(16);
			setState(134); expression();
			setState(135); match(33);
			setState(136); match(17);
			setState(137); match(3);
			setState(138); blockStmt();
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
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LogORExpressionContext logORExpression() {
			return getRuleContext(LogORExpressionContext.class,0);
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
		enterRule(_localctx, 22, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140); logORExpression();
			setState(143);
			_la = _input.LA(1);
			if (_la==5) {
				{
				setState(141); match(5);
				setState(142); expression();
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
		enterRule(_localctx, 24, RULE_logORExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145); logANDExpression();
			setState(148);
			_la = _input.LA(1);
			if (_la==28) {
				{
				setState(146); match(28);
				setState(147); logANDExpression();
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
		enterRule(_localctx, 26, RULE_logANDExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150); eqExpression();
			setState(153);
			_la = _input.LA(1);
			if (_la==34) {
				{
				setState(151); match(34);
				setState(152); eqExpression();
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
		enterRule(_localctx, 28, RULE_eqExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155); relExpression();
			setState(158);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(156);
				((EqExpressionContext)_localctx).eqOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==5 || _la==25) ) {
					((EqExpressionContext)_localctx).eqOp = (Token)_errHandler.recoverInline(this);
				}
				consume();
				setState(157); relExpression();
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
		enterRule(_localctx, 30, RULE_relExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160); addExpression();
			setState(163);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 14) | (1L << 23) | (1L << 24) | (1L << 27))) != 0)) {
				{
				setState(161);
				((RelExpressionContext)_localctx).relOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 14) | (1L << 23) | (1L << 24) | (1L << 27))) != 0)) ) {
					((RelExpressionContext)_localctx).relOp = (Token)_errHandler.recoverInline(this);
				}
				consume();
				setState(162); addExpression();
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
		public MultExpressionContext multExpression(int i) {
			return getRuleContext(MultExpressionContext.class,i);
		}
		public List<MultExpressionContext> multExpression() {
			return getRuleContexts(MultExpressionContext.class);
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
		enterRule(_localctx, 32, RULE_addExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165); multExpression();
			setState(168);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(166);
				((AddExpressionContext)_localctx).addOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==35 || _la==37) ) {
					((AddExpressionContext)_localctx).addOp = (Token)_errHandler.recoverInline(this);
				}
				consume();
				setState(167); multExpression();
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
		public UnaryExpressionContext unaryExpression(int i) {
			return getRuleContext(UnaryExpressionContext.class,i);
		}
		public List<UnaryExpressionContext> unaryExpression() {
			return getRuleContexts(UnaryExpressionContext.class);
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
		enterRule(_localctx, 34, RULE_multExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170); unaryExpression();
			setState(173);
			_la = _input.LA(1);
			if (_la==1 || _la==18) {
				{
				setState(171);
				((MultExpressionContext)_localctx).multOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==1 || _la==18) ) {
					((MultExpressionContext)_localctx).multOp = (Token)_errHandler.recoverInline(this);
				}
				consume();
				setState(172); unaryExpression();
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
		enterRule(_localctx, 36, RULE_unaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			_la = _input.LA(1);
			if (_la==30 || _la==37) {
				{
				setState(175);
				((UnaryExpressionContext)_localctx).unaryOp = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==30 || _la==37) ) {
					((UnaryExpressionContext)_localctx).unaryOp = (Token)_errHandler.recoverInline(this);
				}
				consume();
				}
			}

			setState(178); callMemExpression();
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
		public CallMemAccExpressionContext callMemAccExpression(int i) {
			return getRuleContext(CallMemAccExpressionContext.class,i);
		}
		public List<CallMemAccExpressionContext> callMemAccExpression() {
			return getRuleContexts(CallMemAccExpressionContext.class);
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
		enterRule(_localctx, 38, RULE_callMemExpression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(180); primaryExpression();
			setState(184);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=-1 ) {
				if ( _alt==1 ) {
					{
					{
					setState(181); callMemAccExpression();
					}
					} 
				}
				setState(186);
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

	public static class CallMemAccExpressionContext extends ParserRuleContext {
		public CallMemAccExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callMemAccExpression; }
	 
		public CallMemAccExpressionContext() { }
		public void copyFrom(CallMemAccExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CallMemArgContext extends CallMemAccExpressionContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public CallMemArgContext(CallMemAccExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterCallMemArg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitCallMemArg(this);
		}
	}
	public static class CallMemDotContext extends CallMemAccExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public CallMemDotContext(CallMemAccExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterCallMemDot(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitCallMemDot(this);
		}
	}

	public final CallMemAccExpressionContext callMemAccExpression() throws RecognitionException {
		CallMemAccExpressionContext _localctx = new CallMemAccExpressionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_callMemAccExpression);
		try {
			setState(190);
			switch (_input.LA(1)) {
			case 2:
				_localctx = new CallMemDotContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(187); match(2);
				setState(188); match(IDENTIFIER);
				}
				break;
			case 16:
				_localctx = new CallMemArgContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(189); arguments();
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
		enterRule(_localctx, 42, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192); match(16);
			setState(201);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 3) | (1L << 16) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 30) | (1L << 31) | (1L << 37) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
				{
				setState(193); expression();
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==19) {
					{
					{
					setState(194); match(19);
					setState(195); expression();
					}
					}
					setState(200);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(203); match(33);
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
	public static class FalsePrimExprContext extends PrimaryExpressionContext {
		public FalsePrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterFalsePrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitFalsePrimExpr(this);
		}
	}
	public static class MakePrimExprContext extends PrimaryExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public MakePrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterMakePrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitMakePrimExpr(this);
		}
	}
	public static class StringPrimExprContext extends PrimaryExpressionContext {
		public TerminalNode STRING() { return getToken(tofuParser.STRING, 0); }
		public StringPrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterStringPrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitStringPrimExpr(this);
		}
	}
	public static class ListPrimExprContext extends PrimaryExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ListPrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterListPrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitListPrimExpr(this);
		}
	}
	public static class NestedPrimExprContext extends PrimaryExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NestedPrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterNestedPrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitNestedPrimExpr(this);
		}
	}
	public static class IdPrimExprContext extends PrimaryExpressionContext {
		public TerminalNode IDENTIFIER() { return getToken(tofuParser.IDENTIFIER, 0); }
		public IdPrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterIdPrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitIdPrimExpr(this);
		}
	}
	public static class UndefPrimExprContext extends PrimaryExpressionContext {
		public UndefPrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterUndefPrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitUndefPrimExpr(this);
		}
	}
	public static class TruePrimExprContext extends PrimaryExpressionContext {
		public TruePrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterTruePrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitTruePrimExpr(this);
		}
	}
	public static class NumberPrimExprContext extends PrimaryExpressionContext {
		public TerminalNode NUMBER() { return getToken(tofuParser.NUMBER, 0); }
		public NumberPrimExprContext(PrimaryExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterNumberPrimExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitNumberPrimExpr(this);
		}
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_primaryExpression);
		int _la;
		try {
			setState(225);
			switch (_input.LA(1)) {
			case 16:
				_localctx = new NestedPrimExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(205); match(16);
				setState(206); expression();
				setState(207); match(33);
				}
				break;
			case NUMBER:
				_localctx = new NumberPrimExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(209); match(NUMBER);
				}
				break;
			case 3:
				_localctx = new TruePrimExprContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(210); match(3);
				}
				break;
			case 20:
				_localctx = new FalsePrimExprContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(211); match(20);
				}
				break;
			case STRING:
				_localctx = new StringPrimExprContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(212); match(STRING);
				}
				break;
			case 21:
				_localctx = new UndefPrimExprContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(213); match(21);
				}
				break;
			case IDENTIFIER:
				_localctx = new IdPrimExprContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(214); match(IDENTIFIER);
				}
				break;
			case 31:
				_localctx = new MakePrimExprContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(215); match(31);
				setState(216); match(IDENTIFIER);
				}
				break;
			case 22:
				_localctx = new ListPrimExprContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(217); match(22);
				setState(222);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << 3) | (1L << 16) | (1L << 20) | (1L << 21) | (1L << 22) | (1L << 30) | (1L << 31) | (1L << 37) | (1L << STRING) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
					{
					setState(218); expression();
					{
					setState(219); match(19);
					setState(220); expression();
					}
					}
				}

				setState(224); match(26);
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

	public static class AnonExpressionContext extends ParserRuleContext {
		public ParameterContext parameter() {
			return getRuleContext(ParameterContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public AnonExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anonExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).enterAnonExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof tofuListener ) ((tofuListener)listener).exitAnonExpression(this);
		}
	}

	public final AnonExpressionContext anonExpression() throws RecognitionException {
		AnonExpressionContext _localctx = new AnonExpressionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_anonExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(227); parameter();
			setState(228); match(29);
			setState(229); stmt();
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
		"\2\3,\u00ea\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4"+
		"\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20"+
		"\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27"+
		"\4\30\t\30\4\31\t\31\3\2\3\2\3\2\7\2\66\n\2\f\2\16\29\13\2\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\7\3A\n\3\f\3\16\3D\13\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3"+
		"\5\3\5\3\5\7\5Q\n\5\f\5\16\5T\13\5\5\5V\n\5\3\5\3\5\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\5\6`\n\6\3\7\3\7\5\7d\n\7\3\b\3\b\3\b\3\t\3\t\7\tk\n\t\f\t\16\t"+
		"n\13\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n}\n\n\3"+
		"\13\3\13\3\13\5\13\u0082\n\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\r\3\r\3\r\5\r\u0092\n\r\3\16\3\16\3\16\5\16\u0097\n\16\3\17\3"+
		"\17\3\17\5\17\u009c\n\17\3\20\3\20\3\20\5\20\u00a1\n\20\3\21\3\21\3\21"+
		"\5\21\u00a6\n\21\3\22\3\22\3\22\5\22\u00ab\n\22\3\23\3\23\3\23\5\23\u00b0"+
		"\n\23\3\24\5\24\u00b3\n\24\3\24\3\24\3\25\3\25\7\25\u00b9\n\25\f\25\16"+
		"\25\u00bc\13\25\3\26\3\26\3\26\5\26\u00c1\n\26\3\27\3\27\3\27\3\27\7\27"+
		"\u00c7\n\27\f\27\16\27\u00ca\13\27\5\27\u00cc\n\27\3\27\3\27\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\5\30\u00e1\n\30\3\30\5\30\u00e4\n\30\3\31\3\31\3\31\3\31\3\31\2"+
		"\32\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\2\7\4\7\7\33\33"+
		"\5\20\20\31\32\35\35\4%%\'\'\4\3\3\24\24\4  \'\'\u00f6\2\67\3\2\2\2\4"+
		":\3\2\2\2\6G\3\2\2\2\bL\3\2\2\2\n_\3\2\2\2\fa\3\2\2\2\16e\3\2\2\2\20h"+
		"\3\2\2\2\22q\3\2\2\2\24~\3\2\2\2\26\u0086\3\2\2\2\30\u008e\3\2\2\2\32"+
		"\u0093\3\2\2\2\34\u0098\3\2\2\2\36\u009d\3\2\2\2 \u00a2\3\2\2\2\"\u00a7"+
		"\3\2\2\2$\u00ac\3\2\2\2&\u00b2\3\2\2\2(\u00b6\3\2\2\2*\u00c0\3\2\2\2,"+
		"\u00c2\3\2\2\2.\u00e3\3\2\2\2\60\u00e5\3\2\2\2\62\66\5\6\4\2\63\66\5\4"+
		"\3\2\64\66\5\n\6\2\65\62\3\2\2\2\65\63\3\2\2\2\65\64\3\2\2\2\669\3\2\2"+
		"\2\67\65\3\2\2\2\678\3\2\2\28\3\3\2\2\29\67\3\2\2\2:;\7\13\2\2;<\7\17"+
		"\2\2<=\7)\2\2=B\7\n\2\2>A\5\6\4\2?A\5\n\6\2@>\3\2\2\2@?\3\2\2\2AD\3\2"+
		"\2\2B@\3\2\2\2BC\3\2\2\2CE\3\2\2\2DB\3\2\2\2EF\7\r\2\2F\5\3\2\2\2GH\7"+
		")\2\2HI\5\b\5\2IJ\7\f\2\2JK\5\n\6\2K\7\3\2\2\2LU\7\22\2\2MR\7)\2\2NO\7"+
		"\25\2\2OQ\7)\2\2PN\3\2\2\2QT\3\2\2\2RP\3\2\2\2RS\3\2\2\2SV\3\2\2\2TR\3"+
		"\2\2\2UM\3\2\2\2UV\3\2\2\2VW\3\2\2\2WX\7#\2\2X\t\3\2\2\2Y`\5\26\f\2Z`"+
		"\5\20\t\2[`\5\16\b\2\\`\5\22\n\2]`\5\24\13\2^`\5\f\7\2_Y\3\2\2\2_Z\3\2"+
		"\2\2_[\3\2\2\2_\\\3\2\2\2_]\3\2\2\2_^\3\2\2\2`\13\3\2\2\2ac\7\6\2\2bd"+
		"\5\30\r\2cb\3\2\2\2cd\3\2\2\2d\r\3\2\2\2ef\5\30\r\2fg\7\t\2\2g\17\3\2"+
		"\2\2hl\7\n\2\2ik\5\n\6\2ji\3\2\2\2kn\3\2\2\2lj\3\2\2\2lm\3\2\2\2mo\3\2"+
		"\2\2nl\3\2\2\2op\7\r\2\2p\21\3\2\2\2qr\7\16\2\2rs\7\22\2\2st\5\30\r\2"+
		"tu\7#\2\2uv\7\23\2\2vw\7\5\2\2wx\7&\2\2x|\5\20\t\2yz\7\36\2\2z{\7\"\2"+
		"\2{}\5\20\t\2|y\3\2\2\2|}\3\2\2\2}\23\3\2\2\2~\177\7\21\2\2\177\u0081"+
		"\7\22\2\2\u0080\u0082\5\30\r\2\u0081\u0080\3\2\2\2\u0081\u0082\3\2\2\2"+
		"\u0082\u0083\3\2\2\2\u0083\u0084\7#\2\2\u0084\u0085\7\t\2\2\u0085\25\3"+
		"\2\2\2\u0086\u0087\7\b\2\2\u0087\u0088\7\22\2\2\u0088\u0089\5\30\r\2\u0089"+
		"\u008a\7#\2\2\u008a\u008b\7\23\2\2\u008b\u008c\7\5\2\2\u008c\u008d\5\20"+
		"\t\2\u008d\27\3\2\2\2\u008e\u0091\5\32\16\2\u008f\u0090\7\7\2\2\u0090"+
		"\u0092\5\30\r\2\u0091\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\31\3\2\2"+
		"\2\u0093\u0096\5\34\17\2\u0094\u0095\7\36\2\2\u0095\u0097\5\34\17\2\u0096"+
		"\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\33\3\2\2\2\u0098\u009b\5\36\20"+
		"\2\u0099\u009a\7$\2\2\u009a\u009c\5\36\20\2\u009b\u0099\3\2\2\2\u009b"+
		"\u009c\3\2\2\2\u009c\35\3\2\2\2\u009d\u00a0\5 \21\2\u009e\u009f\t\2\2"+
		"\2\u009f\u00a1\5 \21\2\u00a0\u009e\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\37"+
		"\3\2\2\2\u00a2\u00a5\5\"\22\2\u00a3\u00a4\t\3\2\2\u00a4\u00a6\5\"\22\2"+
		"\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6!\3\2\2\2\u00a7\u00aa\5"+
		"$\23\2\u00a8\u00a9\t\4\2\2\u00a9\u00ab\5$\23\2\u00aa\u00a8\3\2\2\2\u00aa"+
		"\u00ab\3\2\2\2\u00ab#\3\2\2\2\u00ac\u00af\5&\24\2\u00ad\u00ae\t\5\2\2"+
		"\u00ae\u00b0\5&\24\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0%\3"+
		"\2\2\2\u00b1\u00b3\t\6\2\2\u00b2\u00b1\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3"+
		"\u00b4\3\2\2\2\u00b4\u00b5\5(\25\2\u00b5\'\3\2\2\2\u00b6\u00ba\5.\30\2"+
		"\u00b7\u00b9\5*\26\2\u00b8\u00b7\3\2\2\2\u00b9\u00bc\3\2\2\2\u00ba\u00b8"+
		"\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb)\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bd"+
		"\u00be\7\4\2\2\u00be\u00c1\7)\2\2\u00bf\u00c1\5,\27\2\u00c0\u00bd\3\2"+
		"\2\2\u00c0\u00bf\3\2\2\2\u00c1+\3\2\2\2\u00c2\u00cb\7\22\2\2\u00c3\u00c8"+
		"\5\30\r\2\u00c4\u00c5\7\25\2\2\u00c5\u00c7\5\30\r\2\u00c6\u00c4\3\2\2"+
		"\2\u00c7\u00ca\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00cc"+
		"\3\2\2\2\u00ca\u00c8\3\2\2\2\u00cb\u00c3\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc"+
		"\u00cd\3\2\2\2\u00cd\u00ce\7#\2\2\u00ce-\3\2\2\2\u00cf\u00d0\7\22\2\2"+
		"\u00d0\u00d1\5\30\r\2\u00d1\u00d2\7#\2\2\u00d2\u00e4\3\2\2\2\u00d3\u00e4"+
		"\7*\2\2\u00d4\u00e4\7\5\2\2\u00d5\u00e4\7\26\2\2\u00d6\u00e4\7(\2\2\u00d7"+
		"\u00e4\7\27\2\2\u00d8\u00e4\7)\2\2\u00d9\u00da\7!\2\2\u00da\u00e4\7)\2"+
		"\2\u00db\u00e0\7\30\2\2\u00dc\u00dd\5\30\r\2\u00dd\u00de\7\25\2\2\u00de"+
		"\u00df\5\30\r\2\u00df\u00e1\3\2\2\2\u00e0\u00dc\3\2\2\2\u00e0\u00e1\3"+
		"\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e4\7\34\2\2\u00e3\u00cf\3\2\2\2\u00e3"+
		"\u00d3\3\2\2\2\u00e3\u00d4\3\2\2\2\u00e3\u00d5\3\2\2\2\u00e3\u00d6\3\2"+
		"\2\2\u00e3\u00d7\3\2\2\2\u00e3\u00d8\3\2\2\2\u00e3\u00d9\3\2\2\2\u00e3"+
		"\u00db\3\2\2\2\u00e4/\3\2\2\2\u00e5\u00e6\5\b\5\2\u00e6\u00e7\7\37\2\2"+
		"\u00e7\u00e8\5\n\6\2\u00e8\61\3\2\2\2\33\65\67@BRU_cl|\u0081\u0091\u0096"+
		"\u009b\u00a0\u00a5\u00aa\u00af\u00b2\u00ba\u00c0\u00c8\u00cb\u00e0\u00e3";
	public static final ATN _ATN =
		ATNSimulator.deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
	}
}