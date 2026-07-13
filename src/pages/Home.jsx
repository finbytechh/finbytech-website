import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Code, Globe, Smartphone, Cloud, Zap, Database, Bot, Users, Shield, Award, Target, Heart, Video, Phone, CircleCheck as CheckCircle, TrendingUp, ChartBar as BarChart, Settings, MessageCircle, Layers, Headphones as HeadphonesIcon } from 'lucide-react';
import SEO from '../components/SEO';
import './Home.css';

function Home() {
  const services = [
    { icon: <Bot size={24} />, title: 'AI Solutions', desc: 'Advanced artificial intelligence and machine learning for intelligent automation.' },
    { icon: <Code size={24} />, title: 'Software Development', desc: 'Custom software built with modern technologies and best practices.' },
    { icon: <Globe size={24} />, title: 'Website Development', desc: 'High-performance websites and web applications that drive results.' },
    { icon: <Smartphone size={24} />, title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android.' },
    { icon: <TrendingUp size={24} />, title: 'Digital Marketing', desc: 'Data-driven strategies to grow your brand and reach.' },
    { icon: <BarChart size={24} />, title: 'SEO Services', desc: 'Search optimization to improve visibility and organic traffic.' },
    { icon: <Cloud size={24} />, title: 'Cloud Services', desc: 'Scalable cloud infrastructure and migration services.' },
    { icon: <Database size={24} />, title: 'API Development', desc: 'Robust API integrations connecting systems seamlessly.' },
    { icon: <Settings size={24} />, title: 'Business Automation', desc: 'Streamline operations with intelligent automation solutions.' },
    { icon: <Layers size={24} />, title: 'Enterprise Solutions', desc: 'Comprehensive enterprise software for large organizations.' },
    { icon: <Users size={24} />, title: 'CRM Development', desc: 'Custom CRM solutions tailored to your business needs.' },
    { icon: <Database size={24} />, title: 'ERP Development', desc: 'Integrated ERP systems for operational excellence.' },
    { icon: <Target size={24} />, title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces that users love.' },
    { icon: <MessageCircle size={24} />, title: 'Startup Consulting', desc: 'Strategic guidance from idea to launch.' },
    { icon: <Zap size={24} />, title: 'Trading Technology', desc: 'Advanced trading platforms and algorithmic solutions.' },
    { icon: <Layers size={24} />, title: 'Custom SaaS', desc: 'Software as a Service platforms built to scale.' },
  ];

  const industries = [
    'Financial Services', 'Healthcare', 'E-Commerce', 'Real Estate',
    'Education', 'Logistics', 'Manufacturing', 'Retail'
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'AWS', 'Azure', 'Google Cloud',
    'TensorFlow', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis'
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your requirements and goals.' },
    { num: '02', title: 'Strategy', desc: 'Crafting a comprehensive solution architecture.' },
    { num: '03', title: 'Development', desc: 'Building with cutting-edge technology.' },
    { num: '04', title: 'Testing', desc: 'Rigorous quality assurance and testing.' },
    { num: '05', title: 'Deployment', desc: 'Seamless launch with zero downtime.' },
    { num: '06', title: 'Support', desc: 'Ongoing maintenance and improvements.' },
  ];

  const testimonials = [
    { name: 'Tech Corp', text: 'Exceptional team that delivered beyond our expectations. Their AI solutions transformed our operations.' },
    { name: 'Finance Hub', text: 'Professional, innovative, and always on time. Finbytechnovation is our go-to technology partner.' },
    { name: 'StartUp India', text: 'Their trading platform helped us scale from 0 to 10,000 users seamlessly.' },
  ];

  const faqs = [
    { q: 'What services does Finbytechnovation offer?', a: 'We offer AI Solutions, Software Development, Web Development, Mobile Apps, Cloud Services, Digital Marketing, and Enterprise Solutions.' },
    { q: 'Where is Finbytechnovation located?', a: 'Our registered office is in Jhansi City, Uttar Pradesh, India. We serve clients globally.' },
    { q: 'What is Intense Dating?', a: 'Intense Dating is our flagship consumer dating app with AI Matchmaking, Private Chat, Video Calling, and Verified Profiles.' },
  ];

  const intenseFeatures = [
    { icon: <Heart size={16} />, text: 'Private Chat' },
    { icon: <Video size={16} />, text: 'Video Calling' },
    { icon: <Phone size={16} />, text: 'Voice Calling' },
    { icon: <CheckCircle size={16} />, text: 'Verified Profiles' },
    { icon: <Zap size={16} />, text: 'AI Matchmaking' },
    { icon: <Award size={16} />, text: 'Premium Membership' },
  ];

  return (
    <div className="home-page">
      <SEO
        title="AI Solutions, Software Development, Web & Mobile Apps - India"
        description="FINBYTECHNOVATION IT SOLUTIONS - Premier IT company in India offering AI Solutions, Software Development, Web & Mobile App Development, Digital Marketing, SEO, Cloud Services, and Algorithmic Trading Technology. CIN: U62013UP2024OPC213677."
        canonical="/"
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid-bg"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              AI-Powered Technology Company
            </span>
            <h1>
              Building the Future with
              <span className="text-gradient"> Intelligence</span>
            </h1>
            <p>
              FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED — Premier IT company specializing
              in Artificial Intelligence, Software Development, Enterprise Solutions, Cloud Technologies,
              and Digital Transformation.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">2024</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat">
                <span className="stat-value">16+</span>
                <span className="stat-label">Services</span>
              </div>
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-label">About Us</span>
              <h2>FINBYTECHNOVATION IT SOLUTIONS</h2>
              <p>
                Incorporated on 20 December 2024 as a One Person Company, we are focused on delivering
                cutting-edge solutions in Artificial Intelligence, Software Development, Web Development,
                Mobile Applications, Enterprise Solutions, Cloud Technologies, Digital Marketing,
                API Integrations, Trading Technology, SaaS Platforms, and Business Automation.
              </p>
              <p>
                Our team combines deep technical expertise with strategic thinking to deliver solutions
                that drive measurable business outcomes for startups and enterprises across industries.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '8px' }}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-visual">
              <div className="visual-card animate-pulse-glow">
                <Cpu size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2>Technology Excellence, Delivered</h2>
            <p>What sets us apart in building tomorrow's solutions today</p>
          </div>
          <div className="why-grid">
            <div className="why-card glass-card card-hover">
              <div className="why-icon"><Shield size={28} /></div>
              <h4>Quality Assured</h4>
              <p>Rigorous quality processes ensure flawless, production-ready deliverables.</p>
            </div>
            <div className="why-card glass-card card-hover">
              <div className="why-icon"><Users size={28} /></div>
              <h4>Expert Team</h4>
              <p>Skilled professionals with deep expertise in cutting-edge technologies.</p>
            </div>
            <div className="why-card glass-card card-hover">
              <div className="why-icon"><Zap size={28} /></div>
              <h4>Fast Delivery</h4>
              <p>Agile methodology ensures quick turnaround without compromising quality.</p>
            </div>
            <div className="why-card glass-card card-hover">
              <div className="why-icon"><Award size={28} /></div>
              <h4>Innovation First</h4>
              <p>We continuously explore and adopt the latest technological advancements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Comprehensive Technology Solutions</h2>
            <p>From AI to Enterprise Systems, we deliver excellence across the spectrum</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass-card card-hover">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries & Technologies */}
      <section className="section tech-section bg-secondary">
        <div className="container">
          <div className="tech-grid">
            <div className="tech-col">
              <span className="section-label">Industries</span>
              <h3>Sectors We Serve</h3>
              <div className="tech-tags">
                {industries.map((ind, i) => <span key={i} className="tech-tag">{ind}</span>)}
              </div>
            </div>
            <div className="tech-col">
              <span className="section-label">Technologies</span>
              <h3>Our Tech Stack</h3>
              <div className="tech-tags">
                {technologies.map((tech, i) => <span key={i} className="tech-tag">{tech}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intense Dating Brand */}
      <section className="section brands-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Brands</span>
            <h2>Consumer Innovation</h2>
            <p>Building products that make a meaningful impact</p>
          </div>
          <div className="brand-showcase glass-card">
            <div className="brand-icon animate-float"><Heart size={44} /></div>
            <h3>Intense Dating</h3>
            <p className="brand-tagline">Premium Dating App</p>
            <p className="brand-desc">
              India's premium dating application featuring Private Chat, Video Calling, Voice Calling,
              Verified Profiles, AI Matchmaking, and Premium Membership. Developed and operated by
              FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED.
            </p>
            <div className="brand-features">
              {intenseFeatures.map((f, i) => (
                <div key={i} className="feature-badge">
                  {f.icon}
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
            <div className="brand-cta">
              <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Globe size={16} /> Visit Website
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Download App
              </a>
              <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Phone size={16} /> Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section process-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>How We Build</h2>
            <p>A structured approach to delivering excellence</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card glass-card">
                <span className="process-num">{step.num}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Success</span>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card glass-card">
                <p>"{item.text}"</p>
                <span className="testimonial-author">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
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

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content glass-card">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your technology goals.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-secondary btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
