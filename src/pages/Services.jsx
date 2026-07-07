import { Link } from 'react-router-dom';
import { Code, Smartphone, TrendingUp, Globe, Users, Zap, Shield, Database, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Web Application Development",
        "CMS Development",
        "Progressive Web Apps",
        "Website Maintenance"
      ]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-Platform Apps",
        "UI/UX Design",
        "App Store Optimization",
        "App Maintenance & Support"
      ]
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies including SEO, PPC, social media, and content marketing to grow your business.",
      features: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <Database size={40} />,
      title: "API Bridge Trading",
      description: "Automated trading solutions connecting your demat account via API Bridge with pre-loaded strategies.",
      features: [
        "Multi-Broker Support",
        "Automated Execution",
        "Real-time Monitoring",
        "Strategy Development",
        "Risk Management Tools",
        "Custom Alerts"
      ]
    },
    {
      icon: <Globe size={40} />,
      title: "1Click Platform",
      description: "Our flagship automated trading platform supporting major brokers with fully automated execution.",
      features: [
        "Fully Automated Trading",
        "Pre-loaded Strategies",
        "Multi-Asset Support",
        "Backtesting Features",
        "Risk Management",
        "24/7 Support"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "Brand Building",
      description: "Complete brand identity development including logo design, messaging, and visual identity systems.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Messaging",
        "Marketing Collateral",
        "Rebranding Services"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`service-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-content">
                <div className="service-icon-main">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div className="service-visual">
                <div className="visual-box">
                  <Zap size={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your project requirements.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
