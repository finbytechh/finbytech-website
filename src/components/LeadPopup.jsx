import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Sparkles, Gift, ArrowRight, Phone, CircleCheck as CheckCircle, Loader, ShieldCheck, Zap } from 'lucide-react';
import './LeadPopup.css';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const POPUP_DELAY = 8000;
const SLIDE_IN_DELAY = 25000;
const EXIT_INTENT_THRESHOLD = 5;
const DISMISS_KEY = 'fbt_lead_dismissed';
const SUBMITTED_KEY = 'fbt_lead_submitted';
const COOLDOWN_HOURS = 24;

const SERVICES = [
  'AI Solutions',
  'Software Development',
  'Website Development',
  'Mobile App Development',
  'Digital Marketing',
  'SEO Services',
  'Cloud Services',
  'API Development',
  'Business Automation',
  'Trading Technology',
  'Other / Not Sure',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service_interest: '',
  message: '',
};

function isRecentlyDismissed() {
  const ts = localStorage.getItem(DISMISS_KEY);
  if (!ts) return false;
  const hours = (Date.now() - parseInt(ts, 10)) / (1000 * 60 * 60);
  return hours < COOLDOWN_HOURS;
}

function hasSubmitted() {
  const ts = localStorage.getItem(SUBMITTED_KEY);
  if (!ts) return false;
  const days = (Date.now() - parseInt(ts, 10)) / (1000 * 60 * 60 * 24);
  return days < 30;
}

