import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo-container">
            <img src="/logo.jpg" alt="" className="footer-logo-img" />
            <span className="footer-logo-text">Elite South Texas</span>
          </div>
          <p>The global leader in high-performance surface solutions, epoxy coatings, and decorative concrete.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <nav aria-label="Footer navigation">
            <a href="/#products">Products</a>
            <a href="/#industries">Industries</a>
            <Link to="/gallery" onClick={() => window.scrollTo(0,0)}>Gallery</Link>
            <Link to="/resources" onClick={() => window.scrollTo(0,0)}>Resources</Link>
          </nav>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <address style={{ fontStyle: 'normal' }}>
            <a href="tel:210-612-5947" aria-label="Call Elite South Texas">210- 612-5947</a>
            <a href="mailto:carlos.pena@elitecrete.com" aria-label="Email Elite South Texas">carlos.pena@elitecrete.com</a>
            <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}><strong>San Antonio HQ:</strong><br/>10811 Perrin Beitel Rd, San Antonio, TX</p>
            <p><strong>Harlingen:</strong><br/>1121 S. Expressway 93, Harlingen, TX 78550</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Elite South Texas, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}