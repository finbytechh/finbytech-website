import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones as HeadphonesIcon, Building, Globe, ArrowRight } from 'lucide-react';
import './Contact.css';

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
  },
  email: 'care@finbytechnovation.in',
  phone: '+91 95153 63772',
  whatsapp: 'https://wa.me/919515363772',
  website: 'https://finbytech.com',
  hours: {
    days: 'Monday - Saturday',
    time: '10:00 AM - 7:00 PM IST'
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', inquiryType: 'general', message: '' });
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'business', label: 'Business Inquiry' },
    { value: 'services', label: 'Services Information' },
    { value: 'pricing', label: 'Pricing & Quotation' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'careers', label: 'Careers' }
  ];

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email Us',
      subtitle: 'Business Inquiries',
      details: [COMPANY.email],
      link: `mailto:${COMPANY.email}`,
      cta: 'Send Email'
    },
    {
      icon: <Phone size={28} />,
      title: 'Call Us',
      subtitle: 'Speak with our team',
      details: [COMPANY.phone],
      link: `tel:${COMPANY.phone.replace(/\s/g, '')}`,
      cta: 'Call Now'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'WhatsApp',
      subtitle: 'Quick responses',
      details: ['Chat with us directly'],
      link: COMPANY.whatsapp,
      cta: 'Start Chat'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p className="hero-subtitle">We'd love to hear from you. Let's discuss how we can help transform your business.</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="method-card glass-card card-hover">
                <div className="method-icon">{method.icon}</div>
                <div className="method-content">
                  <h3>{method.title}</h3>
                  <span className="method-subtitle">{method.subtitle}</span>
                  {method.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
                <span className="method-cta">
                  {method.cta} <ArrowRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <span className="section-label">Send a Message</span>
                <h2>Business Inquiry Form</h2>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form glass-card">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject line"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, requirements, or inquiry..."
                    rows={6}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="contact-sidebar">
              {/* Registered Office */}
              <div className="sidebar-card glass-card">
                <div className="sidebar-icon"><Building size={24} /></div>
                <h3>Registered Office</h3>
                <address>
                  <p><strong>{COMPANY.name}</strong></p>
                  <p>{COMPANY.address.line1}</p>
                  <p>{COMPANY.address.line2}</p>
                  <p>{COMPANY.address.city}, {COMPANY.address.district}</p>
                  <p>{COMPANY.address.state} - {COMPANY.address.pincode}</p>
                  <p>{COMPANY.address.country}</p>
                </address>
                <div className="office-details">
                  <div className="detail-item">
                    <span className="detail-label">CIN</span>
                    <span className="detail-value">{COMPANY.cin}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Type</span>
                    <span className="detail-value">{COMPANY.type}</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="sidebar-card glass-card">
                <div className="sidebar-icon"><Clock size={24} /></div>
                <h3>Business Hours</h3>
                <div className="hours-info">
                  <p><strong>{COMPANY.hours.days}</strong></p>
                  <p className="hours-time">{COMPANY.hours.time}</p>
                </div>
                <p className="hours-note">We are closed on Sundays and public holidays.</p>
              </div>

              {/* Tech Support */}
              <div className="sidebar-card glass-card support-card">
                <div className="sidebar-icon"><HeadphonesIcon size={24} /></div>
                <h3>Technical Support</h3>
                <p>For existing clients requiring technical assistance:</p>
                <div className="support-methods">
                  <a href={`mailto:${COMPANY.email}`} className="support-link">
                    <Mail size={16} /> {COMPANY.email}
                  </a>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="support-link">
                    <MessageCircle size={16} /> WhatsApp Support
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="sidebar-card glass-card">
                <div className="sidebar-icon"><Globe size={24} /></div>
                <h3>Our Website</h3>
                <a href={COMPANY.website} target="_blank" rel="noopener noreferrer" className="website-link">
                  {COMPANY.website} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Location</span>
            <h2>Find Us on the Map</h2>
            <p>Visit our registered office in Jhansi, Uttar Pradesh, India</p>
          </div>
          <div className="map-wrapper glass-card">
            <div className="map-placeholder">
              <MapPin size={48} />
              <h3>Google Maps</h3>
              <p>29, Daru Bhondela, Jhansi City, Uttar Pradesh 284002, India</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=29+Daru+Bhondela+Jhansi+Uttar+Pradesh+284002+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MapPin size={16} /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content glass-card">
            <h2>Prefer a Quick Chat?</h2>
            <p>Connect with us instantly on WhatsApp for faster responses.</p>
            <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
