import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">Elite Crete<span>.</span></h3>
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
            <a href="tel:+12194657671" aria-label="Call Elite Crete Systems">+1 (219) 465-7671</a>
            <a href="mailto:info@elitecrete.com" aria-label="Email Elite Crete Systems">info@elitecrete.com</a>
            <p>Valparaiso, Indiana, USA</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Elite Crete Systems, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}