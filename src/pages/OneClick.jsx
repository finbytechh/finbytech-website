import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Globe, Users, ChartBar as BarChart3, Clock, ArrowRight, CircleCheck as CheckCircle2, Brain, Cpu, Cloud, ChartLine as LineChart, TrendingUp, TriangleAlert as AlertTriangle, Bell, Code as Code2, Plug, Activity, FileText, Target, Rocket, Link2, Play, Workflow, Server, Lock, Headphones, Scale, Sparkles, Gauge, Trophy, Eye, ChartPie as PieChart, Smartphone, History, ChevronDown, PhoneCall, Bot, Crosshair, Layers, LayoutGrid as LayoutsIcon } from 'lucide-react';
import SEO from '../components/SEO';
import './OneClick.css';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.ai-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCountUp(target, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function MetricCounter({ value, suffix, decimals = 0, label }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const count = useCountUp(value, 2200, inView);
  return (
    <div className="ai-metric" ref={ref}>
      <span className="ai-metric-value">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('en-US')}
        {suffix}
      </span>
      <span className="ai-metric-label">{label}</span>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`ai-faq-item ${isOpen ? 'open' : ''}`}>
      <button className="ai-faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <ChevronDown size={20} className="ai-faq-chevron" />
      </button>
      <div className="ai-faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function AITrading() {
  useScrollReveal();
  const [openFaq, setOpenFaq] = useState(0);

  const features = [
    { icon: <Brain size={24} />, title: 'AI Strategy Builder', desc: 'Create intelligent trading strategies using AI-assisted logic blocks — no coding required.' },
    { icon: <Rocket size={24} />, title: 'One-Click Deployment', desc: 'Deploy your strategy to live markets with a single click. No manual order placement.' },
    { icon: <Workflow size={24} />, title: 'Algorithmic Trading', desc: 'Execute complex multi-leg conditional orders automatically with precision timing.' },
    { icon: <Activity size={24} />, title: 'Live Market Data', desc: 'Stream real-time tick data from NSE, BSE, and MCX with sub-second latency.' },
    { icon: <Shield size={24} />, title: 'Smart Risk Management', desc: 'Set stop-loss, take-profit, max drawdown, and position-size limits per strategy.' },
    { icon: <BarChart3 size={24} />, title: 'Strategy Backtesting', desc: 'Test strategies against 10+ years of historical data before risking capital.' },
    { icon: <Play size={24} />, title: 'Paper Trading', desc: 'Run strategies in a simulated environment with live market data — zero capital risk.' },
    { icon: <PieChart size={24} />, title: 'Portfolio Analytics', desc: 'Track allocation, P&L, Sharpe ratio, and risk-adjusted returns across all strategies.' },
    { icon: <Sparkles size={24} />, title: 'AI Insights', desc: 'Get AI-generated market analysis, pattern detection, and strategy optimization suggestions.' },
    { icon: <Bot size={24} />, title: 'Trade Automation', desc: 'Automate entry, exit, and position sizing based on signals from your strategy logic.' },
    { icon: <Globe size={24} />, title: 'Multi-Broker Support', desc: 'Connect Angel One, Zerodha, Upstox, Dhan, Shoonya, and 5+ more brokers seamlessly.' },
    { icon: <Plug size={24} />, title: 'API Integration', desc: 'Full REST and WebSocket APIs for developers to build custom integrations and bots.' },
    { icon: <Cloud size={24} />, title: 'Cloud Hosting', desc: 'Your strategies run on secure cloud infrastructure — no VPS or server management needed.' },
    { icon: <FileText size={24} />, title: 'Performance Reports', desc: 'Download detailed PDF reports with equity curves, trade logs, and tax-ready statements.' },
    { icon: <Bell size={24} />, title: 'Real-Time Alerts', desc: 'Get instant push, email, and WhatsApp alerts for every trade, signal, and risk event.' },
  ];

  const steps = [
    { icon: <Code2 size={28} />, title: 'Create Strategy', desc: 'Build your strategy visually with AI-assisted logic blocks or import a custom algorithm via API.' },
    { icon: <Link2 size={28} />, title: 'Connect Broker', desc: 'Securely link your demat account via encrypted API bridge. Supports all major Indian brokers.' },
    { icon: <BarChart3 size={28} />, title: 'Backtest', desc: 'Run your strategy against 10+ years of historical market data. Validate edge before going live.' },
    { icon: <Rocket size={28} />, title: 'Deploy', desc: 'Go live with one click. Your strategy runs on cloud infrastructure with 99.9% uptime.' },
    { icon: <Bot size={28} />, title: 'Trade Automatically', desc: 'The platform executes, monitors, and manages trades 24×7 — no manual intervention needed.' },
  ];

  const benefits = [
    { icon: <Gauge size={22} />, title: 'Faster Execution', desc: 'Orders execute in under 20ms — no manual delay, no missed opportunities.' },
    { icon: <Brain size={22} />, title: 'No Emotional Trading', desc: 'AI executes your plan with discipline. No fear, no greed, no hesitation.' },
    { icon: <Sparkles size={22} />, title: 'AI Decision Support', desc: 'Get real-time AI recommendations backed by data, not gut feeling.' },
    { icon: <Shield size={22} />, title: 'Better Risk Management', desc: 'Automated stop-loss, position sizing, and drawdown limits protect your capital.' },
    { icon: <Crosshair size={22} />, title: 'Increased Accuracy', desc: 'Data-driven signals reduce human error and improve entry and exit precision.' },
    { icon: <Clock size={22} />, title: 'Time Saving', desc: 'Stop staring at charts. Deploy once and let automation handle the rest.' },
    { icon: <Activity size={22} />, title: '24×7 Automated Trading', desc: 'Strategies run around the clock on cloud infrastructure — even while you sleep.' },
    { icon: <Layers size={22} />, title: 'Smart Portfolio Management', desc: 'Diversify across strategies and instruments with intelligent allocation.' },
    { icon: <Bell size={22} />, title: 'Live Notifications', desc: 'Instant alerts on every trade, signal, and risk event via push, email, and WhatsApp.' },
    { icon: <FileText size={22} />, title: 'Detailed Performance Reports', desc: 'Comprehensive analytics with equity curves, trade logs, and tax-ready statements.' },
  ];

  const whyChoose = [
    { icon: <Brain size={24} />, title: 'AI-Powered Technology', desc: 'Proprietary AI models trained on millions of data points for market analysis and signal generation.' },
    { icon: <Lock size={24} />, title: 'Enterprise Security', desc: 'Bank-grade 256-bit encryption, two-factor authentication, and SOC 2 compliant infrastructure.' },
    { icon: <Zap size={24} />, title: 'High-Speed Execution', desc: 'Ultra-low latency order routing with sub-20ms execution on co-located cloud servers.' },
    { icon: <Headphones size={24} />, title: 'Professional Support', desc: 'Dedicated account managers and 24×7 technical support via phone, email, and chat.' },
    { icon: <Scale size={24} />, title: 'Scalable Infrastructure', desc: 'From 1 strategy to 1,000 — our cloud platform scales effortlessly with your trading volume.' },
    { icon: <Server size={24} />, title: 'Reliable Performance', desc: '99.9% uptime SLA with redundant failover systems and real-time health monitoring.' },
    { icon: <Trophy size={24} />, title: 'Affordable Solutions', desc: 'Enterprise-grade features at startup-friendly pricing. Plans start at just ₹999/month.' },
    { icon: <Cpu size={24} />, title: 'Continuous Innovation', desc: 'Bi-weekly feature updates, new broker integrations, and AI model improvements — always evolving.' },
  ];

  const brokers = [
    'Angel One', 'Zerodha', 'Upstox', 'Dhan', 'Shoonya',
    'Alice Blue', 'Fyers', 'ICICI Direct', 'Motilal Oswal',
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Full-Time Trader, Mumbai', text: 'I was manually trading for 8 years. After switching to Finbytech\'s AI Trading Platform, my execution time dropped from seconds to milliseconds. The AI strategy builder let me deploy my first algo in under an hour — no coding needed. My profitability improved by 34% in the first quarter.', rating: 5 },
    { name: 'Priya Sharma', role: 'Algorithmic Trader, Bangalore', text: 'The backtesting engine is incredibly accurate. I tested 40+ strategies against 10 years of data before going live. The paper trading feature saved me from at least three bad strategies. The platform is intuitive and the support team actually understands trading.', rating: 5 },
    { name: 'Amit Patel', role: 'Portfolio Manager, Ahmedabad', text: 'Managing 12 strategies across 4 brokers used to be a nightmare. Now everything runs from one dashboard. The portfolio analytics and risk management tools are enterprise-grade. Real-time alerts mean I never miss a critical event even when I\'m away from my desk.', rating: 5 },
    { name: 'Sneha Reddy', role: 'Quant Analyst, Hyderabad', text: 'As someone who writes custom algorithms, the API integration is excellent. Clean documentation, WebSocket streaming, and reliable execution. I built and deployed a custom mean-reversion bot in two days. The cloud hosting means I never worry about server downtime.', rating: 5 },
    { name: 'Vikram Singh', role: 'Swing Trader, Delhi', text: 'I was skeptical about automated trading, but the AI insights feature changed my mind. It surfaces patterns I would have missed. The one-click deployment is genuinely one click. Support responds within minutes. Best trading platform decision I\'ve made.', rating: 5 },
  ];

  const faqs = [
    { q: 'What is AI Trading?', a: 'AI trading uses artificial intelligence and machine learning models to analyze market data, identify trading opportunities, and execute trades automatically. Our platform uses proprietary AI models trained on millions of historical data points to generate signals, optimize strategies, and manage risk — all without manual intervention.' },
    { q: 'What is Algorithmic Trading?', a: 'Algorithmic trading is the automated execution of pre-defined trading rules and strategies. Instead of placing orders manually, you define conditions (entry, exit, position size, stop-loss) and the platform executes trades automatically when those conditions are met. This removes emotion, improves speed, and enables 24×7 operation.' },
    { q: 'Do I need coding knowledge?', a: 'No. Our AI Strategy Builder lets you create complex strategies using visual logic blocks — no programming required. However, if you are a developer, you can use our REST and WebSocket APIs to build custom algorithms and integrations. The platform serves both non-technical traders and developers.' },
    { q: 'Which brokers are supported?', a: 'We support all major Indian brokers including Angel One, Zerodha, Upstox, Dhan, Shoonya, Alice Blue, Fyers, ICICI Direct, and Motilal Oswal. New broker integrations are added regularly. Contact us if your broker is not listed — we may already have it in beta.' },
    { q: 'Can I backtest strategies?', a: 'Yes. Our backtesting engine lets you test strategies against 10+ years of historical market data (NSE, BSE, MCX). You get detailed metrics including equity curve, win rate, Sharpe ratio, maximum drawdown, and profit factor — all before risking real capital.' },
    { q: 'Is paper trading available?', a: 'Yes. Paper trading runs your strategy in a fully simulated environment using live market data. You can test, iterate, and validate your strategy with zero capital risk. Once you are confident, switch to live trading with one click.' },
    { q: 'How secure is the platform?', a: 'We use bank-grade 256-bit encryption for all data in transit and at rest. Broker API keys are encrypted and stored in a secure vault — our system never exposes them. We enforce two-factor authentication, use SOC 2 compliant infrastructure, and conduct regular security audits.' },
    { q: 'How do I get started?', a: 'Simply click "Get Started" or "Request Demo" on this page. Our team will schedule a personalized onboarding session, help you connect your broker account, and guide you through creating and deploying your first strategy. Most users are live within 24 hours.' },
  ];

  const screenshots = [
    { title: 'AI Dashboard', icon: <LayoutsIcon size={28} />, desc: 'Real-time overview of all active strategies, P&L, and market positions.' },
    { title: 'Strategy Builder', icon: <Workflow size={28} />, desc: 'Visual drag-and-drop interface for creating AI-powered trading strategies.' },
    { title: 'Portfolio Analytics', icon: <PieChart size={28} />, desc: 'Comprehensive performance metrics, allocation breakdown, and risk analysis.' },
    { title: 'Live Orders', icon: <Activity size={28} />, desc: 'Monitor every order with status, fill price, and execution time in real-time.' },
    { title: 'Trade History', icon: <History size={28} />, desc: 'Complete searchable log of every trade with filters by date, strategy, and instrument.' },
    { title: 'Performance Reports', icon: <FileText size={28} />, desc: 'Export detailed PDF reports with equity curves and tax-ready statements.' },
    { title: 'Mobile Trading App', icon: <Smartphone size={28} />, desc: 'Monitor and manage your strategies from anywhere with our iOS and Android app.' },
    { title: 'AI Analytics', icon: <Brain size={28} />, desc: 'AI-generated market insights, pattern detection, and strategy optimization.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Trading Platform — FINBYTECHNOVATION',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'AI-powered algorithmic trading platform. Build, backtest, deploy, and execute automated trading strategies with speed, accuracy, and intelligence.',
    offers: { '@type': 'Offer', price: '999', priceCurrency: 'INR' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '1280' },
  };

  return (
    <div className="ai-trading-page">
      <SEO
        title="AI Trading Platform — AI-Powered Algorithmic Trading"
        description="Finbytech's AI Trading Platform — build, backtest, deploy & execute AI-powered algorithmic trading strategies. One-click deployment, multi-broker support, real-time risk management, and 24×7 automation. Start today."
        canonical="/ai-trading"
        schema={schema}
      />

      {/* ═══ Hero ═══ */}
      <section className="ai-hero">
        <div className="ai-hero-bg" />
        <div className="ai-hero-grid" />
        <div className="ai-hero-orb ai-hero-orb-1" />
        <div className="ai-hero-orb ai-hero-orb-2" />

        <div className="container ai-hero-content">
          <div className="ai-hero-left">
            <span className="ai-hero-badge">
              <Sparkles size={14} /> AI-Powered Algorithmic Trading
            </span>
            <h1 className="ai-hero-title">
              AI Trading <span className="text-gradient">Platform</span>
            </h1>
            <p className="ai-hero-subtitle">
              Automate Your Trading with AI-Powered Algorithmic Strategies.
              Build, Backtest, Deploy &amp; Execute Trades with Speed, Accuracy, and Intelligence.
            </p>
            <div className="ai-hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                <Play size={16} /> Request Demo
              </Link>
            </div>
            <div className="ai-hero-trust">
              <div className="ai-trust-item"><CheckCircle2 size={16} /> No Coding Required</div>
              <div className="ai-trust-item"><CheckCircle2 size={16} /> 9+ Brokers Supported</div>
              <div className="ai-trust-item"><CheckCircle2 size={16} /> 10+ Years Backtest Data</div>
            </div>
          </div>

          <div className="ai-hero-right">
            <div className="ai-hero-visual">
              <div className="ai-dashboard-card">
                <div className="ai-dash-header">
                  <div className="ai-dash-dots">
                    <span /><span /><span />
                  </div>
                  <span className="ai-dash-title">AI Trading Dashboard</span>
                  <span className="ai-dash-live"><Activity size={11} /> LIVE</span>
                </div>
                <div className="ai-dash-body">
                  <div className="ai-dash-metrics">
                    <div className="ai-dash-metric">
                      <span className="ai-dm-label">Active Strategies</span>
                      <span className="ai-dm-value">12</span>
                    </div>
                    <div className="ai-dash-metric">
                      <span className="ai-dm-label">Today's P&L</span>
                      <span className="ai-dm-value up">+₹47,820</span>
                    </div>
                    <div className="ai-dash-metric">
                      <span className="ai-dm-label">Win Rate</span>
                      <span className="ai-dm-value">72.4%</span>
                    </div>
                  </div>
                  <div className="ai-dash-chart">
                    <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="ai-chart-svg">
                      <defs>
                        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(201,168,76,0.3)" />
                          <stop offset="100%" stopColor="rgba(201,168,76,0)" />
                        </linearGradient>
                      </defs>
                      <path d="M0,80 L30,72 L60,65 L90,70 L120,50 L150,55 L180,35 L210,40 L240,22 L270,28 L300,12 L300,100 L0,100 Z" fill="url(#chartFill)" />
                      <path d="M0,80 L30,72 L60,65 L90,70 L120,50 L150,55 L180,35 L210,40 L240,22 L270,28 L300,12" stroke="#c9a84c" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="ai-dash-orders">
                    <div className="ai-order-row">
                      <span className="ai-order-sym">NIFTY 24400 CE</span>
                      <span className="ai-order-side buy">BUY</span>
                      <span className="ai-order-qty">100</span>
                      <span className="ai-order-status">EXECUTED</span>
                    </div>
                    <div className="ai-order-row">
                      <span className="ai-order-sym">BANKNIFTY 51000 PE</span>
                      <span className="ai-order-side sell">SELL</span>
                      <span className="ai-order-qty">50</span>
                      <span className="ai-order-status">EXECUTED</span>
                    </div>
                    <div className="ai-order-row">
                      <span className="ai-order-sym">RELIANCE</span>
                      <span className="ai-order-side buy">BUY</span>
                      <span className="ai-order-qty">200</span>
                      <span className="ai-order-status">PENDING</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ai-hero-glow" />
              <div className="ai-floating-badge ai-fb-1">
                <TrendingUp size={18} /> +24.8% Monthly
              </div>
              <div className="ai-floating-badge ai-fb-2">
                <Zap size={18} /> 18ms Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ About / Overview ═══ */}
      <section className="ai-section ai-about">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">About the Platform</span>
            <h2>The Future of Trading is <span className="text-gradient">Intelligent</span></h2>
            <p>A comprehensive AI-powered algorithmic trading ecosystem designed for traders of all levels — from beginners deploying their first strategy to quants running complex multi-instrument portfolios.</p>
          </div>
          <div className="ai-about-grid ai-reveal">
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Brain size={28} /></div>
              <h3>AI-Powered Trading</h3>
              <p>Our proprietary AI models analyze millions of data points in real-time — detecting patterns, generating signals, and optimizing entry and exit timing with machine precision that no human trader can match.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Workflow size={28} /></div>
              <h3>Algorithmic Trading</h3>
              <p>Define your trading logic once and let the platform execute it flawlessly every time. Conditional orders, multi-leg strategies, and complex position sizing — all automated with zero manual intervention.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Zap size={28} /></div>
              <h3>Intelligent Order Execution</h3>
              <p>Smart order routing splits large orders across venues for best execution. Sub-20ms latency ensures you capture the price you see, not the price you fear missing.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Rocket size={28} /></div>
              <h3>Automated Strategies</h3>
              <p>Build, test, and deploy automated strategies that run 24×7 on cloud infrastructure. Your strategies execute even while you sleep — no VPS, no server management, no downtime.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Cloud size={28} /></div>
              <h3>Cloud Deployment</h3>
              <p>Every strategy runs on secure, co-located cloud servers with 99.9% uptime SLA. No local installations, no connectivity issues, no infrastructure costs — just pure trading power.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Eye size={28} /></div>
              <h3>Real-Time Monitoring</h3>
              <p>Watch every strategy, every position, and every market move in real-time. Live P&L, order status, and risk metrics update instantly across web and mobile.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Shield size={28} /></div>
              <h3>Risk Management</h3>
              <p>Automated stop-loss, take-profit, max drawdown limits, and per-strategy position sizing. Protect your capital with institutional-grade risk controls that never sleep.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><Target size={28} /></div>
              <h3>Portfolio Optimization</h3>
              <p>Diversify across strategies, instruments, and timeframes. The AI engine suggests optimal allocation based on historical correlation and risk-adjusted returns.</p>
            </div>
            <div className="ai-about-card glass-card">
              <div className="ai-about-icon"><LineChart size={28} /></div>
              <h3>Data-Driven Decisions</h3>
              <p>Every signal, every trade, and every decision is backed by data. Eliminate emotional bias and let quantitative analysis drive your trading — the way professional funds do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="ai-section ai-features bg-secondary">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Platform Features</span>
            <h2>Everything You Need to <span className="text-gradient">Trade Smarter</span></h2>
            <p>Fifteen powerful features that give you an institutional-grade trading edge — all in one platform.</p>
          </div>
          <div className="ai-features-grid ai-reveal">
            {features.map((f, i) => (
              <div key={i} className="ai-feature-card">
                <div className="ai-feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="ai-section ai-howitworks">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">How It Works</span>
            <h2>From Strategy to <span className="text-gradient">Automated Trading</span> in 5 Steps</h2>
            <p>Go from idea to live automated trading in under an hour. No coding, no servers, no complexity.</p>
          </div>
          <div className="ai-timeline ai-reveal">
            {steps.map((step, i) => (
              <div key={i} className="ai-timeline-item">
                <div className="ai-timeline-marker">
                  <div className="ai-timeline-icon">{step.icon}</div>
                  <span className="ai-timeline-number">{i + 1}</span>
                </div>
                <div className="ai-timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="ai-timeline-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Benefits ═══ */}
      <section className="ai-section ai-benefits bg-secondary">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Benefits</span>
            <h2>Why Traders <span className="text-gradient">Switch to AI</span></h2>
            <p>Replace manual trading with a disciplined, data-driven, and automated approach.</p>
          </div>
          <div className="ai-benefits-grid ai-reveal">
            {benefits.map((b, i) => (
              <div key={i} className="ai-benefit-card">
                <div className="ai-benefit-icon">{b.icon}</div>
                <div className="ai-benefit-text">
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Why Choose Finbytech ═══ */}
      <section className="ai-section ai-whychoose">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Why Choose Finbytech</span>
            <h2>Built for <span className="text-gradient">Serious Traders</span></h2>
            <p>We combine cutting-edge AI technology with enterprise-grade infrastructure and human expertise.</p>
          </div>
          <div className="ai-whychoose-grid ai-reveal">
            {whyChoose.map((w, i) => (
              <div key={i} className="ai-whychoose-card glass-card">
                <div className="ai-whychoose-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Supported Brokers ═══ */}
      <section className="ai-section ai-brokers bg-secondary">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Supported Brokers</span>
            <h2>Connect Your <span className="text-gradient">Preferred Broker</span></h2>
            <p>Securely link your demat account via encrypted API bridge. Supports all major Indian brokers.</p>
          </div>
          <div className="ai-brokers-grid ai-reveal">
            {brokers.map((broker, i) => (
              <div key={i} className="ai-broker-card">
                <div className="ai-broker-logo">{broker.charAt(0)}</div>
                <span className="ai-broker-name">{broker}</span>
                <CheckCircle2 size={16} className="ai-broker-check" />
              </div>
            ))}
          </div>
          <p className="ai-brokers-note">And many more brokers being integrated regularly. Contact us if your broker isn't listed.</p>
        </div>
      </section>

      {/* ═══ Platform Screenshots / Mockups ═══ */}
      <section className="ai-section ai-screenshots">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Platform Preview</span>
            <h2>See the <span className="text-gradient">Platform in Action</span></h2>
            <p>A look at the powerful tools and interfaces that power your trading — across web and mobile.</p>
          </div>
          <div className="ai-screenshots-grid ai-reveal">
            {screenshots.map((s, i) => (
              <div key={i} className="ai-screenshot-card">
                <div className="ai-screenshot-mockup">
                  <div className="ai-mockup-bar">
                    <span /><span /><span />
                  </div>
                  <div className="ai-mockup-screen">
                    <div className="ai-mockup-icon">{s.icon}</div>
                    <div className="ai-mockup-lines">
                      <span className="ai-ml-line w80" />
                      <span className="ai-ml-line w60" />
                      <span className="ai-ml-line w70" />
                      <span className="ai-ml-line w50" />
                    </div>
                  </div>
                </div>
                <div className="ai-screenshot-info">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Performance Metrics ═══ */}
      <section className="ai-section ai-metrics-section">
        <div className="ai-metrics-bg" />
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Performance Metrics</span>
            <h2>Numbers That <span className="text-gradient">Speak for Themselves</span></h2>
            <p>Enterprise-grade infrastructure delivering reliability and speed at scale.</p>
          </div>
          <div className="ai-metrics-grid ai-reveal">
            <MetricCounter value={99.9} suffix="%" decimals={1} label="Platform Uptime" />
            <MetricCounter value={20} suffix="ms" label="Execution Latency" />
            <MetricCounter value={10000} suffix="+" label="Daily Trades Executed" />
            <MetricCounter value={1000} suffix="+" label="Active Strategies" />
            <MetricCounter value={24} suffix="×7" label="Monitoring &amp; Support" />
            <MetricCounter value={9} suffix="+" label="Brokers Integrated" />
          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="ai-section ai-testimonials bg-secondary">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">Testimonials</span>
            <h2>Trusted by <span className="text-gradient">1,200+ Traders</span></h2>
            <p>Real stories from real traders who transformed their trading with AI automation.</p>
          </div>
          <div className="ai-testimonials-grid ai-reveal">
            {testimonials.map((t, i) => (
              <div key={i} className="ai-testimonial-card glass-card">
                <div className="ai-testimonial-rating">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="ai-star">★</span>
                  ))}
                </div>
                <p className="ai-testimonial-text">"{t.text}"</p>
                <div className="ai-testimonial-author">
                  <div className="ai-testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ai-section ai-faq-section">
        <div className="container">
          <div className="ai-section-header ai-reveal">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p>Everything you need to know about our AI Trading Platform.</p>
          </div>
          <div className="ai-faq-list ai-reveal">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="ai-final-cta">
        <div className="ai-cta-bg" />
        <div className="ai-cta-orb ai-cta-orb-1" />
        <div className="ai-cta-orb ai-cta-orb-2" />
        <div className="container ai-cta-content ai-reveal">
          <span className="section-label">Get Started Today</span>
          <h2>Start <span className="text-gradient">AI-Powered Trading</span> Today</h2>
          <p>Join 1,200+ traders who automated their strategies with Finbytech's AI Trading Platform. Book a demo or talk to our sales team — we'll have you live within 24 hours.</p>
          <div className="ai-cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <Play size={16} /> Book a Demo
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              <PhoneCall size={16} /> Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AITrading;