function LeadPopup() {
  const [showModal, setShowModal] = useState(false);
  const [showSlideIn, setShowSlideIn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [source, setSource] = useState('popup');
  const exitTriggered = useRef(false);

  // ── Timed popup ──
  useEffect(() => {
    if (hasSubmitted() || isRecentlyDismissed()) return;
    const timer = setTimeout(() => {
      if (!exitTriggered.current) {
        setSource('popup');
        setShowModal(true);
      }
    }, POPUP_DELAY);
    return () => clearTimeout(timer);
  }, []);

  // ── Exit intent detection ──
  useEffect(() => {
    if (hasSubmitted() || isRecentlyDismissed()) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= EXIT_INTENT_THRESHOLD && !showModal && !showSlideIn && !exitTriggered.current) {
        exitTriggered.current = true;
        setSource('exit_intent');
        setShowModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showModal, showSlideIn]);

  // ── Slide-in CTA (fallback if popup was dismissed) ──
  useEffect(() => {
    if (hasSubmitted()) return;
    const timer = setTimeout(() => {
      if (!showModal && !isRecentlyDismissed()) {
        setShowSlideIn(true);
      }
    }, SLIDE_IN_DELAY);
    return () => clearTimeout(timer);
  }, [showModal]);

  // ── Escape key closes modal ──
  useEffect(() => {
    if (!showModal) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    if (!hasSubmitted()) {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    }
  }, []);

  const handleCloseSlideIn = useCallback(() => {
    setShowSlideIn(false);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitLead = async (leadSource) => {
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      service_interest: formData.service_interest || null,
      message: formData.message.trim() || null,
      source: leadSource,
      page_url: window.location.href,
    };

    const response = await fetch(`${SUPABASE_URL}/functions/v1/lead-capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Apikey': SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok || result.error) {
      throw new Error(result.error || `Request failed (${response.status})`);
    }
    return result;
  };

  const handleSubmit = async (e, leadSource) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await submitLead(leadSource || source);
      localStorage.setItem(SUBMITTED_KEY, Date.now().toString());
      setShowSuccess(true);
      setShowSlideIn(false);
      setFormData(INITIAL_FORM);
    } catch (err) {
      setErrors({ submit: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setShowModal(false);
    setShowSuccess(false);
    setShowSlideIn(false);
  };

  const openModalFromSlideIn = () => {
    setShowSlideIn(false);
    setSource('slide_in');
    setShowModal(true);
  };

  // ── Don't render anything if already submitted ──
  if (hasSubmitted() && !showModal && !showSuccess) return null;

  // ── Full modal (popup or exit intent) ──
  if (showModal) {
    return (
      <div className="lead-overlay" onClick={handleCloseModal}>
        <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
          <button className="lead-close-btn" onClick={handleCloseModal} aria-label="Close">
            <X size={16} />
          </button>

          {showSuccess ? (
            <div className="lead-success">
              <div className="lead-success-icon">
                <CheckCircle size={36} />
              </div>
              <h3>Thank You, We've Got It!</h3>
              <p>
                Your inquiry has been received. Our team will reach out to you within 24 hours
                with a personalized response.
              </p>
              <div className="lead-success-actions">
                <a href="https://payments.cashfree.com/forms/fbtpro" target="_blank" rel="noopener noreferrer" className="lead-success-btn primary">
                  <Zap size={15} /> Make Payment
                </a>
                <button className="lead-success-btn secondary" onClick={handleSuccessClose}>
                  Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="lead-hero">
                <div className="lead-hero-icon">
                  <Sparkles size={30} />
                </div>
                <h2>Get a Free Consultation</h2>
                <p>
                  Tell us about your project and receive a personalized proposal within 24 hours.
                  No obligation, completely free.
                </p>
                <span className="lead-offer-badge">
                  <span className="pulse-dot"></span>
                  Limited Time: Free Project Assessment
                </span>
              </div>

              <form className="lead-form-section" onSubmit={(e) => handleSubmit(e, source)} noValidate>
                {errors.submit && (
                  <div style={{
                    padding: '10px 14px',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.25)',
                    borderRadius: '8px',
                    color: '#ef4444',
                    fontSize: '13px',
                    marginBottom: '14px',
                  }}>
                    {errors.submit}
                  </div>
                )}

                <div className="lead-form-row">
                  <div className={`lead-input-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="lead-name">Name *</label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={100}
                    />
                    {errors.name && <span className="lead-field-error">{errors.name}</span>}
                  </div>
                  <div className={`lead-input-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="lead-email">Email *</label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="lead-field-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="lead-form-row">
                  <div className="lead-input-group">
                    <label htmlFor="lead-phone">Phone</label>
                    <input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="lead-input-group">
                    <label htmlFor="lead-service">Service</label>
                    <select
                      id="lead-service"
                      name="service_interest"
                      value={formData.service_interest}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="lead-input-group">
                  <label htmlFor="lead-message">Project Details (optional)</label>
                  <textarea
                    id="lead-message"
                    name="message"
                    placeholder="Briefly describe what you need..."
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                  />
                </div>

                <button type="submit" className="lead-submit-btn" disabled={loading}>
                  {loading ? (
                    <><Loader size={18} className="spin" /> Submitting...</>
                  ) : (
                    <>Get My Free Consultation <Send size={16} /></>
                  )}
                </button>

                <div className="lead-trust">
                  <ShieldCheck size={13} />
                  <span>Your data is secure. We never share your information.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }

  // ── Slide-in CTA card ──
  if (showSlideIn && !hasSubmitted()) {
    return (
      <div className="lead-slide-in">
        <div className="slide-in-header">
          <button className="slide-close" onClick={handleCloseSlideIn} aria-label="Close">
            <X size={14} />
          </button>
          <span className="slide-in-badge">
            <Gift size={12} /> Free Consultation
          </span>
          <h4>Ready to Start Your Project?</h4>
          <p>Get a personalized proposal within 24 hours. No obligation.</p>
        </div>
        <div className="slide-in-body">
          <form onSubmit={(e) => handleSubmit(e, 'slide_in')} noValidate>
            <div className={`lead-input-group ${errors.name ? 'has-error' : ''}`}>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
              />
              {errors.name && <span className="lead-field-error">{errors.name}</span>}
            </div>
            <div className={`lead-input-group ${errors.email ? 'has-error' : ''}`}>
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="lead-field-error">{errors.email}</span>}
            </div>
            <button type="submit" className="lead-submit-btn" disabled={loading}>
              {loading ? (
                <><Loader size={16} className="spin" /> Sending...</>
              ) : (
                <>Get Free Proposal <ArrowRight size={16} /></>
              )}
            </button>
            <div className="lead-trust">
              <ShieldCheck size={12} />
              <span>Secure & confidential</span>
            </div>
          </form>
          <button
            onClick={openModalFromSlideIn}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              color: '#c9a84c',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '10px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <Phone size={13} /> Prefer a detailed form? Click here
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default LeadPopup;
