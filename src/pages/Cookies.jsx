import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'care@finbytechnovation.in',
  phone: '+91 95153 63772'
};

function Cookies() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <h1>Cookie Policy</h1>
          <p className="hero-subtitle">How we use cookies on our websites and applications</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our websites. They help
              us provide a better user experience, analyze site traffic, and enable certain functionality.
            </p>

            <h2>2. Types of Cookies We Use</h2>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality
              such as security, network management, and accessibility. These cookies cannot be disabled.
            </p>
            <ul>
              <li>Session management for logged-in users</li>
              <li>Security and fraud prevention</li>
              <li>Language preferences</li>
              <li>Shopping cart functionality</li>
            </ul>

            <h3>Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering your
              preferences and settings.
            </p>
            <ul>
              <li>Theme and display preferences</li>
              <li>Saved form data</li>
              <li>Customized content display</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our websites by collecting
              anonymous statistical data.
            </p>
            <ul>
              <li>Google Analytics - Page views, user behavior</li>
              <li>Hotjar - User session recordings and heatmaps</li>
              <li>Mixpanel - Feature usage analytics</li>
            </ul>

            <h3>Marketing Cookies</h3>
            <p>
              These cookies track visitors across websites to display relevant and engaging advertisements.
            </p>
            <ul>
              <li>Google Ads - Conversion tracking</li>
              <li>Facebook Pixel - Ad targeting and measurement</li>
              <li>LinkedIn Insight Tag - B2B analytics</li>
            </ul>

            <h2>3. Cookies Used by Third Parties</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We do not control
              these cookies. Third parties we work with include:
            </p>
            <ul>
              <li>Google (Analytics, Ads, reCAPTCHA)</li>
              <li>Stripe (Payment processing)</li>
              <li>Razorpay (Payment processing)</li>
              <li>Cloudflare (Security and performance)</li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>You can control cookies in several ways:</p>

            <h3>Browser Settings</h3>
            <p>
              Most browsers allow you to manage cookie settings. You can set your browser to refuse
              cookies or delete certain cookies. Note that disabling cookies may affect site functionality.
            </p>

            <h3>Opt-Out Tools</h3>
            <ul>
              <li>Google Analytics Opt-out Browser Add-on</li>
              <li>Network Advertising Initiative Opt-out</li>
              <li>Your Online Choices (EU)</li>
            </ul>

            <h2>5. Cookie Duration</h2>
            <p>Cookies are categorized by duration:</p>
            <ul>
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
            </ul>

            <h2>6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically. Any changes will be posted on this page
              with an updated effective date. Continued use of our websites constitutes acceptance of
              any changes.
            </p>

            <h2>7. Contact Information</h2>
            <p>For questions about our use of cookies:</p>
            <ul className="contact-list">
              <li>Email: {COMPANY.email}</li>
              <li>Phone: {COMPANY.phone}</li>
            </ul>

            <p className="company-footer">
              {COMPANY.name}<br />
              CIN: {COMPANY.cin}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cookies;
