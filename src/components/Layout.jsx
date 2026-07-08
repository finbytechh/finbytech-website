import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import './Layout.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  shortName: 'Finbytechnovation',
  cin: 'U62013UP2024OPC213677',
  incorporated: '20 December 2024',
  address: {
    line1: 'C/o R D Ghanshyam Das',
    line2: '29, Daru Bhondela',
    city: 'Jhansi City',
    district: 'Jhansi',
    state: 'Uttar Pradesh',
    pincode: '284002',
    country: 'India'
  },
  email: 'info@finbytech.com',
  support: 'support@finbytech.com',
  phone: '+91 96511 18519',
  website: 'https://finbytech.com'
};

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const services = [
    { name: 'AI Solutions', path: '/services' },
    { name: 'Software Development', path: '/services' },
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'Cloud Services', path: '/services' },
    { name: 'Trading Technology', path: '/services' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'Cancellation Policy', path: '/cancellation' },
    { name: 'Shipping Policy', path: '/shipping' },
    { name: 'Disclaimer', path: '/disclaimer' },
    { name: 'Grievance Redressal', path: '/grievance' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  return (
    <div className="layout">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo">
              <img src="/logo.svg" alt="Finbytechnovation IT Solutions" className="logo-img" />
              <div className="logo-text">
                <span className="logo-main">Finbytechnovation</span>
                <span className="logo-sub">IT Solutions</span>
              </div>
            </Link>

            <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>

              <li className="dropdown"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}>
                <button className="dropdown-toggle">
                  Services <ChevronDown size={14} className={activeDropdown === 'services' ? 'rotate' : ''} />
                </button>
                {activeDropdown === 'services' && (
                  <div className="dropdown-menu">
                    {services.map((item, i) => (
                      <Link key={i} to={item.path}>{item.name}</Link>
                    ))}
                    <Link to="/services" className="view-all">View All Services <ArrowRight size={14} /></Link>
                  </div>
                )}
              </li>

              <li className="dropdown"
                  onMouseEnter={() => setActiveDropdown('brands')}
                  onMouseLeave={() => setActiveDropdown(null)}>
                <button className="dropdown-toggle">
                  Brands <ChevronDown size={14} className={activeDropdown === 'brands' ? 'rotate' : ''} />
                </button>
                {activeDropdown === 'brands' && (
                  <div className="dropdown-menu brands-menu">
                    <div className="brand-item">
                      <span className="brand-name">Intense Dating</span>
                      <span className="brand-desc">Premium Dating App</span>
                      <div className="brand-links">
                        <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={12} /> Website
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer">
                          Download App
                        </a>
                      </div>
                    </div>
                    <Link to="/intense-dating" className="view-all">Learn More <ArrowRight size={14} /></Link>
                  </div>
                )}
              </li>

              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
              <li className="nav-cta">
                <Link to="/contact" className="btn btn-primary btn-sm">Get Started</Link>
              </li>
            </ul>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-col footer-company">
              <div className="footer-logo">
                <img src="/logo.svg" alt="Finbytechnovation" className="footer-logo-img" />
                <div className="logo-text">
                  <span className="logo-main">Finbytechnovation</span>
                  <span className="logo-sub">IT Solutions</span>
                </div>
              </div>
              <p className="footer-desc">
                A technology company focused on Artificial Intelligence, Software Development, Web Development,
                Mobile Applications, Enterprise Solutions, Cloud Technologies, Digital Marketing, API Integrations,
                Trading Technology, SaaS Platforms and Business Automation.
              </p>
              <div className="footer-badges">
                <span className="badge">CIN: {COMPANY.cin}</span>
                <span className="badge">Est. {COMPANY.incorporated.split(' ')[2]}</span>
              </div>
              <div className="social-links">
                <a href="https://facebook.com/finbytech" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <ExternalLink size={18} />
                </a>
                <a href="https://instagram.com/finbytech01" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <ExternalLink size={18} />
                </a>
                <a href="https://linkedin.com/company/finbytech" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <ExternalLink size={18} />
                </a>
                <a href="https://twitter.com/finbytech" target="_blank" rel="noopener noreferrer" title="Twitter">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/intense-dating">Intense Dating</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">AI Solutions</Link></li>
                <li><Link to="/services">Software Development</Link></li>
                <li><Link to="/services">Website Development</Link></li>
                <li><Link to="/services">Mobile Apps</Link></li>
                <li><Link to="/services">Cloud Services</Link></li>
                <li><Link to="/services">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Our Brands */}
            <div className="footer-col">
              <h4>Our Brands</h4>
              <div className="footer-brand">
                <span className="brand-title">Intense Dating</span>
                <span className="brand-tagline">Premium Dating App</span>
                <p>A flagship consumer platform developed and operated by {COMPANY.name}.</p>
                <div className="brand-cta">
                  <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer">Visit Website</a>
                  <span>|</span>
                  <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer">Download App</a>
                </div>
                <Link to="/intense-dating" className="learn-more">Learn More <ArrowRight size={14} /></Link>
              </div>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <h4>Legal</h4>
              <ul className="footer-links">
                {legal.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <Phone size={16} />
                  <a href="tel:+919651118519">{COMPANY.phone}</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href={`mailto:${COMPANY.support}`}>{COMPANY.support}</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>
                    {COMPANY.address.line1}, {COMPANY.address.line2},<br />
                    {COMPANY.address.city}, {COMPANY.address.district},<br />
                    {COMPANY.address.state} - {COMPANY.address.pincode},<br />
                    {COMPANY.address.country}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.</p>
            <p className="footer-tagline">CIN: {COMPANY.cin} | Incorporated: {COMPANY.incorporated}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
