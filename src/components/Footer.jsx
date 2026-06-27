import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">Elite Crete<span>.</span></h3>
          <p>The global leader in high-performance surface solutions, epoxy coatings, and decorative concrete.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/#products">Products</a>
          <a href="/#industries">Industries</a>
          <Link to="/gallery" onClick={() => window.scrollTo(0,0)}>Gallery</Link>
          <Link to="/resources" onClick={() => window.scrollTo(0,0)}>Resources</Link>
          <Link to="/admin" onClick={() => window.scrollTo(0,0)}>Admin Panel</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>1-800-XXX-XXXX</p>
          <p>info@elitecrete.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Elite Crete Systems. All Rights Reserved.</p>
      </div>
    </footer>
  );
}