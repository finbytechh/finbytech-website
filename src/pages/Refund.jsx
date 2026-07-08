import './Legal.css';

const COMPANY = {
  name: 'FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED',
  cin: 'U62013UP2024OPC213677',
  email: 'billing@finbytech.com',
  phone: '+91 96511 18519'
};

function Refund() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Legal</span>
          <h1>Refund Policy</h1>
          <p className="hero-subtitle">Our refund and cancellation terms for services</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-card glass-card">
            <p className="effective-date"><strong>Effective Date:</strong> 20 December 2024</p>

            <h2>1. General Refund Policy</h2>
            <p>
              At {COMPANY.name}, we strive to deliver exceptional services. This policy outlines the terms
              under which refunds may be issued. Given the nature of digital services and custom development
              work, our refund policy differs by service type.
            </p>

            <h2>2. Project-Based Services</h2>
            <p>For custom development, websites, mobile apps, and enterprise solutions:</p>
            <ul>
              <li>Refunds are not available once development work has commenced</li>
              <li>Deposits and advance payments are non-refundable</li>
              <li>If the project is terminated early, applicable work completed will be billed</li>
              <li>Refund requests must be submitted before project commencement</li>
            </ul>

            <h2>3. Subscription Services</h2>
            <p>For SaaS platforms, trading technology, and ongoing services:</p>
            <ul>
              <li>Monthly subscriptions: May be cancelled anytime. No refund for partial months.</li>
              <li>Annual subscriptions: Prorated refund available within 14 days of purchase. After 14 days, no refund.</li>
              <li>Service continues until the end of the billed period after cancellation.</li>
            </ul>

            <h2>4. Digital Products</h2>
            <p>For software licenses, templates, and downloadable products:</p>
            <ul>
              <li>No refunds once the product is delivered or downloaded</li>
              <li>If the product is defective, we will provide a replacement or fix</li>
              <li>License keys are non-transferable and non-refundable once activated</li>
            </ul>

            <h2>5. Trading Technology Services</h2>
            <p>
              For algorithmic trading, API bridge, and related services:
            </p>
            <ul>
              <li>All trading-related subscriptions are non-refundable due to the immediate value provided</li>
              <li>Use of trading software does not guarantee profits</li>
              <li>We recommend taking expert advice before subscribing</li>
              <li>Cancellation prevents future billing but does not entitle refund for current period</li>
            </ul>

            <h2>6. Digital Marketing & SEO</h2>
            <ul>
              <li>Monthly retainers require 30 days notice for cancellation</li>
              <li>No refund for services already rendered</li>
              <li>Ad spend is non-refundable once allocated to advertising platforms</li>
            </ul>

            <h2>7. Expert Advice / Consultation</h2>
            <p>
              We strongly recommend taking an expert advice session before subscribing to any paid plans.
              This helps ensure our services align with your goals and expectations.
            </p>

            <h2>8. Exceptional Circumstances</h2>
            <p>
              In exceptional cases, we may consider refund requests on a case-by-case basis. Please contact
              our support team with details of your situation within 7 days of purchase.
            </p>

            <h2>9. How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Email {COMPANY.email} with subject "Refund Request - [Order ID]"</li>
              <li>Include your full name, order details, and reason for request</li>
              <li>Allow 5-7 business days for our team to review</li>
              <li>Approved refunds will be processed within 5-7 business days to the original payment method</li>
            </ol>

            <h2>10. Intense Dating</h2>
            <p>
              Intense Dating is developed, owned, and operated by {COMPANY.name}.
              For support, visit <a href="https://intensedating.in/" target="_blank" rel="noopener noreferrer">intensedating.in</a> or
              WhatsApp: <a href="https://wa.me/919515363772" target="_blank" rel="noopener noreferrer">+91 96511 18519</a>.
            </p>

            <h2>11. Contact</h2>
            <p>For refund inquiries:</p>
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

export default Refund;
