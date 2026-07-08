import SEO from '../components/SEO';
import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'privacy@finbytech.com',
  phone: '+91 96511 18519'
};

function Privacy() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <SEO
            title="Privacy Policy"
            description="Read FINBYTECHNOVATION IT SOLUTIONS' Privacy Policy. Learn how we collect, use, protect, and manage your personal information across our services and platforms."
            canonical="/privacy"
          />
          <h1>Privacy Policy</h1>
          <p className="hero-subtitle">How we collect, use, and protect your personal information</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. Introduction</h2>
            <p>
              {COMPANY.name} ("we", "us", or "our") is committed to protecting the privacy of our clients,
              users, and visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use our services or visit our websites.
            </p>

            <h2>2. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and business details</li>
              <li>Account credentials</li>
              <li>Payment and billing information</li>
              <li>Project requirements and communications</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you use our services, we automatically collect:</p>
            <ul>
              <li>Device information and browser type</li>
              <li>IP address and location data</li>
              <li>Usage patterns and features accessed</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Communicate with you about updates, services, and support</li>
              <li>Personalize your experience and provide recommendations</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers who assist in our operations (hosting, payment processing, analytics)</li>
              <li>Professional advisors (lawyers, accountants) under confidentiality obligations</li>
              <li>Law enforcement or regulators when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information, including encryption, secure servers, access controls, and regular security
              assessments. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide services, comply with legal
              obligations, resolve disputes, and enforce agreements. Upon request, we will delete your
              information unless retention is required by law.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing and request restrictions</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at {COMPANY.email}.</p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our websites may contain links to third-party services. We are not responsible for their
              privacy practices. We encourage you to read their privacy policies.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal
              information from children. If you believe we have collected such information, please contact us.
            </p>

            <h2>10. Intense Dating</h2>
            <p>
              Intense Dating is developed, owned, and operated by {COMPANY.name}.
              The Intense Dating app has its own privacy policy governing user data within the app.
              For support, visit <a href="https://intensedating.in/" target="_blank" rel="noopener noreferrer">intensedating.in</a> or
              WhatsApp: <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer">+91 96511 18519</a>.
            </p>

            <h2>11. Updates to This Policy</h2>
            <p>
              We may update this policy periodically. Changes will be posted on this page with an updated
              effective date. Continued use of our services constitutes acceptance of any changes.
            </p>

            <h2>12. Contact</h2>
            <p>For privacy-related inquiries:</p>
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

export default Privacy;
