import { Link } from 'react-router-dom';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import './Pricing.css';

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "12,999",
      period: "30 Days",
      description: "Perfect for beginners exploring automated trading",
      features: [
        "Single Strategy Access",
        "Basic Support",
        "Email Alerts",
        "Daily Reports",
        "One Broker Connection"
      ],
      popular: false
    },
    {
      name: "Quarterly",
      price: "33,999",
      period: "90 Days",
      description: "Best value for regular traders",
      features: [
        "3 Strategy Access",
        "Priority Support",
        "Real-time Alerts",
        "Weekly Reports",
        "Multiple Broker Connections",
        "Risk Management Tools",
        "API Integration"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "64,999",
      period: "180 Days",
      description: "For serious traders who want it all",
      features: [
        "Unlimited Strategy Access",
        "24/7 Dedicated Support",
        "Real-time Alerts",
        "Custom Reports",
        "Unlimited Broker Connections",
        "Advanced Risk Management",
        "API Integration",
        "Priority Feature Updates",
        "Expert Advice Sessions"
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-hero">
        <div className="container">
          <h1>Pricing Plans</h1>
          <p>Choose the perfect plan for your trading journey</p>
        </div>
      </section>

      <section className="pricing-content">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <Star size={14} /> Most Popular
                  </div>
                )}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">INR</span>
                    <span className="amount">{plan.price}</span>
                  </div>
                  <p className="period">{plan.period}</p>
                  <p className="plan-desc">{plan.description}</p>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <Zap size={24} />
            <div>
              <h4>Note</h4>
              <p>
                All subscription fees are non-refundable. We recommend taking our Expert Advice evaluation
                before subscribing. Prices are subject to change. Contact us for custom enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
