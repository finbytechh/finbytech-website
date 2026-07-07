import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, TrendingUp, Globe, Users, Zap, Shield, Award, Heart, Video, Phone, CircleCheck as CheckCircle } from 'lucide-react';
import './Home.css';

function Home() {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies including SEO, PPC, social media, and content marketing to grow your business."
    },
    {
      icon: <Globe size={32} />,
      title: "API Bridge Trading",
      description: "Automated trading solutions connecting your demat account via API Bridge with pre-loaded strategies."
    },
    {
      icon: <Users size={32} />,
      title: "Brand Building",
      description: "Complete brand identity development including logo design, messaging, and visual identity systems."
    },
    {
      icon: <Zap size={32} />,
      title: "1Click Platform",
      description: "Our flagship automated trading platform supporting major brokers with fully automated execution."
    }
  ];

  const intenseDatingFeatures = [
    { icon: <Heart size={20} />, text: "Private Chat" },
    { icon: <Video size={20} />, text: "Video Calling" },
    { icon: <Phone size={20} />, text: "Voice Calling" },
    { icon: <CheckCircle size={20} />, text: "Verified Profiles" },
    { icon: <Zap size={20} />, text: "AI Matchmaking" },
    { icon: <Award size={20} />, text: "Premium Membership" }
  ];

  const stats = [
    { value: "100+", label: "Clients Served" },
    { value: "200+", label: "Projects Delivered" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Top Brands Trust Our Digital Services</h1>
            <p>
              Finbytechnovation specializes in B2B and B2C solutions offering services in Mobile & Web application development,
              website creation, digital marketing, and brand-building. We cater to diverse industries including financial & fintech,
              securities markets, real estate, and e-commerce.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="brands-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Brands</h2>
            <p>Building products that make a difference</p>
          </div>
          <div className="brands-grid">
            <div className="brand-card-main">
              <div className="brand-icon">
                <Heart size={40} />
              </div>
              <h3>Intense Dating</h3>
              <p>
                India's premium dating app featuring Private Chat, Video Calling, Voice Calling, Verified Profiles,
                AI Matchmaking, and Premium Membership. Find your perfect match with meaningful connections.
              </p>
              <div className="brand-features">
                {intenseDatingFeatures.map((feature, index) => (
                  <div key={index} className="feature-tag">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="brand-buttons">
                <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <Globe size={16} /> Visit Website
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
                  Download App
                </a>
                <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  WhatsApp Support
                </a>
              </div>
            </div>
            <div className="brand-card-main brand-info">
              <div className="brand-icon">
                <Users size={40} />
              </div>
              <h3>A Product of Finbytechnovation IT Solutions</h3>
              <p>
                Intense Dating is developed, owned and operated by <strong>Finbytechnovation IT Solutions (OPC) Pvt. Ltd.</strong>
              </p>
              <p>
                Our commitment to excellence extends beyond IT services to creating consumer products that enhance people's lives.
                Intense Dating represents our entry into the consumer application market, bringing the same dedication to quality
                and user experience that defines our enterprise solutions.
              </p>
              <Link to="/intense-dating" className="link-arrow">
                Learn More About Intense Dating <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link to="/services" className="link-arrow">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>What sets us apart from the competition</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><Shield size={32} /></div>
              <h4>Quality Assured</h4>
              <p>Rigorous testing and quality assurance processes ensure flawless deliverables.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Users size={32} /></div>
              <h4>Expert Team</h4>
              <p>Skilled professionals with expertise in cutting-edge technologies and methodologies.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Zap size={32} /></div>
              <h4>Fast Delivery</h4>
              <p>Agile development methodology ensures quick turnaround without compromising quality.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><Award size={32} /></div>
              <h4>Proven Track Record</h4>
              <p>100+ satisfied clients across diverse industries testify to our reliability and excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your digital goals.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us <ArrowRight size={20} />
              </Link>
              <Link to="/pricing" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
