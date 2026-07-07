import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import './Layout.css';

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="layout">
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo">
              <div className="logo-icon">F</div>
              <span>Finbytechnovation</span>
            </Link>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
              <li><Link to="/oneclick" className={isActive('/oneclick') ? 'active' : ''}>1Click Platform</Link></li>
              <li><Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
              <li className="dropdown">
                <button className="dropdown-toggle" onClick={() => setBrandsDropdown(!brandsDropdown)}>
                  Brands <ChevronDown size={16} className={brandsDropdown ? 'rotate' : ''} />
                </button>
                {brandsDropdown && (
                  <ul className="dropdown-menu">
                    <li><Link to="/intense-dating">Intense Dating</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Company</Link></li>
              <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
              <li><Link to="/pricing" className="btn btn-primary btn-sm">Get Started</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Finbytechnovation IT Solutions</h4>
              <p>Leading IT solutions provider specializing in digital marketing, web development, mobile app development, and API-based trading software.</p>
              <div className="social-links">
                <a href="https://facebook.com/finbytech" target="_blank" rel="noopener noreferrer" title="Facebook"><Globe size={20} /></a>
                <a href="https://instagram.com/finbytech01" target="_blank" rel="noopener noreferrer" title="Instagram"><ExternalLink size={20} /></a>
                <a href="https://twitter.com/finbytech" target="_blank" rel="noopener noreferrer" title="Twitter"><Globe size={20} /></a>
                <a href="https://linkedin.com/company/finbytech" target="_blank" rel="noopener noreferrer" title="LinkedIn"><ExternalLink size={20} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/oneclick">1Click Platform</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/refund">Refund Policy</Link></li>
                <li><Link to="/disclaimer">Disclaimer</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Brands</h4>
              <div className="brand-card">
                <h5>Intense Dating</h5>
                <p>Premium Dating App</p>
                <div className="brand-links">
                  <a href="https://intensedating.in" target="_blank" rel="noopener noreferrer">Website</a>
                  <span>|</span>
                  <a href="https://play.google.com/store/apps/details?id=com.intense.app" target="_blank" rel="noopener noreferrer">Download App</a>
                </div>
                <p className="brand-footer">A Product of Finbytechnovation IT Solutions (OPC) Pvt. Ltd.</p>
              </div>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li><Phone size={16} /> <a href="tel:+919515363772">+91 95153 63772</a></li>
                <li><Mail size={16} /> <a href="mailto:care@finbytechnovation.in">care@finbytechnovation.in</a></li>
                <li><MapPin size={16} /> Jaipur, Rajasthan, India</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Finbytechnovation IT Solutions (OPC) Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
