import { Link } from 'react-router-dom';
import { Bot, Code, Globe, Smartphone, Cloud, Database, Settings, Layers, Users, Target, Zap, TrendingUp, ChartBar as BarChart, MessageCircle, Headphones as HeadphonesIcon, ArrowRight, CircleCheck as CheckCircle, Shield, Cpu } from 'lucide-react';
import './Services.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED'
};

function Services() {
  const services = [
    {
      icon: <Bot size={32} />,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions for intelligent automation, predictive analytics, and data-driven decision making.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots', 'Process Automation']
    },
    {
      icon: <Code size={32} />,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies, best practices, and scalable architecture for enterprise-grade performance.',
      features: ['Custom Software', 'Enterprise Applications', 'Desktop Applications', 'Legacy Modernization', 'API Development', 'Quality Assurance']
    },
    {
      icon: <Globe size={32} />,
      title: 'Website Development',
      description: 'High-performance, responsive websites and web applications that deliver exceptional user experiences and drive business results.',
      features: ['Corporate Websites', 'E-Commerce Platforms', 'Web Applications', 'Landing Pages', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with intuitive interfaces and seamless performance.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'UI/UX Design', 'App Store Optimization', 'Maintenance & Support']
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase brand visibility, drive qualified traffic, and generate measurable business growth.',
      features: ['SEO Optimization', 'PPC Advertising', 'Social Media Marketing', 'Content Marketing', 'Email Campaigns', 'Analytics & Reporting']
    },
    {
      icon: <BarChart size={32} />,
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization to improve visibility, organic traffic, and search rankings for sustainable growth.',
      features: ['Technical SEO', 'On-Page Optimization', 'Off-Page SEO', 'Local SEO', 'Keyword Research', 'Competitor Analysis']
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration services, and managed cloud solutions for modern business operations.',
      features: ['Cloud Migration', 'AWS Services', 'Azure Solutions', 'Google Cloud', 'DevOps Implementation', 'Cloud Security']
    },
    {
      icon: <Database size={32} />,
      title: 'API Development',
      description: 'Robust API design, development, and integration services connecting systems seamlessly for enhanced functionality.',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-Party Integration', 'API Gateway', 'Documentation', 'Security & Authentication']
    },
    {
      icon: <Settings size={32} />,
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation solutions that reduce manual effort and increase efficiency.',
      features: ['Workflow Automation', 'RPA Solutions', 'Document Processing', 'Integration Automation', 'Reporting Automation', 'Process Optimization']
    },
    {
      icon: <Layers size={32} />,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise software for large organizations including ERP, CRM, and custom business applications.',
      features: ['ERP Systems', 'CRM Platforms', 'Business Intelligence', 'Integration Hub', 'Custom Portals', 'Enterprise Security']
    },
    {
      icon: <Users size={32} />,
      title: 'CRM Development',
      description: 'Custom CRM solutions tailored to your business needs for effective customer relationship management and sales optimization.',
      features: ['Sales Automation', 'Lead Management', 'Customer Portal', 'Analytics Dashboard', 'Marketing Integration', 'Mobile CRM']
    },
    {
      icon: <Database size={32} />,
      title: 'ERP Development',
      description: 'Integrated ERP systems for operational excellence across finance, HR, inventory, and business operations.',
      features: ['Financial Management', 'Inventory Control', 'HR Management', 'Supply Chain', 'Manufacturing', 'Business Intelligence']
    },
    {
      icon: <Target size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love, combining aesthetics with functionality for exceptional digital experiences.',
      features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping', 'Usability Testing', 'Design Systems']
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Startup Consulting',
      description: 'Strategic guidance for startups from idea validation to launch, covering technology, product, and business strategy.',
      features: ['Idea Validation', 'Tech Stack Advisory', 'MVP Development', 'Product Strategy', 'Go-to-Market', 'Investor Readiness']
    },
    {
      icon: <Zap size={32} />,
      title: 'Trading Technology',
      description: 'Advanced trading platforms, algorithmic solutions, and financial technology for modern trading operations.',
      features: ['Algorithmic Trading', 'API Bridge Solutions', 'Real-time Analytics', 'Risk Management', 'Multi-broker Support', 'Custom Strategies']
    },
    {
      icon: <Layers size={32} />,
      title: 'Custom SaaS',
      description: 'Software as a Service platforms built to scale, with multi-tenancy architecture and subscription management.',
      features: ['Multi-tenant Architecture', 'Subscription Billing', 'User Management', 'Data Isolation', 'API-first Design', 'Cloud Deployment']
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
    { num: '02', title: 'Planning', desc: 'Strategic roadmap and technical architecture' },
    { num: '03', title: 'Development', desc: 'Agile development with regular updates' },
    { num: '04', title: 'Testing', desc: 'Rigorous QA and performance testing' },
    { num: '05', title: 'Deployment', desc: 'Seamless launch with zero downtime' },
    { num: '06', title: 'Support', desc: 'Ongoing maintenance and optimization' }
  ];

  const whyChooseUs = [
    { icon: <Shield size={28} />, title: 'Quality Assured', desc: 'Rigorous quality processes ensure flawless deliverables.' },
    { icon: <Cpu size={28} />, title: 'Modern Tech', desc: 'Cutting-edge technologies for future-ready solutions.' },
    { icon: <HeadphonesIcon size={28} />, title: '24/7 Support', desc: 'Round-the-clock support for critical operations.' },
    { icon: <Users size={28} />, title: 'Expert Team', desc: 'Skilled professionals with deep expertise.' }
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Our Services</span>
          <h1>Technology Solutions for Every Business Need</h1>
          <p className="hero-subtitle">
            From AI and cloud to mobile apps and enterprise systems, we deliver comprehensive technology solutions that drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass-card card-hover">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={14} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Us</span>
            <h2>Why Choose {COMPANY.name}?</h2>
            <p>What sets us apart in delivering technology excellence</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card glass-card">
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>How We Work</h2>
            <p>A structured approach to delivering successful projects</p>
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

      {/* Industries */}
      <section className="section industries-section bg-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries</span>
            <h2>Sectors We Serve</h2>
            <p>Delivering solutions across diverse industry verticals</p>
          </div>
          <div className="industries-grid">
            {['Financial Services', 'Healthcare & Pharma', 'E-Commerce & Retail', 'Real Estate', 'Education & EdTech', 'Logistics & Supply Chain', 'Manufacturing', 'Travel & Hospitality', 'Media & Entertainment', 'Legal Services', 'Food & Beverage', 'Automotive'].map((industry, i) => (
              <div key={i} className="industry-tag">{industry}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section tech-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technologies</span>
            <h2>Our Tech Stack</h2>
            <p>Modern technologies powering our solutions</p>
          </div>
          <div className="tech-categories">
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-tags">
                {['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <div className="tech-tags">
                {['Node.js', 'Python', 'Go', 'Java', '.NET', 'GraphQL'].map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>Cloud & DevOps</h4>
              <div className="tech-tags">
                {['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'].map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h4>Data & AI</h4>
              <div className="tech-tags">
                {['PostgreSQL', 'MongoDB', 'Redis', 'TensorFlow', 'PyTorch', 'OpenAI'].map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content glass-card">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help transform your business with technology.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
