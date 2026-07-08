import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'care@finbytechnovation.in',
  phone: '+91 95153 63772'
};

function Cancellation() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <h1>Cancellation Policy</h1>
          <p className="hero-subtitle">Terms and conditions for order cancellation</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. Service Cancellation</h2>
            <p>
              At {COMPANY.name}, we strive to provide the best service experience. This policy outlines the terms
              and conditions for cancelling services.
            </p>

            <h2>2. Project-Based Services</h2>
            <p>For custom development projects, website development, mobile apps, and similar services:</p>
            <ul>
              <li>Cancellations made within 48 hours of order confirmation: Full refund minus any initial setup or consultation fees.</li>
              <li>Cancellations made after work has commenced: Pro-rated refund based on work completed. Any work already performed will be billed at our standard rates.</li>
              <li>Cancellations after project milestone approval: No refund for approved milestones.</li>
              <li>All cancellation requests must be submitted in writing to {COMPANY.email}.</li>
            </ul>

            <h2>3. Digital Products & SaaS Services</h2>
            <p>For software licenses, SaaS subscriptions, and digital products:</p>
            <ul>
              <li>Monthly subscriptions: May be cancelled at any time. Service continues until the end of the current billing period.</li>
              <li>Annual subscriptions: Prorated refund available within 14 days of purchase. After 14 days, cancellation takes effect at the end of the billing period with no refund.</li>
              <li>One-time digital products: No cancellation once delivered or downloaded.</li>
            </ul>

            <h2>4. Trading Technology Services</h2>
            <p>For algorithmic trading, API bridge, and related services:</p>
            <ul>
              <li>Cancellation requests must be submitted 7 days before the next billing cycle.</li>
              <li>No refunds for partial months of service.</li>
              <li>Active trading positions must be closed before cancellation can be processed.</li>
            </ul>

            <h2>5. Digital Marketing Services</h2>
            <ul>
              <li>SEO and marketing campaigns require 30 days notice for cancellation.</li>
              <li>Ad spend budget is non-refundable once allocated to platforms.</li>
              <li>Content created during the campaign remains property of {COMPANY.name} unless otherwise agreed.</li>
            </ul>

            <h2>6. How to Cancel</h2>
            <p>To request a cancellation:</p>
            <ol>
              <li>Send an email to {COMPANY.email} with subject line "Cancellation Request - [Your Order ID]"</li>
              <li>Include your full name, order details, and reason for cancellation</li>
              <li>Our team will respond within 2 business days with cancellation confirmation and any applicable refund details</li>
            </ol>

            <h2>7. Refund Processing</h2>
            <p>
              Approved refunds will be processed within 5-7 business days to the original payment method.
              Bank processing times may vary. Refunds for services may be subject to deductions for work
              already completed.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              For questions about this policy or to request a cancellation, please contact us:
            </p>
            <ul className="contact-list">
              <li>Email: {COMPANY.email}</li>
              <li>Phone: {COMPANY.phone}</li>
              <li>WhatsApp: https://wa.me/919515363772</li>
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

export default Cancellation;
