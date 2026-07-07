import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+91 95153 63772"],
      link: "tel:+919515363772"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["care@finbytechnovation.in", "writeus@finbytech.com"],
      link: "mailto:care@finbytechnovation.in"
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: ["Jaipur, Rajasthan", "India"]
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Monday - Saturday", "10:00 AM - 7:00 PM IST"]
    }
  ];

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2><MessageCircle size={24} /> Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
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
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services</option>
                      <option value="pricing">Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p>Have questions? We're here to help. Reach out to us through any of the following channels.</p>

              <div className="info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      {item.details.map((detail, i) => (
                        item.link ? (
                          <a key={i} href={item.link}>{detail}</a>
                        ) : (
                          <p key={i}>{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="whatsapp-cta">
                <h4>Prefer WhatsApp?</h4>
                <p>Chat with us directly for quick responses.</p>
                <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  <Phone size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
