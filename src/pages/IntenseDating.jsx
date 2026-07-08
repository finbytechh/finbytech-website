import { Heart, Video, Phone, CircleCheck as CheckCircle, Zap, Award, Globe, ArrowRight, Users, MessageCircle, Shield, Lock, Sparkles } from 'lucide-react';
import './IntenseDating.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  website: 'https://intensedating.in',
  playStore: 'https://play.google.com/store/apps/details?id=com.intense.app',
  whatsapp: 'https://wa.me/919515363772',
  phone: '+91 96511 18519'
};

function IntenseDating() {
  const features = [
    { icon: <MessageCircle size={28} />, title: 'Private Chat', desc: 'Secure, encrypted messaging with your matches. Express yourself freely in a safe environment.' },
    { icon: <Video size={28} />, title: 'Video Calling', desc: 'Face-to-face video calls to build deeper connections before meeting in person.' },
    { icon: <Phone size={28} />, title: 'Voice Calling', desc: 'Voice call feature for more personal and intimate conversations.' },
    { icon: <Shield size={28} />, title: 'Verified Profiles', desc: 'All profiles verified for authenticity and safety. Connect with genuine people.' },
    { icon: <Zap size={28} />, title: 'AI Matchmaking', desc: 'Smart AI-powered matching algorithm that learns your preferences.' },
    { icon: <Award size={28} />, title: 'Premium Membership', desc: 'Exclusive features including unlimited likes, advanced filters, and priority support.' }
  ];

  const stats = [
    { value: '10K+', label: 'Downloads' },
    { value: '4.5', label: 'App Rating' },
    { value: '100%', label: 'Verified Profiles' },
    { value: '24/7', label: 'Support' }
  ];

  const faqs = [
    { q: 'What is Intense Dating?', a: 'Intense Dating is India\'s premium dating app that helps you find meaningful connections through AI-powered matching, verified profiles, and advanced communication features.' },
    { q: 'Is Intense Dating free to use?', a: 'Yes, Intense Dating is free to download and use. We also offer a Premium Membership with exclusive features for users who want an enhanced experience.' },
    { q: 'How are profiles verified?', a: 'We use multiple verification methods including phone number verification, photo verification, and optional identity verification to ensure all profiles are authentic.' },
    { q: 'Is my data safe?', a: 'Absolutely. We use end-to-end encryption for all messages, and your personal information is never shared with third parties without your consent.' },
    { q: 'How do I contact support?', a: 'You can reach our support team via WhatsApp at +91 96511 18519 or visit intensedating.in for more information.' },
    { q: 'Who owns Intense Dating?', a: 'Intense Dating is developed, owned, and operated by FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED, a technology company based in India.' }
  ];

  return (
    <div className="intense-dating-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-badge">
                <Heart size={14} /> Premium Dating App
              </span>
              <h1>Intense Dating</h1>
              <p className="tagline">Find Your Perfect Match</p>
              <p className="hero-desc">
                India's premium dating application featuring Private Chat, Video Calling, Voice Calling,
                Verified Profiles, AI Matchmaking, and Premium Membership. Discover meaningful connections
                with people who share your values and interests.
              </p>
              <div className="hero-buttons">
                <a href={COMPANY.playStore} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
                  <Globe size={18} /> Download App
                </a>
                <a href={COMPANY.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                  Visit Website <ArrowRight size={16} />
                </a>
              </div>
              <div className="hero-stats">
                {stats.map((stat, i) => (
                  <div key={i} className="hero-stat">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup animate-float">
                <Heart size={100} />
                <Sparkles size={40} className="sparkle-1" />
                <Sparkles size={30} className="sparkle-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2>Everything You Need to Find Love</h2>
            <p>Advanced features designed for meaningful connections</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card glass-card card-hover">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section safety-section bg-secondary">
        <div className="container">
          <div className="safety-grid">
            <div className="safety-content">
              <span className="section-label">Your Safety</span>
              <h2>Your Safety is Our Priority</h2>
              <p>
                At Intense Dating, we take your safety seriously. Every profile goes through our verification
                process, and all communications are protected with end-to-end encryption.
              </p>
              <ul className="safety-list">
                <li><Shield size={18} /> Verified profiles only</li>
                <li><Lock size={18} /> End-to-end encrypted messaging</li>
                <li><CheckCircle size={18} /> 24/7 moderation and support</li>
                <li><Shield size={18} /> Report and block features</li>
              </ul>
            </div>
            <div className="safety-visual">
              <div className="safety-image glass-card">
                <Shield size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about Intense Dating</p>
          </div>
          <div className="faq-grid">
            {faqs.map((item, index) => (
              <div key={index} className="faq-card glass-card">
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="section ownership-section bg-secondary">
        <div className="container">
          <div className="ownership-card glass-card">
            <div className="ownership-icon">
              <Users size={40} />
            </div>
            <div className="ownership-content">
              <h2>A Product of {COMPANY.name}</h2>
              <p className="ownership-intro">
                Intense Dating is developed, owned, and operated by {COMPANY.name}.
                Our commitment to excellence extends beyond IT services to creating consumer products
                that enhance people's lives with cutting-edge technology and user-focused design.
              </p>
              <div className="ownership-details">
                <div className="detail-row">
                  <span className="detail-label">Company</span>
                  <span className="detail-value">{COMPANY.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">CIN</span>
                  <span className="detail-value">{COMPANY.cin}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Website</span>
                  <a href={COMPANY.website} target="_blank" rel="noopener noreferrer" className="detail-link">{COMPANY.website}</a>
                </div>
              </div>
              <p className="ownership-support">
                <strong>Support:</strong> WhatsApp us at{' '}
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">{COMPANY.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content glass-card">
            <h2>Start Your Journey Today</h2>
            <p>Download Intense Dating and find your perfect match.</p>
            <div className="cta-buttons">
              <a href={COMPANY.playStore} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
                Download from Play Store <ArrowRight size={18} />
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                <MessageCircle size={18} /> WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntenseDating;
