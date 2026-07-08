import { Link } from 'react-router-dom';
import { Target, Lightbulb, Award, Users, Cpu, Globe, ArrowRight } from 'lucide-react';
import './About.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  type: 'One Person Company (Private Limited)',
  incorporated: '20 December 2024',
  address: {
    line1: 'C/o R D Ghanshyam Das',
    line2: '29, Daru Bhondela',
    city: 'Jhansi City',
    district: 'Jhansi',
    state: 'Uttar Pradesh',
    pincode: '284002',
    country: 'India'
  }
};

function About() {
  const values = [
    { icon: <Award size={28} />, title: 'Excellence', desc: 'Delivering solutions that exceed expectations through rigorous quality standards.' },
    { icon: <Users size={28} />, title: 'Client Focus', desc: 'Prioritizing client success in every decision and solution we deliver.' },
    { icon: <Lightbulb size={28} />, title: 'Innovation', desc: 'Continuously exploring and adopting cutting-edge technologies.' },
    { icon: <Target size={28} />, title: 'Integrity', desc: 'Conducting business with the highest ethical standards and transparency.' },
  ];

  const stats = [
    { value: '16+', label: 'Services Offered' },
    { value: '1', label: 'Consumer Brand' },
    { value: '2024', label: 'Year Founded' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">About Us</span>
          <h1>{COMPANY.name}</h1>
          <p className="hero-subtitle">Technology Excellence, Delivered</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section company-section">
        <div className="container">
          <div className="company-grid">
            <div className="company-content">
              <h2>Company Overview</h2>
              <p>
                {COMPANY.name} is a technology company incorporated on {COMPANY.incorporated} as a {COMPANY.type}.
                We are focused on delivering cutting-edge solutions in Artificial Intelligence, Software Development,
                Web Development, Mobile Applications, Enterprise Solutions, Cloud Technologies, Digital Marketing,
                API Integrations, Trading Technology, SaaS Platforms, and Business Automation.
              </p>
              <p>
                Our team combines deep technical expertise with strategic thinking to deliver solutions that
                drive measurable business outcomes. From startups to enterprises, we partner with organizations
                across industries to accelerate their digital transformation journey.
              </p>
              <div className="company-details glass-card">
                <div className="detail-row">
                  <span className="detail-label">Company Name</span>
                  <span className="detail-value">{COMPANY.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">CIN</span>
                  <span className="detail-value">{COMPANY.cin}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Company Type</span>
                  <span className="detail-value">{COMPANY.type}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Incorporated</span>
                  <span className="detail-value">{COMPANY.incorporated}</span>
                </div>
              </div>
            </div>
            <div className="company-visual">
              <div className="visual-card animate-pulse-glow">
                <Cpu size={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section bg-secondary">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card glass-card">
              <div className="mission-icon"><Target size={40} /></div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive growth, efficiency,
                and digital transformation. We aim to be the trusted technology partner for organizations
                seeking to leverage AI, cloud, and cutting-edge software for competitive advantage.
              </p>
            </div>
            <div className="mission-card glass-card">
              <div className="mission-icon"><Lightbulb size={40} /></div>
              <h3>Our Vision</h3>
              <p>
                To be the leading technology company recognized for excellence, innovation, and customer
                satisfaction. We envision a world where intelligent technology empowers every business
                to reach its full potential and create meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Foundation</span>
            <h2>Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card glass-card card-hover">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Finbytechnovation */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Us</span>
            <h2>Why Finbytechnovation?</h2>
            <p>What sets us apart in the technology landscape</p>
          </div>
          <div className="why-content glass-card">
            <div className="why-grid-content">
              <div className="why-item">
                <h4>Innovation-Driven</h4>
                <p>We continuously invest in research and development to stay at the forefront of technology advancement.</p>
              </div>
              <div className="why-item">
                <h4>Client-Centric</h4>
                <p>Every solution is designed around your unique business needs, ensuring maximum value and impact.</p>
              </div>
              <div className="why-item">
                <h4>Full-Stack Capability</h4>
                <p>From AI to Cloud, Mobile to Enterprise - we have expertise across the complete technology spectrum.</p>
              </div>
              <div className="why-item">
                <h4>Agile Delivery</h4>
                <p>Rapid development cycles with continuous feedback ensure we deliver solutions that truly work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content glass-card">
            <h2>Ready to Work With Us?</h2>
            <p>Let's discuss how we can help transform your business.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
