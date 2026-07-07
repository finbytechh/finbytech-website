import { Link } from 'react-router-dom';
import { Heart, Video, Phone, CircleCheck as CheckCircle, Zap, Award, Globe, ArrowRight, Users } from 'lucide-react';
import './IntenseDating.css';

function IntenseDating() {
  const features = [
    {
      icon: <Heart size={28} />,
      title: "Private Chat",
      description: "Secure and private messaging with potential matches"
    },
    {
      icon: <Video size={28} />,
      title: "Video Calling",
      description: "Face-to-face video calls to build deeper connections"
    },
    {
      icon: <Phone size={28} />,
      title: "Voice Calling",
      description: "Voice call feature for more personal conversations"
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Verified Profiles",
      description: "All profiles verified for authenticity and safety"
    },
    {
      icon: <Zap size={28} />,
      title: "AI Matchmaking",
      description: "Smart AI-powered matching algorithm"
    },
    {
      icon: <Award size={28} />,
      title: "Premium Membership",
      description: "Exclusive features for premium members"
    }
  ];

  return (
    <div className="intense-dating-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>Intense Dating</h1>
              <p className="tagline">Find Your Perfect Match</p>
              <p>
                India's premium dating app featuring Private Chat, Video Calling, Voice Calling,
                Verified Profiles, AI Matchmaking, and Premium Membership. Find your perfect match
                with meaningful connections.
              </p>
              <div className="hero-buttons">
                <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  Download App
                </a>
                <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                  Visit Website
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup">
                <Heart size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Features</h2>
            <p>Everything you need to find meaningful connections</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-brand bg-secondary">
        <div className="container">
          <div className="about-grid">
            <div className="about-icon">
              <Users size={60} />
            </div>
            <div className="about-text">
              <h2>A Product of Finbytechnovation IT Solutions</h2>
              <p>
                Intense Dating is developed, owned, and operated by Finbytechnovation IT Solutions (OPC) Pvt. Ltd.
                Our commitment to excellence extends beyond IT services to creating consumer products that
                enhance people's lives.
              </p>
              <p>
                Intense Dating represents our entry into the consumer application market, bringing the same
                dedication to quality and user experience that defines our enterprise solutions. We've built
                this app with cutting-edge technology and a focus on user safety and satisfaction.
              </p>
              <p>
                <strong>Support:</strong> For any queries, visit <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer">intensedating.in</a> or
                WhatsApp us at <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer">+91 95153 63772</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Journey Today</h2>
            <p>Download Intense Dating and find your perfect match.</p>
            <div className="cta-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Download from Play Store <ArrowRight size={20} />
              </a>
              <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntenseDating;
