import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0,0)} aria-label="Elite Crete Systems - Home">Elite Crete<span>.</span></Link>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Home</Link>
          <div className="nav-dropdown">
            <a href="/#products" onClick={() => setMobileOpen(false)}>Products</a>
            <div className="dropdown-menu">
              <Link to="/item/microcement" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Microcement</Link>
              <Link to="/item/polyurethanes-polyaspartics-and-polyurea-coatings" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Polyurethanes</Link>
              <Link to="/item/epoxy-clear-pigmented-coatings" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Epoxy</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <a href="/#industries" onClick={() => setMobileOpen(false)}>Industries</a>
            <div className="dropdown-menu">
              <Link to="/item/retail-and-commercial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Commercial</Link>
              <Link to="/item/industrial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Industrial</Link>
              <Link to="/item/residential-interior" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Residential</Link>
            </div>
          </div>
          <Link to="/gallery" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Gallery</Link>
          <div className="nav-dropdown">
            <Link to="/resources" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Resources</Link>
            <div className="dropdown-menu">
              <Link to="/resources/microcement" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Microcement Docs</Link>
              <Link to="/resources/industrial" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Industrial Docs</Link>
              <Link to="/resources/epoxy-clear-pigmented-coatings" onClick={() => { window.scrollTo(0,0); setMobileOpen(false); }}>Epoxy Docs</Link>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary nav-btn" onClick={() => setMobileOpen(false)}>Contact Us</a>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle mobile menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>
    </nav>
  );
}