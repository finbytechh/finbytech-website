import SEO from '../components/SEO';
import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'info@finbytech.com',
  phone: '+91 96511 18519'
};

function Disclaimer() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <SEO
            title="Disclaimer"
            description="Read the Disclaimer for FINBYTECHNOVATION IT SOLUTIONS. Important notices regarding trading technology, financial services, intellectual property, and limitation of liability."
            canonical="/disclaimer"
          />
          <h1>Disclaimer</h1>
          <p className="hero-subtitle">Important notices regarding our services and products</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. General Disclaimer</h2>
            <p>
              The information provided by {COMPANY.name} on our websites, applications, and services
              is for general informational purposes only. All information is provided in good faith,
              however, we make no representation or warranty of any kind, express or implied, regarding
              the accuracy, adequacy, validity, reliability, or completeness of any information.
            </p>

            <h2>2. Trading Technology Disclaimer</h2>
            <p>
              Our algorithmic trading software, API bridge, and related trading technology are provided
              for informational and educational purposes. Key disclaimers:
            </p>
            <ul>
              <li>Use of trading software does not guarantee any specific results or profits</li>
              <li>Past performance is not indicative of future results</li>
              <li>Back-tested strategies do not guarantee future performance</li>
              <li>Financial markets involve inherent risks and uncertainties</li>
              <li>Market conditions are dynamic and subject to rapid changes</li>
            </ul>

            <h2>3. No Liability for Financial Losses</h2>
            <p>
              {COMPANY.name} explicitly disclaims any responsibility or liability for financial losses,
              damages, or adverse consequences incurred as a result of using our trading technology or
              any other services. Users acknowledge and agree that:
            </p>
            <ul>
              <li>Trading involves substantial risk of loss</li>
              <li>Users assume full responsibility for their trading decisions and outcomes</li>
              <li>We do not provide personalized investment advice</li>
            </ul>

            <h2>4. Professional Advice</h2>
            <p>
              Before engaging in any trading activities or business decisions, you should:
            </p>
            <ul>
              <li>Thoroughly understand the risks involved</li>
              <li>Seek professional financial, legal, or other appropriate advice</li>
              <li>Carefully consider your individual financial circumstances and risk tolerance</li>
              <li>Perform your own due diligence</li>
            </ul>

            <h2>5. Service Availability</h2>
            <p>
              We strive to maintain high service availability but cannot guarantee uninterrupted access.
              Services may be temporarily unavailable due to:
            </p>
            <ul>
              <li>Scheduled maintenance</li>
              <li>Third-party service outages</li>
              <li>Force majeure events</li>
              <li>Factors beyond our control</li>
            </ul>

            <h2>6. Third-Party Content</h2>
            <p>
              Our services may contain links to third-party websites or content. We do not endorse,
              verify, or assume responsibility for third-party content, accuracy, or practices.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All trademarks, logos, and brand names displayed are property of their respective owners.
              Use does not imply endorsement or affiliation.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {COMPANY.name} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including loss of
              profits, data, or business opportunities.
            </p>

            <h2>9. User Responsibility</h2>
            <p>
              By using our services, you acknowledge that you have read, understood, and agree to this
              disclaimer and our Terms and Conditions. You assume all risks associated with the use
              of our services.
            </p>

            <h2>10. Updates to This Disclaimer</h2>
            <p>
              We may update this disclaimer periodically. Changes will be posted on this page with
              an updated effective date. Continued use of our services constitutes acceptance.
            </p>

            <h2>11. Intense Dating</h2>
            <p>
              Intense Dating is developed, owned, and operated by {COMPANY.name}.
              For support, visit <a href="https://intensedating.in/" target="_blank" rel="noopener noreferrer">intensedating.in</a> or
              WhatsApp: <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer">+91 96511 18519</a>.
            </p>

            <h2>12. Contact</h2>
            <p>For clarification or questions:</p>
            <ul className="contact-list">
              <li>Email: {COMPANY.email}</li>
              <li>Phone: {COMPANY.phone}</li>
            </ul>

            <div style={{ marginTop: '32px', padding: '20px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <p style={{ marginBottom: '0', fontWeight: '600', color: 'var(--text-primary)' }}>
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
              </p>
            </div>

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

export default Disclaimer;
