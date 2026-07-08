import SEO from '../components/SEO';
import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'grievance@finbytech.com',
  phone: '+91 96511 18519',
  address: {
    line1: 'C/o R D Ghanshyam Das',
    line2: '29, Daru Bhondela',
    city: 'Jhansi City',
    district: 'Jhansi',
    state: 'Uttar Pradesh',
    pincode: '284002'
  }
};

function Grievance() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <SEO
            title="Grievance Redressal Policy"
            description="Read FINBYTECHNOVATION IT SOLUTIONS' Grievance Redressal Policy. Learn how to submit and resolve complaints with our dedicated grievance officer and resolution process."
            canonical="/grievance"
          />
          <h1>Grievance Redressal Policy</h1>
          <p className="hero-subtitle">Complaint resolution mechanism for our customers</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. Introduction</h2>
            <p>
              {COMPANY.name} is committed to providing excellent service and fair treatment to all customers.
              This Grievance Redressal Policy outlines our mechanism for receiving, processing, and resolving
              customer complaints in a transparent and timely manner.
            </p>

            <h2>2. What Constitutes a Grievance</h2>
            <p>A grievance may include, but is not limited to:</p>
            <ul>
              <li>Dissatisfaction with services delivered</li>
              <li>Delay in service delivery or response</li>
              <li>Quality issues with delivered products or services</li>
              <li>Billing or payment disputes</li>
              <li>Behavior of staff or representatives</li>
              <li>Technical issues affecting service usage</li>
              <li>Breach of contract terms</li>
            </ul>

            <h2>3. Grievance Redressal Levels</h2>

            <h3>Level 1: Customer Support Team</h3>
            <p>
              Initial complaints should be directed to our Customer Support Team. They will acknowledge
              receipt within 24 hours and resolve the issue within 3 business days.
            </p>
            <ul>
              <li>Email: {COMPANY.email}</li>
              <li>Phone: {COMPANY.phone}</li>
              <li>WhatsApp: https://wa.me/919515363772</li>
            </ul>

            <h3>Level 2: Grievance Officer</h3>
            <p>
              If your complaint is not resolved satisfactorily at Level 1, you may escalate to our
              Grievance Officer within 7 days of the Level 1 response. The Grievance Officer will
              respond within 5 business days.
            </p>
            <p>
              <strong>Grievance Officer:</strong><br />
              Email: grievance@finbytechnovation.in
            </p>

            <h3>Level 3: Managing Director</h3>
            <p>
              If the matter remains unresolved after Level 2, you may escalate to the Managing Director
              within 7 days. The Managing Director will review and provide a final decision within
              10 business days.
            </p>
            <p>
              <strong>Address for Escalation:</strong><br />
              {COMPANY.address.line1}<br />
              {COMPANY.address.line2}<br />
              {COMPANY.address.city}, {COMPANY.address.district}<br />
              {COMPANY.address.state} - {COMPANY.address.pincode}
            </p>

            <h2>4. How to File a Grievance</h2>
            <p>When filing a grievance, please provide:</p>
            <ol>
              <li>Your full name and contact information</li>
              <li>Order ID or Project Reference Number</li>
              <li>Detailed description of the issue</li>
              <li>Supporting documents if any (screenshots, emails, invoices)</li>
              <li>Proposed resolution you are seeking</li>
            </ol>

            <h2>5. Timeline for Resolution</h2>
            <ul>
              <li>Acknowledgment of grievance: Within 24 hours</li>
              <li>Level 1 resolution: Within 3 business days</li>
              <li>Level 2 resolution: Within 5 business days</li>
              <li>Level 3 final decision: Within 10 business days</li>
            </ul>

            <h2>6. Fair Treatment Commitment</h2>
            <p>
              We assure all customers that:
            </p>
            <ul>
              <li>All grievances will be treated with confidentiality</li>
              <li>No customer will face discrimination for filing a complaint</li>
              <li>All complaints will be investigated fairly and objectively</li>
              <li>Resolution will be communicated clearly in writing</li>
            </ul>

            <h2>7. External Redressal</h2>
            <p>
              If a grievance is not resolved within 30 days or if you are unsatisfied with the resolution,
              you may approach the appropriate consumer forum or regulatory authority as per applicable laws.
            </p>

            <h2>8. Contact Information</h2>
            <ul className="contact-list">
              <li>Email: {COMPANY.email}</li>
              <li>Phone: {COMPANY.phone}</li>
              <li>Address: {COMPANY.address.city}, {COMPANY.address.state} - {COMPANY.address.pincode}</li>
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

export default Grievance;
