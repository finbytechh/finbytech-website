import { Link } from 'react-router-dom';
import { Users, Target, Award, Lightbulb, ArrowRight } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Leading IT solutions provider delivering excellence since our inception</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Finbytechnovation IT Solutions (OPC) Pvt. Ltd. is a leading IT solutions provider specializing in
                digital marketing, web development, mobile app development, and API-based trading software.
              </p>
              <p>
                We specialize in B2B and B2C solutions, catering to diverse industries including financial & fintech,
                securities markets, real estate, and e-commerce. Our success is rooted in a relentless commitment to
                client satisfaction, blending creativity with technical expertise to deliver bespoke solutions.
              </p>
              <p>
                Our team of skilled professionals brings expertise in cutting-edge technologies and methodologies,
                ensuring that every project we deliver meets the highest standards of quality and innovation.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <Users size={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision bg-secondary">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon"><Target size={40} /></div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative digital solutions that drive growth, efficiency, and success.
                We aim to be the trusted partner for organizations seeking to leverage technology for competitive advantage.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><Lightbulb size={40} /></div>
              <h3>Our Vision</h3>
              <p>
                To be the leading IT solutions provider recognized for excellence, innovation, and customer satisfaction.
                We envision a world where technology empowers every business to reach its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <Award size={32} />
              <h4>Excellence</h4>
              <p>We strive for excellence in everything we do, delivering solutions that exceed expectations.</p>
            </div>
            <div className="value-card">
              <Users size={32} />
              <h4>Client Focus</h4>
              <p>Our clients' success is our success. We prioritize their needs in every decision we make.</p>
            </div>
            <div className="value-card">
              <Lightbulb size={32} />
              <h4>Innovation</h4>
              <p>We embrace innovation and continuously explore new technologies and methodologies.</p>
            </div>
            <div className="value-card">
              <Target size={32} />
              <h4>Integrity</h4>
              <p>We conduct business with the highest ethical standards and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Let's discuss how we can help transform your business.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get In Touch <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
