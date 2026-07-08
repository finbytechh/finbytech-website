import { Link } from 'react-router-dom';
import { Zap, Shield, Globe, Users, ChartBar as BarChart, Clock, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import './OneClick.css';

function OneClick() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Fully Automated",
      description: "Execute trades automatically without manual intervention"
    },
    {
      icon: <Shield size={32} />,
      title: "Risk Management",
      description: "Built-in risk controls to protect your capital"
    },
    {
      icon: <Globe size={32} />,
      title: "Multi-Broker Support",
      description: "Connect with all major brokers seamlessly"
    },
    {
      icon: <BarChart size={32} />,
      title: "Real-time Analytics",
      description: "Monitor performance with detailed analytics"
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Operation",
      description: "Run strategies around the clock automatically"
    },
    {
      icon: <Users size={32} />,
      title: "Expert Support",
      description: "Dedicated support team to assist you"
    }
  ];

  const brokers = ["Zerodha", "Upstox", "Angel One", "5Paisa", "Groww", "ICICI Direct", "HDFC Securities"];

  return (
    <div className="oneclick-page">
      <SEO
        title="OneClick Trading - Algorithmic Trading Platform"
        description="OneClick Trading by FINBYTECHNOVATION IT SOLUTIONS - Advanced algorithmic trading platform with API bridge, automated execution, multi-broker support, and real-time strategy management."
        canonical="/oneclick"
      />
      <section className="page-hero">
        <div className="container">
          <h1>1Click Trading Platform</h1>
          <p>Automated trading solutions for smarter investing</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Trade Smarter, Not Harder</h2>
              <p>
                1Click Platform is our flagship automated trading solution that connects your demat account
                via API Bridge technology. Execute trades automatically with pre-loaded strategies, risk
                management, and real-time monitoring - all without manual intervention.
              </p>
              <p>
                Our platform supports major brokers and offers fully automated trading with comprehensive
                analytics to help you make informed decisions. Whether you're new to trading or an
                experienced professional, 1Click Platform scales to your needs.
              </p>
              <div className="intro-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Request Demo <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="btn btn-outline btn-lg">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="intro-visual">
              <div className="visual-card">
                <Zap size={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Everything you need for successful automated trading</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brokers-section">
        <div className="container">
          <div className="section-header">
            <h2>Supported Brokers</h2>
            <p>Connect with your preferred broker seamlessly</p>
          </div>
          <div className="brokers-grid">
            {brokers.map((broker, index) => (
              <div key={index} className="broker-item">
                <CheckCircle size={20} />
                <span>{broker}</span>
              </div>
            ))}
          </div>
          <p className="brokers-note">* And many more brokers supported. Contact us for the complete list.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Automate Your Trading?</h2>
            <p>Get started with 1Click Platform today and experience the future of trading.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OneClick;
