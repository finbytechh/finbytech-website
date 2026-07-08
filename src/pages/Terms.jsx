import SEO from '../components/SEO';
import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'legal@finbytech.com',
  phone: '+91 96511 18519',
  address: {
    city: 'Jhansi City',
    state: 'Uttar Pradesh'
  }
};

function Terms() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <SEO
            title="Terms and Conditions"
            description="Read the Terms and Conditions for FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED. Learn about our service terms, user obligations, intellectual property, payment terms, and governing law."
            canonical="/terms"
          />
          <h1>Terms and Conditions</h1>
          <p className="hero-subtitle">Please read these terms carefully before using our services</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of {COMPANY.name}, you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2>2. Company Information</h2>
            <p>
              {COMPANY.name} is a {COMPANY.name.includes('OPC') ? 'One Person Company' : 'Private Limited Company'}
              incorporated in India with CIN: {COMPANY.cin}. Our registered office is in {COMPANY.address.city},
              {COMPANY.address.state}.
            </p>

            <h2>3. Services</h2>
            <p>
              We provide AI Solutions, Software Development, Website Development, Mobile App Development,
              Digital Marketing, SEO Services, Cloud Services, API Development, Business Automation,
              Enterprise Solutions, CRM Development, ERP Development, UI/UX Design, Startup Consulting,
              Trading Technology, and Custom SaaS Development. All services are subject to specific terms
              as agreed upon in individual contracts or statements of work.
            </p>

            <h2>4. User Obligations</h2>
            <p>Users agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain confidentiality of account credentials</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in any activity that interferes with service operations</li>
              <li>Not attempt to reverse engineer or duplicate our proprietary technology</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, trademarks, software code, designs, and intellectual property displayed on our
              platforms or delivered as part of our services remain the property of {COMPANY.name} or our
              licensors, unless otherwise agreed in writing. Custom work product ownership is transferred
              only upon full payment and as specified in the project agreement.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              All payments are due as specified in service agreements or invoices. We accept payment via
              bank transfer, UPI, credit/debit cards, and approved payment gateways. Late payments may
              incur interest charges. Refunds are governed by our Refund Policy.
            </p>

            <h2>7. Service Delivery</h2>
            <p>
              Project timelines and deliverables are estimates based on information provided. Delays caused
              by client-side dependencies, scope changes, or factors beyond our control may extend timelines.
              We will communicate any material changes promptly.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              {COMPANY.name} shall not be liable for any indirect, incidental, special, or consequential
              damages arising from the use of our services. Our total liability shall not exceed the amount
              paid by the client for the specific service giving rise to the claim.
            </p>

            <h2>9. Trading Technology Disclaimer</h2>
            <p>
              Use of our algorithmic trading software does not guarantee any specific results or profits.
              Past performance is not indicative of future results. Financial markets involve inherent risks.
              Users are solely responsible for their trading decisions and outcomes.
            </p>

            <h2>10. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during
              the engagement. This obligation survives termination of services.
            </p>

            <h2>11. Termination</h2>
            <p>
              Either party may terminate services as specified in the service agreement. We reserve the
              right to suspend or terminate access for violation of these terms. Upon termination,
              all outstanding payments become immediately due.
            </p>

            <h2>12. Governing Law and Jurisdiction</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of courts in {COMPANY.address.city}, {COMPANY.address.state}.
            </p>

            <h2>13. Intense Dating</h2>
            <p>
              Intense Dating is developed, owned, and operated by {COMPANY.name}.
              For support, visit <a href="https://intensedating.in/" target="_blank" rel="noopener noreferrer">intensedating.in</a> or
              WhatsApp: <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer">+91 96511 18519</a>.
            </p>

            <h2>14. Contact</h2>
            <p>For questions about these Terms, contact us:</p>
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

export default Terms;
