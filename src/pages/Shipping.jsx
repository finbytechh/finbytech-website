import SEO from '../components/SEO';
import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'info@finbytech.com',
  phone: '+91 96511 18519'
};

function Shipping() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <SEO
            title="Shipping & Delivery Policy"
            description="Read FINBYTECHNOVATION IT SOLUTIONS' Shipping and Delivery Policy for digital products and services. Understand our delivery timelines and terms."
            canonical="/shipping"
          />
          <h1>Shipping Policy</h1>
          <p className="hero-subtitle">Delivery terms for physical products</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. Scope of Policy</h2>
            <p>
              This Shipping Policy applies to physical products sold by {COMPANY.name}, including but not
              limited to hardware devices, printed materials, and packaged software. Digital products and
              services are delivered electronically and are not subject to this policy.
            </p>

            <h2>2. Digital Delivery</h2>
            <p>
              The majority of our products and services are delivered digitally. This includes:
            </p>
            <ul>
              <li>Software licenses and activation keys delivered via email</li>
              <li>SaaS platform access activated immediately upon purchase</li>
              <li>Digital marketing reports and analytics delivered electronically</li>
              <li>API credentials and documentation provided via secure portal</li>
              <li>Trading platform access provided instantly upon subscription</li>
            </ul>

            <h2>3. Physical Product Shipping</h2>
            <p>For physical products, if any, the following terms apply:</p>

            <h3>Shipping within India</h3>
            <ul>
              <li>Standard Shipping: 5-7 business days</li>
              <li>Express Shipping: 2-3 business days (additional charges apply)</li>
              <li>Free shipping on orders above INR 2,000 within India</li>
            </ul>

            <h3>International Shipping</h3>
            <ul>
              <li>Standard International: 10-15 business days</li>
              <li>Express International: 5-7 business days (additional charges apply)</li>
              <li>Customs duties and taxes are the responsibility of the customer</li>
            </ul>

            <h2>4. Shipping Charges</h2>
            <ul>
              <li>Shipping charges are calculated at checkout based on weight, dimensions, and destination</li>
              <li>Free shipping promotions, if applicable, will be automatically applied</li>
              <li>Remote area surcharges may apply for certain locations</li>
            </ul>

            <h2>5. Order Tracking</h2>
            <p>
              Once your order is shipped, you will receive a confirmation email with tracking information.
              Please allow 24-48 hours for tracking to become active. You can track your order through
              the carrier's website or by contacting our support team.
            </p>

            <h2>6. Delivery Issues</h2>
            <p>
              {COMPANY.name} is not responsible for delays caused by:
            </p>
            <ul>
              <li>Incorrect or incomplete shipping address provided by the customer</li>
              <li>Customs clearance delays for international orders</li>
              <li>Natural disasters, strikes, or other force majeure events</li>
              <li>Failed delivery attempts due to customer unavailability</li>
            </ul>

            <h2>7. Damaged or Lost Shipments</h2>
            <p>
              Please inspect your package upon delivery. If your order arrives damaged:
            </p>
            <ol>
              <li>Document the damage with photographs</li>
              <li>Contact us within 48 hours at {COMPANY.email}</li>
              <li>Retain all packaging materials for carrier inspection</li>
              <li>We will arrange a replacement or refund as appropriate</li>
            </ol>

            <h2>8. Contact Information</h2>
            <p>For shipping inquiries:</p>
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

export default Shipping;
